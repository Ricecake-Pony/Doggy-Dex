import React, { useEffect, useContext} from 'react';
import { Route, Routes } from "react-router-dom"
import Breeds from './Breeds/Breeds';
import NavBar from './NavBar/NavBar';
import SignUp from './NavBar/SignUp';
import Home from './HomePage/Home';
import UserProfile from './NavBar/UserProfile';
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const baseURL= "http://localhost:3001/"
const signUpURL = baseURL + 'signup';
const myProfileURL = baseURL + 'my_profile';
const breedsURL = baseURL + 'breeds';
const productsURL = baseURL + 'dog_products'

function App() {

  const {currentUser, setCurrentUser} = useContext(UserContext)
  const navigate = useNavigate()

    const logOut = () => {
      
      localStorage.removeItem('uid')
      navigate('/')
      setCurrentUser()
    }

    return (
    <div className="App">
        <NavBar logOut= {logOut}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path ="Signup" element={<SignUp signUpURL = {signUpURL} />} />
          <Route exact path ="my_profile" element={<UserProfile myProfileURL = {myProfileURL} />} />
          <Route exact path ="breeds" element={<Breeds breedsURL = {breedsURL} />} />
          <Route exact path ="dog_products" element={<Breeds productsURL = {productsURL} />} />
        </Routes> 
    </div>
  );
}

export default App;
