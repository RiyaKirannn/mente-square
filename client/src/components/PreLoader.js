import "./preloader.css";
import { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import useUsersContext from "../hooks/use-users-context";

export const PreLoader = () => {
  const { privileges } = useUsersContext();
  const nav = useNavigate();
  const text = useRef();
  const t1 = gsap.timeline();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      t1.from(".pa1", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
      }).to(".preloader", {
        duration: 0.4,
        scale: 3,
        opacity: 0,
        onComplete: animComplete,
      });
    }, text);
    return () => ctx.revert();
  }, []);

  function animComplete() {
    console.log(privileges);
    if (Number(privileges) === 0) nav("/home");
    else if (Number(privileges) === 1) nav("/dashboard", { replace: true });
    else if (Number(privileges) === 3) nav("/mentee", { replace: true });
  }

  return (
    <>
      <div ref={text}>
        <div className="preloader" id="preloader">
          <div style={{ marginBottom: "18rem" }}></div>
          <div className="pre-text">
            <h1
              className="text-uppercase fw-bolder"
              style={{ color: "#1eb2a6" }}
            >
              <span className="pa1">Where </span>
              <span className="pa1">the </span>
              <span className="pa1">focus </span>
              <span className="pa1">is </span>
              <span className="pa1">on </span>
              <span className="pa1">you </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};
