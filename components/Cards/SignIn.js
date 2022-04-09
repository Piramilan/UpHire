import React from "react";

const SignIn = () => {
  return (
    <main className="main-content modal-body">
      <div className="primary-page">
        <div className="container">
          <div className="sign-up">
            <div className="sign-up-header">
              <h2>We are glad to see you again!</h2>
              <p>
                Dont have an account?{" "}
                <a href="30_register in.html">Register!</a>
              </p>
            </div>
            <div className="form-sign-up">
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
              <div className="text-password">
                <div className="text-remeber">
                  <input type="checkbox" id="txt-remeber" />
                  <label htmlFor="txt-remeber">Remeber me</label>
                </div>
                <a href="#">Forgot Password?</a>
              </div>
              <button className="btn btn-light-green w-100" type="button">
                Sign In
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

export default SignIn;
