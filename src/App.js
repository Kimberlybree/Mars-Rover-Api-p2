import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import About from './Components/About';
import Home from './Components/Home';


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
<img src="https://cdn.mos.cms.futurecdn.net/baYs9AuHxx9QXeYBiMvSLU.jpg" alt="nasaLogo" /> </Link> </li>
<ul>
<li> <button> <Link to="/About">About </Link> </button> </li>  
<li> <button > <Link to="/Main">Main </Link> </button> </li>
</ul>

    
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