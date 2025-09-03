'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './contact.module.css';
import Navbar from '../components/pricing_page/nav_bar/navbar';
import Footer from '../components/pricing_page/footer/footer';
import { Email, Phone, LocationOn, AccessTime } from "@mui/icons-material";
import gsap from "gsap";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // refs for animation
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const faqRef = useRef(null);

  // GSAP animations
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

    gsap.from(formRef.current, { x: -100, opacity: 0, duration: 1, delay: 0.5, ease: "power3.out" });

      gsap.from(infoRef.current, {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out"
      });

      gsap.from(gsap.utils.toArray(faqRef.current.querySelectorAll(`.${styles.faqCard}`)), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        // stagger: 0.2,
        // delay: 0,
        ease: "power3.in"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const faqData = [
    {
      question: "How quickly can I get started?",
      answer: "You can be up and running in less than 10 minutes with our guided setup process.",
      icon: "fas fa-rocket"
    },
    {
      question: "Do you offer phone support?",
      answer: "Yes! Phone support is available for Professional and Enterprise plans during business hours.",
      icon: "fas fa-phone"
    },
    {
      question: "Can I integrate with my existing tools?",
      answer: "Absolutely! We offer integrations with 100+ popular e-commerce tools and marketplaces.",
      icon: "fas fa-plug"
    }
  ];

  return (
    <>
      <Navbar/>
      <div ref={containerRef} className={styles.contactPage}>
        <div className={styles.container}>
          {/* Header Section */}
          <div ref={headerRef} className={styles.header}>
            <h1>Get in Touch</h1>
            <p>Have questions about LemonLayer? We&apos;re here to help! Reach out to our team and we&apos;ll get back to you within 24 hours.</p>
          </div>

          {/* Main Content Grid */}
          <div ref={formRef} className={styles.contentGrid}>
            {/* Contact Form */}
            <div    className={styles.contactForm}>
              <h2>Send us a Message</h2>
              <p className={styles.formSubtitle}>Fill out the form below and we&apos;ll respond as soon as possible.</p>
              
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <i className="fas fa-check-circle"></i>
                  Thank you! We&apos;ll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputRow}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="company">Company (Optional)</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className={styles.textarea}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`${styles.submitBtn} ${isSubmitting ? styles.submitting : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className={styles.contactInfo}>
              <h2>Contact Information</h2>
              
              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}>
                  <Email style={{  color: "#ffffff", height:"80px"  }} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>Email</h3>
                    <p>support@lemonlayer.com</p>
                    <span>For general inquiries</span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}>
                    <Phone style={{  color: "#ffffff", height:"80px"  }} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                    <span>Mon-Fri, 9AM-6PM EST</span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}>
                    <LocationOn style={{  color: "#ffffff", height:"80px"  }} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>Office</h3>
                    <p>123 Innovation Drive</p>
                    <span>San Francisco, CA 94105</span>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <div className={styles.cardIcon}>
                    <AccessTime style={{  color: "#ffffff", height:"80px"  }} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>Support Hours</h3>
                    <p>24/7 via chat & email</p>
                    <span>Phone: Mon-Fri, 9AM-6PM EST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div ref={faqRef} className={styles.faqSection}>
            <h2>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              {faqData.map((faq, index) => (
                <div key={index} className={styles.faqCard}>
                  <div className={styles.faqIcon}>
                    <i className={faq.icon}></i>
                  </div>
                  <div className={styles.faqContent}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
