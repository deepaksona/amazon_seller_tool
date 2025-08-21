"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../../../page.module.css";
import Image from "next/image";


export default function HeroAnimation() {
  const lottieRef = useRef(null);

  useEffect(() => {
    import("@lottiefiles/lottie-player");

    if (lottieRef.current) {
      gsap.from(lottieRef.current, { opacity: 0, x: 50, duration: 1, delay: 0.5 });
    }
  }, []);

  return (
    <Image
    ref={lottieRef}
    src="/images/laptoprmbg.png" alt="laptop" className={styles.heroAnimation} width={410} height={410} ></Image>
    // <lottie-player
    //   ref={lottieRef}
    //   src="/lotties/growth.json"
    //   background="transparent"
    //   speed="1"
    //   className={styles.heroAnimation}
    //   loop
    //   autoplay
    // ></lottie-player>
  );
}
