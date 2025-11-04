import React from 'react'
import "./signup.css"
import { Link } from "react-router-dom";

export default function signup() {
  return (
    <>
      <div className="signup_wrapper">
        <div className="name">
          <h1>Create Your Apple Account Here</h1> <br />
          <input className="name1" type="text" placeholder="FirstName"></input>
          <input type="text" placeholder="LastName"></input>
        </div>
        <br />
        <input className="email" type="email" placeholder="Email"></input>{" "}
        <br />
        <br />
        <input className="pass" type="password" placeholder="Password"></input> <br />
         <br />
        <p>
          If you have Account <Link to="/signin">Sign In</Link>
        </p>
      </div>
    </>
  );
}
