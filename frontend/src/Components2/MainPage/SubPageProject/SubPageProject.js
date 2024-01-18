import React, { Component } from 'react';
import { Link, Navigate } from 'react-router-dom';

// import DisplayImages from '../../Multi/DisplayImages/DisplayImages'
import DisplayFullProject from '../../../Components2/Multi/DisplayFullProject/DisplayFullProject';
import classes from './SubPageProject.css';
import subPageClasses from '../SubPage/SubPage.css';
import barClasses from '../Navbar2/Navbar2.css';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';

class ProjectPage extends Component {
    state = {
        projectName: '',
        author: '',
        fullDescription: '',
        videoLink: '',
        // gitHubLink: '',
        // fileInput: React.createRef()
    };

    handleProjectCreate=(e)=>{
        e.preventDefault()
        const data={
              title:this.state.projectName,
              author:this.state.author,
              description:this.state.fullDescription,
              videoLink:this.state.videoLink,
              averageGrade:5
        }
        if(!data.title || !data.author || !data.description || !data.videoLink){
            alert("The project needs to have a title, short description, full description and a project link");
            return;
        }
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

          axios.post('http://localhost:5001/api/project',data).then(res=>{
              this.setState({projectId:res.data.data.projectId})
          }).catch(err=>{
              console.log(err);
          })
      }

    projectData = {};

    title = "Submit Your Project";
    projectId = '';
    projectDisplay = null;
    imagesDisplay = null;
    deleteDisplay = null;

    handleProjectNameChange = (event) => {
        this.setState({ projectName: event.target.value });
    }

    handleAuthorName = (event) => {
        this.setState({ author: event.target.value });
    }

    handleFullDescriptionChange = (event) => {
        this.setState({ fullDescription: event.target.value });
    }

    // handleImagesChange = (event) => {
    //     event.preventDefault();

    //     let reader = new FileReader();
    //     let file = this.state.fileInput.current.files[0]

    //     reader.onloadend = () => {
    //         this.setState({
    //             file: file,
    //             imagePreviewUrl: reader.result
    //         });
    //     }

    //     reader.readAsDataURL(file)
    // }

    handleYouTubeLinkChange = (event) => {
        this.setState({ videoLink: event.target.value });
    }

    // handleGitHubLinkChange = (event) => {
    //     this.setState({ gitHubLink: event.target.value });
    // }

    handleSubmit = (event) => {
        event.preventDefault();
        this.projectData = {
            video: this.state.videoLink,
            // upload: this.state.gitHubLink,
            title: this.state.projectName,
            author: this.props.user.data.fullName,
            // description: this.state.shortDescription,
            body: this.state.fullDescription,
            // images: this.state.imagePreviewUrl
        }

        if(!this.projectData.title || !this.projectData.body || !this.projectData.title || !this.projectData.videoLink){
            alert("The project needs to have a title, short description, full description and a project link");
            return;
        }

        console.log("Data:");
        console.log(this.projectData);
        try{
            console.log(this.projectData.images.name);
        } catch (Exception) {

        }

        if (this.props.projectData.projectName !== '') {
            this.handleUpdate(this.projectData);
        } else {
            axios.post('http://localhost:3001/api/v1/projects', this.projectData).then(
                res => {
                    console.log("Creating Project");
                    console.log(res);
                }
            ).catch(err => console.log(err));
        }

        this.props.history.push('/home/profile/project');

    }

    handleUpdate = (projectData) => {
        axios.get(`http://localhost:3001/api/v1/projects/user/${this.props.user.id}`).then(res => {
            const projectID = res.data.data[0]._id;

            this.changeId(projectID);

            axios.put(`http://localhost:3001/api/v1/projects/${this.projectId}`, projectData).then(res => {
                console.log(res);
            }).catch(err => console.log(err));

        }).catch(err => console.log(err));
    }

    changeId = (id) => {
        this.projectId = id;
    }

    render() {
        if(this.state.projectId){
            return <Navigate to={  '/start/full-page/' + this.state.projectId }/>
        }


        if (this.props.projectData.projectName !== '') {
            this.title = "Edit Your Project";
            this.projectDisplay = <DisplayFullProject projectData={this.props.projectData} />;
            this.deleteDisplay = <button className={classes.DeleteButton} onClick={this.props.handleDelete}>DELETE PROJECT</button>
        }

        // this.imagesDisplay = this.state.fileInput.current !== null ? <DisplayImages images={this.state.imagePreviewUrl} /> : "Select some images";

        return (
            <div>
            <Navbar />
           
            <div className={subPageClasses.SubPage}>
                <div className={barClasses.Navbar2}></div>

                {this.projectDisplay}
                {this.deleteDisplay}
                <div className={classes.SubPageProject}>
                    <h1>{this.title}</h1>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="ProjectName">Enter Project Name</label>
                            <input id="ProjectName" type='text' maxLength='30' value={this.state.projectName} onChange={this.handleProjectNameChange} />
                        </div>
                        <div>
                            <label htmlFor="Author">Enter Author Name</label>
                            <input id="Author" type='text' maxLength='250' value={this.state.author} onChange={this.handleAuthorName} />
                        </div>
                        <div>
                            <label htmlFor="FullDescription">Enter the Full Description of Your Project</label>
                            <textarea id="FullDescription" type='text' maxLength='6000' value={this.state.fullDescription} onChange={this.handleFullDescriptionChange} style={{ height: '200px' }} />
                        </div>
                        {/* <label>
                            <p>Add a Descriptive Image</p>
                            {this.imagesDisplay}
                            <input type='file' accept="image/png, image/jpeg" ref={this.state.fileInput} onChange={this.handleImagesChange} />
                        </label> */}
                        <div>
                            <label htmlFor="VideoLink">Link a YouTube With A Demo of the Project</label>
                            <input id="VideoLink" type='text' maxLength='50' value={this.state.youTubeLink} onChange={this.handleYouTubeLinkChange} />
                        </div>
                        {/* <label>
                            <p>Add the GitHub Repo Containing Your Project</p>
                            <input type='text' maxLength='50' value={this.state.gitHubLink} onChange={this.handleGitHubLinkChange} />
                        </label> */}
                        {/* <Link to="/start/full-page"> */}
                        <div>
                            <button  onClick={this.handleProjectCreate} type='submit'>SUBMIT</button>
                        </div>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
            </div>
        );
    }
}

export default ProjectPage;

// export default withRouter(ProjectPage);