import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../../MainPage/Navbar/Navbar';
import './ProjectList.css';

class ProjectList extends Component {
  state = {
    projectList: null,
    judgmentForm: {
      label: '',
      
      projectId: '',
      projectTitle: '',
    },
    loadingProjects: true,
    loadingJudgment: false,
    selectedProject: null,
    isUpdating: false, 
  };

  handleUpdate = (project) => {
    // Adaugă logica pentru afișarea formularului de actualizare și setează proiectul selectat
    this.setState({
      isUpdating: true,
      selectedProject: project,
    });
  };

  componentDidMount() {
    // Fetch projects when the component mountsnoid    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    axios.get('http://localhost:5001/api/projects')
      .then(res => {
        console.log(res.data.data);
        this.setState({ projectList: res.data.data,loadingProjects: false  });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Function to handle changes in judgment form fields
  handleJudgmentFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      judgmentForm: {
        ...prevState.judgmentForm,
        [name]: value,
      },
    }));
  };

// Function to handle changes in project dropdown
handleProjectChange = (e) => {
    const projectId = e.target.value || ''; // Dacă nu este selectat niciun proiect, setează projectId-ul la un șir gol
    this.setState(prevState => ({
      judgmentForm: {
        ...prevState.judgmentForm,
        projectId,
      },
    }));
  };
  

  // ... restul codului

