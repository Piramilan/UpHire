import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-site" id="footer">
      <div className="container">
        <div className="footer-top">
          <div className="row align-items-center text-center text-lg-left">
            {/* <div className="col-lg-4 mb-2 mb-lg-0">
              <Image
                src="/../public/img/logo-footer.png"
                alt="Qdesk"
                width={150}
                height={50}
              />
            </div> */}
            <div className="col-lg-8">
              <ul className="nav-footer">
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    Help
                  </a>
                </li>
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    Athena Licenses
                  </a>
                </li>
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    Partners
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-middle">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-6 col-md-3">
                  <h3 className="title-footer">Account</h3>
                  <ul className="links-footer">
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        My Account
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Sign In
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Create Account
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Checkout
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3">
                  <h3 className="title-footer">For Candidates</h3>
                  <ul className="links-footer">
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Browse Jobs
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Browse Categories
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Submit Resume
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Candidate DashBoard
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        My Bookmarks
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Candidate Listing
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3">
                  <h3 className="title-footer">For Employers</h3>
                  <ul className="links-footer">
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Post a Job Job
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Employee Listing
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Employe DashBoard
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Reasume Page
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Browse Candidates
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Job Packages
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-3">
                  <h3 className="title-footer">Company</h3>
                  <ul className="links-footer">
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        How it Works
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="newsletter">
                <h3 className="title-footer">Newsletter</h3>
                <p>
                  Subscribe to
                  <span className="name">
                    <span>Q</span>desk
                  </span>{" "}
                  Pacific newsletter to get the latest jobs posted, candidates,
                  and other latest news stay update.
                </p>
                <div className="form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter email address..."
                  />
                  <button>
                    <i className="fa fa-envelope"></i>
                  </button>
                </div>
              </div>
              <ul className="social-footer">
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    <i className="fab fa-behance"></i>
                  </a>
                </li>
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                </li>
                <li>
                  <a href="http://html.bookingcore.org/qdesk-html/dist/#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom d-md-flex text-center justify-content-between">
          <div className="copyright">
            © 2019 <span className="text-green">Q</span>
            <span className="text-white">desk.</span> Design by
            <span className="text-white">MirrorTheme</span>. All Rights Reserved
          </div>
          <div className="language-footer">
            <span>Language:</span>
            <button
              className="btn-clear"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              English <i className="fa fa-caret-down"></i>
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a
                  className="dropdown-item"
                  href="http://html.bookingcore.org/qdesk-html/dist/#"
                >
                  Vietnamess
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="http://html.bookingcore.org/qdesk-html/dist/#"
                >
                  France
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
