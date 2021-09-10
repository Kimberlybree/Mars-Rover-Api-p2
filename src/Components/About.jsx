import React from 'react';

function About(props) {
    return (
        <div className="about">

        <h2>
            Mars Rover Cameras - Curiosty, Opportunity, Spirit
            <img src="https://user-images.githubusercontent.com/86509310/130371145-e169e28e-b624-46d5-8a36-99b605522821.png" alt="nasaCameraChart"/>
         </h2>

        <h3>
            This is a project built from pulling API data of Mars' Curiosity Rover. The Curiosity Rover is 1 of the 3 rovers that landed on Mars and is currently active. The images are taken from 7 of the cameras on the rover. This project was created using React App, HTML, CSS, Google Fonts and images, and Api fetching using NASA's open API. 
        </h3>

        </div>
    );
}

export default About;