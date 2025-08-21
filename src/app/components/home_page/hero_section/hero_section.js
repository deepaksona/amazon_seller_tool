"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import styles from "../../../page.module.css";

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
        Track your sales in real-time, manage inventory efficiently, fulfill
        orders without hassle, and get powerful insights to grow faster.
        Whether you&apos;re just starting out or already scaling, this tool
        helps you save time, reduce manual work, and make smarter decisions.
      </div>
      <div className={styles.ctaHeading}>
        Start Your Free Trial Today – Transform Your Amazon Business
      </div>
      <div className={styles.ctaButton}>
        Get Started{" "}
        <Image
          src="/icons/next.png"
          alt="forward"
          className={styles.forwardIcon}
          width={15}
          height={15}
        />
      </div>
    </div>
  );
}
