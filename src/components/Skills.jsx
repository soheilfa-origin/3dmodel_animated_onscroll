import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { RocketWebgi } from "./RocketWebgi";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export const Skills = () => {
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
          trigger: ".skills-sec",
          start: "bottom bottom",
          end: "bottom top",
          scrub: 1,
          immediateRender: false,
        },
      },
      0
    );
  }, []);
  return (
    <div className="skills-sec w-full h-[100vh]  flex relative z-20  px-20">
      <div className="w-full flex items-center justify-end h-full">
        <h1 className="text-[200px] font-bold text-white" ref={titleRef}>
          Skills
        </h1>
      </div>
    </div>
  );
};
