import React from 'react';
import { Component } from 'react';
import axios from 'axios';
import Navbar from '../../MainPage/Navbar/Navbar';

// props
class ProjectList extends Component {
    state = {projectList: null}
    render () {

    if (!this.state.projectList) {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

        axios.get('http://localhost:5001/api/projects').then(res=>{
            console.log(res.data.data);
            this.setState({projectList:res.data.data})
        }).catch(err=>{
            console.log(err);
        })


        return <div>
            ...Loading Projects...
        </div>
    }

    return(
        <div>
            <Navbar />
        <div>
            <h2>Project list</h2>
            <table border={1} cellPadding={5}>

           
            <tbody>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Video</th>
          </tr>
          {this.state.projectList.map((item, i) => (
            <tr key={i}>
              <td>
                <a href={"/start/full-page/" + item.projectId}>
                {item.title}
                    </a></td>
              <td>{item.author}</td>
              <td>{item.videoLink}</td>
            </tr>
          ))}
            </tbody>
            </table>
            <p>
                <a href="/home/project">Create new project</a>
            </p>
            {/* <div>
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
            </div>
            <div>
                <div>Full Description:</div>
                <code>{this.state.projectData.description}</code>
            </div> */}
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

export default ProjectList;