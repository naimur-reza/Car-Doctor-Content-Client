import React, { useContext, useState } from "react";
import img from "../../src/assets/images/login/login.svg";
import { FaFacebook, FaGoogle, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user, signIn, popUpGoogle } = useContext(AuthContext);
  console.log(user);
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    signIn(email, password);
  };
  const handleGoogle = () => {
    popUpGoogle();
  };
  return (
    <div className="hero min-h-screen my-contain ">
      <div className="hero-content flex-col lg:flex-row justify-between">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img src={img} alt="" />
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100"
        >
          <div className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <p className="text-center my-text">Or Login With</p>
              <div className="flex items-center justify-center gap-3 pt-3">
                <FaFacebook className="text-sky-600 cursor-pointer" size={28} />
                <FaLinkedin className="text-sky-700 cursor-pointer" size={28} />
                <FaGoogle
                  onClick={handleGoogle}
                  className="text-orange-600 cursor-pointer"
                  size={28}
                />
              </div>
              <p className="my-text text-center py-3">
                New To Here? <Link to={"/register"}>Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
