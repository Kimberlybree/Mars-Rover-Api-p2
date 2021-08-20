import React from 'react';

function Main(props) {

    return (
        <div className="gallery">
            {props.images.map(image => (
                <div key={image.id} className="imgId">
                    <img src={image.img_src} />

                   
                    </div>
            ))}
            
        </div>
    );
}

export default Main;