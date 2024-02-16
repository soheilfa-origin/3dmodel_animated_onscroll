import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { RocketWebgi } from "./RocketWebgi";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const titleRef = useRef(null);
  const tl = useRef();
  useEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      titleRef?.current,
      {
        duration: 2,
        x: -200,
        opacity: 0,
        scrollTrigger: {
          trigger: ".hero-sec",
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
          immediateRender: false,
        },
      },
      0
    );
  }, []);

  const showRocket = (e) => {
    e.preventDefault();
    const element = document.getElementById("rocket-model");

    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero-sec w-full h-[100vh]  flex relative z-20 overflow-x-hidden px-20">
      <div className="w-full flex items-center justify-end h-full overflow-hidden">
        <h1 className="text-[200px] font-bold text-white" ref={titleRef}>
          Agency
        </h1>
      </div>
    </div>
  );
};
