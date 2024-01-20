import React, { Component } from 'react';
// import axios from 'axios';
import classes from './ProjectPage.css';
import Auxiliary from '../../Auxiliary/Auxiliary';
import SubPage from '../../Components2/MainPage/SubPageProject/SubPageProject';

class ProjectPage extends Component {
    
    state = {
        projectData: {
            projectName: '',
            author: '',
            fullDescription: '',
            videoLink: ''
        }
    }
    // _isMounted = false;

    // handleDelete = () => {
    //     axios.delete(`http://localhost:3001/api/v1/projects/${this.state.projectData.projectId}`).then(res=>{
    //         console.log(res);
    //         this.setState({
    //             projectData: {
    //                 projectName: '',
    //                 shortDescription: '',
    //                 fullDescription: '',
    //                 ytLink: '',
    //                 ghLink: '',
    //                 images: '',
    //                 projectId: ''
    //             }
    //         });
    //         this.props.history.push('/home/profile/project');
    //     });
    // }

    // componentWillUnmount = () => {
    //     this._isMounted = false;
    // }

    render() {
        return (
            <Auxiliary>
                <div className={classes.ProjectPage}>
                    <SubPage projectData={this.state.projectData} user={this.props.user} handleDelete={this.handleDelete}/>
                </div>
            </Auxiliary>
        );
    }
}

export default ProjectPage;