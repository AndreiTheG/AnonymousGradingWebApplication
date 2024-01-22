import React, { Component } from 'react';
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