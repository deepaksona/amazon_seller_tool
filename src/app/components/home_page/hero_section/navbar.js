"use client";

import styles from "../../../page.module.css";
import Link from 'next/link';

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
      <div className={styles.navRowOne}>
 <div className={styles.logo}></div>
 <div className={styles.wrapbutton}>
<Link href={"/auth"} className={styles.login}>Login</Link>
        <Link href={"/dashboard"} className={styles.getStart}>Get Started</Link>
 </div>
 

      </div>
     <div className={styles.dividerNav}></div>
      <div className={styles.menu}>
        {navItems.map((e, i) => (
          <Link key={i} href={e.href} className={styles.menuItem}>
            {e.label}
          </Link>
        ))}
        
      </div>
    </div>
  );
}
