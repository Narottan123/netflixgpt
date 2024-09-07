import React, { useState } from "react";
import Header from "../Header/Header.js";
import "./login.css";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const toggleSigninForm = () => {
    setSignInForm(!isSignInForm);
  };
  return (
    <div className="">
      <Header />
      <div className="bg-image">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          alt="netflix background"
        />
      </div>
      <form className="form-container">
        <h1 className="signin-header">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm ? <input type="text" placeholder="Full Name" /> : ""}
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Password" />

        <button className="signin-button">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          style={{
            color: "white",
            paddingTop: "20px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          onClick={toggleSigninForm}
        >
          {isSignInForm
            ? `New to Netflix? Sign Up Now`
            : "Already Registered Back To Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
