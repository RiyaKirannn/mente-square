import{n as e,r as t,t as n}from"./index-vA-1uTVn.js";var r=t(e(),1),i=n(),a=`
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
`,o={navLogo:`/images/mentesquare-logo.png`,loaderLogo:`/images/logo.png`,footerLogo:`/images/mentesquare-final.png`},s=`https://fonts.googleapis.com/css2?family=Syne:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap`;function c(){let[e,t]=(0,r.useState)(!1),[n,c]=(0,r.useState)(!1),[l,u]=(0,r.useState)(!1),[d,f]=(0,r.useState)(!1),p=(0,r.useRef)(null);(0,r.useEffect)(()=>{if(document.querySelector(`link[href="${s}"]`))return;let e=document.createElement(`link`);e.rel=`stylesheet`,e.href=s,document.head.appendChild(e)},[]),(0,r.useEffect)(()=>{let e=p.current;if(!e)return;let t=e.querySelectorAll(`.reveal`),n=new IntersectionObserver(e=>{e.forEach((e,t)=>{if(e.isIntersecting){let r=e.target;setTimeout(()=>r.classList.add(`visible`),t*60),n.unobserve(r)}})},{threshold:.12});return t.forEach(e=>n.observe(e)),()=>n.disconnect()},[]),(0,r.useEffect)(()=>{let e=setTimeout(()=>f(!0),300),t=setTimeout(()=>f(!0),4e3);return()=>{clearTimeout(e),clearTimeout(t)}},[]);let m=async e=>{e.preventDefault(),u(!1);let t=new FormData(e.currentTarget);t.append(`access_key`,`cda75346-0fe0-4ff6-b89a-42ab21b0fdaf`);try{(await(await fetch(`https://api.web3forms.com/submit`,{method:`POST`,body:t})).json()).success?(c(!0),e.currentTarget.reset()):u(!0)}catch{u(!0)}},h=()=>t(!1);return(0,i.jsxs)(`div`,{id:`contact-page`,ref:p,children:[(0,i.jsx)(`style`,{children:a}),(0,i.jsxs)(`div`,{id:`page-loader`,className:d?`hidden`:``,role:`status`,"aria-label":`Loading`,children:[(0,i.jsx)(`img`,{className:`loader-logo`,src:o.loaderLogo,alt:`Loading`}),(0,i.jsx)(`div`,{className:`loader-ring`}),(0,i.jsx)(`div`,{className:`loader-text`,children:`Loading…`})]}),(0,i.jsx)(`nav`,{className:`nav`,id:`nav`,children:(0,i.jsxs)(`div`,{className:`container nav-inner`,children:[(0,i.jsxs)(`a`,{href:`/`,className:`logo`,style:{display:`flex`,alignItems:`center`,gap:10},children:[(0,i.jsx)(`img`,{src:o.navLogo,alt:`MenteSquare logo`,style:{width:64,height:64,objectFit:`contain`}}),`MenteSquare`]}),(0,i.jsxs)(`div`,{className:`nav-links${e?` open`:``}`,id:`navLinks`,children:[(0,i.jsx)(`a`,{href:`/#who`,onClick:h,children:`About`}),(0,i.jsx)(`a`,{href:`/#curriculum`,onClick:h,children:`Curriculum`}),(0,i.jsx)(`a`,{href:`/#trainers`,onClick:h,children:`Trainers`}),(0,i.jsx)(`a`,{href:`/#pricing`,onClick:h,children:`Pricing`}),(0,i.jsx)(`a`,{href:`/#faq`,onClick:h,children:`FAQs`}),(0,i.jsx)(`a`,{href:`/contact`,className:`btn btn-primary`,style:{background:`var(--teal-dark)`},onClick:h,children:`Contact`})]}),(0,i.jsxs)(`button`,{className:`hamburger`,id:`hamburger`,"aria-label":`Menu`,onClick:()=>t(e=>!e),children:[(0,i.jsx)(`span`,{}),(0,i.jsx)(`span`,{}),(0,i.jsx)(`span`,{})]})]})}),(0,i.jsx)(`section`,{className:`contact-hero`,children:(0,i.jsxs)(`div`,{className:`container contact-hero-inner`,children:[(0,i.jsx)(`span`,{className:`eyebrow`,children:`Get In Touch`}),(0,i.jsx)(`h1`,{children:`Let's Start the Conversation`}),(0,i.jsx)(`p`,{className:`lead`,children:`Questions about PeopleProcess, batch dates, pricing or eligibility? Send us a message and our team will get back to you within 24 hours.`})]})}),(0,i.jsxs)(`section`,{className:`section`,id:`contact-main`,children:[(0,i.jsx)(`div`,{className:`shape shape-light`,style:{width:260,height:260,top:`10%`,right:-60}}),(0,i.jsx)(`div`,{className:`container`,children:(0,i.jsxs)(`div`,{className:`contact-grid`,children:[(0,i.jsxs)(`div`,{className:`contact-form-card reveal`,children:[(0,i.jsx)(`h3`,{children:`Send us a Message`}),(0,i.jsx)(`p`,{className:`sub`,children:`Fill in your details and we'll reach out shortly.`}),(0,i.jsx)(`form`,{id:`contactForm`,onSubmit:m,style:{display:n?`none`:`block`},children:(0,i.jsxs)(`div`,{id:`contactFormFields`,children:[(0,i.jsxs)(`div`,{className:`form-row`,children:[(0,i.jsx)(`label`,{children:`Full Name`}),(0,i.jsx)(`input`,{type:`text`,name:`name`,required:!0,placeholder:`Your full name`})]}),(0,i.jsxs)(`div`,{className:`form-row`,children:[(0,i.jsx)(`label`,{children:`Email Address`}),(0,i.jsx)(`input`,{type:`email`,name:`email`,required:!0,placeholder:`you@email.com`})]}),(0,i.jsxs)(`div`,{className:`form-row`,children:[(0,i.jsx)(`label`,{children:`Phone Number`}),(0,i.jsx)(`input`,{type:`tel`,name:`phone`,placeholder:`+91 00000 00000`})]}),(0,i.jsxs)(`div`,{className:`form-row`,children:[(0,i.jsx)(`label`,{children:`You Are A`}),(0,i.jsxs)(`select`,{name:`profile`,required:!0,defaultValue:``,children:[(0,i.jsx)(`option`,{value:``,children:`Select your profile`}),(0,i.jsx)(`option`,{children:`Student`}),(0,i.jsx)(`option`,{children:`HR Professional`}),(0,i.jsx)(`option`,{children:`Corporate Professional`}),(0,i.jsx)(`option`,{children:`Other`})]})]}),(0,i.jsxs)(`div`,{className:`form-row`,children:[(0,i.jsx)(`label`,{children:`Message`}),(0,i.jsx)(`textarea`,{name:`message`,required:!0,placeholder:`Tell us what you'd like to know…`})]}),(0,i.jsx)(`button`,{type:`submit`,className:`btn btn-primary btn-full`,children:`Send Message →`}),l&&(0,i.jsx)(`p`,{style:{marginTop:12,color:`#e53e3e`,fontSize:`.85rem`,textAlign:`center`},children:`Something went wrong — please try again or email us at info@mentesquare.com.`}),(0,i.jsx)(`p`,{className:`form-note`,children:`We typically respond within 24 hours.`})]})}),(0,i.jsxs)(`div`,{className:`form-success${n?` visible`:``}`,id:`contactSuccess`,children:[(0,i.jsx)(`div`,{className:`tick`,children:`✓`}),(0,i.jsx)(`h3`,{children:`Thanks! We'll reach out within 24 hours.`}),(0,i.jsx)(`p`,{style:{marginTop:8},children:`In the meantime, feel free to email us directly at info@mentesquare.com.`})]})]}),(0,i.jsxs)(`div`,{className:`info-stack reveal`,children:[(0,i.jsxs)(`div`,{className:`info-card`,children:[(0,i.jsx)(`div`,{className:`info-icon`,children:`✉️`}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h4`,{children:`Email`}),(0,i.jsx)(`a`,{href:`mailto:info@mentesquare.com`,children:`info@mentesquare.com`})]})]}),(0,i.jsxs)(`div`,{className:`info-card`,children:[(0,i.jsx)(`div`,{className:`info-icon`,children:`📞`}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h4`,{children:`Phone`}),(0,i.jsx)(`a`,{href:`tel:+919019977762`,children:`+91 90199 77762`})]})]}),(0,i.jsxs)(`div`,{className:`info-card`,children:[(0,i.jsx)(`div`,{className:`info-icon`,children:`🔗`}),(0,i.jsxs)(`div`,{children:[(0,i.jsx)(`h4`,{children:`Follow Us`}),(0,i.jsxs)(`div`,{className:`socials`,children:[(0,i.jsx)(`a`,{href:`https://www.instagram.com/mentesquare`,target:`_blank`,rel:`noopener`,"aria-label":`Instagram`,children:`IG`}),(0,i.jsx)(`a`,{href:`https://www.linkedin.com/company/mentesquare/`,target:`_blank`,rel:`noopener`,"aria-label":`LinkedIn`,children:`in`})]})]})]}),(0,i.jsxs)(`div`,{className:`faq-nudge`,children:[`Have a quick question? Check our `,(0,i.jsx)(`a`,{href:`/#faq`,children:`FAQs`}),` — you might find the answer instantly.`]})]})]})})]}),(0,i.jsx)(`footer`,{children:(0,i.jsxs)(`div`,{className:`container`,children:[(0,i.jsxs)(`div`,{className:`foot-grid`,children:[(0,i.jsxs)(`div`,{className:`foot-brand`,children:[(0,i.jsxs)(`div`,{className:`logo`,style:{color:`#26A69A`,display:`flex`,alignItems:`center`,gap:8},children:[(0,i.jsx)(`img`,{src:o.footerLogo,alt:`MenteSquare logo`,style:{width:56,height:56,objectFit:`contain`}}),`MenteSquare`]}),(0,i.jsx)(`p`,{children:`PeopleProcess: Business Psychology in Action — PEOPLE.PERFORMANCE.POSSIBILITIES`}),(0,i.jsxs)(`p`,{style:{marginTop:10,fontSize:`.85rem`},children:[`info@mentesquare.com`,(0,i.jsx)(`br`,{}),`+91 90199 77762`]}),(0,i.jsxs)(`div`,{className:`socials`,children:[(0,i.jsx)(`a`,{href:`https://www.instagram.com/mentesquare`,target:`_blank`,rel:`noopener`,"aria-label":`Instagram`,children:`IG`}),(0,i.jsx)(`a`,{href:`https://www.linkedin.com/company/mentesquare/`,target:`_blank`,rel:`noopener`,"aria-label":`LinkedIn`,children:`in`})]})]}),(0,i.jsxs)(`div`,{className:`foot-col`,children:[(0,i.jsx)(`h5`,{children:`Programme`}),(0,i.jsxs)(`ul`,{children:[(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`/#who`,children:`About`})}),(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`/#curriculum`,children:`Curriculum`})}),(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`/#pricing`,children:`Pricing`})}),(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`/#register`,children:`Enroll`})})]})]}),(0,i.jsxs)(`div`,{className:`foot-col`,children:[(0,i.jsx)(`h5`,{children:`Company`}),(0,i.jsxs)(`ul`,{children:[(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`https://mentesquare.com/home`,target:`_blank`,rel:`noopener`,children:`About`})}),(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`/#trainers`,children:`Faculty`})}),(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`https://www.linkedin.com/company/mentesquare/`,target:`_blank`,rel:`noopener`,children:`LinkedIn`})}),(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`https://www.instagram.com/mentesquare`,target:`_blank`,rel:`noopener`,children:`Instagram`})})]})]}),(0,i.jsxs)(`div`,{className:`foot-col`,children:[(0,i.jsx)(`h5`,{children:`Support`}),(0,i.jsxs)(`ul`,{children:[(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`/#faq`,children:`FAQs`})}),(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`/contact`,children:`Contact`})}),(0,i.jsx)(`li`,{children:(0,i.jsx)(`a`,{href:`/#register`,children:`Register`})})]})]})]}),(0,i.jsx)(`div`,{className:`foot-bottom`,children:`© 2026 MenteSquare · Made with intent in Bengaluru, India.`})]})})]})}var l=c;export{l as component};