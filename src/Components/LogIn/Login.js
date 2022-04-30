import "./LogIn.css";
import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading] =
    useSignInWithEmailAndPassword(auth);

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      if (user) {
        navigate(from, { replace: true });
      }
    });
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    navigate(from, { replace: true });
  }
  const handleForgetPassword = () => {
    sendPasswordResetEmail(email);
    alert("Email Sent to your account");
  };

  return (
    <div className="row container ">
      <div className="col-lg-7"><h2>Picture</h2></div>
      <div className="col-lg-5 me-0 form-container">
        <div className=" my-4">
          <form onSubmit={handleLogin} className="w-50 mx-auto">
            <h3 className="text-center text-success fw-bold pt-4">
              Please Login
            </h3>
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Email:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="w-100 input-field"
              type="email"
              name=""
              id=""
              required
            />
            <label className="mt-3 text-success fw-bold" htmlFor="email">
              Password:
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-100 "
              type="password"
              name=""
              id=""
              required
            />

            <p className="text-success fw-bold mt-3">
              New at MiniMakeUp?{" "}
              <Link
                className=" text-black rounded px-2 ms-2 fw-bold my-2 "
                to="/signUp"
              >
                Create an Account
              </Link>
            </p>
            <p>
              Forget Password?{" "}
              <span onClick={handleForgetPassword} className="text-danger">
                Reset Password
              </span>
            </p>
            <input
              className="login-btn d-block mx-auto mt-3"
              type="submit"
              value="Login"
            />
            <div className="text-success d-flex justify-content-center mt-3">
              <div></div>
              <div>or</div>
              <div></div>
            </div>
            <button
              onClick={() => handleGoogleSignIn()}
              className="mt-3 d-block mx-auto signIn-with-google-btn"
              type="button"
              value="SignIn With Google"
            >
              <img className="me-3" src="" alt="" /> SignIn With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
