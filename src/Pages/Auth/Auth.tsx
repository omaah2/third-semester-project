/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useRef } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { app } from "./../../firebase";
import "./Auth.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [signInEmail, setSignInEmail] = useState<string>("");
  const [signInPassword, setSignInPassword] = useState<string>("");
  const [signUpName, setSignUpName] = useState<string>("");
  const [signUpEmail, setSignUpEmail] = useState<string>("");
  const [signUpPassword, setSignUpPassword] = useState<string>("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
      redirectToLandingPage();
      toast.success("Login successful!");
    } catch (error) {
      setError((error as Error).toString());
      toast.error("Login failed. Please check your credentials.");
    }
  };

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword);
      redirectToSignInPage();
      toast.success("Registration successful!");
    } catch (error) {
      setError((error as Error).toString());
      toast.error("Registration failed. Please try again.");
    }
  };

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await sendPasswordResetEmail(auth, forgotPasswordEmail);
      setError("Password reset instructions have been sent to your email.");
      toast.success("Password reset instructions sent!");
    } catch (error) {
      setError((error as Error).toString());
      toast.error("Password reset failed. Please try again.");
    }
  };

  const redirectToLandingPage = () => {
    navigate("/");
  };

  const redirectToSignInPage = () => {
    navigate("/");
  };

  const openForgotPasswordForm = () => {
    const forgotPasswordForm = document.querySelector(".forgot-password-form");
    if (forgotPasswordForm) {
      forgotPasswordForm.setAttribute("style", "display: block");
    }
  };

  const openRegister = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(-180deg)";
    }
  };

  const openLogin = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "rotateY(0deg)";
    }
  };

  return (
    <div>
      <Navbar
        openSignUpForm={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <ToastContainer />
      <div className="container">
        <div className="card">
          <div className="inner" ref={cardRef}>
            <div className="first-card">
              <h2>LOGIN</h2>
              <form onSubmit={handleSignIn}>
                <input
                  type="email"
                  className="input-box"
                  placeholder="Your Email"
                  required
                  value={signInEmail}
                  onChange={(e) => setSignInEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="input-box"
                  placeholder="Password"
                  required
                  value={signInPassword}
                  onChange={(e) => setSignInPassword(e.target.value)}
                />
                <button type="submit" className="submit-btn">
                  Sign In
                </button>
              </form>
              <button type="button" className="btn" onClick={openRegister}>
                I'm New Here
              </button>
              <a
                href="#"
                className="forgot-password"
                onClick={openForgotPasswordForm}
              >
                Forgot Password?
              </a>
            </div>
            <div className="second-card">
              <h2>REGISTER</h2>
              <form onSubmit={handleSignUp}>
                <input
                  type="text"
                  className="input-box"
                  placeholder="Your Name"
                  required
                  value={signUpName}
                  onChange={(e) => setSignUpName(e.target.value)}
                />
                <input
                  type="email"
                  className="input-box"
                  placeholder="Your Email"
                  required
                  value={signUpEmail}
                  onChange={(e) => setSignUpEmail(e.target.value)}
                />
                <input
                  type="password"
                  className="input-box"
                  placeholder="Password"
                  required
                  value={signUpPassword}
                  onChange={(e) => setSignUpPassword(e.target.value)}
                />
                <button type="submit" className="submit-btn">
                  Sign Up
                </button>
              </form>
              <button type="button" className="btn" onClick={openLogin}>
                I've an account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
