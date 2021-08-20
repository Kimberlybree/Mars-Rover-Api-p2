import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Components/Main';
import RoverInfo from './Components/RoverInfo';
import SearchBar from './Components/SearchBar';
import Nav from './Components/Nav';


function App() {

   
  const [images, setImages] = useState([]);
  const [searchString, setSearchString] = useState('marsroverphotos');
  const [lastSearch, setLastSearch] = useState('');

  const marsRoverApiKey = {
    key: process.env.REACT_APP_STOCK_API_KEY,
    limit: 25,
    api: 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY',
    endpoint: '/search'
  };


  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getImages(searchString);
  }

  
  useEffect(() => {
    getImages(searchString);
  }, []);

  function getImages(images) { 
    // const url =`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${process.env.REACT_APP_STOCK_API_KEY}`;
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_STOCK_API_KEY}`;
  
    fetch(url)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      setImages(response.photos);
      setLastSearch(images);
      setSearchString('');
    })
    .catch(console.error);
  }

  return (
   <div>
    <div className="App">


   <SearchBar />
   <Nav />

    </div>
     <RoverInfo />
   <Main images={images} />

    </div>
  );
}

export default App;