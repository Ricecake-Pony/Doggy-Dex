import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom"
import Breeds from './Breeds/Breeds';
import BreedInfo from './Breeds/BreedInfo';
import NavBar from './NavBar/NavBar';
import SignUp from './NavBar/SignUp';
import Home from './HomePage/Home';
import UserProfile from './NavBar/UserProfile/UserProfile';
import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import DogProducts from './NavBar/DogProducts';
import { GlobalStyles } from '@mui/material';

const baseURL= "http://localhost:3000/"
const signUpURL = baseURL + 'signup';
const myProfileURL = baseURL + 'my_profile';
const breedsURL = baseURL + 'breeds';

// const productsURL = baseURL + 'dog_products'

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
      <GlobalStyles
  styles={{
    body: { backgroundColor: "#EEE5E9" }
  }}
/>
        <NavBar logOut= {logOut}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path ="/Signup" element={<SignUp signUpURL = {signUpURL} />} />
          <Route exact path ="/my_profile" element={<UserProfile myProfileURL = {myProfileURL} />} />
          <Route exact path ="/breeds" element={<Breeds breedsURL = {breedsURL} />} />
          <Route exact path ="dog_products" element={<DogProducts />} />
          <Route path= "/breeds/:id" element= {<BreedInfo />}/>
        </Routes>
    </div>
  );
}

export default App;
