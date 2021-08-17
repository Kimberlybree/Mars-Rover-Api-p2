import React from 'react';
import SearchBar from './SearchBar';
import App from '../App';

const RoverInfo = ({ photos }) => {
  
    if (!photos.length) {
      return <h2>No photos Found!</h2>
    }
  
    return (
      <div className="roverPics">
        {photos.map(photo => (
          <div key={photo.rover_id} className="rover">
            <img src={photo.url} />
          </div>
        ))}
      </div>
    )
  }

export default RoverInfo;