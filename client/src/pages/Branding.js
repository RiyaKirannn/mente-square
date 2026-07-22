// BrandingPage.js
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const BrandingPage = () => {
  return (
    <>
      <Header />
      <div className="home px-4" style={{ paddingTop: "5em", marginTop: 100 }}>
        <div className="container">
        <h2 className="fw-bold mb-4">Branding and Social Media Management</h2>

        <p className="fs-5">
          Are you looking to carve a niche for your brand or design journey?
          Whether you’re launching a start-up, nurturing an entrepreneurial
          dream, or refining an existing brand, you deserve more than just a
          logo— you deserve a brand that speaks for you and your audience.
        </p>
        <p className="fs-5">
          In a world where attention spans are short and competition is fierce,
          your brand needs to be more than just seen—it needs to be remembered.
          That’s where we come in.
        </p>

        <h3 className="fw-bold mt-5">Crafting Brands That Captivate</h3>
        <p className="fs-5">
          At Mentesquare, we start by understanding where your brand stands
          today—its strengths, gaps, and potential. Through research,
          conversation, and clarity, we uncover what makes your brand distinct
          and how we can elevate it.
        </p>

        <h5 className="fw-bold mt-4">What we offer:</h5>
        <ul className="fs-5">
          <li>Visual identity development and logo design</li>
          <li>Defining your brand’s language, tone, and core messaging</li>
          <li>Brand communication and voice refinement</li>
          <li>Competitor benchmarking and market landscape analysis</li>
          <li>
            Development of visual systems, colour palettes, and asset libraries
          </li>
        </ul>

        <h3 className="fw-bold mt-5">Making You Matter on Social Media</h3>
        <p className="fs-5">
          Today, CRM begins and continues online. Colleges, universities, and
          organisations track your digital footprint. Our social media
          strategies are built around you—your audience, values, and voice.
        </p>

        <h5 className="fw-bold mt-4">What we offer:</h5>
        <ul className="fs-5">
          <li>Tailored content strategy and campaign planning</li>
          <li>Visual content creation (both static and motion)</li>
          <li>Community engagement strategies</li>
          <li>End-to-end platform management</li>
          <li>Performance tracking to measure real impact</li>
        </ul>

        <h3 className="fw-bold mt-5">
          Thoughtful Content, Tailored to Inspire
        </h3>
        <p className="fs-5">
          From educational articles to research-led long-form content, our
          editorial services are designed to articulate your vision and share
          your insights with impact.
        </p>

        <h5 className="fw-bold mt-4">What we create:</h5>
        <ul className="fs-5">
          <li>Thought leadership pieces</li>
          <li>Blog and article writing</li>
          <li>Podcast scripting</li>
          <li>Strategic storytelling</li>
          <li>Content marketing that converts</li>
        </ul>

        <h3 className="fw-bold mt-5">Book & Research-Led Papers</h3>
        <p className="fs-5">
          Whether you’re creating a thought-provoking book rooted in experience,
          or research-backed paper that informs and influences, we help you
          articulate complex ideas in a clear, structured, and engaging way.
        </p>

        <h5 className="fw-bold mt-4">What we offer:</h5>
        <ul className="fs-5">
          <li>Long-form content development (books, whitepapers, essays)</li>
          <li>Research-based writing grounded in data and insight</li>
          <li>Psychology-informed publications</li>
        </ul>

        <h3 className="fw-bold mt-5">Let’s Build Something Meaningful</h3>
        <p className="fs-5">
          At Mentesquare, we believe great branding is never one-size-fits-all.
          It’s personal. It's purposeful. And it starts with you.
        </p>
        <p className="fs-5">
          Let’s work together to turn your ideas into strategy-driven designs,
          compelling content, and experiences that spark connection, growth, and
          recognition.
        </p>
        <p className="fs-5">
          Let’s create something where the focus is on you. Partner with us for
          impactful results.
        </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BrandingPage;
