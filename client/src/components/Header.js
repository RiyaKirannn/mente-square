import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const lastScrollY = useRef(0);

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

  // Keep the desktop top bar visible while scrolling.
  function disNav() {
    const nav = document.getElementById("mainNav");
    const newNav = document.getElementById("newNav");
    if (window.innerWidth <= 991) return;
    const currentScrollY = window.scrollY;
    const scrollingDown = currentScrollY > lastScrollY.current;
    lastScrollY.current = currentScrollY;

    if (scrollingDown && currentScrollY > 60) {
      // Scrolling DOWN — hide the big banner, show compact nav
      if (newNav) newNav.classList.add("d-none");
      if (nav) {
        nav.classList.remove("d-none");
        setTimeout(() => {
          nav.style.opacity = "1";
        }, 50);
      }
    } else if (!scrollingDown) {
      // Scrolling UP — show the big banner, hide compact nav
      if (currentScrollY < 60) {
        // Back near top: show newNav, hide mainNav
        if (newNav) newNav.classList.remove("d-none");
        if (nav) {
          nav.style.opacity = "0";
          nav.classList.add("d-none");
        }
      } else {
        // Mid-page scrolling up: keep big nav visible
        if (newNav) newNav.classList.remove("d-none");
        if (nav) {
          nav.classList.remove("d-none");
          nav.style.opacity = "0";
          nav.classList.add("d-none");
        }
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
          <div className="logoLeft d-flex align-items-center">
            <Link to="/home" className="d-flex align-items-center text-decoration-none" style={{ gap: "10px" }}>
              <img src="/assets/images/msq_logo.png" alt="MenteSquare Logo" style={{ width: "50px", height: "50px", objectFit: "contain" }} />
              <span style={{ color: "#1eb2a6", fontWeight: "800", fontSize: "1.4rem", fontFamily: "'Montserrat', sans-serif" }}>
                MenteSquare
              </span>
            </Link>
          </div>
          <div className="listRight">
            <ul className="d-flex list-unstyled justify-content-end align-items-center mb-0" style={{ gap: "25px" }}>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to={"/LDInterventions"} style={{ color: "#1eb2a6", fontSize: "15px", fontFamily: "'Montserrat', sans-serif" }}>
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
                <a
                  className="nav-link"
                  href="/microsite/site.html"
                  style={{
                    background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
                    color: "#1C1C2E",
                    borderRadius: "50px",
                    padding: "0.4rem 1rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-block",
                    boxShadow: "0 4px 12px rgba(245, 158, 11, 0.4)",
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "14px"
                  }}
                >
                  New Course
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold"
                  to={"/contact-us"}
                  style={{
                    color: "#1eb2a6",
                    fontSize: "15px",
                    fontFamily: "'Montserrat', sans-serif"
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
            <div id="navLogo" className="d-none me-auto">
              <Link to="/home" className="d-flex align-items-center text-decoration-none" style={{ gap: "8px" }}>
                <img
                  src="/assets/images/msq_logo.png"
                  alt="MenteSquare Logo"
                  style={{ width: "36px", height: "36px", objectFit: "contain" }}
                />
                <span style={{ color: "#1eb2a6", fontWeight: "800", fontSize: "1.2rem", fontFamily: "'Montserrat', sans-serif" }}>
                  MenteSquare
                </span>
              </Link>
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to={"/LDInterventions"} style={{ color: "#1eb2a6", fontFamily: "'Montserrat', sans-serif" }}>
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
                <a
                  className="nav-link"
                  href="/microsite/site.html"
                  style={{
                    background: "linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%)",
                    color: "#1C1C2E",
                    borderRadius: "50px",
                    padding: "0.4rem 1rem",
                    fontWeight: 700,
                    textDecoration: "none",
                    display: "inline-block",
                    marginTop: "0.5rem",
                    marginRight: "0.5rem",
                    boxShadow: "0 4px 12px rgba(245, 158, 11, 0.4)",
                    fontFamily: "'Montserrat', sans-serif"
                  }}
                >
                  New Course
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold"
                  to={"/contact-us"}
                  style={{
                    color: "#1eb2a6",
                    fontFamily: "'Montserrat', sans-serif"
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
