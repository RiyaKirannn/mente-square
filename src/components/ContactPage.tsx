import { useEffect, useRef, useState } from "react";

/**
 * Standalone Contact page for the MenteSquare PeopleProcess microsite.
 *
 * This preserves the exact visual design of the original contact.html
 * (same teal / Syne+Inter theme, nav, footer, page loader, reveal
 * animation and form behaviour) as a React component. All inline
 * <script> logic from the original file has been converted into React
 * hooks / event handlers:
 *  - hamburger menu toggle        -> useState + onClick
 *  - reveal-on-scroll animation   -> useEffect + IntersectionObserver
 *  - page loader hide on load     -> useEffect + timers
 *  - contact form submit          -> useState + onSubmit handler
 */

const CONTACT_STYLES = `
:root{
  --teal:#00897B; --teal-dark:#00695C; --teal-light:#B2DFDB; --teal-glow:#26A69A;
  --off:#F9FAFB; --ink:#1C1C2E; --ink-soft:#2A2A40; --muted:#6B7280;
  --grad: linear-gradient(135deg,#00897B 0%,#26A69A 50%,#4DB6AC 100%);
  --grad-dark: linear-gradient(135deg,#E0F2F1 0%,#B2DFDB 100%);
  --glass: rgba(255,255,255,0.08);
  --glass-border: rgba(255,255,255,0.18);
  --shadow: 0 20px 60px -20px rgba(0,137,123,.35);
  --radius: 16px;
}
#contact-page *{box-sizing:border-box;margin:0;padding:0}
#contact-page{font-family:'Inter',system-ui,sans-serif;color:var(--ink);background:var(--off);line-height:1.6;-webkit-font-smoothing:antialiased;overflow-x:hidden}
#contact-page h1,#contact-page h2,#contact-page h3,#contact-page h4{font-family:'Syne',sans-serif;font-weight:700;line-height:1.15;letter-spacing:-.02em;color:var(--ink)}
#contact-page h1{font-size:clamp(2.2rem,5.2vw,3.4rem)}
#contact-page h2{font-size:clamp(1.8rem,3.8vw,2.8rem)}
#contact-page h3{font-size:1.25rem}
#contact-page p{color:var(--muted)}
#contact-page a{color:inherit;text-decoration:none}
#contact-page img{max-width:100%;display:block}
#contact-page .container{max-width:1200px;margin:0 auto;padding:0 24px}
#contact-page .section{padding:96px 0;position:relative;overflow:hidden}
#contact-page .eyebrow{display:inline-block;font-size:.78rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:var(--teal);margin-bottom:14px}
#contact-page .btn{display:inline-flex;align-items:center;gap:8px;padding:14px 26px;border-radius:999px;font-weight:600;font-size:.95rem;cursor:pointer;border:none;transition:transform .25s ease,box-shadow .25s ease,background .25s ease;font-family:inherit}
#contact-page .btn-primary{background:var(--teal);color:#fff;box-shadow:0 10px 24px -8px rgba(0,137,123,.5)}
#contact-page .btn-primary:hover{transform:translateY(-2px);background:var(--teal-dark);box-shadow:0 16px 32px -10px rgba(0,137,123,.6)}
#contact-page .btn-full{width:100%;justify-content:center}

#contact-page .shape{position:absolute;border-radius:50%;pointer-events:none;z-index:0}
#contact-page .shape-light{background:radial-gradient(circle,rgba(178,223,219,.5),transparent 70%);filter:blur(30px)}

/* Navbar */
#contact-page .nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:18px 0;transition:all .3s ease;background:rgba(249,250,251,.85);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);box-shadow:0 4px 20px -10px rgba(0,0,0,.08)}
#contact-page .nav-inner{display:flex;align-items:center;justify-content:space-between}
#contact-page .logo{font-family:'Calibri','Segoe UI',sans-serif;font-weight:800;font-size:2rem;color:var(--teal);letter-spacing:-.02em}
#contact-page .nav-links{display:flex;gap:32px;align-items:center}
#contact-page .nav-links a{font-size:1.25rem;font-weight:600;color:var(--teal);transition:color .2s}
#contact-page .nav-links a:hover{color:var(--teal-dark)}
#contact-page .nav-links a.btn{color:#fff}
#contact-page .nav .btn{padding:10px 20px;font-size:.88rem}
#contact-page .hamburger{display:none;background:none;border:none;cursor:pointer;width:32px;height:32px;flex-direction:column;justify-content:center;gap:5px}
#contact-page .hamburger span{display:block;width:22px;height:2px;background:var(--ink);transition:.3s}

/* Contact hero */
#contact-page .contact-hero{background:var(--grad-dark);color:var(--ink);padding:160px 0 80px;position:relative}
#contact-page .contact-hero::before{content:'';position:absolute;top:-200px;right:-200px;width:600px;height:600px;background:radial-gradient(circle,rgba(0,137,123,.25),transparent 60%);border-radius:50%}
#contact-page .contact-hero::after{content:'';position:absolute;bottom:-150px;left:-100px;width:400px;height:400px;background:radial-gradient(circle,rgba(38,166,154,.18),transparent 60%);border-radius:50%}
#contact-page .contact-hero-inner{position:relative;z-index:2;max-width:680px}
#contact-page .contact-hero p.lead{font-size:1.05rem;color:var(--ink-soft);margin-top:16px;max-width:560px}

/* Contact content */
#contact-page #contact-main{background:#fff}
#contact-page .contact-grid{display:grid;grid-template-columns:1.15fr 1fr;gap:40px;align-items:start}
#contact-page .contact-form-card{background:#fff;border:1px solid #E5E7EB;border-radius:24px;padding:40px;box-shadow:0 30px 80px -20px rgba(0,137,123,.15)}
#contact-page .contact-form-card h3{margin-bottom:6px}
#contact-page .contact-form-card .sub{margin-bottom:28px;font-size:.92rem}
#contact-page .form-row{margin-bottom:18px;text-align:left}
#contact-page .form-row label{display:block;font-size:.82rem;font-weight:600;color:var(--ink-soft);margin-bottom:8px}
#contact-page .form-row input,#contact-page .form-row select,#contact-page .form-row textarea{width:100%;padding:13px 16px;background:#F9FAFB;border:1px solid #E5E7EB;border-radius:10px;font-size:.92rem;font-family:inherit;color:var(--ink);outline:none;transition:.2s;resize:vertical}
#contact-page .form-row input:focus,#contact-page .form-row select:focus,#contact-page .form-row textarea:focus{border-color:var(--teal);background:#fff;box-shadow:0 0 0 3px rgba(0,137,123,.12)}
#contact-page .form-row textarea{min-height:130px}
#contact-page .form-note{margin-top:16px;font-size:.8rem;color:var(--muted);text-align:center}
#contact-page .form-success{display:none;text-align:center;padding:20px 0}
#contact-page .form-success.visible{display:block}
#contact-page .form-success .tick{width:56px;height:56px;border-radius:50%;background:var(--teal-light);color:var(--teal-dark);display:flex;align-items:center;justify-content:center;font-size:1.6rem;font-weight:700;margin:0 auto 18px}

#contact-page .info-stack{display:flex;flex-direction:column;gap:18px}
#contact-page .info-card{padding:26px 28px;background:linear-gradient(135deg,#F0FDFA 0%,#fff 100%);border:1px solid var(--teal-light);border-radius:var(--radius);display:flex;gap:18px;align-items:flex-start;transition:transform .3s,box-shadow .3s}
#contact-page .info-card:hover{transform:translateY(-4px);box-shadow:var(--shadow)}
#contact-page .info-icon{flex-shrink:0;width:48px;height:48px;border-radius:12px;background:var(--grad);display:flex;align-items:center;justify-content:center;font-size:1.25rem;color:#fff}
#contact-page .info-card h4{font-size:.98rem;margin-bottom:4px}
#contact-page .info-card a,#contact-page .info-card span.val{font-size:.92rem;color:var(--ink-soft);font-weight:600}
#contact-page .info-card a:hover{color:var(--teal)}
#contact-page .socials{display:flex;gap:10px;margin-top:6px}
#contact-page .socials a{width:38px;height:38px;border-radius:50%;background:var(--teal-light);display:flex;align-items:center;justify-content:center;color:var(--teal-dark);font-size:.85rem;font-weight:700;transition:.25s}
#contact-page .socials a:hover{background:var(--teal);color:#fff;transform:translateY(-2px)}
#contact-page .faq-nudge{margin-top:8px;padding:22px 24px;border-radius:var(--radius);background:#F9FAFB;border:1px dashed var(--teal-light);font-size:.9rem}
#contact-page .faq-nudge a{color:var(--teal);font-weight:600}

/* Footer */
#contact-page footer{background:#E0F2F1;color:var(--ink);padding:60px 0 30px;position:relative}
#contact-page footer::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--grad)}
#contact-page .foot-grid{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
#contact-page .foot-brand p{margin-top:14px;font-size:.9rem;max-width:300px;color:var(--muted)}
#contact-page .foot-col h5{color:var(--ink);font-family:'Syne';font-size:.95rem;margin-bottom:16px}
#contact-page .foot-col ul{list-style:none;display:flex;flex-direction:column;gap:10px}
#contact-page .foot-col a{font-size:.88rem;color:var(--muted);transition:color .2s}
#contact-page .foot-col a:hover{color:var(--teal)}
#contact-page .foot-bottom{border-top:1px solid rgba(0,137,123,.15);padding-top:24px;text-align:center;font-size:.82rem;color:var(--muted)}

/* Page loader */
#contact-page #page-loader{position:fixed;inset:0;z-index:9999;background:var(--off);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:22px;transition:opacity .5s ease,visibility .5s ease}
#contact-page #page-loader.hidden{opacity:0;visibility:hidden;pointer-events:none}
#contact-page #page-loader .loader-logo{width:160px;height:160px;object-fit:contain;animation:loader-bob 1.6s ease-in-out infinite}
#contact-page #page-loader .loader-ring{width:56px;height:56px;border-radius:50%;border:3px solid var(--teal-light);border-top-color:var(--teal);animation:loader-spin .9s linear infinite}
#contact-page #page-loader .loader-text{font-family:'Syne',sans-serif;font-weight:600;color:var(--teal-dark);letter-spacing:.14em;text-transform:uppercase;font-size:.78rem}
@keyframes loader-spin{to{transform:rotate(360deg)}}
@keyframes loader-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

#contact-page .reveal{opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s ease}
#contact-page .reveal.visible{opacity:1 !important;transform:translateY(0) !important}

/* Mobile */
@media (max-width:900px){
  #contact-page .section{padding:72px 0}
  #contact-page .contact-grid{grid-template-columns:1fr;gap:40px}
  #contact-page .foot-grid{grid-template-columns:1fr 1fr;gap:32px}
  #contact-page .nav-links{display:none;position:absolute;top:100%;left:0;right:0;background:#fff;flex-direction:column;padding:20px;gap:18px;box-shadow:0 10px 30px -10px rgba(0,0,0,.1)}
  #contact-page .nav-links.open{display:flex}
  #contact-page .hamburger{display:flex}
  #contact-page .contact-hero{padding:140px 0 60px}
}
@media (max-width:520px){
  #contact-page .foot-grid{grid-template-columns:1fr}
  #contact-page .contact-form-card{padding:28px 22px}
}
`;

