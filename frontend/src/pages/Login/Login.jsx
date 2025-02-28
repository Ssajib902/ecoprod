import React, { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";
import FaceBookLogin from "../../Components/SocialLogin/FaceBookLogin";
import PhoneLogin from "../../Components/SocialLogin/PhoneLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  });

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful",
        showClass: {
          popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `,
        },
        hideClass: {
          popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `,
        },
      });
      navigate(from, { replace: true });
    });
  };

  const handleValidateCaptcha = (e) => {
    const userCaptchaValue = e.target.value;
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>EcoProd | Login</title>
      </Helmet>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex gap-10 flex-col md:flex-row-reverse">
          <div className="flex flex-col items-center justify-center text-center md:w-1/2 lg:text-left">
            <img
              className="w-full sm:w-1/2"
              src="/src/assets/icon/EcoprodPNG.png"
              alt="EcoProd"
            />
            <h1 className="text-5xl font-bold text-orange-600">Login now!</h1>
            <p className="py-6">
              Welcome to EcoProd. Find your favourite product from us.
            </p>
          </div>

          <div className="card bg-base-100 md:w-1/2 max-w-md shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  onBlur={handleValidateCaptcha}
                  type="text"
                  name="captcha"
                  placeholder="Type the Captcha"
                  disabled={true}
                  className="input input-bordered"
                  required
                />
                <button className="btn btn-outline btn-xs mt-2">
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <p className="text-center mb-5">
              <small>
                New Here? <Link to="/signup">Create an account</Link>
              </small>
            </p>
            <hr />
            <div className="flex">
              <SocialLogin />
              <FaceBookLogin />
              <PhoneLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
