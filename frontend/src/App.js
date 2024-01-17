import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Auxiliary from './Auxiliary/Auxiliary';
import MainPage from './Containers2/MainPage/MainPage';
import Background from './Containers2/LoginPage/Background';
import LoginPage from './Containers2/LoginPage/LoginPage';
import RegisterPage from './Containers2/LoginPage/RegisterPage';
import ProjectPage from './Containers2/ProjectPage/ProjectPage';
import axios from 'axios';
import DisplayFullProject from './Components2/Multi/DisplayFullProject/DisplayFullProject';
import Navbar from './Components2/MainPage/Navbar/Navbar'; // Adaugă importul pentru Navbar
import ProfilePage from './Containers2/ProfilePage/ProfilePage';

const SERVER = 'http://localhost:5001'

class App extends Component {
  state = {
    user: null, // Adaugă inițializarea user-ului
    isUserAuth: false,
    projects: [], // Adaugă inițializarea proiectelor
  };

  userAuthHandler = () => {
    this.setState({ isUserAuth: !this.state.isUserAuth });
    console.log("[App.js] login state changed");
  };

  componentDidMount = () => {
    // axios.get('/api/data').then(res => {
    //   this.setUser(res.data);
    // }).catch(err => { console.log(err); });
    axios.get(`${SERVER}/api/me`).then(res => {
      this.setUser(res.data);
    }).catch(err => { console.log(err); });
    axios.get(`${SERVER}/api/projects`).then(res => {
      this.setState({
        projects: res.data
      });
    }).catch(err => { console.log(err); });
  };

  setUser = (user) => {
    this.setState({
      user: user,
      isUserAuth: true
    });
  };

  render() {
    return (
      <Auxiliary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/start/register" element={<RegisterPage />} />
            <Route path='/start' element={<Background />} />
            <Route path="/start/main-page" element={<Navbar />} />
            <Route path="/home/project" element={<ProjectPage />} />
            <Route path="/home/profile/project" element={<ProfilePage />} />
            <Route path="/start/full-page" element={<DisplayFullProject />} />
          </Routes>
        </BrowserRouter>
      </Auxiliary>
    );
  }
}

export default App;



// import React, { Component, } from 'react';
// import { Route, BrowserRouter, Navigate, Routes } from 'react-router-dom';

// import Auxiliary from './Auxiliary/Auxiliary';
// import MainPage from './Containers2/MainPage/MainPage';
// import Background from './Containers2/LoginPage/Background';
// import LoginPage from './Containers2/LoginPage/LoginPage';
// import RegisterPage from './Containers2/LoginPage/RegisterPage';
// import ProjectPage from './Containers2/ProjectPage/ProjectPage';
// import axios from 'axios';
// import DisplayFullProject from './Components2/Multi/DisplayFullProject/DisplayFullProject';
// import navbar from './Components2/MainPage/Navbar/Navbar';
// import ProfilePage from './Containers2/ProfilePage/ProfilePage';

// class App extends Component {
// 	state = {

// 	}

// 	userAuthHandler = () => {
// 		this.setState({ isUserAuth: !this.state.isUserAuth });
// 		console.log("[App.js] login state changed")
// 	}

// 	componentDidMount = () => {
// 		axios.get('http://localhost:3001/api/v1/auth/login').then(res => {
// 			this.setUser(res.data);
// 		}).catch(err => { console.log(err); });
// 		axios.get('http://localhost:3001/api/v1/projects').then(res => {
// 			this.setState({
// 				projects: res.data
// 			});
// 		}).catch(err => { console.log(err); });
// 	}

// 	setUser = (User) => {
// 		this.setState({
// 			user: User,
// 			isUserAuth: true
// 		});		
// 	}

// 	render() {
// 		return (
// 			<Auxiliary>
// 				<BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/start/register" element={<RegisterPage />} />
//           <Route path='/start' render={() => <Background />} />	
//           {/* <Route path="/start/main-page" element={<Navbar />} /> */}
//           <Route path="/start/main-page" element={<ProjectPage />} />
// 		  <Route path="/start/main-page" element={<ProfilePage />} />
//           <Route path="/start/full-page" element={<DisplayFullProject />}/>
// 		  {/* <Route path="/start/full-page" element={<DisplayFullProject />}/> */}
//           {/* <Route path={"/"} exact>			
// 						{this.state.isUserAuth ? <Navigate to="/home/profile/project" /> : <Navigate to="/start/login" />}
// 					</Route>
					
// 						<Route path='/start' render={() => <Background />} />
// 						<Route path='/home' render={() => <MainPage user={this.state.user} projects={this.state.projects} />} />
// 					</Routes> */}
//           </Routes>
// 				</BrowserRouter>
// 			</Auxiliary>
// 		);
// 	}
// }

// export default App;



// import React from 'react';
// import './App.css';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import RegisterForm from './components/RegisterForm'; // Înlocuiește cu componenta ta reală
// import Background from './components/Background';
// import LoginForm from './components/LoginForm';
// import LoginSignup from './components/LoginSignup';
// import MainPage from './components/MainPage/MainPage';
// import ProjectPage from './components/ProjectPage/ProjectPage'
// import ProiectForm from './components/ProiectForm';

