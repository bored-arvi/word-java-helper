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
      baseColor: 0x0b0b0f,     // very dark base
        highlightColor: 0x6366f1, // purple-ish accent
        midtoneColor: 0x1e1e28,   // dark gray midtones
        lowlightColor: 0x0f172a,  // deep navy
        blurFactor: 0.7,
        zoom: 1,
    });
    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return <div ref={vantaRef} className="absolute inset-0 -z-10"></div>;
}
