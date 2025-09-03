"use client";

import { useEffect, useRef } from "react";
import Navbar from "@/app/components/pricing_page/nav_bar/navbar";
import Footer from "../components/pricing_page/footer/footer";
import styles from "./price.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PricingPage() {
  const sectionRef = useRef(null);

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Connect up to 2 marketplaces – manage basic sales channels easily",
        "Basic inventory sync – keep stock updated automatically",
        "Order management – handle incoming orders efficiently",
        "Email support – assistance for setup and basic queries",
      ],
      popular: false,
      description: "Perfect for new sellers starting with multiple channels",
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      features: [
        "Connect up to 5 marketplaces – expand your reach effortlessly",
        "Advanced automation – automate pricing, stock updates, and notifications",
        "Profit & expense analytics – track true profitability",
        "Priority support – fast responses from our support team",
      ],
      popular: true,
      description: "Ideal for growing sellers looking to scale efficiently",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited marketplaces – integrate as many channels as needed",
        "Dedicated account manager – personalized guidance",
        "Custom integrations – tailor the platform to your business",
        "24/7 premium support – immediate assistance anytime",
      ],
      popular: false,
      description: "Designed for large-scale sellers requiring full customization",
    },
  ];

  useEffect(() => {
    
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(`.${styles.pricingCard}`);

    const ctx = gsap.context(() => {
      // heading
      gsap.from(`.${styles.pricingHeading}`, {
        opacity: 0,
        y: -30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // each card scroll-based animation
      cards.forEach((card, i) => {
        let animProps = { opacity: 0, duration: 1, ease: "power3.out" };

        if (i === 0) {
          animProps.y = -60; // Starter from top
        } else if (i === 1) {
          animProps.x = -80; // Growth from left
        } else if (i === 2) {
          animProps.x = 80; // Enterprise from right
        }

        gsap.from(card, {
          ...animProps,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none", // play only once
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <section className={styles.pricingSection} ref={sectionRef}>
        <div className={styles.pricingIntro}>
          <h2 className={styles.pricingHeading}>
            Choose the Plan That Fits Your Business
          </h2>
          <p className={styles.pricingDesc}>
            Our flexible plans grow with your business. Whether you&apos;re just
            starting out or scaling globally, each plan provides powerful tools,
            real-time analytics, and AI-driven insights to manage multiple
            marketplaces, automate repetitive tasks, and maximize profits
            efficiently. Choose the plan that fits your goals and start managing
            your online business smarter, faster, and with confidence today.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`${styles.pricingCard} ${
                plan.popular ? styles.popular : ""
              }`}
            >
              {plan.popular && (
                <div className={styles.popularBadge}>Most Popular</div>
              )}

              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planDescription}>{plan.description}</p>

              <p className={styles.planPrice}>
                {plan.price}
                <span>{plan.period}</span>
              </p>

              <ul className={styles.planFeatures}>
                {plan.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>

              <button className={styles.planButton}>
                {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
