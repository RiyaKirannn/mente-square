import {gsap} from "gsap";

const t1 = gsap.timeline();

export const preloaderanim = () => {

    t1.from(".preloader", {
        duration: 0.4,
        opacity: 0,
        onComplete: window.scrollTo(0,0)
    })
        .from(".pa1", {
            duration: 0.4,
            y: 100,
            opacity: 0,
            stagger: 0.2
        })
        .to(".preloader", {
            duration: 0.8,
            scale: 150,
            opacity: 0,
        })
        .to(".home", {
            duration: 0.2,
            opacity: 1
        })

    return 1;
}


