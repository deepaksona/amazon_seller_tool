"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../../../page.module.css";

export default function HeroAnimation() {
  const lottieRef = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");

    if (lottieRef.current) {
      gsap.from(lottieRef.current, { opacity: 0, x: 50, duration: 1, delay: 0.5 });
    }
  }, []);

  return (
    <lottie-player
      ref={lottieRef}
      src="/lotties/growth.json"
      background="transparent"
      speed="1"
      className={styles.heroAnimation}
      loop
      autoplay
    ></lottie-player>
  );
}
