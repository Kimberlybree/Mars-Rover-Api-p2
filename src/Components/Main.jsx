import React from 'react';
import App from '../App';

const Main = ({images}) => {
    if (!images.length) {
        return <h3>Try Again!</h3>
    }

    return (
     
        <div className="gallery">
              {images.map(image => (
              <div key={image.id} className="imgId">
             <img src={image.img_src} alt=" "/>
             {/* {images[0].rover.landing_date} */}
             </div>
            
            ))}
         
            
        </div>
    );
}

export default Main;