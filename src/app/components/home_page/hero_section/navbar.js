"use client";

import styles from "../../../page.module.css";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>LemonLayer</div>
      <div className={styles.menu}>
        {navItems.map((e, i) => (
          <a key={i} href={e.href} className={styles.menuItem}>
            {e.label}
          </a>
        ))}
        <div className={styles.login}>Login</div>
        <div className={styles.getStart}>Get Started</div>
      </div>
    </div>
  );
}
