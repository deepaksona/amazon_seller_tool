"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "../../../page.module.css";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SmartWaySection() {
  const benefits = [
    {
      icon: "/images/secure.jpg",
      title: "Secure Marketplace Integrations",
      desc: "Your online business deserves the highest level of security. With our secure marketplace integrations, you can confidently connect Amazon, Flipkart, eBay, and Shopify accounts without worrying about data breaches or leaks. We use bank-level encryption to protect sensitive information, ensure compliance, and guarantee that your business and customer data remain private at all times.",
    },
    {
       icon: "/images/savetime2.jpg",
      title: "Save Hours Daily with Automation",
      desc: "Why spend countless hours on repetitive work when it can be automated? Our system takes care of stock updates, order syncing, and price changes automatically. This not only eliminates manual errors but also saves you several hours every single day, allowing you to focus on scaling your business, creating new strategies, and delivering a better customer experience.",
    },
    {
       icon: "/images/channel.jpg",
      title: "All Channels, One Dashboard",
      desc: "Managing multiple marketplaces can be stressful and time-consuming. With our unified dashboard, you get a complete overview of all your sales, revenue, and performance metrics in one place. No more switching between tabs or logging into different accounts — you can track everything seamlessly and make faster, smarter business decisions with real-time visibility across all your channels.",
    },
    {
      icon: "/images/inventory.jpg",
      title: "Centralized Inventory Control",
      desc: "Inventory mismanagement often leads to overselling, customer dissatisfaction, and revenue loss. Our centralized inventory system ensures you always have a clear, real-time view of your stock across all marketplaces. Receive instant low-stock alerts, update quantities automatically, and manage fulfillment efficiently — keeping your business organized, customers happy, and orders delivered without costly delays or errors.",
    },
    {
       icon: "/images/profit.jpg",
      title: "Advanced Profit & Expense Analytics",
      desc: "Knowing your true profitability is the key to sustainable growth. Our advanced analytics go beyond just sales figures, giving you a detailed breakdown of expenses, marketplace fees, ad spend, shipping charges, and even taxes. With these insights, you can identify hidden costs, discover opportunities to maximize margins, and make confident, data-driven decisions that keep your business financially strong.",
    },
  ];

  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((item, i) => {
      gsap.from(item, {
        x: i % 2 === 0 ? -100 : 100, // left se ya right se slide karega
        opacity: 0,
        duration: 0.8,
        delay: i * 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
      });
    });
  }, []);

  return (
    <div className={styles.smartWaySection}>
      <h2 className={styles.smartwaySubheading}>
        The Smarter Way to Sell Everywhere
      </h2>
      <p className={styles.smartWayDesc}>
        One platform, endless possibilities. Whether you’re selling on Amazon,
        Flipkart, eBay, Shopify, or all of them — we simplify your business so
        you can focus on growth.
      </p>

      <div className={styles.timeline}>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`${styles.timelineItem} ${
              index % 2 === 0 ? styles.left : styles.right
            }`}
          >
            <div className={styles.benefitCard}>
              {/* Agar even hai to pehle Image fir text, odd hai to pehle text fir image */}
              {index % 2 === 0 ? (
                <>
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={300}
                    height={300}
                    
                    
                    className={styles.benefitIcon}
                  />
                  <div className={styles.benefitDetail}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDesc}>{benefit.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className={styles.benefitDetail}>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                    <p className={styles.benefitDesc}>{benefit.desc}</p>
                  </div>
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={300}
                    height={300}
                    className={styles.benefitIcon}
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
