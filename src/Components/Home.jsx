import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Main from './Main';



function Home() {

  const initialState = {
    username: '',
  
    password: '',
  
    passwordConfirm: '',
  
    valid: ''
  }
  const [formState, setFormState] = useState(initialState);

const handleSubmit = (event) => {
  event.preventDefault()
  setFormState({...formState.valid = (formState.password===formState.passwordConfirm)});
  console.log(formState)
  setFormState(initialState);

  return (

  <Route exact path="/Main"
  component = {Main} />
  )

}

const handleChange = (event) => {
  setFormState({...formState, [event.target.id]: event.target.value});

}
  
    return (
      
   
        
            <div className="signUpForm">
       
        <form>
        <h1> Sign up </h1>
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

          <button type="submit" onSubmit={handleSubmit}>Sign Up </button>
          <p>Passwords must match.</p>
        </form>
 </div>
           
     
    );
}

export default Home;