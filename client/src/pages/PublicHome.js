import React, { useEffect, useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
// unused link import removed

// importing aos
import "aos/dist/aos.css";
//GSAP
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export const PublicHome = () => {
  const timerRef = useRef(null);
  const firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      timerRef.current = setInterval(() => {
        openPopUp();
      }, 5000);
      firstRender.current = false;
    }
  }, []);

  const nav = useNavigate();
  const main = useRef();
  const tga1 = useRef();
  const steps = useRef();
  const service = useRef();

  function openPopUp() {
    clearInterval(timerRef.current);
    let pop = document.getElementById("pop");
    let popO = document.getElementById("popO");
    if (!pop || !popO) return;
    popO.style.display = "block";
    pop.style.display = "block";
    setTimeout(() => {
      popO.style.opacity = "1";
      pop.style.opacity = "1";
    }, 200);
  }



  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      gsap.from(".grid-elem", {
        opacity: "0",
        ease: "Power3.easeOut",
        y: 100,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".grid-elem",
        },
      });
    }, main); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      gsap.from(".tga1", {
        opacity: "0",
        ease: "Power3.easeOut",
        y: 100,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".tga1",
        },
      });
    }, tga1); // <- Scope!
    return () => ctx.revert(); // <- Cleanup!
  }, []);

  useLayoutEffect(() => {
    if (!steps.current) return;
    const ctx = gsap.context((self) => {
      gsap.from(".step-item", {
        opacity: 0,
        ease: "Power3.easeIn",
        y: 100,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".step-cont",
          scrub: 0.4,
        },
      });
    }, steps);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="home">
        {/*Popup*/}

        {/*Popup End*/}
        <Header />
        {/*Dynamic Text Section*/}
        <section className="ftco-section ftco-no-pt dyna-text">
          <div className="container position-relative">
            <div className="main-text">
              <span className="first-text">Mentoring and Coaching</span>
              <span className="first-text">
                OD interventions capacity building
              </span>
              <span className="first-text">
                Pure mentoring with real mentors
              </span>
              <span className="first-text">
                Brand Building and Social Media Management
              </span>
              <span className="first-text">
                <a
                  href="/microsite/site.html"
                  style={{
                    textDecoration: "none",
                    fontWeight: 700,
                    color: "#00675c"
                  }}
                >
                  PeopleProcess: Business Psychology in Action
                </a>
              </span>
            </div>
            <div className="tagLine text-center mt-5">
              <span className="main-tag d-block" ref={tga1}>
                <span className="tga1">Develop.&nbsp;</span>
                <span className="tga1">Breakthrough.&nbsp;</span>
                <span className="tga1">Conquer.</span>
              </span>
              <span className="tagExp d-block mt-4 fw-bold">
                Where The Focus Is On You!
              </span>
            </div>
            <img
              src="/assets/images/paper-plane-1.webp"
              alt="paper_plane"
              id="ball1"
              style={{ width: "200px", marginRight: "-60px" }}
            />
            <img src="/assets/images/balloon_2.png" alt="balloon_2" id="ball2" />
          </div>
        </section>
        {/*Dynamic Text Section End*/}
        {/*Promo Banner*/}

        {/*Promo Banner End*/}
        {/*  Gyaan Domains */}

        {/*  Gyaan Domains End  */}
        {/* OD / Mentoring / Branding */}
        <section className="ftco-section bg-light ftco-no-pt p-0">
          <div className="container-xl pt-5 mid-sect">
            <div className="top-text text-center">
              <h2 className="fw-bold text-light">
                Organisational Development | Mentoring and Coaching | Branding
                and Social Media Management
              </h2>
            </div>
            <div
              className="service-flex d-flex flex-lg-row flex-xl-row flex-column justify-content-center align-items-center flex-wrap gap-4 mt-5 row p-3"
              ref={service}
            >
              <div className="ser-item d-flex flex-column gap-4 text-center col-lg-3 col-xl-3 col-10 sia1">
                <div className="top-text-item" style={{ color: "#008dc7" }}>
                  OD Interventions
                </div>
                <div className="mid-icon-item">
                  <i className="fa-solid fa-chalkboard-user" />
                </div>
                <div className="bottom-text-item">
                  <p>
                    Growth doesn’t happen by chance. It starts with
                    self-awareness. And that’s where we come in. At Mentesquare,
                    we combine scientifically validated psychometric assessments
                    with practical, research-backed training interventions to
                    help both individuals and organizations understand how they
                    think, learn, lead, and grow.
                  </p>
                </div>
              </div>
              <div className="ser-item d-flex flex-column gap-4  text-center col-lg-3 col-xl-3 col-10 sia1">
                <div className="top-text-item" style={{ color: "#1a9856" }}>
                  Mentoring
                </div>
                <div className="mid-icon-item">
                  <i className="fa-solid fa-people-group" />
                </div>
                <div className="bottom-text-item">
                  <p>
                    The process of advising and training in order to develop
                    certain skills related to strategic thinking, required for
                    maximizing potential and performance. The mentors offer
                    advice and guidance based on their own experiences too.
                  </p>
                </div>
              </div>
              <div className="ser-item d-flex flex-column gap-4  text-center col-lg-3 col-xl-3 col-10 sia1">
                <div className="top-text-item" style={{ color: "#1bbfce" }}>
                  Branding
                </div>
                <div className="mid-icon-item">
                  <i className="fa-solid fa-bullhorn" />
                </div>
                <div className="bottom-text-item">
                  <p>
                    Whether you’re launching a start-up, nurturing an
                    entrepreneurial dream, or refining an existing brand, you
                    deserve more than just a logo—you deserve a brand that speaks
                    for you and your audience. At Mentesquare, we help you build
                    a distinct identity that’s thoughtful, strategic, and
                    unmistakably you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  Pricing Section  */}
        <section className="ftco-section ftco-no-pt pricing-sect d-flex align-items-center" id="prPack" style={{ minHeight: "280px", padding: "60px 0 80px" }}>
          <div className="container mt-2">
            <div className="row justify-content-center">
              <div className="col-md-10 text-center">
                <h3 className="mb-3 fw-bold" style={{ color: "#006055", fontFamily: "'Montserrat', sans-serif", fontSize: "1.6rem" }}>
                  PeopleProcess: Business Psychology in Action
                </h3>
                <p className="mb-4" style={{ color: "#333333", fontSize: "1.05rem", fontFamily: "'Montserrat', sans-serif", lineHeight: "1.7", fontWeight: 500 }}>
                  A comprehensive 3-Month Live Online Certification Programme designed and delivered by International Faculty. Master the intersection of human behavior and business strategy.{" "}
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    background: "linear-gradient(90deg, #FBBF24, #F59E0B)",
                    color: "#1C1C2E",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    borderRadius: "999px",
                    padding: "4px 14px",
                    letterSpacing: "0.3px",
                    verticalAlign: "middle",
                    boxShadow: "0 3px 10px rgba(245, 158, 11, 0.4)",
                    whiteSpace: "nowrap",
                  }}>
                    🏷️ Early bird: Save up to ₹3K!
                  </span>
                </p>
                <a
                  href="/microsite/site.html"
                  className="btn btn-light fw-bold px-4 py-2.5 shadow-sm"
                  style={{
                    borderRadius: "30px",
                    color: "#ffffff",
                    backgroundColor: "#00897B",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    fontFamily: "'Montserrat', sans-serif",
                    border: "none",
                    padding: "12px 32px",
                    boxShadow: "0 4px 15px rgba(0, 137, 123, 0.3)",
                    transition: "all 0.25s ease"
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = "#00675c";
                    e.currentTarget.style.boxShadow = "0 8px 22px rgba(0, 103, 92, 0.45)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "#00897B";
                    e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 137, 123, 0.3)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Explore Course <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*  Pricing Section End  */}
        {/* Watch Our Story */}
        <section className="ftco-section ftco-no-pt bg-light py-5">
          <div className="container">
            <div className="row justify-content-center pb-4">
              <div className="col-md-8 text-center">
                <h2 className="mb-3 fw-bold" style={{ color: "#5b8e9f" }}>
                  Watch Our <span style={{ color: "#6dc1c1" }}>Story</span>
                </h2>
                <p className="fs-5 text-muted">
                  Get to know MenteSquare and our mission to help you develop,
                  breakthrough, and conquer.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div
                  className="video-container position-relative overflow-hidden rounded shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #5b8e9f 0%, #6dc1c1 100%)",
                    padding: "8px",
                    borderRadius: "20px",
                  }}
                >
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://www.youtube.com/embed/GXL5UY8Yr9U"
                      title="MenteSquare Showreel"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      className="rounded"
                      style={{
                        borderRadius: "15px",
                        boxShadow: "0 10px 30px rgba(91, 142, 159, 0.3)",
                      }}
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Watch Our Story End */}
        {/*Contact Section*/}
        <div className="contact-section">
          <div className="conHome-cont d-flex flex-lg-row flex-xl-row flex-md-row gap-lg-0 gap-xl-0 gap-4 flex-column align-items-center justify-content-around">
            <div className="top-text">
              <span className="fw-bold">Tell us about yourself</span>
              <p className="mt-4 fs-5 text-light fw-bold">
                You've taken the first step towards transforming yourself!
                Please take a few minutes to fill out this form to help us help
                you!
              </p>
            </div>
            <div className="contact-btn">
              <button
                className="gyaan-guides-btn"
                onClick={() => {
                  nav("/contact-us");
                }}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
        {/*Contact Section End*/}
        {/*Our Team*/}
        <div className="ourTeam" id="ourTeam">
          <div className="ourTeam-cont">
            <div className="team-top-text">
              <h2 className="fw-bold">Our Team</h2>
            </div>
            <div className="team-cont mt-5 d-flex flex-column gap-5">
              <div className="team-card">
                <div className="team-item d-flex flex-lg-row flex-column gap-4 align-items-center">
                  <div className="imgDiv">
                    <img
                      src="/assets/images/anamika_team.JPG"
                      alt="Team Member"
                    />
                  </div>
                  <div className="team-text-div d-flex gap-3 flex-column">
                    <span className="fw-bold fs-1">Anamika Viswanathan</span>
                    <span className="fw-bold fs-5">Founder-Mentor</span>
                    <p className="fs-5 text-light">
                      Ms Anamika Viswanathan is a proficient and dynamic leader
                      with over three decades of international organizational
                      and leadership experience in Business Psychology and
                      Advertising. Having worked with premier advertising
                      agencies and trained as a Business Psychologist in the UK,
                      she relocated back to India and helped set up CAPS (Centre
                      for Academic and Professional Support) at CHRIST (Deemed
                      to be University)and served as the Consulting Head at
                      CHRIST (Deemed to be University), serving over 250+
                      clients across sectors by harnessing over 250+ faculty
                      members. She is the Founder Mentor at Mentesquare - a
                      platform that offers Executive Coaching, Mentoring,
                      Psychometric based L&D services and Branding and
                      Communication services. She is an accredited Lumina Spark
                      and Strengthscope practitioner, NLP coach and a member of
                      Association for Business Psychologists, UK. As a Leader,
                      Coach and Consultant, Anamika has hundreds of hours of
                      training experience across sectors. Her specialist areas
                      are Communication, English fluency, Impactful public
                      speaking skills, Cross-cultural communication, Team Design
                      for maximizing performance, Handling Stress and Mental
                      well-being and Personality Development.
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center mt-4">
                <button
                  className="btn gyaan-guides-btn"
                  onClick={() => nav("/gyaan-guides")}
                >
                  Our Gyaan Guides
                </button>
              </div>

              {/*<div className="team-card">*/}
              {/*    <div className="team-item2 d-flex flex-lg-row-reverse flex-column gap-3 align-items-center shadow">*/}
              {/*        <div className="imgDiv">*/}
              {/*            <img src="assets/images/darpan_team.jpg" alt="Team Member"/>*/}
              {/*        </div>*/}
              {/*        <div className="team-text-div d-flex gap-4 flex-column">*/}
              {/*            <span className="fw-bold fs-1">Darpan Sunil</span>*/}
              {/*            <span className="fw-bold fs-5">Business Development and Marketing Chief</span>*/}
              {/*            <p className="fs-5">Darpan Sunil is an avid marketer with the motto "over delivering value". He is a third-year BCom Honors student from CHRIST (Deemed to be University) and has a keen passion for the art of marketing and designing creative strategies.</p>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div className="team-card">*/}
              {/*    <div className="team-item2 d-flex flex-lg-row flex-column gap-4 align-items-center shadow">*/}
              {/*        <div className="imgDiv">*/}
              {/*            <img src="assets/images/Srividyaa_team.jpg" alt="Team Member"/>*/}
              {/*        </div>*/}
              {/*        <div className="team-text-div d-flex gap-4 flex-column">*/}
              {/*            <span className="fw-bold fs-1">Srividyaa</span>*/}
              {/*            <span className="fw-bold fs-5">HR and Finance Chief</span>*/}
              {/*            <p className="fs-5">Srividyaa S is a BCom Honors graduate from CHRIST (Deemed to be University) and has completed her US CMA (Awaiting Charter). She is a meticulous worker with interests ranging from content writing and creative thinking to real-time bottle-neck solving.</p>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div className="team-card">*/}
              {/*    <div className="team-item2 d-flex flex-lg-row-reverse flex-column gap-3 align-items-center shadow">*/}
              {/*        <div className="imgDiv">*/}
              {/*            <img src="assets/images/ansh_team.jpg" alt="Team Member"/>*/}
              {/*        </div>*/}
              {/*        <div className="team-text-div d-flex gap-4 flex-column">*/}
              {/*            <span className="fw-bold fs-1">Ansh Arora</span>*/}
              {/*            <span className="fw-bold fs-5">Tech Chief</span>*/}
              {/*            <p className="fs-5">Ansh Arora is a second-year BCA student from CHRIST (Deemed to be University) and a tech enthusiast with a keen interest developing new ideas for businesses as well as engineering – construction of models as well as deployment.</p>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        {/*Our Team End*/}
        {/*Footer*/}
        <Footer />
        {/*Footer End*/}
      </div>
    </>
  );
};
