import React from 'react';

function Home(props) {
    return (
   
        
            <div className="signUpForm">
        <h1> Sign up </h1>
        <form>
          <input type="text" placeholder="Username" id="username" />
          <label htmlFor="username">Username </label> <br /> 

          <input type="password" placeholder="Password" id="password" />
          <label htmlFor="password">Password </label> <br /> 

          <input
            type="password"
            placeholder="Confirm password"
            id="passwordConfirm"/>
          <label htmlFor="passwordConfirm">Confirm password</label>
          <br /> 

          <button type="submit">Sign Up </button>
          <p>Passwords must match.</p>
        </form>
 </div>
           
     
    );
}

export default Home;