"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../../page.module.css";
import Image from "next/image";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amit Sharma",
      role: "Amazon Seller",
      feedback:
        "This platform has completely changed how I manage my business. Real-time inventory sync saved me from countless overselling issues!",
      image: "/users/user1.jpg",
    },
    {
      name: "Priya Mehta",
      role: "Shopify & Flipkart Seller",
      feedback:
        "Finally, one dashboard that shows me profits after all fees and ads. It’s like having a full finance team in one tool!",
      image: "/users/user2.jpg",
    },
    {
      name: "Rohit Verma",
      role: "eBay Power Seller",
      feedback:
        "Managing 5000+ SKUs was impossible before. Now I can track everything easily. Plus, the automation saves me 3+ hours daily.",
      image: "/users/user3.jpg",
    },
  ];

  return (
    <div className={styles.testimonialsSection}>
      <h2 className={styles.testimonialHeading}>What Sellers Say About Us</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className={styles.testimonialCard}>
              <Image
                src={t.image}
                alt={t.name}
                width={70}
                height={70}
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

