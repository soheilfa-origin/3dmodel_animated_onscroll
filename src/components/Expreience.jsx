import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Rocket } from "./Rocket";
import { Overlay } from "./Overlay";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Rocket />
      </ScrollControls>
    </>
  );
};
