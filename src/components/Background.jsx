import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/src/vanta.fog";

export default function Background() {
  const vantaRef = useRef(null);

  useEffect(() => {
    let effect = FOG({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      highlightColor: 0xf2f2f2,
      midtoneColor: 0x37373b,
      lowlightColor: 0x15151a,
      baseColor: 0x0f172a,
      blurFactor: 0.9,
      zoom: 0.7,
    });
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 -z-10"></div>;
}
