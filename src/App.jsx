import React, { useState, useEffect } from "react";
import "./index.css";

// --- SVG Icon Components (No changes here) ---
const ICONS = {
  Book: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.523 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.523 4.5 1.253v13C19.832 18.523 18.246 18 16.5 18s-3.332.523-4.5 1.253"
      />
    </svg>
  ),
  Phone: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.153a1 1 0 01-.986-.836l-.74-4.435a1 1 0 01.54-1.06l1.548-.773a11.037 11.037 0 00-6.105-6.105l-.774 1.548a1 1 0 01-1.06.54l-4.435-.74A1 1 0 013 4.153V3z" />
    </svg>
  ),
  Check: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  ),
  Menu: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  ),
  Close: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ),
  Plus: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  ),
  Quote: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M9.983 3v7.391c0 2.9-2.35 5.25-5.25 5.25a.75.75 0 010-1.5 3.75 3.75 0 003.75-3.75V3h1.5zm9.25 0v7.391c0 2.9-2.35 5.25-5.25 5.25a.75.75 0 010-1.5 3.75 3.75 0 003.75-3.75V3h1.5z" />
    </svg>
  ),
  Expert: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  ),
  Curriculum: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  ),
  Community: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962A3.75 3.75 0 0112 15v-2.253m0-2.253a3.75 3.75 0 016.75 0M12 15v-2.253m0 0a3.75 3.75 0 01-7.5 0M12 15V7.5m0 0a3.75 3.75 0 01-7.5 0"
      />
    </svg>
  ),
  Library: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6m-6 4.5h6M6.75 6.75h.008v.008H6.75V6.75zm.75 4.5h.008v.008H7.5v-4.5zm-.75 4.5h.008v.008H6.75v-4.5z"
      />
    </svg>
  ),
  Location: ({ className }) => (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.1.4-.27.61-.473A10.935 10.935 0 0014.5 12.5a4.5 4.5 0 00-9 0 10.935 10.935 0 003.301 5.144c.21.203.424.373.61.473a5.741 5.741 0 00.28.14l.018.008.006.003zM10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
        clipRule="evenodd"
      />
    </svg>
  ),
};

// --- Page Components ---

