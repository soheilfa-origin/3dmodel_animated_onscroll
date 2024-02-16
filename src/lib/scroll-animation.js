import gsap from "gsap";

export const scrollAnimation = (position, target, onUpdate) => {
  const tl = gsap.timeline();

  // plane animation
  tl.set(position, {
    x: 0.083171253,
    y: 0.0383878876,
    z: 3.0606655148,
    onUpdate,
  })
    .set(target, {
      x: -0.0044009688,
      y: -0.1585657264,
      z: 0.040596619,
      // onUpdate,
    })
    .to(position, {
      x: 1.3529039071,
      y: 0.6836608035,
      z: 3.1705791325,
      scrollTrigger: {
        trigger: ".about-sec",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: 0.0452756088,
      y: -0.1702566181,
      z: 0.0120661242,
      scrollTrigger: {
        trigger: ".about-sec",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        immediateRender: false,
      },
      // onUpdate,
    })
    .to(position, {
      x: -0.8148730086,
      y: 0.5170276302,
      z: 3.5150178022,
      scrollTrigger: {
        trigger: ".works-sec",
        start: "top center",
        end: "top top",
        scrub: 1,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: -0.028262861,
      y: -0.1682853377,
      z: 0.0419762447,
      scrollTrigger: {
        trigger: ".works-sec",
        start: "top center",
        end: "top top",
        scrub: 1,
        immediateRender: false,
      },
      // onUpdate,
    })
    .to(position, {
      x: 0.417922921,
      y: -0.0818752943,
      z: 2.3093988122,
      scrollTrigger: {
        trigger: ".skills-sec",
        start: "top center",
        end: "top top",
        scrub: 1,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: -0.0044009688,
      y: -0.1585657264,
      z: 0.040596619,
      scrollTrigger: {
        trigger: ".skills-sec",
        start: "top center",
        end: "top top",
        scrub: 1,
        immediateRender: false,
      },
      // onUpdate,
    })
    .to(position, {
      x: 4.0548919423,
      y: 0.1721149991,
      z: 0.2719461564,
      scrollTrigger: {
        trigger: ".services-sec",
        start: "top center",
        end: "top top",
        scrub: 1,
        immediateRender: false,
      },
      onUpdate,
    })
    .to(target, {
      x: -0.0044009688,
      y: -0.1585657264,
      z: 0.040596619,
      scrollTrigger: {
        trigger: ".services-sec",
        start: "top center",
        end: "top top",
        scrub: 1,
        immediateRender: false,
      },
      // onUpdate,
    });

  // tl.set(position, {
  //   x: 11.9838856193,
  //   y: -0.6797177967,
  //   z: -1.8489210032,
  //   onUpdate,
  // })
  //   .set(target, {
  //     x: -0.384838111,
  //     y: 0.0861334061,
  //     z: -1.9454860375,
  //     // onUpdate,
  //   })
  //   .to(position, {
  //     x: 8.2570592171,
  //     y: -5.1897555505,
  //     z: -4.6321404219,
  //     scrollTrigger: {
  //       trigger: ".about-sec",
  //       start: "top bottom",
  //       end: "top top",
  //       scrub: 1,
  //       immediateRender: false,
  //     },
  //     onUpdate,
  //   })
  //   .to(target, {
  //     x: -0.419361833,
  //     y: 0.0855847649,
  //     z: 2.4722020463,
  //     scrollTrigger: {
  //       trigger: ".about-sec",
  //       start: "top bottom",
  //       end: "top top",
  //       scrub: 1,
  //       immediateRender: false,
  //     },
  //     // onUpdate,
  //   })
  //   .to(position, {
  //     x: 7.9396433932,
  //     y: -7.1379771372,
  //     z: 3.7725399384,
  //     scrollTrigger: {
  //       trigger: ".works-sec",
  //       start: "top center",
  //       end: "top top",
  //       scrub: 1,
  //       immediateRender: false,
  //     },
  //     onUpdate,
  //   })
  //   .to(target, {
  //     x: -0.384838111,
  //     y: 0.0861334061,
  //     z: -1.9454860375,
  //     scrollTrigger: {
  //       trigger: ".works-sec",
  //       start: "top center",
  //       end: "top top",
  //       scrub: 1,
  //       immediateRender: false,
  //     },
  //     // onUpdate,
  //   });
};
