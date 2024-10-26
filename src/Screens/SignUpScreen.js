import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";

function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="SignUpScreen">
      <form id="signup_form">
        <h1 id="signinid">Sign IN</h1>
        <input
          id="email"
          name="email"
          autoComplete="off"
          ref={emailRef}
          type="email"
          placeholder="Email"
        />
        <input
          id="password"
          name="passsword"
          autoComplete="off"
          ref={passwordRef}
          type="password"
          placeholder="Password"
        />
        <button id="button" type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signupscreen_grey" id="signupscreen_grey">
            NEW to Netflix?{" "}
          </span>
          <span
            className="signupscren_link"
            id="signupscren_link"
            onClick={register}
          >
            Sign Up Now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