// function App() {
//   return (
//     // <Router>
//     //   <LoginSignup></LoginSignup>
//     // </Router>
//     <div>
//     <BrowserRouter>
//       {/* <Route path={"/"} exact>			
// 						{this.state.isUserAuth ? <Navigate to="/home/profile/project" /> : <Navigate to="/start/login" />}
// 					</Route> */}
//       <Routes>
//         <Route path="/" element={<LoginForm />} />
//         <Route path="/start/register" element={<RegisterForm />} />
//         <Route path='/start' render={() => <Background />} />
//         <Route path="/start/main-page" element={<ProiectForm />} />
//         {/* Alte rute dacă este necesar */}
//         {/* <Route path='/home' render={() => <MainPage user={this.state.user} projects={this.state.projects} />} /> */}
//       </Routes>
//     </BrowserRouter>
//     </div>
//   );
// }

// export default App;


// // import logo from './logo.svg';
// // import './App.css';
// // import React, { Component, } from 'react';
// // import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';
// // import LoginSignup from './components/LoginSignup';
// // import ProiectForm from './components/ProiectForm'
// // import Background from './components/Background';
// // import Auxiliary from './Auxiliary/Auxiliary'
// // import axios from 'axios';
// // // import RegisterForm from './components/RegisterForm'

// // function App() {
// //   // state = {

// // 	// }

// //   const navigate = useNavigate();

// // 	// userAuthHandler = () => {
// // 	// 	this.setState({ isUserAuth: !this.state.isUserAuth });
// // 	// 	console.log("[App.js] login state changed")
// // 	// }

// //   // userAuthHandler = () => {
// // 	// 	this.setState({ isUserAuth: !this.state.isUserAuth });
// // 	// 	console.log("[App.js] login state changed")
// // 	// }

// // 	// componentDidMount = () => {
// // 	// 	axios.get('http://localhost:3001/api/v1/auth/me').then(res => {
// // 	// 		this.setUser(res.data);
// // 	// 	}).catch(err => { console.log(err); });
// // 	// 	axios.get('http://localhost:3001/api/v1/projects').then(res => {
// // 	// 		this.setState({
// // 	// 			projects: res.data
// // 	// 		});
// // 	// 	}).catch(err => { console.log(err); });
// // 	// }

// // 	// setUser = (User) => {
// // 	// 	this.setState({
// // 	// 		user: User,
// // 	// 		isUserAuth: true
// // 	// 	});		
// // 	//}

// //   // render() {
  
  
// //     return (
// //     // <Auxiliary>
// // 		// 		<BrowserRouter>
// //     //     <Routes>
// // 		// 			<Route path={"/"} exact>			
// // 		// 				{this.state.isUserAuth ? <navigate to="/home/profile/project" /> : <navigate to="/start/login" />}
// // 		// 			</Route>
// // 		// 				<Route path='/start' render={() => <Background />} />
// // 		// 				{/* <Route path='/home' render={() => <MainPage user={this.state.user} projects={this.state.projects} />} /> */}
// // 		// 			</Routes>
// // 		// 		</BrowserRouter>
// // 		// 	</Auxiliary>
// //     // // <RegisterForm></RegisterForm>
// //     <BrowserRouter>
// //       <div>
// //         <Routes>
// //           <Route path='/proiectForm' element={<ProiectForm />} />
// //           <Route path='/*' element={<LoginSignup />} /> {/* Afiseaza LoginSignup pentru orice alta ruta */}
// //         </Routes>
       
// //       </div>
// //     </BrowserRouter>
// //     // <div >
// //     //   <LoginSignup></LoginSignup>
// //     //   <BrowserRouter>
// //     //   <Routes>
// //     //     <Route path='/proiectForm' element={<ProiectForm/>}></Route>
// //     //   </Routes>
// //     //   </BrowserRouter>
// //     // </div>
// //   );
// //   // }
// // }

// // export default App;


// // import logo from './logo.svg';
// // import './App.css';
// // import React, { useState } from 'react';
// // import ProiectForm from './components/ProiectForm';
// // import ProiectList from './components/ProiectList';
// // import LoginSignup from './components/LoginSignup';

// // function App() {
// //   // const handleProiectAdaugat = (proiect) => {
// //   //   // Implementați logica pentru actualizarea stării cu noul proiect adăugat
// //   //   console.log('Proiect adăugat:', proiect.videoclip);
// //   // };

// //   // const [isLoggedIn, setIsLoggedIn] = useState(false);

// //   // const handleLogin = (data) => {
// //   //   if (data.success) {
// //   //     setIsLoggedIn(true);
// //   //   }
// //   // };

// //   // const handleRegister = (data) => {
// //   //   if (data.success) {
// //   //     setIsLoggedIn(true);
// //   //   }
// //   // };

// //   return (
// //     <div> 
// //        {/* {isLoggedIn ? (
// //         <h1>Bine ați venit!</h1>
// //       ) : (
// //         <div>
// //           <LoginForm onLogin={handleLogin} />
// //           <RegisterForm onRegister={handleRegister} />
// //         </div>
// //       )} */}
// //       <LoginSignup/>
// //       {/* <ProiectForm onProiectAdaugat={handleProiectAdaugat} />
// //       <ProiectList /> */}
// //     </div>
// //   );
// // }

// // export default App;
