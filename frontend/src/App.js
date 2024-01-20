import React, { Component } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Auxiliary from './Auxiliary/Auxiliary';
import LoginPage from './Containers2/LoginPage/LoginPage';
import RegisterPage from './Containers2/LoginPage/RegisterPage';
import ProjectPage from './Containers2/ProjectPage/ProjectPage';
import DisplayFullProject from './Components2/Multi/DisplayFullProject/DisplayFullProject';
import Navbar from './Components2/MainPage/Navbar/Navbar';
import ProjectList from './Components2/MainPage/ProjectList/ProjectList';

const SERVER = 'http://localhost:5001'

class App extends Component {

  render() {
    return (
      <Auxiliary>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/start/register" element={<RegisterPage />} />
            <Route path="/start/main-page" element={<Navbar />} />
            <Route path="/home/project" element={<ProjectPage />} />
            <Route path="/home/project-list" element={<ProjectList />} />
            <Route path="/start/full-page/:id" element={<DisplayFullProject />} />
          </Routes>
        </BrowserRouter>
      </Auxiliary>
    );
  }
}

export default App;