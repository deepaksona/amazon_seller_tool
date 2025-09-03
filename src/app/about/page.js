"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "@/app/components/pricing_page/nav_bar/navbar";
import Footer from "@/app/components/pricing_page/footer/footer";
import styles from "./about.module.css";

export default function AboutPage() {
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // gsap context to avoid memory leaks
    let ctx = gsap.context(() => {
      // Hero section
      gsap.from(`.${styles.heroInner}`, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });

      // Section headings
      gsap.utils.toArray(`.${styles.h2}, .${styles.h2Center}`).forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      // Cards animations
      gsap.utils
        .toArray(
          `.${styles.card}, .${styles.sideCard}, .${styles.valueCard}, .${styles.valueCardWide}, .${styles.teamCard}, .${styles.ctaCard}`
        )
        .forEach((card, i) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
            opacity: 0,
            y: 50,
            duration: 0.9,
            delay: i * 0.1,
            ease: "power3.out",
          });
        });
    }, container);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <>
      <Navbar />

      <div className={styles.aboutPage} ref={container}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <h1 className={styles.title}>About LemonLayer</h1>
            <p className={styles.subtitle}>
  Founded in 2025, LemonLayer has grown from a small startup into the leading AI-powered e-commerce management platform trusted by thousands of businesses worldwide. Our journey began with a simple vision: to remove the complexity from online selling and give every entrepreneur—regardless of size or budget—the same advanced tools that global enterprises use to succeed. Today, LemonLayer helps merchants automate operations, gain real-time insights, and make smarter, faster decisions through the power of data and AI. From inventory forecasting and revenue tracking to customer engagement and growth analytics, we provide everything modern businesses need to thrive in an increasingly competitive digital marketplace. Our mission is clear—we exist to empower businesses to focus on what they love, while we handle the complexity behind the scenes and drive their success forward.
</p>

          </div>
        </section>

        {/* Story */}
        <section className={styles.section}>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h2 className={styles.h2}>Our Story</h2>
              <p className={styles.p}>
                LemonLayer was born from frustration. Our founders were running
                successful e-commerce businesses but found themselves drowning
                in spreadsheets, jumping between platforms, and making decisions
                based on outdated data. They realized that while technology made
                it easier to start an online business, it hadn’t made it easier
                to scale one.
              </p>
              <p className={styles.p}>
                That’s when the idea for LemonLayer was born — a single platform
                that could intelligently manage all aspects of an e-commerce
                business. Today, we’re proud to serve over <b>10,000</b>{" "}
                businesses across <b>50+ countries</b>, helping them save time,
                increase profits, and make smarter decisions with their data.
              </p>
            </div>

            <div className={styles.sideVisual}>
              <div className={styles.blob} />
              <div className={styles.sideCard}>
                <div className={styles.kpiRow}>
                  <div className={styles.kpi}>
                    <span className={styles.kpiVal}>10,000+</span>
                    <span className={styles.kpiLabel}>Active Users</span>
                  </div>
                  <div className={styles.kpi}>
                    <span className={styles.kpiVal}>50+</span>
                    <span className={styles.kpiLabel}>Countries</span>
                  </div>
                </div>
                <div className={styles.kpiRow}>
                  <div className={styles.kpi}>
                    <span className={styles.kpiVal}>$2B+</span>
                    <span className={styles.kpiLabel}>Revenue Tracked</span>
                  </div>
                  <div className={styles.kpi}>
                    <span className={styles.kpiVal}>35%</span>
                    <span className={styles.kpiLabel}>Avg. Growth</span>
                  </div>
                </div>
                <p className={styles.kpiNote}>
                  Real results powered by AI, insights, and automation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What drives us */}
        <section className={styles.section}>
          <h2 className={styles.h2Center}>What Drives Us</h2>
          <div className={styles.gridThree}>
            <div className={styles.valueCard}>
              <h3 className={styles.h3}>Our Mission</h3>
              <p className={styles.pSm}>
                To empower e-commerce businesses with intelligent tools that
                simplify operations and accelerate growth through data-driven
                insights.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.h3}>Innovation First</h3>
              <p className={styles.pSm}>
                We leverage cutting-edge AI and machine learning to provide
                predictive analytics that help businesses stay ahead of market
                trends.
              </p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.h3}>Customer Success</h3>
              <p className={styles.pSm}>
                Our dedicated support team works around the clock to ensure
                every customer achieves their business goals with our platform.
              </p>
            </div>
            <div className={styles.valueCardWide}>
              <h3 className={styles.h3}>Proven Results</h3>
              <p className={styles.pSm}>
                Trusted by over <b>10,000+</b> businesses worldwide, our
                platform has helped increase average revenue by <b>35%</b>{" "}
                within the first 6 months.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className={styles.section}>
          <h2 className={styles.h2Center}>Meet Our Leadership Team</h2>
          <div className={styles.teamGrid}>
            <TeamCard
              initials="SJ"
              name="Sarah Johnson"
              role="CEO & Founder"
              bio="Former Amazon executive with 15+ years in e-commerce. Led multiple marketplace integrations."
            />
            <TeamCard
              initials="MC"
              name="Michael Chen"
              role="CTO"
              bio="AI researcher and former Google engineer. Specializes in ML for business intelligence."
            />
            <TeamCard
              initials="ER"
              name="Emily Rodriguez"
              role="Head of Product"
              bio="SaaS product strategist. Previously built solutions for Shopify and eBay sellers."
            />
          </div>
        </section>

        {/* CTA */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>
              Ready to Join Our Success Story?
            </h2>
            <p className={styles.ctaText}>
              Thousands of businesses trust LemonLayer to power their e-commerce
              operations. Start your journey with us today.
            </p>
            <div className={styles.ctaActions}>
              <a href="/signup" className={styles.primaryBtn}>
                Start Free Trial
              </a>
              <a href="/contact" className={styles.secondaryBtn}>
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

function TeamCard({ initials, name, role, bio }) {
  return (
    <div className={styles.teamCard}>
      <div className={styles.avatar}>{initials}</div>
      <div className={styles.teamMeta}>
        <h4 className={styles.teamName}>{name}</h4>
        <span className={styles.teamRole}>{role}</span>
      </div>
      <p className={styles.teamBio}>{bio}</p>
    </div>
  );
}
