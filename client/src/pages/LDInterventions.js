// Mentesquare Soft Skills Training Page
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const SoftSkillsPage = () => {
  return (
    <>
      <Header />
      <div className="home px-4 " style={{ paddingTop: "5em", marginTop: 100 }}>
        <div className="container">
          <h2 className="fw-bold mb-4">Growth Starts Here</h2>
          <p className="fs-5">
            Growth doesn’t happen by chance. It starts with self-awareness. And
            that’s where we come in. At Mentesquare, we combine scientifically
            validated psychometric assessments with practical, research-backed
            training interventions to help both individuals and organizations
            understand how they think, learn, lead, and grow.
          </p>
          <p className="fs-5">
            It’s about unlocking personalized insights that drive real, lasting
            transformation—whether for individual career growth or
            organizational development.
          </p>

          <ul className="fs-5">
            <li>A stronger professional presence across your team</li>
            <li>Improved emotional resilience in high-stress environments</li>
            <li>
              Fostering a culture of confidence and growth across your
              organization
            </li>
          </ul>

          <p className="fs-5">
            Our programs are designed to support your team at every
            step—empowering individuals while creating a collective impact, all
            at your pace and tailored to your unique needs.
          </p>

          <h3 className="fw-bold mt-5">
            Soft Skills Training - the Gamification way
          </h3>
          <p className="fs-5">
            Become the confident, collaborative professional you’re meant to be.
            We’ve designed our soft skills training to match exactly what
            today’s workplace demands—while staying true to who you are.
          </p>

          <h4 className="fw-bold mt-4">What Can You Learn?</h4>
          <div className="table-responsive">
            <table className="table table-bordered mt-3">
              <tbody className="fs-5">
                <tr>
                  <td>
                    <strong>Communication Styles & Email Etiquette</strong>
                  </td>
                  <td>
                    Write sharp, clear messages and manage your inbox like a
                    pro.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Cross-Cultural Communication</strong>
                  </td>
                  <td>
                    Build cultural awareness and master respectful global
                    conversations.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Spoken English for Professionals</strong>
                  </td>
                  <td>
                    Boost vocabulary, grammar, and confidence in professional
                    settings.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      Performance Enhancement through Psychometrics
                    </strong>
                  </td>
                  <td>
                    Discover your strengths and align them with career goals.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Impactful Leadership</strong>
                  </td>
                  <td>
                    Learn leadership styles and how dissent can fuel progress.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Managing Workplace ‘Culture’</strong>
                  </td>
                  <td>
                    Understand engagement principles and uplift performance.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Building Inspired Teams</strong>
                  </td>
                  <td>Lead teams with empathy, purpose, and results.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Conflict Management & Negotiation</strong>
                  </td>
                  <td>
                    Master resolution, negotiation, and the Johari Window.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Managing Performance</strong>
                  </td>
                  <td>
                    Set realistic targets and nurture high-performing teams.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Stress Management & Emotional Resilience</strong>
                  </td>
                  <td>
                    Build resilience, handle rejections, and thrive under
                    pressure.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="fs-5 mt-4">
            We know every individual is different—that’s why we take a
            whole-person approach. We don't just assess and train. We guide you,
            coach you, and grow with you.
          </p>
          <p className="fs-5">
            With Mentesquare, you're not just gaining insights—you're stepping
            into a better version of yourself and super boosting your
            organisation’s performance.
          </p>

          <h3 className="fw-bold mt-5">
            Psychometry-Based Interventions: Unlock Your Team's Full Potential
          </h3>
          <p className="fs-5">
            Our interventions go beyond basic tests to deliver personalized,
            research-backed psychometric tools that help individuals and teams
            understand themselves better—driving growth from the inside out.
          </p>

          <ul className="fs-5">
            <li>
              Research-backed psychometric assessments tailored to your team’s
              needs
            </li>
            <li>
              Psychoeducational sessions addressing both individual and
              collective growth
            </li>
            <li>
              Real-life application and guided reflection tied to workplace
              performance
            </li>
            <li>Support from experienced trainers and psychologists</li>
          </ul>

          <p className="fs-5">
            Whether you're enhancing leadership, improving team dynamics, or
            boosting overall performance, our interventions ensure that your
            team evolves into a more effective, resilient, and collaborative
            workforce.
          </p>

          <p className="fs-5">
            At Mentesquare, we focus on both the individual and the
            organization—supporting your team in becoming the best they can be,
            together.
          </p>

          <h4 className="fw-bold mt-5">E-Learning Modules</h4>
          <p className="fs-5">
            Upskill at your own pace with Mentesquare’s dynamic e-learning
            modules.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SoftSkillsPage;
