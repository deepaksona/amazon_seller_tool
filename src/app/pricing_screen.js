"use client";

import styles from "../css/pricing_screen/pricing_screen.module.css";

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Connect up to 2 marketplaces",
        "Basic inventory sync",
        "Order management",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Growth",
      price: "$79",
      period: "/month",
      features: [
        "Connect up to 5 marketplaces",
        "Advanced automation",
        "Profit & expense analytics",
        "Priority support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited marketplaces",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 premium support",
      ],
      popular: false,
    },
  ];

  return (
    <div className={styles.pricingSection}>
      <h2 className={styles.pricingHeading}>Choose the Right Plan for You</h2>
      <p className={styles.pricingDesc}>
        Flexible pricing for every stage of your eCommerce journey.
      </p>

      <div className={styles.pricingGrid}>
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`${styles.pricingCard} ${
              plan.popular ? styles.popular : ""
            }`}
          >
            <h3 className={styles.planName}>{plan.name}</h3>
            <p className={styles.planPrice}>
              {plan.price}
              <span>{plan.period}</span>
            </p>
            <ul className={styles.planFeatures}>
              {plan.features.map((f, j) => (
                <li key={j}>{f}</li>
              ))}
            </ul>
            <button className={styles.planButton}>
              {plan.name === "Enterprise" ? "Contact Us" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
