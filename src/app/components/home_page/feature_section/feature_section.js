"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../../page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureSection() {
  const features = [
    {
      icon: "/icons/dashboard.png",
      title: "Multi-Channel Sales Dashboard",
      desc: "View Amazon, Flipkart, eBay & Shopify performance in one place."
    },
    {
      icon: "/icons/inventory.png",
      title: "Smart Inventory Sync",
      desc: "Automatic stock updates across all channels to avoid overselling."
    },
    {
      icon: "/icons/order_management.png",
      title: "Unified Order Management",
      desc: "Fulfill and track orders from one dashboard with ease."
    },
    {
      icon: "/icons/expenses.png",
      title: "Profit & Expense Analytics",
      desc: "See true profits after fees, shipping & ads across platforms."
    },
    {
      icon: "/icons/competition2.png",
      title: "Competitor & Price Tracking",
      desc: "Stay ahead with real-time pricing and competitor insights."
    },
    {
      icon: "/icons/list.png",
      title: "Listing Management",
      desc: "Update product details once, sync everywhere automatically."
    }
  ];

  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    // ✅ Title animation on scroll
    gsap.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 85%", // jab title viewport ke 85% pe ayega
        debugging: "true"
    
      },
    
    });

    // ✅ Cards animation on scroll
    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      });

      // ✅ Hover animation
      const handleEnter = () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          boxShadow: "0px 10px 20px rgba(0,0,0,0.15)",
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          boxShadow: "0px 5px 10px rgba(0,0,0,0.05)",
          duration: 0.3,
          ease: "power2.inOut",
        });
      };

      card.addEventListener("mouseenter", handleEnter);
      card.addEventListener("mouseleave", handleLeave);

      return () => {
        card.removeEventListener("mouseenter", handleEnter);
        card.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  return (
    <div className={styles.featureSection}>
      {/* ✅ Title ref added */}
      <div ref={titleRef} className={styles.featureHeading}>
        Everything You Need to Scale Across Marketplaces
      </div>

      <div className={styles.featureGrid}>
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={styles.featureCard}
          >
            <img
              className={styles.featureImage}
              src={feature.icon}
              alt={feature.title}
            />
            <div className={styles.featureTitle}>{feature.title}</div>
            <div className={styles.featureDescription}>{feature.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
