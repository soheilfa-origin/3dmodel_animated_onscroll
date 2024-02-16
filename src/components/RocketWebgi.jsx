import React, {
  useRef,
  useCallback,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  addBasePlugins,
  CanvasSnipperPlugin,
  mobileAndTabletCheck,
} from "webgi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll-animation";

gsap.registerPlugin(ScrollTrigger);

export const RocketWebgi = () => {
  const canvasRef = useRef(null);

  const memorizeScrollAnimation = useCallback((position, target, onUpdate) => {
    if (position && target && onUpdate) {
      scrollAnimation(position, target, onUpdate);
    }
  }, []);

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;
    console.log(camera);

    await viewer.addPlugin(AssetManagerPlugin);
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    // or use this to add all main ones at once.
    // await addBasePlugins(viewer); // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin(CanvasSnipperPlugin);

    viewer.renderer.refreshPipeline();

    // Import and add a GLB file.
    await viewer.load("/models/airplane.glb");
    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;

    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });
    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });

    memorizeScrollAnimation(position, target, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, []);

  return (
    <>
      <canvas
        className="w-full h-full fixed z-30"
        id="viewer-canvas"
        ref={canvasRef}
      ></canvas>
    </>
  );
};
