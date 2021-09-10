import React from 'react';


const Main = ({images}) => {
    console.log(images)
    if (!images) {
        return <h3>Try Again!</h3>
    }

    let gal = images.filter(img => img !== undefined); 

    return (
     
        <div className="gallery">
              {images.map(image => (
             <div key={image.id} className="imgId">
                <img src={image.img_src} alt=" "/>
             </div>
            
            ))}
         
            
        </div>
    );
}

export default Main;