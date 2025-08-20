"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../../page.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Howitswork() {
  const workList = [
    {
      image: "/icons/login_account.png",
      desc: "Connect your Amazon account securely and manage all operations from one intuitive dashboard.",
    },
    {
      image: "/icons/monitor.png",
      desc: "Monitor your sales and profits across multiple marketplaces in real-time.",
    },
    {
      image: "/icons/optimize.png",
      desc: "Optimize product listings with built-in SEO and conversion tips.",
    },
    {
      image: "/icons/competitive.png",
      desc: "Stay ahead of competition with pricing and performance insights.",
    },
    {
      image: "/icons/analytics.png",
      desc: "Gain actionable analytics to boost growth and reduce costs.",
    },
  ];

  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      gsap.from(item, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.15, // ek-ek karke delay ke saath aayega
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <div className={styles.workSection}>
      {workList.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemsRef.current[index] = el)}
          className={styles.workItemWrapper}
        >
          <div className={styles.workItem}>
            <Image src={item.image} alt="work step" width={60} height={60} />
            <p>{item.desc}</p>
          </div>
          {index !== workList.length - 1 && <div className={styles.separator}></div>}
        </div>
      ))}
    </div>
  );
}
