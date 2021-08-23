import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const RoverInfo = ({images}) => {

  const [rovers, setRoverInfo] = useState([images]);
  useEffect(() => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=DEMO_KEY')
    .then((res) => res.json())
    .then(res => {
      console.log(res);
      setRoverInfo(res);
    }) }, []);

    return (
      <section className="container">
       
      </section>
    )
      
      }

export default RoverInfo;