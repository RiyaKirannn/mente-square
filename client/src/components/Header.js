import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  function navHide() {
    let newNav = document.getElementById("newNav");
    let nav = document.getElementById("mainNav");
    if (window.innerWidth < 991) {
      newNav.classList.add("d-none");
      nav.style.opacity = "1";
      nav.classList.remove("d-none");
    } else {
      newNav.classList.remove("d-none");
      nav.style.opacity = "0";
    }
  }

  //DisNav
  function disNav() {
    let nav = document.getElementById("mainNav");
    let newNav = document.getElementById("newNav");

    if (window.innerWidth > 991) {
      if (window.scrollY < 25) {
        nav.style.opacity = "0";
        nav.classList.add("d-none");
        newNav.classList.remove("d-none");
      } else {
        nav.classList.remove("d-none");
        newNav.classList.add("d-none");
        setTimeout(() => {
          nav.style.opacity = "1";
        }, 50);
      }
    }
  }

  //Navbar Fixed
  function fixNav() {
    let navLogo = document.getElementById("navLogo");
    if (window.scrollY > 10) {
      navLogo.classList.remove("d-none");
    } else {
      navLogo.classList.add("d-none");
    }
  }

  //Navbar Click Away
  window.addEventListener("click", (e) => {
    if (window.innerWidth < 991) {
      if (!document.getElementById("mainNav").contains(e.target)) {
        if (
          !document.getElementById("navToggler").classList.contains("collapsed")
        ) {
          document.getElementById("navToggler").click();
        }
      }
    }
  });

  window.addEventListener("scroll", fixNav);
  window.addEventListener("scroll", disNav);
  window.addEventListener("resize", navHide);
  window.addEventListener("load", navHide);

  useEffect(() => {
    navHide();

    return () => {
      window.removeEventListener("scroll", fixNav);
      window.removeEventListener("scroll", disNav);
      window.removeEventListener("resize", navHide);
      window.removeEventListener("load", navHide);
    };
  }, []);
  return (
    <>
      <div className="newNav" id="newNav">
        <div className="newNav-cont d-lg-flex d-md-flex d-xl-flex align-items-center justify-content-center d-none shadow">
          <div className="logoLeft col-2">
            <img src="/assets/images/msq_logo.png" alt="MenteSquare Logo" />
          </div>
          <div className="listRight col-8">
            <ul className="d-flex list-unstyled justify-content-center">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/LDInterventions"}>
                  OD Interventions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/gyaan-guides"}>
                  Gyaan Guides
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/MentoringPage"}>
                  Mentoring
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/BrandingPage"}>
                  Branding
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/contact-us"}
                  style={{
                    backgroundColor: "#00897B",
                    color: "#ffffff",
                    borderRadius: "50px",
                    padding: "0.75rem 1.5rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-block",
                  }}
                >
                  Contact Us
                </Link>
              </li>            </ul>
          </div>
        </div>
      </div>
      {/*Top Wrap End*/}
      {/*Navbar*/}
      <nav className="navbar navbar-expand-lg ftco-navbar-light" id="mainNav">
        <div className="container-xl p-4 p-lg-0 p-xl-0">
          <button
            className="navbar-toggler"
            type="button"
            id="navToggler"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars" /> Menu
          </button>
          <div
            className="shadow collapse navbar-collapse bg-white p-2"
            id="navMenu"
          >
            <img
              src="/assets/images/msq_logo.png"
              alt="MenteSquare Logo"
              id="navLogo"
              className="d-none"
              width="10%"
            />
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/LDInterventions"}>
                  OD Interventions
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/gyaan-guides"}>
                  Gyaan Guides
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/MentoringPage"}>
                  Mentoring
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/BrandingPage"}>
                  Branding
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={"/contact-us"}
                  style={{
                    backgroundColor: "#00897B",
                    color: "#ffffff",
                    borderRadius: "50px",
                    padding: "0.5rem 1.2rem",
                    fontWeight: 600,
                    textDecoration: "none",
                    display: "inline-block",
                    marginTop: "0.5rem",
                  }}
                >
                  Contact Us
                </Link>
              </li>            </ul>
          </div>
        </div>
      </nav>
      {/*Navbar End*/}
    </>
  );
};
