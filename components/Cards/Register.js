import React from "react";

const Register = () => {
  return (
    <main className="main-content">
      <div className="primary-page">
        <div className="container">
          <div className="sign-up">
            <div className="sign-up-header">
              <h2>Let create your account!</h2>
              <p>
                Already have an account? <a href="29_sign_in.html">Sign In</a>
              </p>
            </div>
            <div className="form-sign-up">
              <div className="account-type row row-md">
                <div className="col-md-6">
                  <button className="btn btn-white w-100" type="button">
                    <i className="fas fa-user-circle"></i>Freelancer
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-white w-100" type="button">
                    <i className="fas fa-suitcase"></i>Employer
                  </button>
                </div>
              </div>
              <div className="input-group-icons">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email address"
                />
                <span className="prepend-icon">
                  <i className="far fa-envelope"></i>
                </span>
              </div>
              <div className="input-group-icons">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Password"
                />
                <span className="prepend-icon">
                  <i className="far fa-sun"></i>
                </span>
              </div>
              <div className="input-group-icons">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Repeat Password"
                />
                <span className="prepend-icon">
                  <i className="far fa-sun"></i>
                </span>
              </div>
              <button className="btn btn-light-green w-100" type="button">
                Register
              </button>
            </div>
            <div className="sign-up-other">
              <div className="text-or">Or</div>
              <div className="sign-in-social row row-md">
                <div className="col-md-6">
                  <a className="sign-in-btn sign-in-btn-fb" href="#">
                    {" "}
                    <i className="fab fa-facebook-f"></i>Register In via
                    Facebook
                  </a>
                </div>
                <div className="col-md-6">
                  <a className="sign-in-btn sign-in-btn-google-p" href="#">
                    {" "}
                    <i className="fab fa-google-plus-g"></i>Register In via
                    Google+
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
