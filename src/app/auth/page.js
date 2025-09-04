"use client";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import styles from "./auth.module.css";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const formRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 🔥 Animate container first
      tl.fromTo(
        formRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );

      // 🔥 Animate children inside form (logo, heading, inputs, button, etc.)
      tl.fromTo(
        formRef.current.querySelectorAll("h2, form > div, form > button, form > .googleBtn, p"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
          stagger: 0.1, // one after another
        },
        "-=0.2" // overlap with previous
      );
    }, formRef);

    return () => ctx.revert();
  }, [isLogin]);

  return (
    <div className={styles.authPage}>
      {/* Left Side - Form */}
      <div className={styles.authFormSection}>
        <div ref={formRef} className={styles.formBox}>
          {/* 🔥 Logo */}
          <div className={styles.logoBox}>
            <img src="/images/logo.png" alt="App Logo" className={styles.logo} />
          </div>

          <h2>
            {isLogin
              ? "Login to your Seller Account"
              : "Create your Seller Account"}
          </h2>

          <form>
            {!isLogin && (
              <div className={styles.formGroup}>
                <input type="text" placeholder="Full Name" required />
              </div>
            )}

            <div className={styles.formGroup}>
              <input type="email" placeholder="Email" required />
            </div>

            <div className={styles.formGroup}>
              <input type="password" placeholder="Password" required />
            </div>

            {!isLogin && (
              <div className={styles.formGroup}>
                <input type="text" placeholder="Store Name" required />
              </div>
            )}

            <button type="submit" className={styles.btnPrimary}>
              {isLogin ? "Login" : "Sign Up"}
            </button>

            <div className={`${styles.googleBtn} googleBtn`}>
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
              />
              <span>
                {isLogin ? "Login with Google" : "Sign up with Google"}
              </span>
            </div>
          </form>

          <p className={styles.toggleText}>
            {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Seller Benefits & Video */}
      <div className={styles.authInfoSection}>
        <video
          src="/videos/website.mp4"
          autoPlay
          loop
          muted
          playsInline
          className={styles.videoBg}
        />
        <div className={styles.overlayContent}>
          <h1>Grow Your Business with Us</h1>
          <p>
            Join thousands of successful sellers who manage their online store,
            boost sales, and build a trusted brand.
          </p>
          <ul>
            <li>✓ Easy product management</li>
            <li>✓ Secure payments & fast payouts</li>
            <li>✓ Real-time analytics & insights</li>
            <li>✓ Reach customers worldwide</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
