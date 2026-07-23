import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const GyaanGuides = () => {
  const [menu, setMenu] = useState(false);
  const domains = [
    "jobReadiness",
    "marketing",
    "finance",
    "technology",
    "businessAnal",
    "law",
    "personalityDevelopment",
    "entrepreneurship",
  ];

  const showGG = (x) => {
    document.querySelectorAll(".guide-sect-1").forEach((val) => {
      if (x.classList.contains(val.id)) {
        val.classList.remove("d-none");
        x.classList.add("gg-active");
        if (domains.indexOf(val.id) !== 7) {
          document.getElementById("next").removeAttribute("disabled");
        } else {
          document.getElementById("next").setAttribute("disabled", "disabled");
        }
        if (domains.indexOf(val.id) !== 0) {
          document.getElementById("prev").removeAttribute("disabled");
        } else {
          document.getElementById("prev").setAttribute("disabled", "disabled");
        }
      } else {
        val.classList.add("d-none");
        x.classList.remove("gg-active");
      }
    });
    //Close menu on selecting new domain
    setTimeout(() => {
      showMenu();
    }, 100);
  };

  function showMenu() {
    let menuDiv = document.getElementById("ggMenu");

    if (!menu) {
      setMenu(true);
      menuDiv.classList.remove("d-none");
      menuDiv.classList.add("menuOpen");
    } else {
      setMenu(false);
      menuDiv.classList.add("d-none");
      menuDiv.classList.remove("menuOpen");
    }
  }

  //Click outside ggNav to close it
  if (window.innerWidth < 1240) {
    let menuDiv = document.getElementById("ggMenu");
    window.addEventListener("click", (e) => {
      if (document.getElementById("ggNav").contains(e.target)) {
      } else {
        if (menu) {
          setMenu(false);
          menuDiv.classList.add("d-none");
          menuDiv.classList.remove("menuOpen");
        }
      }
    });
  }

  //Next Button
  function next(x) {
    //Scrolling to top
    window.scrollTo(0, 0);

    //Current ID Variable
    let currID;

    //Locating which Section is currently active;
    document.querySelectorAll(".guide-sect-1").forEach((x) => {
      if (!x.classList.contains("d-none")) {
        currID = x.id;
      }
    });

    //Making Current Section invisible using its ID
    document.getElementById(currID).classList.add("d-none");

    //Finding index value of current section
    let currIndex = domains.indexOf(currID);

    if (currIndex === 6) {
      document.getElementById("next").setAttribute("disabled", "disabled");
    } else {
      document.getElementById("next").removeAttribute("disabled");
    }

    //Increment index to find id of next section
    currIndex++;

    //Making Next Section Visible
    document.getElementById(domains[currIndex]).classList.remove("d-none");

    //Activate Prev
    if (currIndex !== 0) {
      document.getElementById("prev").removeAttribute("disabled");
    }
  }

  //Previous Button
  function previous() {
    //Scrolling to top
    window.scrollTo(0, 0);

    //Current ID Variable
    let currID;

    //Locating which Section is currently active;
    document.querySelectorAll(".guide-sect-1").forEach((x) => {
      if (!x.classList.contains("d-none")) {
        currID = x.id;
      }
    });

    //Making Current Section invisible using its ID
    document.getElementById(currID).classList.add("d-none");

    //Finding index value of current section
    let currIndex = domains.indexOf(currID);
    console.log("Curr: " + currIndex);

    if (currIndex === 1) {
      document.getElementById("prev").setAttribute("disabled", "disabled");
    } else {
      document.getElementById("prev").removeAttribute("disabled");
    }

    //Increment index to find id of next section
    currIndex--;

    //Making Next Section Visible
    document.getElementById(domains[currIndex]).classList.remove("d-none");

    //Activate Next
    if (currIndex !== 7) {
      document.getElementById("next").removeAttribute("disabled");
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelectorAll(".guide-sect-1").forEach((x) => {
      if (!x.classList.contains("d-none")) {
        if (domains.indexOf(x.id) === 0) {
          document.getElementById("prev").setAttribute("disabled", "disabled");
        }
      }
    });
  }, []);

  return (
    <>
      <div className="home">
        {/*  Header  */}
        <div
          className="goBack px-3 py-3"
          style={{ backgroundColor: "#1eb2a6" }}
        >
          <div className="backButton d-flex align-items-center fw-bold">
            <Link to={"/home"} className="text-light">
              <i className="fa-solid fa-arrow-left"></i>&nbsp;
              <span>Back to home</span>
            </Link>
          </div>
        </div>
        {/*  Header End  */}
        <div className="gyaanGuides" style={{ marginTop: "5em" }}>
          <div className="ggTop-text text-center">
            <h2 className="fw-bold">Gyaan Guides</h2>
          </div>
          <div className="ggNav" id="ggNav">
            <div className="ggNav-cont">
              <ul className="largeList">
                <li>
                  <div
                    className="gg-name jobReadiness gg-active"
                    onClick={(e) => showGG(e.target)}
                  >
                    Job Readiness
                  </div>
                </li>
                <li>
                  <div
                    className="gg-name marketing"
                    onClick={(e) => showGG(e.target)}
                  >
                    Marketing
                  </div>
                </li>
                <li>
                  <div
                    className="gg-name finance"
                    onClick={(e) => showGG(e.target)}
                  >
                    Finance
                  </div>
                </li>
                <li>
                  <div
                    className="gg-name technology"
                    onClick={(e) => showGG(e.target)}
                  >
                    Technology
                  </div>
                </li>
                <li>
                  <div
                    className="gg-name businessAnal"
                    onClick={(e) => showGG(e.target)}
                  >
                    Business Analytics
                  </div>
                </li>
                <li>
                  <div
                    className="gg-name law"
                    onClick={(e) => showGG(e.target)}
                  >
                    Law
                  </div>
                </li>
                <li>
                  <div
                    className="gg-name personalityDevelopment"
                    onClick={(e) => showGG(e.target)}
                  >
                    Personality Development
                  </div>
                </li>
                <li>
                  <div
                    className="gg-name entrepreneurship"
                    onClick={(e) => showGG(e.target)}
                  >
                    Entrepreneurship
                  </div>
                </li>
              </ul>
              <div className="mobileGGMenu align-items-center">
                <span className="fw-bold text-light fs-5">Domains</span>
                <button className="text-light" onClick={showMenu}>
                  <i className="fa-solid fa-bars" />
                </button>
              </div>
              <div className="ggMenu mt-4 d-none" id="ggMenu">
                <ul className="d-flex flex-column gap-4 p-0">
                  <li>
                    <div
                      className="gg-name jobReadiness gg-active"
                      onClick={(e) => showGG(e.target)}
                    >
                      Job Readiness
                    </div>
                  </li>
                  <li>
                    <div
                      className="gg-name marketing"
                      onClick={(e) => showGG(e.target)}
                    >
                      Marketing
                    </div>
                  </li>
                  <li>
                    <div
                      className="gg-name finance"
                      onClick={(e) => showGG(e.target)}
                    >
                      Finance
                    </div>
                  </li>
                  <li>
                    <div
                      className="gg-name technology"
                      onClick={(e) => showGG(e.target)}
                    >
                      Technology
                    </div>
                  </li>
                  <li>
                    <div
                      className="gg-name businessAnal"
                      onClick={(e) => showGG(e.target)}
                    >
                      Business Analytics
                    </div>
                  </li>
                  <li>
                    <div
                      className="gg-name law"
                      onClick={(e) => showGG(e.target)}
                    >
                      Law
                    </div>
                  </li>
                  <li>
                    <div
                      className="gg-name personalityDevelopment"
                      onClick={(e) => showGG(e.target)}
                    >
                      Personality Development
                    </div>
                  </li>
                  <li>
                    <div
                      className="gg-name entrepreneurship"
                      onClick={(e) => showGG(e.target)}
                    >
                      Entrepreneurship
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="guide-sect-1 mt-5" id="jobReadiness">
            <div className="gs1-head">
              <span style={{ letterSpacing: 0 }}>Job Readiness</span>
            </div>
            <div className="guide-flex mt-5">
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Kavitha Talreja</span>
                  <p>Founder - Learning Ethos</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/jb_rd_pg.webp"
                    alt="Kavitha Talreja"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Kavitha Talreja is a seasoned Gamification and Facilitation
                    Specialist with over 2 decades of diverse corporate
                    experience across top brands like Fidelity, Citibank, Birla
                    Sunlife Insurance, and Phoenix Global. With a strong
                    foundation in customer service, operations, and L&D, she
                    brings rich industry exposure into every session she leads.
                    She has spent 13+ years as a freelance soft-skills
                    facilitator, and 9+ years in a focused L&D role at Fidelity
                    Business Services. Kavitha has successfully designed and
                    delivered impactful learning initiatives, earning prestigious
                    recognitions like the “President’s Award.” A certified
                    Instructional Designer and Flow Game Practitioner, she is also
                    certified in Design Thinking, Lumina profiling, Critical
                    Thinking, and Executive Coaching. Her facilitation expertise
                    spans Design Thinking, Creativity and Innovation, Leadership,
                    Storytelling, Conflict Management, and Culture Sensitization
                    (US & UK), along with Game-based learning and Gamification.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Arnab Chatterjee</span>
                  <p>Industry Leader & Advisory Board Member</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/jb_rd_ac.jpg"
                    alt="Arnab Chatterjee"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Arnab Chatterjee is an accomplished business leader with over
                    28 years of global experience in the fields of operations,
                    digital transformation, and human capital strategies. He has
                    held senior leadership roles at IBM, GE Capital, and American
                    Express. His core competencies span establishing Global
                    Capability Centers (GCCs), leading transformation programs,
                    driving talent, and organisational design strategies.
                    Currently, he sits on the advisory boards of organisations in
                    India, South Africa, and the UK. Additionally, he is pursuing
                    doctoral research in Workforce Psychology, and is serving as
                    faculty at CHRIST University. He combines academic insight
                    with hands-on leadership to shape future-ready organizations.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Usha Raghunath</span>
                  <p>National Vice President, Coaching Council WICCI</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/jb_rd_ur.png"
                    alt="Usha Raghunath"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Ms Usha Ragunath is currently the National Vice President
                    and coaching council at WICCI. Prior to this she has worked
                    with Wipro for 6+ years as senior practice manager,
                    leadership development. She has completed her Masters in
                    Arts from Lady Sri Ram College, Delhi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="guide-sect-1 mt-5 d-none" id="marketing">
            <div className="gs1-head">
              <span>Marketing</span>
            </div>
            <div className="guide-flex mt-5">
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Vinay Bhasker</span>
                  <p>Marketing, Branding and Design Expert</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/mk_vb.jpeg"
                    alt="Vinay Bhasker"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      aspectRatio: "1",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Vinay Bhasker has been into the Business of Marketing,
                    Branding and Design for over 10 years now. He is a first
                    generation entrepreneur and deeply believes in the potential
                    of our SMBs and India. Vinay delivered some pioneering
                    strategies to startups and has been a part of their growth
                    story. Having experienced the power of having Mentors and
                    coaches for various aspects of career and life at the right
                    time, Vinay believes in the importance of giving back.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Sanjeev Shukla</span>
                  <p></p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/mk_ss.png"
                    alt="Sanjeev Shukla"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Mr Sanjeev Shukla has served as a Group Chief Marketing
                    Officer with the Muthoot Pappachan Group, C Krishniah Chetty
                    and sons and Hero MotoCorp. He has over 25 years of
                    experience in the field of Marketing.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Savitha C Muppala</span>
                  <p>Content Specialist</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/mk_scm.png"
                    alt="Savitha C Muppala"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Ms Savitha Muppala works Online Media Industry with
                    expertise in Healthcare and Technical Writing. Her areas of
                    expertise lie in Information Development, Editing, Technical
                    Writing, Digital Marketing, Social Media Marketing, and
                    Content Strategy.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Ashwin Sai</span>
                  <p>Founder and Creative Director</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/mk_as_si.jpeg"
                    alt="Ashwin Sai"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Founder at Drasi Productions – specializing in high-impact
                    video content, ad films, and branded storytelling Learning
                    Experience Designer focused on Microlearning, behavior-based
                    training, and instructional design Academic background in
                    Business Analytics with published research in learning
                    outcomes Skilled in Articulate Storyline 360, SCORM-based
                    module creation, and interactive course architecture Led
                    multi-format content development teams for corporate training
                    and soft skills modules Strong foundation in direction,
                    editing, and visual communication rooted in narrative design
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Finance  */}
          <div className="guide-sect-1 mt-5  d-none" id="finance">
            <div className="gs1-head">
              <span>Finance</span>
            </div>
            <div className="guide-flex mt-5">
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Mohit Gupta</span>
                  <p>CEO at Sigmatrail Consulting Pvt Ltd</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/fn_mg.png"
                    alt="Mohit Gupta"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    A Chartered Accountant, law graduate and a certified Six
                    Sigma Black Belt, Mr Mohit Gupta is the CEO at Sigmatrail
                    Consulting Pvt Ltd. With over 25 years of extensive ITES
                    experience, his areas of expertise comprises Finance and
                    Accounting, Web Development, Six Sigma as well as Back
                    Office Setup and Operations.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Suresh Pai</span>
                  <p>Ex-Banker and Rotarian</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/fn_sp.png"
                    alt="Suresh Pai "
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                      rotate: "180deg",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Mr Suresh holds 40+ years of expertise in Banking, Human
                    Resource and the Communication sector. He has also been
                    Director of Economic and Community Development, Rotary
                    District 3190.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Satvik Babu</span>
                  <p>Valuation Analyst at KPMG</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/fn_sb.png"
                    alt="Satvik Babu"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Satvik founded Nyayartha, a legal and financial literacy
                    platform. He also founded and led Finance and Investment
                    Cell at Christ University which currently has 750+ members.
                    He is the author of the book The monkey in you.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Finance End  */}
          {/*  Technology  */}
          <div className="guide-sect-1 mt-5  d-none" id="technology">
            <div className="gs1-head">
              <span>Technology</span>
            </div>
            <div className="guide-flex mt-5">
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Kiran VVN</span>
                  <p>Tech leader and Master Trainer</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/tn_kn_vnn.jpg"
                    alt="Kiran VVN"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Kiran VVN is a powerhouse of technical leadership with over 20
                    years of expertise across industrial automation, cloud
                    infrastructure, and enterprise training. Known for his ability
                    to bridge traditional engineering with modern digital systems,
                    he has led high-stakes projects, built intelligent simulators,
                    and empowered Fortune 500 clients with scalable, future-ready
                    solutions. As a strategist, mentor, and hands-on architect,
                    Kiran brings precision, innovation, and unwavering clarity and
                    simplicity to every complex challenge.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Subodh Gajare</span>
                  <p>Lead Solution Architect</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/tn_sg.png"
                    alt="Subodh Gajare"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Mr Subodh Gajare holds over 25 years of experience in the IT
                    industry and his proficiencies lie in all areas of Software
                    Define Networking, Cybersecurity, Cloud Computing, Data
                    Center Solutions, and a lot more associated areas.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Ansh Arora</span>
                  <p>Co-Founder and CTO at bob</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/tn_an.jpeg"
                    alt="Ansh Arora"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Ansh Arora is a visionary entrepreneur and technologist with a
                    passion for building impactful, user-centric digital products.
                    As the founder of bob, a next-gen mobility aggregator, he is
                    driving innovation in the travel-tech space by simplifying
                    ride discovery and bookings through seamless platform
                    integrations. Ansh brings a strong foundation in full-stack
                    development, mobile application design, backend architecture,
                    and real-time systems. His work reflects a keen understanding
                    of system scalability, product design, and smooth user
                    experience. With a deep entrepreneurial spirit, he blends
                    technical expertise with strategic thinking to launch and
                    scale products that address real-world challenges. Currently,
                    Ansh is focused on expanding bob’s reach as a consumer-first
                    platform in the mobility sector, while contributing to broader
                    digital transformation efforts in India’s commerce ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Technology End  */}
          {/*  Business Analytics  */}
          <div className="guide-sect-1 mt-5  d-none" id="businessAnal">
            <div className="gs1-head">
              <span style={{ letterSpacing: 0 }}>Business Analytics</span>
            </div>
            <div className="guide-flex mt-5">
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Kenneth Rayner Crasta</span>
                  <p>Principal at an Industrial Training Institute</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/ba_krc.png"
                    alt="Kenneth Rayner Crasta"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Mr. Kenneth Rayner Crasta is a Catholic priest serving in
                    the diocese of Mangalore. Mr Kenneth has over 5 years of
                    experience in the Education industry and holds expertise in
                    Data Analytics, Management and Career Counseling.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Krishna Prasath</span>
                  <p>Professor at CHRIST Central Campus</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/ba_kp.png"
                    alt="Krishna Prasath"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    His skills include a vast range of varied activities such as
                    Google Analytics, Microsoft PowerPoint, Microsoft Excel,
                    Business Analytics, Marketing Management, Research,
                    Mentoring, and Career Path Planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Business Analytics End  */}
          {/*  Law  */}
          <div className="guide-sect-1 mt-5  d-none" id="law">
            <div className="gs1-head">
              <span>Law</span>
            </div>
            <div className="guide-flex mt-5">
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Anita Ann Winsome</span>
                  <p>Graduate from Queen Mary University of London</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/lw_aaw.png"
                    alt="Anita Ann Winsome"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Anita completed her LLM in Comparative & International
                    Dispute Resolution [CIDR'23 ] at Queen Mary University of
                    London in January 2023. She was a part of the Queen Mary
                    Vis-Moot team.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Allen Benny Mathews</span>
                  <p>5th year law student at CHRIST</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/lw_ab.png"
                    alt="Allen Benny Mathews"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Allen Benny Mathews is a distinguished law scholar, having
                    been recognised as a merit scholar for his academic
                    excellence at the School of Law, CHRIST (Deemed to be
                    University).
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Law End  */}
          {/*  Personality Development  */}
          <div
            className="guide-sect-1 mt-5  d-none"
            id="personalityDevelopment"
          >
            <div className="gs1-head">
              <span style={{ letterSpacing: 0 }}>Personality Development</span>
            </div>
            <div className="guide-flex mt-5">
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Ravi Panicker</span>
                  <p>Leadership and Systemic Team Coach</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/pd_rp.jpeg"
                    alt="Ravi Panicker"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Senior HR Professional turned ICF credentialed Professional
                    Certified Coach (PCC) with 25 years of experience in all
                    facets of Human Resources across various industries/sectors
                    and geographies in major conglomerates. Also, a certified
                    NLP Practitioner and Hogan Practitioner respectively
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Aman Zaidi</span>
                  <p>Founder of Fortius</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/mk_az.png"
                    alt="Aman Zaidi"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Mr Aman Zaidi is a Coach, Facilitator and Founder of
                    Fortius, based out of Lisbon, Portugal, he has spent 20+
                    years in the field of Learning and Development, Service
                    Delivery Operations, and Sales & Marketing.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Arpita Ghosh</span>
                  <p>Live Coach & Senior Counsellor at CHRIST Lavasa</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/pd_ap.png"
                    alt="Arpita Ghosh"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Her one line mission statement - Empowering Individuals,
                    Touching Lives. A Counsellor and Creative Facilitator, she
                    uses the expressive arts to enhance the personal development
                    and bring about behavioural changes in an individual.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Kate NG</span>
                  <p>Executive Coach and Facilitator</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/pd_kng.png"
                    alt="Kate NG"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Ms Kate NG is currently serving as an Executive Coach and
                    Facilitator at London Business School. She has an extensive
                    international experience of 25+ years in more than 20
                    countries as Leadership and Personal effectiveness coach.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Personality Development End  */}
          {/*  Entrepreneurship  */}
          <div className="guide-sect-1 mt-5  d-none" id="entrepreneurship">
            <div className="gs1-head">
              <span style={{ letterSpacing: 0 }}>Entrepreneurship</span>
            </div>
            <div className="guide-flex mt-5">
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Udaysimha Mysore</span>
                  <p>Program management, leader</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/mk_um.jpg"
                    alt="Udaysimha Mysore"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "100%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    A seasoned professional with 24+ years of program management,
                    leadership, and execution experience in technology marketing
                    with a focus on product marketing, customer experience,
                    digital marketing etc.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Indu Rani</span>
                  <p>Mentor at Indian Institute of Management, Bangalore</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/ent_ir.png"
                    alt="Indu Rani"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    A women empowerment champion, Indu Rani’s biggest passion
                    and expertise lies in making people feel, believe and
                    realise their true potential and inspiring them to dream,
                    learn, do and be more.
                  </p>
                </div>
              </div>
              <div className="guide-item d-flex align-items-center justify-content-center p-4 my-4">
                <div className="guideName col-lg-4 col-xl-4">
                  <span className="fs-3 fw-bold">Rajesh Badgeri</span>
                  <p>CEO & CoFounder at Zopnote</p>
                </div>
                <div className="guideImg col-lg-4 col-xl-4">
                  <img
                    src="assets/gyaanGuides/ent_rb.jpg"
                    alt="Rajesh Badgeri"
                    className="shadow"
                    style={{
                      objectFit: "cover",
                      width: "60%",
                      borderRadius: "50%",
                      transform: "scale(1.1)",
                    }}
                  />
                </div>
                <div className="guideDets col-lg-4 col-xl-4 p-3">
                  <p className="fs-5">
                    Co-founder & CEO @Zopnote, a B2B2C Hyperlocal Commerce
                    Platform for digitization, growth & access to credit. Total
                    25+ years of product R&D, 10+ years of experience working
                    for start-ups & different technical domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Entrepreneurship End  */}
          <div className="nextPrevButtonGroup d-flex w-100 justify-content-between p-4 align-items-center gap-4 mt-5 mb-5">
            <button type="button" id="prev" onClick={previous}>
              <i className="fa-solid fa-arrow-left"></i>&nbsp;Previous
            </button>
            <button type="button" onClick={next} id="next">
              Next&nbsp;<i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};
