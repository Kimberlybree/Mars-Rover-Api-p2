import React from 'react';
import App from '../App';

function Main({images}) {
  
    return (

     
        <div className="gallery">
        
              {images.map(image => (
           
              <div key={image.id} className="imgId">
             <img src={image.img_src} />
             {/* {images[0].rover.landing_date} */}
           
            
            
           
            </div>
            ))}
            
        </div>
    );
}

export default Main;