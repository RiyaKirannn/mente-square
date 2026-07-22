// Mentesquare Mentoring Page
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const MentoringPage = () => {
  return (
    <>
      <Header />
      <div className="home px-4" style={{ paddingTop: "5em", marginTop: 100 }}>
        <div className="container">
          <h2 className="fw-bold mb-4">Mentoring</h2>
          <p className="fs-5">
            Not sure what your next step after your degree should be? You’re not
            alone. Whether you’re navigating your first job, trying to grow into
            leadership, or simply stuck and seeking direction, you deserve
            support that’s built around YOU.
          </p>
          <p className="fs-5">
            That’s exactly what we do at Mentesquare. Through personalised
            coaching, expert mentoring, and tailored career counselling, we help
            you get unstuck, build momentum, and move forward with confidence.
          </p>
          <p className="fs-5">
            This isn’t another generic self-help platform. This is about you—your
            story, your pace, your goals. Let’s take that next step together.
          </p>

          <h3 className="fw-bold mt-5">GYAAN Domains</h3>
          <p className="fs-5">
            Where do you want to grow today? Our GYAAN Domains are designed to
            tackle exactly what you're facing—with clear, real-world outcomes.
          </p>
          <ul className="fs-5">
            <li>
              <strong>Career Readiness:</strong> Trying to prep for a new job?
              We’ll help you present your best self.
            </li>
            <li>
              <strong>Entrepreneurial Management:</strong> Great at ideas but not
              at execution? We’ll show you how to turn action into traction.
            </li>
            <li>
              <strong>Finance:</strong> Love numbers but hate finance? We
              simplify it, so it makes sense for you.
            </li>
            <li>
              <strong>Technology:</strong> Code confusing you more than helping?
              We break it down into tools, not roadblocks.
            </li>
            <li>
              <strong>Law:</strong> Unable to do justice to the law? Let’s help
              you find structure and clarity.
            </li>
            <li>
              <strong>Personality Development:</strong> Want to grow, but not
              sure where to start? Start with yourself—we’ll guide the rest.
            </li>
          </ul>

          <h3 className="fw-bold mt-5">
            Coaching, Mentoring &amp; Career Counselling
          </h3>
          <h5 className="fw-bold mt-4">Coaching: Unlock Your True Potential</h5>
          <p className="fs-5">
            You have the answers—you just need the right questions. Our certified
            coaches help you build self-awareness, gain clarity, and unlock
            confidence to achieve your personal and professional goals.
          </p>
          <p className="fs-5">
            Whether it’s career transitions, leadership development, or personal
            growth, you’ll be guided, not told.
          </p>

          <h5 className="fw-bold mt-4">
            Mentoring: Learn from Those Who’ve Been There
          </h5>
          <p className="fs-5">
            What if someone could tell you what they wish they knew at your
            stage? Our mentors bring hard-earned insights, practical strategies,
            and one-on-one support, so you skip the guesswork and level up
            faster.
          </p>

          <h5 className="fw-bold mt-4">Career Counselling: Get Clear, Get Moving</h5>
          <p className="fs-5">
            Still unsure which path to take? We’re here for that too. Our career
            counsellors use proven tools to assess your interests, strengths, and
            values—then guide you toward a path that actually fits you. Not just
            what looks good on paper.
          </p>

          {/* Mentoring Process */}
          <div className="mentoring-sect my-5" id="mPro">
            <div className="mentoring-cont">
              <div className="mTop-text text-center mb-4">
                <h2 className="fw-bold">Mentoring Process</h2>
                <h5 className="subheading fw-bold">Our 5 Simple Steps</h5>
              </div>
              <div className="step-flex">
                <div className="step-cont d-flex w-100 justify-content-lg-start justify-content-xl-start justify-content-center mb-3">
                  <div className="step-item d-flex justify-content-start">
                    <div className="step-img1" />
                    <div className="step-text p-4">
                      <h3 className="p-0 m-0 text-light fw-bold">
                        Step&nbsp;One
                      </h3>
                      <span className="p-0 m-0 text-light fw-bold">
                        Tell us about yourself
                      </span>
                    </div>
                  </div>
                </div>
                <div className="step-cont d-flex w-100 justify-content-lg-end justify-content-xl-end justify-content-center mb-3">
                  <div className="step-item d-flex justify-content-start">
                    <div className="step-img2" />
                    <div className="step-text p-4">
                      <h3 className="p-0 m-0 text-light fw-bold">
                        Step&nbsp;Two
                      </h3>
                      <span className="p-0 m-0 text-light fw-bold">
                        Have a free call with one of us to get all the info you
                        wish to know
                      </span>
                    </div>
                  </div>
                </div>
                <div className="step-cont d-flex w-100 justify-content-lg-start justify-content-xl-start justify-content-center mb-3">
                  <div className="step-item d-flex justify-content-start">
                    <div className="step-img3" />
                    <div className="step-text p-4">
                      <h3 className="p-0 m-0 text-light fw-bold">
                        Step&nbsp;Three
                      </h3>
                      <span className="p-0 m-0 text-light fw-bold">
                        Book a PEP Talk plan that suits your needs
                      </span>
                    </div>
                  </div>
                </div>
                <div className="step-cont d-flex w-100 justify-content-lg-end justify-content-xl-end justify-content-center mb-3">
                  <div className="step-item d-flex justify-content-start">
                    <div className="step-img4" />
                    <div className="step-text p-4">
                      <h3 className="p-0 m-0 text-light fw-bold">
                        Step&nbsp;Four
                      </h3>
                      <span className="p-0 m-0 text-light fw-bold">
                        Get started on the sessions with our Gyaan Guides
                      </span>
                    </div>
                  </div>
                </div>
                <div className="step-cont d-flex w-100 justify-content-lg-start justify-content-xl-start justify-content-center mb-3">
                  <div className="step-item d-flex justify-content-start">
                    <div className="step-img5" />
                    <div className="step-text p-4">
                      <h3 className="p-0 m-0 text-light fw-bold">
                        Step&nbsp;Five
                      </h3>
                      <span className="p-0 m-0 text-light fw-bold">
                        Grow and upskill as you go!
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="fw-bold mt-5">GYAAN Guides</h3>
          <p className="fs-5">
            What if you had someone who truly understands your journey? That’s
            exactly what our GYAAN Guides offer—real-world mentoring that makes a
            difference.
          </p>
          <ul className="fs-5">
            <li>
              <strong>Industry Stalwarts from Across the Globe:</strong>{" "}
              Experienced professionals offering deep domain insight.
            </li>
            <li>
              <strong>Young Achievers Who’ve Just Crossed the Bridge:</strong>{" "}
              Relatable mentors who help you transition into the corporate world.
            </li>
            <li>
              <strong>You Get the Right Match:</strong> We pair you with the best
              fit for your goals and learning style—no randomness here.
            </li>
          </ul>
          <p className="fs-5">
            If you’ve ever said, “I wish someone could just guide me…”—your guide
            is here.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MentoringPage;
