import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
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
              <h5 class="text-white mb-3">Contact Us</h5>
              <ul className="text-white list-unstyled d-flex">
                <li>
                  facebook
                </li>
                <li>
                  instagram
                </li>
                <li>
                  linkedin
                </li>
                <li>
                  github
                </li>
              </ul>
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
