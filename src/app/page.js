"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import forward from "../../public/icons/next.png";

import gsap from "gsap";
import Navbar from "./components/home_page/hero_section/navbar";
import HeroSection from "./components/home_page/hero_section/hero_section";
import HeroAnimation from "./components/home_page/hero_section/hero_animation";
import Howitswork from "./components/home_page/how_its_work_section/how_its_work_section";
import FeatureSection from "./components/home_page/feature_section/feature_section";
import SmartWaySection from "./components/home_page/smartway_section/smartway_section";
import WhyChooseUs from "./components/home_page/whychoosus/whychoosus";

export default function Home() {
    
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.divider}></div>
      <div className={styles.heroSection}>
        <HeroSection />
        <HeroAnimation />

      </div>

      <Howitswork/>
      <FeatureSection/>
      <SmartWaySection/>
      <WhyChooseUs/>
    </div>
  );
}
