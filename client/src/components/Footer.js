import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date();
  return (
    <>
      {/*  Footer  */}
      <footer className="ftco-footer p-5">
        <div className="container-xl">
          <div className="row mb-5 justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="ftco-footer-widget mb-4">
                <h2
                  className="ftco-heading-2 logo d-flex"
                  style={{ position: "relative", zIndex: 2 }}
                >
                  <Link
                    className="navbar-brand d-flex align-items-center"
                    to="/home"
                    style={{ gap: "10px" }}
                  >
                    <img
                      src="/assets/images/msq_logo.png"
                      alt="MenteSquare Logo"
                      style={{ width: "40px", height: "40px", objectFit: "contain" }}
                    />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, color: "#1eb2a6", fontSize: "1.6rem" }}>
                      MenteSquare
                      <span style={{ fontSize: "12px", display: "block", color: "#666", fontWeight: 500 }}>Online Mentoring</span>
                    </span>
                  </Link>
                </h2>
                <p className="fw-bold">Follow us on</p>
                <ul className="ftco-footer-social list-unstyled mt-2">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/mentesquare/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/mentesquare/"
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="christConsulting-cont d-flex mt-5 align-items-center gap-4"></div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Explore</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to={"/MentoringPage#mPro"}>
                      <span className="ion ion-ios-arrow-round-forward me-2" />
                      Mentoring Process
                    </Link>
                  </li>
                  <li>
                    <a href="#ourTeam">
                      <span className="ion ion-ios-arrow-round-forward me-2" />
                      Our Team
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <Link to={"/contact-us"}>
                      <span className="ion ion-ios-arrow-round-forward me-2" />
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to={"/testimonials"}>
                      <span className="ion ion-ios-arrow-round-forward me-2" />
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            {/*<div className="col-md-6 col-lg">*/}
            {/*    <div className="ftco-footer-widget mb-4">*/}
            {/*        <h2 className="ftco-heading-2">Recent Posts</h2>*/}
            {/*        <div className="block-21 mb-4 d-flex">*/}
            {/*            <a className="blog-img img rounded" style={{backgroundImage: 'url(images/msq_logo.PNG)'}}/>*/}
            {/*            <div className="text">*/}
            {/*                <div className="meta">*/}
            {/*                    <div><a href="#"><span className="fa fa-calendar"/> Jan. 18, 2021</a></div>*/}
            {/*                    <div><a href="#"><span className="fa fa-user"/> Admin</a></div>*/}
            {/*                </div>*/}
            {/*                <h3 className="heading"><a href="#">Creativity and Inspiration</a></h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="block-21 mb-4 d-flex">*/}
            {/*            <a className="blog-img img rounded" style={{backgroundImage: 'url(images/image_2.jpg)'}}/>*/}
            {/*            <div className="text">*/}
            {/*                <div className="meta">*/}
            {/*                    <div><a href="#"><span className="fa fa-calendar"/> Jan. 18, 2021</a></div>*/}
            {/*                    <div><a href="#"><span className="fa fa-user"/> Admin</a></div>*/}
            {/*                </div>*/}
            {/*                <h3 className="heading"><a href="#">Creativity and Inspiration</a></h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="block-21 mb-4 d-flex">*/}
            {/*            <a className="blog-img img rounded" style={{backgroundImage: 'url(images/image_4.jpg)'}}/>*/}
            {/*            <div className="text">*/}
            {/*                <div className="meta">*/}
            {/*                    <div><a href="#"><span className="fa fa-calendar"/> Jan. 18, 2021</a></div>*/}
            {/*                    <div><a href="#"><span className="fa fa-user"/> Admin</a></div>*/}
            {/*                </div>*/}
            {/*                <h3 className="heading"><a href="#">Creativity and Inspiration</a></h3>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="col-md-6 col-lg">*/}
            {/*    <div className="ftco-footer-widget mb-4">*/}
            {/*        <h2 className="ftco-heading-2">Have a Questions?</h2>*/}
            {/*        <div className="block-23 mb-3">*/}
            {/*            <ul>*/}
            {/*                <li><span className="icon fa fa-map marker"/><span className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, suscipit?</span></li>*/}
            {/*                <li><a href="#"><span className="icon fa fa-phone"/><span className="text">Lorem ipsum.</span></a></li>*/}
            {/*                <li><a href="#"><span className="icon fa fa-paper-plane"/><span className="text">Lorem ipsum.</span></a></li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>
        <div className="container-fluid px-0 py-5 bg-darken">
          <div className="container-xl">
            <div className="row">
              <div className="col-md-12 text-center">
                <p className="mb-0" style={{ fontSize: "12px" }}>
                  Copyright ©{year.getFullYear()} All rights reserved |
                  MenteSquare
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*  Footer End  */}
    </>
  );
};
