"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "../../../page.module.css"

export default function HeroSection() {
  const headingRef = useRef(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.from(headingRef.current, { opacity: 0, y: -50, duration: 1 });
    }
  }, []);

  return (
    <div ref={headingRef} className={styles.headingAndDescription}>
      <div className={styles.heroHeading}>
        Manage Your Amazon Business Smarter
        <br />
        All in One Dashboard
      </div>
      <div className={styles.subHeading}>
        Monitor sales in real-time, optimize inventory, fulfill orders
        seamlessly, and gain actionable insights – everything you need to
        grow and scale your Amazon business effortlessly.
      </div>
      <div className={styles.ctaHeading}>
        Start Your Free Trial Today – Transform Your Amazon Business
      </div>
      <div className={styles.ctaButton}>
        Get Start{" "}
        <Image  src="/icons/next.png" alt="forward" className={styles.forwardIcon}  width={15} height={15}/>
      </div>
    </div>
  );
}