handleUpdate = (project) => {
    const projectId = project.projectId;
    this.setState({
        selectedProject: project,
      });
    // Adaugă logica pentru actualizarea proiectului
    // Aici poți redirecționa utilizatorul către o pagină de editare a proiectului sau poți efectua o altă acțiune specifică actualizării
    console.log('Update project:', project);
  };
  
  handleDelete = (projectId) => {
    // Adaugă logica pentru ștergerea proiectului
    // Aici poți afișa o fereastră de confirmare și apoi să faci apelul către backend pentru ștergere
    if (window.confirm('Are you sure you want to delete this project?')) {
      axios.delete(`http://localhost:5001/api/project/delete/${projectId}`, {
          headers: {
              Authorization: localStorage.getItem('token')
          }
      })
      .then(response => {
          console.log('Project deleted successfully:', response.data);
          // Poți reîncărca lista de proiecte sau face orice altceva după ștergere
          this.loadProjects();
      })
      .catch(error => {
          console.error('Error deleting project:', error);
          // Tratează erorile aici, afișează un mesaj utilizatorului, etc.
      });
    }
  };
  
  loadProjects = () => {
    // Funcție pentru a reîncărca lista de proiecte după actualizare sau ștergere
    axios.get('http://localhost:5001/api/projects', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    })
    .then(res => {
      console.log(res.data.data);
      this.setState({ projectList: res.data.data });
    })
    .catch(err => {
      console.log(err);
    });
  };
  
  // ... restul codului
  

  offerJudgment = () => {
    const { label, id, projectId, projectTitle } = this.state.judgmentForm;
  
    // Asigură-te că ai ID-ul proiectului disponibil de la proiectul curent
    const currentProjectId = 8;
  
    // Trimite datele către backend
    axios.post(`http://localhost:5001/api/judgment/create/${currentProjectId}`, {
      label,
      id,
      projectId,
      projectTitle,
    })
      .then(response => {
        console.log('Judgment offered successfully:', response.data);
        // Puteți face orice altceva după trimiterea cu succes a judecății
      })
      .catch(error => {
        console.error('Error offering judgment:', error);
        // Tratați erorile aici, afișați un mesaj utilizatorului, etc.
      });
  
    // Resetați formularul după oferirea judecății
    this.setState({
      judgmentForm: {
        label: '',
        id: '',
        projectId: '',
        projectTitle: '',
      },
    });
  };
  
  

  // Function to offer judgment
  offerJudgment = () => {
    const { label, id, projectId, projectTitle } = this.state.judgmentForm;

    // Add the necessary logic to offer the judgment using axios or your preferred method
    // Example: axios.post('/api/offer-judgment', { label, id, projectId, projectTitle })

    // Reset the form after offering judgment
    this.setState({
      judgmentForm: {
        label: '',
        id: '',
        projectId: '',
        projectTitle: '',
      },
    });
  };

  render() {
    if (!this.state.projectList) {
      return <div>...Loading Projects...</div>;
    }

    return (
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
                  <th>Update</th> {/* Noua coloană pentru butonul de actualizare */}
                  <th>Delete</th> {/* Noua coloană pentru butonul de ștergere */}
                </tr>
                {this.state.projectList.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <a href={"/start/full-page/" + item.projectId}>
                        {item.title}
                      </a>
                    </td>
                    <td>{item.author}</td>
                    <td>{item.videoLink}</td>
                    <td>
                      <button onClick={() => this.handleUpdate(item)}>Update</button>
                    </td>
                    <td>
                      <button onClick={() => this.handleDelete(item.projectId)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              <a href="/home/project">Create new project</a>
            </p>
      
          {/* Judgment form */}
          <h2>Offer Judgment</h2>
          <form>
            <label>
              Label:
              <input type="text" name="label" value={this.state.judgmentForm.label} onChange={this.handleJudgmentFormChange} />
            </label>
            <br />
            <label>
              Nota:
              <input type="number" name="id" value={this.state.judgmentForm.id} onChange={this.handleJudgmentFormChange} />
            </label>
            <br />
            
            <br />
            <label>
              Opinie:
              <input type="text" name="projectTitle" value={this.state.judgmentForm.projectTitle} onChange={this.handleJudgmentFormChange} />
            </label>
            <label>
              Select Project:
              <select name="projectId" value={this.state.judgmentForm.projectId} onChange={this.handleProjectChange}>
                <option value="" disabled>Select a project</option>
                {this.state.projectList.map(project => (
                  <option key={project.projectId} value={project.projectId}>
                    {project.title}
                  </option>
                ))}
              </select>
            </label>
            <br />
            <button type="button" onClick={this.offerJudgment}>Offer Judgment</button>
          </form>
        </div>
      </div>
      
    );
    
    
    
  }
}

export default ProjectList;


// import React from 'react';
// import { Component } from 'react';
// import axios from 'axios';
// import Navbar from '../../MainPage/Navbar/Navbar';

// // props
// class ProjectList extends Component {
//     state = {projectList: null}
//     render () {

//     if (!this.state.projectList) {
//         axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

//         axios.get('http://localhost:5001/api/projects').then(res=>{
//             console.log(res.data.data);
//             this.setState({projectList:res.data.data})
//         }).catch(err=>{
//             console.log(err);
//         })


//         return <div>
//             ...Loading Projects...
//         </div>
//     }

//     return(
//         <div>
//             <Navbar />
//         <div>
//             <h2>Project list</h2>
//             <table border={1} cellPadding={5}>

           
//             <tbody>
//           <tr>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Video</th>
//           </tr>
//           {this.state.projectList.map((item, i) => (
//             <tr key={i}>
//               <td>
//                 <a href={"/start/full-page/" + item.projectId}>
//                 {item.title}
//                     </a></td>
//               <td>{item.author}</td>
//               <td>{item.videoLink}</td>
//             </tr>
//           ))}
//             </tbody>
//             </table>
//             <p>
//                 <a href="/home/project">Create new project</a>
//             </p>
//             {/* <div>
//                 <span>Project Name:</span>
//                 <span className="bold">{this.state.projectData.title}</span>
//             </div>
//             <div>
//                 <span>Author:</span>
//                 <span className="bold">{this.state.projectData.author}</span>
//             </div>
//             <div>
//                 <span>Videoclip:</span>
//                 <span className="bold">{this.state.projectData.videoLink}</span>
//             </div>
//             <div>
//                 <div>Full Description:</div>
//                 <code>{this.state.projectData.description}</code>
//             </div> */}
//             {/* <div>
//                 <h3>Images:</h3>
//                 <div>{props.projectData.images === 'no-photo.jpg' ? "This project has no images" : <DisplayImages images={props.projectData.images}/>}</div>
//             </div> */}
//             {/* <div>
//                 <h3>Project Link:</h3>
//                 <a href={props.projectData.ghLink} target="_blank">{props.projectData.ghLink}</a>
//             </div> */}
//         </div>
//         </div>
//     );
//     }
// }

// export default ProjectList;