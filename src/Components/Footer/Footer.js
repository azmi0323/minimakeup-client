import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import fb from "../../img/facebook.png";
import insta from "../../img/instagram.png";
import linkedin from "../../img/linkedIn2.png";
import github from "../../img/github.png";
const Footer = () => {
  return (
    <div className="bg-dark">
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white fw-bold">
                Mini<span className="text-info">Makeup</span>
              </h5>
              <p class="small text-muted">
                Our most demanding product we store for our customers. Here in
                this warehouse we have most authentic makeup products in the
                worldwide. We can provide the showrooms our products by any
                times. This website basically use for our supervisors. Our owner
                sir{" "}
                <Link className="footer-style" to="/about">
                  Aazmi Habib
                </Link>{" "}
                also look after the website. We count our products through out
                this site.
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">MiniMakeup Features</h5>
              <ul class="list-unstyled ">
                <li>
                  <Link class=" footer-style  mb-0" to="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link class=" footer-style  mb-0" to="/inventory">
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link class=" footer-style  mb-0" to="/about">
                    about
                  </Link>
                </li>
                <li>
                  <Link class=" footer-style  mb-0" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">More MiniMakeup Features</h5>
              <ul class="list-unstyled ">
                <li>
                  <Link class=" footer-style  mb-0" to="/manageItems">
                    Manage Items
                  </Link>
                </li>
                <li>
                  <Link class=" footer-style  mb-0" to="/addItems">
                    Add Items
                  </Link>
                </li>
                <li>
                  <Link class=" footer-style  mb-0" to="/myItems">
                    My Items
                  </Link>
                </li>
                <li>
                  <Link class=" footer-style  mb-0" to="/logIn">
                    LogIn
                  </Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6">
              <h5 class="text-white mb-3 text-center">Contact Us</h5>
              <ul className="text-white list-unstyled d-flex">
                <li>
                  <img className="me-4" src={fb} alt="" />
                </li>
                <li><img className="me-4" src={insta} alt="" /></li>
                <li><img className="me-4" src={linkedin} alt="" /></li>
                <li><img className="me-4" src={github} alt="" /></li>
              </ul>
              <h6 className="text-white mt-5">Email: <span className="text-info">azmihabib0323@gmail.com</span></h6>
              <h6 className="text-white mt-3">Phone: <span className="text-info">+8801303823282, +00801765479719</span></h6>
            </div>
          </div>
          <p class="small my-5 text-center text-muted mb-0">
            &copy; Copyrights. All rights reserved 2022 by{" "}
            <Link className="footer-style" to="/about">
              Aazmi Habib
            </Link>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
