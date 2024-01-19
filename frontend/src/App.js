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
// import MainPage from './Containers2/MainPage/MainPage';
import Review from './Containers2/ReviewPage/Reviews';
import ReviewProjects from './Containers2/ReviewPage/ReviewProjects'
import ProjectList from './Components2/MainPage/ProjectList/ProjectList';

const SERVER = 'http://localhost:5001'

class App extends Component {
  // state = {
  //   user: null, // Adaugă inițializarea user-ului
  //   isUserAuth: false,
  //   projects: [], // Adaugă inițializarea proiectelor
  // };

  // userAuthHandler = () => {
  //   this.setState({ isUserAuth: !this.state.isUserAuth });
  //   console.log("[App.js] login state changed");
  // };

  // setUser = (user) => {
  //   this.setState({
  //     user: user,
  //     isUserAuth: true
  //   });
  // };

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
            <Route path="/home/project-list" element={<ProjectList />} />
            <Route path="/home/profile/project" element={<ProfilePage />} />
            <Route path="/home/review/review-projects" element={<ReviewProjects />} />
            <Route path="/start/full-page/:id" element={<DisplayFullProject />} />
          </Routes>
        </BrowserRouter>
      </Auxiliary>
    );
  }
}

export default App;