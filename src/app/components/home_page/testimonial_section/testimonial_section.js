"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../../page.module.css";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const testimonials = [
  {
    name: "John Miller",
    role: "Amazon Seller",
    feedback:
      "This platform has completely changed how I manage my business. Real-time inventory sync saved me from countless overselling issues!",
    image: "/images/people1.jpg",
  },
  {
    name: "Sophia Williams",
    role: "Walmart Seller",
    feedback:
      "Finally, one dashboard that shows me profits after all fees and ads. It’s like having a full finance team in one tool!",
    image: "/images/people3.jpg",
  },
  {
    name: "David Johnson",
    role: "Ebay Seller",
    feedback:
      "Managing 5000+ SKUs was impossible before. Now I can track everything easily. Plus, the automation saves me 3+ hours daily.",
    image: "/images/people2.jpg",
  },
  {
    name: "Emily Carter",
    role: "Amazon Seller",
    feedback:
      "I love how simple and intuitive this tool is. From tracking profits to managing inventory, everything feels effortless now!",
    image: "/images/people4.jpg",
  },
  {
    name: "Olivia Brown",
    role: "Shopify Seller",
    feedback:
      "This tool has made managing my online store so much easier. The AI-powered insights and automation save me hours every day!",
    image: "/images/people5.jpg", // new female image
  },
];


  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll(`.${styles.testimonialCard}`), {
        opacity: 0,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // jab section 80% viewport me aaye
        },
      });
    }
  }, []);

  return (
    <div className={styles.testimonialsSection} ref={sectionRef}>
      <h2 className={styles.testimonialHeading}>What Sellers Say About Us</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
        className={styles.testimonialSwiper}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className={styles.testimonialCard}>
              <Image
                src={t.image}
                alt={t.name}
                width={200}
                height={200}
                className={styles.testimonialImage}
              />
              <p className={styles.testimonialFeedback}>“{t.feedback}”</p>
              <h4 className={styles.testimonialName}>{t.name}</h4>
              <span className={styles.testimonialRole}>{t.role}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
