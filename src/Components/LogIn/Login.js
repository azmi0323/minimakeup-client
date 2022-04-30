import "./LogIn.css";
import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import bg from '../../img/bg.png'
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
    <div className="row container mx-auto">
      <div className="col-lg-8">
        <img className="img-fluid mt-2" src={bg} alt="" />
      </div>
      <div className="col-lg-4 my-5 px-5 py-3 me-0 form-container">
        <div className="">
          <form onSubmit={handleLogin} className=" mx-auto">
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
              className="w-100 input-field"
              type="password"
              name=""
              id=""
              required
            />

            <p className="text-success fw-bold mt-3">
              New at MiniMakeUp?
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
              className=" input-btn d-block mx-auto mt-3"
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
              className="mt-3 d-block mx-auto glow-on-hover"
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
