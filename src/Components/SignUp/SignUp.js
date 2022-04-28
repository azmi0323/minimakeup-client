import React, { useEffect, useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate =useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const [
    createUserWithEmailAndPassword,
    emailUser,
    emailLoading,
    error2,
  ] = useCreateUserWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  
  useEffect(()=>{
    if(emailUser){
      navigate(from, { replace: true });
    }
  },[emailUser])
  useEffect(()=>{
    if(error2){
      console.log(error2);
    }
  },[error2])
  const handleCreateUser = (event) => {
    event.preventDefault();
    if(password!==confirmPassword){
      setError('Password did not Match')
      return;
    }
    createUserWithEmailAndPassword(email,password)
  };

  
  if(emailLoading){
    return <p>Loading...</p>
  }
  return (
    <div className=" w-50 mx-auto  my-4">
      <form onSubmit={handleCreateUser} className="w-50 mx-auto">
        <h3 className="text-center text-success fw-bold pt-4">
          Please Sign up
        </h3>
        <label className="mt-3 text-success fw-bold" htmlFor="email">
          Email:
        </label>
        <input
          onBlur={handleEmailBlur}
          className="w-100 input-field"
          type="text"
          name=""
          id=""
          required
        />
        <label className="mt-3 text-success fw-bold" htmlFor="email">
          Password:
        </label>
        <input
          onBlur={handlePasswordBlur}
          className="w-100 input-field"
          type="password"
          required
          name=""
          id=""
        />
        <label className="mt-3 text-success fw-bold" htmlFor="email">
          Confirm Password:
        </label>
        <input
          onBlur={handleConfirmPasswordBlur}
          className="w-100 input-field"
          type="password"
          required
          name=""
          id=""
        />
        <p className="text-danger">{error}</p>
        <p className="text-info mt-3">
          Already have an Account?
          <span>
            <Link
              className=" text-black rounded px-2 ms-2 fw-bold my-2"
              to="/logIn"
            >
              Please Log In
            </Link>
          </span>
        </p>

        <input
          className="login-btn d-block mx-auto mt-3"
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default SignUp;
