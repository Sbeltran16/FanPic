import React, { useState} from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import AboutPage from '../AboutPage/AboutPage';
import PopularPage from '../PopularPage/PopularPage';
import userService from '../../utils/userService';
import FrontPage from '../FrontPage/FrontPage'; 
import ProfilePage from '../ProfilePage/ProfilePage';


function App() {
  const [user, setUser] = useState(userService.getUser())

  function handleSignUpOrLogin(){
    setUser(userService.getUser())
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  if(user) { // are we logged in?
    return (
    <Routes>
      <Route
        path="/"
        element={<FrontPage user={user} handleLogout={handleLogout} />}
      />
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route 
        path="/about"
        element={<AboutPage />}
      />
      <Route 
      path="/:username" 
      element={<ProfilePage 
      user={user} 
      handleLogout={handleLogout} />} 
      />
      <Route 
      path="/Popular" 
      element={<PopularPage />} 
      />
    </Routes>
      
    )
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route 
        path="/about"
        element={<AboutPage />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}


export default App;