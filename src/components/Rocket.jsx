import React, { useEffect, useLayoutEffect, useRef } from "react";
import { OrbitControls, ScrollControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Rocket = (props) => {
  const { scene } = useGLTF("./models/arthur.glb");
  const rocketRef = useRef(null);
  const tl = useRef();
  // useLayoutEffect(() => {

  // }, [rocketRef.current]);
  const onClick = () => {
    if (rocketRef.current) {
      tl.current = gsap.timeline();

      tl.current.to(
        rocketRef?.current?.position,
        { duration: 1, x: 0, y: Math.PI / 6, z: 0 },
        0
      );
    }
  };

  return (
    <div className="bg-black w-full h-[100vh]" id="rocket-model-container">
      <Canvas
        onClick={onClick}
        camera={{
          fov: 25.0,
          position: [10.55, 0.25, 1.31],
        }}
        shadows
      >
        <ambientLight intensity={1} />
        <pointLight position={[5, 5, 5]} />
        {/* <OrbitControls enableZoom={false} /> */}
        {/* <ScrollControls pages={3} damping={0.25}> */}
        <group
          ref={rocketRef}
          // {...props}
          // position={[0.5, -1, -1]}
          // rotation={[0, -Math.PI / 5, 0]}
        >
          {/* Use the entire scene as a group */}
          {scene && <primitive object={scene} />}
        </group>
        {/* </ScrollControls> */}
      </Canvas>
    </div>
  );
};

useGLTF.preload("./models/arthur.glb");
