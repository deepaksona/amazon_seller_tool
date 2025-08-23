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
        Manage Your E-Commerce Business Smarter
        <br />
        All in One Dashboard
      </div>
      <div className={styles.subHeading}>
Track your sales in real-time, manage inventory efficiently, and fulfill orders effortlessly—all powered by AI. Our system analyzes trends, predicts demand, and provides actionable insights to help you grow. Whether you&apos;re starting out or scaling up, this AI-driven tool saves time, reduces manual work, and enables smarter, data-backed decisions.

      </div>
      <div className={styles.ctaHeading}>
        Start Your Free Trial Today – Transform Your E-Commerce Business
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
