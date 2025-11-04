import React from 'react'
import { Link } from "react-router-dom";
import "./signin.css"


export default function signin() {
  return (
    <>
      <div className= "signin_wrapper">
        <h1>Sign in for faster checkout.</h1> <br />
        <p>Sign in Apple Srore</p> <br />
        <input className='inp' type="Email" placeholder="Email"></input> <br />
        <br />
        <p>
          Don't have an Apple Account?{" "}
          <Link to="/signup">Create Your Apple Account </Link>
        </p>
      </div>
    </>
  );
}
