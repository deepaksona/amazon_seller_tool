"use client";

import styles from "../../../page.module.css";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Logo + About */}
        <div className={styles.footerBrand}>
         <div className={styles.footerlogo}> </div>
          <p>
            LemonLayer helps businesses grow smarter with automation, real-time
            analytics, and seamless marketplace integrations.
          </p>
        </div>

        {/* Links */}
        <div className={styles.footerLinks}>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>About Us</li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <h4>Resources</h4>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Case Studies</li>
            <li>API Docs</li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.footerContact}>
          <h4>Contact Us</h4>
          <p>Email: support@lemonlayer.io</p>
          <p>Phone: +91 98765 43210</p>
          <div className={styles.footerSocials}>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
            <a href="#"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} LemonLayer. All rights reserved.</p>
      </div>
    </footer>
  );
}
