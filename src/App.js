import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import About from './Components/About';
import Home from './Components/Home';
import Button from 'react-bootstrap/Button';


function App() {

   
  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState('marsroverphotos');
  const [lastSearch, setLastSearch] = useState('');

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }

  
  useEffect(() => {
    getImages(searchString);
  },);

  function getImages(images) { 
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_STOCK_API_KEY}`;
  
    fetch(url)
    .then(response => response.json())
    .then(response => {
      setImages(response.photos);
      setLastSearch(images);
      setSearchString('');
    })
  }
  const [picInfo, setPicInfo] = useState([])

  return (


<div>

      <div className="App">
        <li>  <Link to="/Home">
        <img src="https://user-images.githubusercontent.com/86509310/130476020-28e7db3a-74b0-44fb-a6e2-8fe3c0a46533.png" alt="nasaLogo" /> </Link> </li>
      

        <>
        <Button href="/About">About</Button> 
        <Button href="/Main">Rover Photos</Button> 
      </>
      

    
    </div>
        <Route exact path="/Home"
            component={Home} /> 

        <Route exact path="/About" 
            component={About} />

        <Route exact path="/Main"
            render={() => <Main images={images} />} />


       
</div>


  );
}

export default App;