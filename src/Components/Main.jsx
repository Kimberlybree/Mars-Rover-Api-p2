import React from 'react';

function Main(props) {
    const { images } = props;
    if (!images.length) {
        return <h2>No Images Found!</h2>
    }
    return (
        <div className="gallery">
            {images.map(image => (
                <div key={image.id} className="imgId">
                    <img src={image.photos} />
                    </div>
            ))}
            
        </div>
    );
}

export default Main;