const HomePage = ({ setPage }) => (
  <>
    <div className="hero-section text-pattern-bg">
      <div className="hero-content">
        <div className="hero-shield">★</div>
        <h1 className="hero-title animate-slide-in-left">
          <span>American Institute</span>
          <br />
          of English Learning
        </h1>
        <p className="hero-subtitle animate-slide-in-left">
          Join Rohtak's premier English institute to build the fluency and
          confidence you need to succeed in your career and life.
        </p>
        <button
          className="hero-cta-button animate-slide-in-left"
          onClick={() => setPage("courses")}
        >
          Explore Our Courses
        </button>
      </div>
      <div className="hero-image-container animate-fade-in">
        <img
          src="/profile.jpg"
          alt="Ajay Arya, Director of American Institute of English Learning"
          className="hero-image animate-subtle-float"
        />
        <div className="hero-image-caption">
          <h3>Ajay Arya</h3>
          <p>Director, AIEL</p>
        </div>
      </div>
    </div>

    <div id="why-us" className="page-section">
      <div className="content-wrapper">
        <h2 className="section-title">
          Why Choose <span>AIEL?</span>
        </h2>
        <div className="card-grid-4">
          {[
            {
              icon: "Expert",
              title: "Expert-Led Training",
              text: "Learn from seasoned professionals with years of experience in English language education.",
            },
            {
              icon: "Curriculum",
              title: "Proven Curriculum",
              text: "Our courses are designed for practical, real-world results, focusing on spoken fluency.",
            },
            {
              icon: "Community",
              title: "Supportive Community",
              text: "We provide a friendly, encouraging environment where students can thrive and practice without fear.",
            },
            {
              icon: "Library",
              title: "Dedicated Study Space",
              text: "Utilize our quiet library for focused self-study and access to extensive learning materials.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="lift-card animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="why-us-icon">
                {React.createElement(ICONS[item.icon])}
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div id="testimonials" className="page-section-notched light-section">
      <h2 className="section-title">
        Success Stories from <span>Our Students</span>
      </h2>
      <TestimonialMarquee />
    </div>

    <div id="mission" className="page-section mission-section">
      <div className="content-wrapper mission-content-grid">
        <div className="mission-image-wrapper">
          <img
            src="/student.jpg"
            alt="Students learning in a collaborative environment"
            className="mission-image"
          />
        </div>

        <div className="mission-text-wrapper">
          <h2 className="section-title">
            Our <span>Mission</span>
          </h2>
          <p>
            Our goal is to dismantle the barriers of communication. As Rohtak's
            premier English Institute, we are dedicated to providing the highest
            quality Spoken English classes and professional training. We firmly
            believe that mastering English unlocks a world of career
            opportunities and personal growth. Our focus is not merely on
            language rules and advanced grammar, but on building practical
            English fluency and the confidence our students need to use their
            skills effectively in interviews, public speaking, and any
            real-world situation.
          </p>
        </div>
      </div>
    </div>

    <div id="faq" className="page-section light-section">
      <div className="content-wrapper">
        <h2 className="section-title">
          Frequently Asked <span>Questions</span>
        </h2>
        <FAQ />
      </div>
    </div>
  </>
);

const TestimonialMarquee = () => {
  const testimonials = [
    {
      text: "The 60-day plan was perfect. AIEL took my English from basic to business-proficient.",
      author: "Rohan S.",
    },
    {
      text: "An incredible learning environment. The teaching methods are effective and make grammar easy.",
      author: "Priya K.",
    },
    {
      text: "The crash course was intense but worth it. I got my desired IELTS band thanks to the dedicated faculty!",
      author: "Amit V.",
    },
    {
      text: "My confidence has skyrocketed! The group discussion sessions were incredibly helpful.",
      author: "Sunita M.",
    },
    {
      text: "Best decision for my career. The interview preparation module landed me my dream job.",
      author: "Vikram Rathore",
    },
    {
      text: "Finally fluent! The focus on practical, spoken English makes all the difference.",
      author: "Anjali G.",
    },
    {
      text: "The faculty is amazing, very supportive and knowledgeable. Highly recommended!",
      author: "Deepak C.",
    },
    {
      text: "I cleared my embassy interview with ease after their specialized training program.",
      author: "Neha Sharma",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonial-marquee-container">
      <div className="marquee-track">
        {duplicatedTestimonials.map((testimonial, index) => (
          <div className="testimonial-card-marquee" key={index}>
            <ICONS.Quote className="testimonial-quote-icon" />
            <p>"{testimonial.text}"</p>
            <span className="author">- {testimonial.author}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CoursesPage = ({ setPage }) => {
  const courses = [
    {
      duration: "30-Day",
      title: "Crash Course",
      price: "₹4,000",
      features: [
        "Intensive Daily Classes",
        "Spoken English Focus",
        "Basic Grammar Review",
        "Vocabulary Building",
        "Interview Preparation",
      ],
      color: "red",
    },
    {
      duration: "60-Day",
      title: "Comprehensive Plan",
      price: "₹7,000",
      features: [
        "Everything in 30-Day",
        "Advanced Grammar",
        "Writing & Composition",
        "Group Discussions",
      ],
      color: "blue",
      popular: true,
    },
    {
      duration: "90-Day",
      title: "Mastery Program",
      price: "₹9,000",
      features: [
        "Everything in 60-Day",
        "Full Fluency Training",
        "Accent Neutralization",
        "IELTS/TOEFL Foundation",
      ],
      color: "gray",
    },
  ];
  return (
    <div className="page-section courses">
      <div className="content-wrapper">
        <h1 className="section-title page-title">
          Our Course <span>Plans</span>
        </h1>
        <p className="page-subtitle">
          Find the perfect plan to match your learning goals and schedule.
        </p>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`course-card ${course.color} ${
                course.popular ? "popular" : ""
              }`}
            >
              {course.popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              <div className="course-card-content">
                <h2 className={`course-duration`}>{course.duration}</h2>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-price">{course.price}</p>
                <ul className="course-features">
                  {course.features.map((feature, i) => (
                    <li key={i} className="feature-item">
                      <ICONS.Check className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="course-card-footer">
                <button
                  className={`enroll-button`}
                  onClick={() => setPage("contact")}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [status, setStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyF5dI5-3QhMWEyuaDQz7RDqmHdri17htrp97-tXM0VAcFeRy9jCEppgkn1zA9T3P8/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(formData),
        }
      );
      const result = await response.json();
      if (result.result !== "success") {
        throw new Error(result.message || "Submission failed");
      }
      setStatus("success");
      setFormData({ name: "", phone: "" });
    } catch (error) {
      setStatus("error");
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="page-section contact">
      <div className="content-wrapper">
        <h1 className="section-title page-title">
          Connect <span>With Us</span>
        </h1>
        <p className="page-subtitle">
          We're here to help. Reach out by phone, message, or visit us in
          person.
        </p>
        <div className="contact-options">
          <div className="contact-card">
            <ICONS.Phone className="icon" />
            <h3>Talk To Us Directly</h3>
            <p>
              Have questions? Call us for an immediate response during our
              working hours.
            </p>
            <a href="tel:+919896105501" className="direct-call-button">
              Call +91 98961 05501
            </a>
          </div>
          <div className="contact-card">
            <ICONS.Book className="icon" />
            <h3>Leave a Message</h3>
            <p>
              Fill out the form and we will get back to you as soon as possible.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-input"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="submit-button"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Request a Callback"}
              </button>
              {status === "success" && (
                <p className="form-status-message success">
                  Thank you! We'll call you back soon.
                </p>
              )}
              {status === "error" && (
                <p className="form-status-message error">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="map-section-wrapper">
        <div className="map-section-header">
          <h2 className="section-title">
            Visit <span>Our Institute</span>
          </h2>
          <p className="page-subtitle">
            Find us easily in Rohtak. We look forward to welcoming you.
          </p>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3491.901150293418!2d76.5912953762492!3d28.90104847551307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d85a63da29631%3A0x1943c596395fb42!2sAMERICAN%20INSTITUTE%20of%20English%20Language!5e0!3m2!1sen!2sin!4v1668588800000!5m2!1sen!2sin"
            className="map-embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AIEL Location on Google Maps"
          ></iframe>
        </div>
        <div className="map-section-footer">
          <a
            href="https://www.google.com/maps/place/AMERICAN+INSTITUTE+of+English+Language+,+Power+House+Chowk+Rohtak,Haryana/@28.8867024,76.5748211,14z/data=!4m10!1m2!2m1!1sAmerican+Institute+of+English+Rohtak!3m6!1s0x390d85832b294c5f:0x36eddfbb0cdb654e!8m2!3d28.8867024!4d76.6129299!15sCiRBbWVyaWNhbiBJbnN0aXR1dGUgb2YgRW5nbGlzaCBSb2h0YWsiA4gBAZIBF2VuZ2xpc2hfbGFuZ3VhZ2Vfc2Nob29s4AEA!16s%2Fg%2F11nyg9w3qp?entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link-button"
          >
            <ICONS.Location className="icon" /> Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "Who are these courses for?",
      a: "Our courses are for students, professionals, homemakers, and anyone looking to improve their English communication skills for personal or professional growth.",
    },
    {
      q: "What is the duration of the classes?",
      a: "Each class session typically lasts for 1 to 1.5 hours, held daily from Monday to Saturday.",
    },
    {
      q: "Do you provide study material?",
      a: "Yes, all necessary study materials, including notes and practice exercises, are provided as part of the course fee.",
    },
    {
      q: "Can I join a demo class?",
      a: "Absolutely! We encourage new students to attend a free demo class to experience our teaching style and environment.",
    },
  ];
  return (
    <div className="faq-container">
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <button
            className="faq-question"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.q}
            <ICONS.Plus
              className={`faq-icon ${openIndex === index ? "open" : ""}`}
            />
          </button>
          <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
            <p>{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const Header = ({ page, setPage, isMenuOpen, setMenuOpen, isScrolled }) => (
  <header className={`app-header ${isScrolled ? "scrolled" : ""}`}>
    <div className="content-wrapper">
      <nav className="header-nav">
        <button onClick={() => setPage("home")} className="logo-button">
          <ICONS.Book className="logo-icon" />
          <span className="logo-text">AIEL</span>
        </button>
        <div className="desktop-nav-links">
          <button
            onClick={() => setPage("home")}
            className={`nav-link ${page === "home" ? "active" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => setPage("courses")}
            className={`nav-link ${page === "courses" ? "active" : ""}`}
          >
            Courses
          </button>
          <button
            onClick={() => setPage("contact")}
            className={`nav-link ${page === "contact" ? "active" : ""}`}
          >
            Contact
          </button>
        </div>
        <button
          className="mobile-menu-button"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <ICONS.Close /> : <ICONS.Menu />}
        </button>
      </nav>
    </div>

    {/* Mobile Navigation Elements (Now always rendered, visibility controlled by CSS/class) */}
    <div
      className={`mobile-nav-overlay ${isMenuOpen ? "open" : ""}`}
      onClick={() => setMenuOpen(false)}
    ></div>
    <ul className={`mobile-nav-menu ${isMenuOpen ? "open" : ""}`}>
      <li>
        <button
          onClick={() => {
            setPage("home");
            setMenuOpen(false);
          }}
          className="nav-link"
        >
          Home
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setPage("courses");
            setMenuOpen(false);
          }}
          className="nav-link"
        >
          Courses
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setPage("contact");
            setMenuOpen(false);
          }}
          className="nav-link"
        >
          Contact
        </button>
      </li>
    </ul>
  </header>
);

const App = () => {
  const [page, setPage] = useState("home");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Close menu when page changes
    setMenuOpen(false);
  }, [page]);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Control body overflow when menu is open
  useEffect(() => {
    // Only apply overflow hidden to body on mobile resolutions when menu is open
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const renderPage = () => {
    switch (page) {
      case "courses":
        return <CoursesPage setPage={setPage} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="app-container">
      <Header
        page={page}
        setPage={setPage}
        isMenuOpen={isMenuOpen}
        setMenuOpen={setMenuOpen}
        isScrolled={isScrolled}
      />
      <main className="main-content">{renderPage()}</main>
      <footer className="app-footer">
        <div className="content-wrapper footer-content">
          <p>
            © {new Date().getFullYear()} American Institute of English Learning.
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
