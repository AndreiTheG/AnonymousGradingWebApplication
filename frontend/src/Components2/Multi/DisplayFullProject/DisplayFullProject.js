import React from 'react';

// import DisplayImages from '../../Multi/DisplayImages/DisplayImages';
// import ProjectPage from '../../../Containers2/ProjectPage/ProjectPage';
import classes from './DisplayFullProject.css';
import { Component } from 'react';
import axios from 'axios';
import Navbar from '../../MainPage/Navbar/Navbar';

import {
    useLocation,
    useNavigate,
    useParams
  } from "react-router-dom";
  
  function withRouter(Component) {
    function ComponentWithRouterProp(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
        <Component
          {...props}
          router={{ location, navigate, params }}
        />
      );
    }
  
    return ComponentWithRouterProp;
  }

// props
class DisplayFullProject extends Component {
    state = {projectData: null}
    render () {

    if (!this.state.projectData) {
        // let { id } = useParams();
        let id = this.props.router.params.id;
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

        axios.get('http://localhost:5001/api/project/' + id).then(res=>{
            console.log(res.data.data);
            this.setState({projectData:res.data.data})
        }).catch(err=>{
            console.log(err);
        })


        return <div>
            ...Loading Project...{id}
        </div>
    }

    return(
        <div>
            <Navbar />
        <div className={classes.DisplayFullProject}>
            <h2>Project</h2>
            <div>
                <span>Project Name:</span>
                <span className="bold">{this.state.projectData.title}</span>
            </div>
            <div>
                <span>Author:</span>
                <span className="bold">{this.state.projectData.author}</span>
            </div>
            <div>
                <span>Videoclip:</span>
                <span className="bold">{this.state.projectData.videoLink}</span>
                {/* {props.projectData.ytLink === '' ? "This project has no video" : <iframe width="70%" height="420" title="Video" src={props.projectData.ytLink.replace("watch?v=", "embed/")} frameBorder="0" />} */}
            </div>
            <div>
                <div>Full Description:</div>
                <code>{this.state.projectData.description}</code>
            </div>
            {/* <div>
                <h3>Images:</h3>
                <div>{props.projectData.images === 'no-photo.jpg' ? "This project has no images" : <DisplayImages images={props.projectData.images}/>}</div>
            </div> */}
            {/* <div>
                <h3>Project Link:</h3>
                <a href={props.projectData.ghLink} target="_blank">{props.projectData.ghLink}</a>
            </div> */}
        </div>
        </div>
    );
    }
}

export default  withRouter(DisplayFullProject);