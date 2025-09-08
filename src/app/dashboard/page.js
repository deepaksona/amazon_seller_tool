"use client";
import { useState, useEffect, useRef } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  ShoppingCart, 
  Package, 
  List, 
  Settings,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import gsap from "gsap";
import styles from "./dashboard.module.css";

export default function Dashboard() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // refs
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const menuItemsRef = useRef([]);
  const dropdownRefs = useRef([]);
  const chevronRefs = useRef([]);
  const navbarRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sidebar slide-in
      gsap.from(sidebarRef.current, {
        x: -220,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.75)"
      });

      // Navbar fade-down
      gsap.from(navbarRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power3.out"
      });

      // Content fade-up
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out"
      });

      // Menu items stagger
      gsap.from(menuItemsRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (openDropdown !== null && dropdownRefs.current[openDropdown]) {
        gsap.fromTo(
          dropdownRefs.current[openDropdown],
          { height: 0, opacity: 0, y: -10 },
          { height: "auto", opacity: 1, y: 0, duration: 0.45, ease: "back.out(1.4)" }
        );

        gsap.to(chevronRefs.current[openDropdown], {
          rotate: 90,
          duration: 0.3,
          ease: "power2.out"
        });
      }

      dropdownRefs.current.forEach((ref, index) => {
        if (ref && index !== openDropdown) {
          gsap.to(ref, {
            height: 0,
            opacity: 0,
            y: -10,
            duration: 0.3,
            ease: "power2.in"
          });
        }
      });

      chevronRefs.current.forEach((ref, index) => {
        if (ref && index !== openDropdown) {
          gsap.to(ref, {
            rotate: 0,
            duration: 0.3,
            ease: "power2.inOut"
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [openDropdown]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      color: "#3b82f6"
    },
    {
      title: "Reports",
      icon: FileText,
      color: "#10b981",
      dropdown: [
        { title: "Daily Report", path: "/reports/daily" },
        { title: "Monthly Report", path: "/reports/monthly" },
        { title: "Yearly Report", path: "/reports/yearly" },
      ],
    },
    {
      title: "Orders",
      icon: ShoppingCart,
      color: "#f59e0b",
      dropdown: [
        { title: "All Orders", path: "/orders/all" },
        { title: "Pending Orders", path: "/orders/pending" },
        { title: "Completed Orders", path: "/orders/completed" },
      ],
    },
    {
      title: "Inventory",
      icon: Package,
      color: "#8b5cf6",
      dropdown: [
        { title: "Products", path: "/inventory/products" },
        { title: "Stock Levels", path: "/inventory/stock" },
        { title: "Suppliers", path: "/inventory/suppliers" },
      ],
    },
    {
      title: "Listing",
      icon: List,
      color: "#ef4444",
      dropdown: [
        { title: "Active Listings", path: "/listing/active" },
        { title: "Draft Listings", path: "/listing/drafts" },
        { title: "Archived Listings", path: "/listing/archived" },
      ],
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
      color: "#6b7280"
    },
  ];

  return (
    <div className={styles.dashboardContainer} ref={containerRef}>
      <div className={styles.dashboardContent}>
        {/* Sidebar */}
        <div className={styles.sidebar} ref={sidebarRef}>
          {/* Logo Section */}
          <div className={styles.logoContainer}>
            <img className={styles.logo} src="/images/logo.png" alt="Company Logo" />
          </div>

          {/* Middle Scrollable Menu */}
          <div className={styles.sidebarMiddle}>
            <nav className={styles.navigation}>
              <ul className={styles.menuList}>
                {menuItems.filter(item => item.title !== 'Settings').map((item, index) => {
                  const IconComponent = item.icon;
                  const isOpen = openDropdown === index;

                  return (
                    <li 
                      key={index} 
                      className={styles.menuItem}
                      ref={(el) => (menuItemsRef.current[index] = el)}
                    >
                      <div
                        className={`${styles.menuItemToggle} ${isOpen ? styles.open : ''}`}
                        onClick={() => item.dropdown && toggleDropdown(index)}
                      >
                        <div className={styles.menuItemLeft}>
                          <div 
                            className={styles.iconContainer}
                            style={{ backgroundColor: `${item.color}15` }}
                          >
                            <IconComponent size={20} style={{ color: item.color }} />
                          </div>
                          <span className={styles.menuTitle}>{item.title}</span>
                        </div>
                        {item.dropdown && (
                          <div 
                            className={styles.chevronIcon}
                            ref={(el) => (chevronRefs.current[index] = el)}
                          >
                            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          </div>
                        )}
                      </div>

                      {item.dropdown && (
                        <div 
                          className={`${styles.dropdownContainer} ${isOpen ? styles.dropdownOpen : ''}`}
                          ref={(el) => (dropdownRefs.current[index] = el)}
                        >
                          <ul className={styles.dropdownList}>
                            {item.dropdown.map((subItem, subIndex) => (
                              <li key={subIndex} className={styles.dropdownItem}>
                                <span className={styles.dropdownItemText}>{subItem.title}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          {/* Bottom Fixed Section */}
          <div className={styles.sidebarBottom}>
            {/* Settings */}
            <div className={styles.settingsSection}>
              {(() => {
                const settingsItem = menuItems.find(item => item.title === 'Settings');
                const IconComponent = settingsItem.icon;

                return (
                  <div className={styles.menuItemToggle}>
                    <div className={styles.menuItemLeft}>
                      <div 
                        className={styles.iconContainer}
                        style={{ backgroundColor: `${settingsItem.color}15` }}
                      >
                        <IconComponent size={20} style={{ color: settingsItem.color }} />
                      </div>
                      <span className={styles.menuTitle}>{settingsItem.title}</span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* User Profile */}
            <div className={styles.userProfile}>
              <div className={styles.profileContainer}>
                <div className={styles.avatar}>
                  <span className={styles.avatarText}>JD</span>
                </div>
                <div className={styles.userInfo}>
                  <div className={styles.userName}>John Doe</div>
                  <div className={styles.userRole}>Administrator</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className={styles.mainContent}>
          {/* Top Navigation */}
          <div className={styles.topNavbar} ref={navbarRef}>
            <div className={styles.navbarContent}>
              <div className={styles.navbarLeft}>
                <h1 className={styles.pageTitle}>Dashboard</h1>
                <p className={styles.pageSubtitle}>Welcome back! Here's what's happening today.</p>
              </div>
              <div className={styles.navbarRight}>
                <button className={styles.settingsBtn}>
                  <Settings size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className={styles.contentArea} ref={contentRef}>
            <div className={styles.contentCenter}>
              <div className={styles.placeholderContent}>
                <div className={styles.placeholderIcon}>
                  <LayoutDashboard size={40} />
                </div>
                <h2 className={styles.placeholderTitle}>Main Content Area</h2>
                <p className={styles.placeholderText}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