// Same CDN asset URLs already used elsewhere in this project (see public/site.html).
const ASSETS = {
  navLogo: "/images/mentesquare-logo.png",
  loaderLogo: "/images/logo.png",
  footerLogo: "/images/mentesquare-final.png",
};

const FONT_HREF =
  "https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap";

export default function ContactPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // Load the Syne/Inter fonts used by the microsite (was a <link> tag in
  // the original contact.html <head>).
  useEffect(() => {
    if (document.querySelector(`link[href="${FONT_HREF}"]`)) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONT_HREF;
    document.head.appendChild(link);
  }, []);

  // Reveal-on-scroll animation (was a manual IntersectionObserver in the
  // original inline <script>).
  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;
    const targets = root.querySelectorAll<HTMLElement>(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            setTimeout(() => el.classList.add("visible"), i * 60);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Page loader hide-on-load (was window 'load' + fallback timeout).
  useEffect(() => {
    const showTimer = setTimeout(() => setLoaderHidden(true), 300);
    const fallbackTimer = setTimeout(() => setLoaderHidden(true), 4000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "ab5e1565-3cc9-4335-b2fc-0e47de9221fe"); // Replace with your real key

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      alert("Something went wrong, please try again.");
    }
  };

  const closeNav = () => setNavOpen(false);

  return (
    <div id="contact-page" ref={sectionRef}>
      <style>{CONTACT_STYLES}</style>

      <div id="page-loader" className={loaderHidden ? "hidden" : ""} role="status" aria-label="Loading">
        <img className="loader-logo" src={ASSETS.loaderLogo} alt="Loading" />
        <div className="loader-ring" />
        <div className="loader-text">Loading…</div>
      </div>

      <nav className="nav" id="nav">
        <div className="container nav-inner">
          <a href="/" className="logo" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src={ASSETS.navLogo}
              alt="MenteSquare logo"
              style={{ width: 64, height: 64, objectFit: "contain" }}
            />
            MenteSquare
          </a>
          <div className={`nav-links${navOpen ? " open" : ""}`} id="navLinks">
            <a href="/#who" onClick={closeNav}>About</a>
            <a href="/#curriculum" onClick={closeNav}>Curriculum</a>
            <a href="/#trainers" onClick={closeNav}>Trainers</a>
            <a href="/#pricing" onClick={closeNav}>Pricing</a>
            <a href="/#faq" onClick={closeNav}>FAQs</a>
            <a href="/contact" className="btn btn-primary" style={{ background: "var(--teal-dark)" }} onClick={closeNav}>
              Contact
            </a>
          </div>
          <button
            className="hamburger"
            id="hamburger"
            aria-label="Menu"
            onClick={() => setNavOpen((open) => !open)}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <section className="contact-hero">
        <div className="container contact-hero-inner">
          <span className="eyebrow">Get In Touch</span>
          <h1>Let's Start the Conversation</h1>
          <p className="lead">
            Questions about PeopleProcess, batch dates, pricing or eligibility? Send us a message and our team
            will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="section" id="contact-main">
        <div className="shape shape-light" style={{ width: 260, height: 260, top: "10%", right: -60 }} />
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-card reveal">
              <h3>Send us a Message</h3>
              <p className="sub">Fill in your details and we'll reach out shortly.</p>

              <form id="contactForm" onSubmit={handleSubmit} style={{ display: submitted ? "none" : "block" }}>
                <div id="contactFormFields">
                  <div className="form-row">
                    <label>Full Name</label>
                    <input type="text" name="name" required placeholder="Your full name" />
                  </div>
                  <div className="form-row">
                    <label>Email Address</label>
                    <input type="email" name="email" required placeholder="you@email.com" />
                  </div>
                  <div className="form-row">
                    <label>Phone Number</label>
                    <input type="tel" name="phone" placeholder="+91 00000 00000" />
                  </div>
                  <div className="form-row">
                    <label>You Are A</label>
                    <select name="profile" required defaultValue="">
                      <option value="">Select your profile</option>
                      <option>Student</option>
                      <option>HR Professional</option>
                      <option>Corporate Professional</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <label>Message</label>
                    <textarea name="message" required placeholder="Tell us what you'd like to know…" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-full">
                    Send Message →
                  </button>
                  <p className="form-note">We typically respond within 24 hours.</p>
                </div>
              </form>

              <div className={`form-success${submitted ? " visible" : ""}`} id="contactSuccess">
                <div className="tick">✓</div>
                <h3>Thanks! We'll reach out within 24 hours.</h3>
                <p style={{ marginTop: 8 }}>
                  In the meantime, feel free to email us directly at info@mentesquare.com.
                </p>
              </div>
            </div>

            <div className="info-stack reveal">
              <div className="info-card">
                <div className="info-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@mentesquare.com">info@mentesquare.com</a>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919019977762">+91 90199 77762</a>
                </div>
              </div>
              <div className="info-card">
                <div className="info-icon">🔗</div>
                <div>
                  <h4>Follow Us</h4>
                  <div className="socials">
                    <a href="https://www.instagram.com/mentesquare" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
                    <a href="https://www.linkedin.com/company/mentesquare/" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
                  </div>
                </div>
              </div>
              <div className="faq-nudge">
                Have a quick question? Check our <a href="/#faq">FAQs</a> — you might find the answer instantly.
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="foot-grid">
            <div className="foot-brand">
              <div className="logo" style={{ color: "#26A69A", display: "flex", alignItems: "center", gap: 8 }}>
                <img
                  src={ASSETS.footerLogo}
                  alt="MenteSquare logo"
                  style={{ width: 56, height: 56, objectFit: "contain" }}
                />
                MenteSquare
              </div>
              <p>PeopleProcess: Business Psychology in Action — PEOPLE.PERFORMANCE.POSSIBILITIES</p>
              <p style={{ marginTop: 10, fontSize: ".85rem" }}>
                info@mentesquare.com
                <br />
                +91 90199 77762
              </p>
              <div className="socials">
                <a href="https://www.instagram.com/mentesquare" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
                <a href="https://www.linkedin.com/company/mentesquare/" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
              </div>
            </div>
            <div className="foot-col">
              <h5>Programme</h5>
              <ul>
                <li><a href="/#who">About</a></li>
                <li><a href="/#curriculum">Curriculum</a></li>
                <li><a href="/#pricing">Pricing</a></li>
                <li><a href="/#register">Enroll</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Company</h5>
              <ul>
                <li><a href="https://mentesquare.com/home" target="_blank" rel="noopener">About</a></li>
                <li><a href="/#trainers">Faculty</a></li>
                <li><a href="https://www.linkedin.com/company/mentesquare/" target="_blank" rel="noopener">LinkedIn</a></li>
                <li><a href="https://www.instagram.com/mentesquare" target="_blank" rel="noopener">Instagram</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h5>Support</h5>
              <ul>
                <li><a href="/#faq">FAQs</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/#register">Register</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">© 2026 MenteSquare · Made with intent in Bengaluru, India.</div>
        </div>
      </footer>
    </div>
  );
}
