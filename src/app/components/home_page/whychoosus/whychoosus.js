"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../../page.module.css";

export default function WhyChooseUs() {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const detailsRef = useRef(null);
  const listItemsRef = useRef([]);
  const conclusionRef = useRef(null);
  const lottieRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    import("@lottiefiles/lottie-player");

    if (headingRef.current) {
      gsap.from(headingRef.current, {
        opacity: 0,
        y: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });
    }

    if (detailsRef.current) {
      gsap.from(detailsRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: detailsRef.current,
          start: "top 85%",
        },
      });
    }

    if (listItemsRef.current.length > 0) {
      gsap.from(listItemsRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.2, // ek ek karke animate hoga
        ease: "power2.out",
        scrollTrigger: {
          trigger: listItemsRef.current[0],
          start: "top 90%",
        },
      });
    }

    if (conclusionRef.current) {
      gsap.from(conclusionRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: conclusionRef.current,
          start: "top 90%",
        },
      });
    }

    if (lottieRef.current) {
      gsap.from(lottieRef.current, {
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: lottieRef.current,
          start: "top 85%",
        },
      });
    }
  }, []);

  const points = [
    { title: "Real-time sales & inventory tracking", desc: "no more manual updates" },
    { title: "GST-ready reports & invoices", desc: "stay compliant without extra effort" },
    { title: "Affordable pricing", desc: "made for Indian sellers, no hidden costs" },
    { title: "Local support", desc: "quick help on WhatsApp & phone in Hindi/English" },
  ];

  return (
    <div className={styles.whyChooseUs} ref={containerRef}>
      <h2 className={styles.wchHeading} ref={headingRef}>Why Choose Us</h2>
      <div className={styles.wchDetailAndAnimation}>
        <div className={styles.wchDetails}>
          <div className={styles.wchDetailsText} ref={detailsRef}>
            Managing your Amazon business with Excel or manual tracking is slow
            and error-prone. Our platform is built{" "}
            <b>exclusively for Indian Amazon sellers</b> to make things simple:
          </div>

          <ul className={styles.wchList}>
            {points.map((point, index) => (
              <li
                key={index}
                className={styles.wchItem}
                ref={(el) => (listItemsRef.current[index] = el)}
              >
                <b>{point.title}</b> – {point.desc}
              </li>
            ))}
          </ul>

          <p className={styles.wchConclusion} ref={conclusionRef}>
            👉 Grow faster, save time, and focus on selling – we handle the rest.
          </p>
        </div>

        {/* ✅ Animate lottie */}
        <lottie-player
          ref={lottieRef}
          src="/lotties/sales.json"
          background="transparent"
          speed="1"
          className={styles.wchAnimation}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}
