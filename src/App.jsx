
import { useState } from "react";
import { Link, NavLink, Route, Routes, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  Code2,
  Globe,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import logo from "./assets/logo.svg";
import "./index.css";

const brandName = "Aurel";

const services = [
  {
    title: "Brand & Web Design",
    description: "Modern websites and brand systems built to build trust quickly.",
    icon: Sparkles,
  },
  {
    title: "Conversion Websites",
    description: "Landing pages and funnels designed to turn interest into qualified leads.",
    icon: TrendingUp,
  },
  {
    title: "Custom Business Tools",
    description: "Process automation and dashboards that save time across your operations.",
    icon: BarChart3,
  },
];

const stats = [
  { value: "120+", label: "Projects shipped" },
  { value: "4.9/5", label: "Average client rating" },
  { value: "3x", label: "Faster launch cycles" },
];

const steps = [
  {
    title: "Discover",
    text: "We learn your goals, audience, and constraints before we sketch anything.",
  },
  {
    title: "Design",
    text: "We turn strategy into a clear, polished experience your team can trust.",
  },
  {
    title: "Launch",
    text: "We ship a refined, responsive product built for real business momentum.",
  },
];

const testimonials = [
  {
    quote:
      "The team helped us turn a rough idea into a website that immediately felt premium and credible.",
    author: "Aisha Rahman",
    role: "Founder, Northlane Studio",
  },
  {
    quote:
      "They understood our sales process and designed a site that made our offer easier to understand.",
    author: "Daniel Scott",
    role: "Marketing Lead, Vision Works",
  },
];

const templateCards = [
  {
    title: "SaaS Hero Site",
    description: "High-converting layout for product companies and startup launches.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Agency Portfolio",
    description: "Clean service pages and project storytelling for creative agencies.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Business Growth Site",
    description: "Modern marketing pages built to showcase services and generate enquiries.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");

  function handleContact(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Project enquiry - ${brandName}`);
    const body = encodeURIComponent(
      `Hello,\n\nI would like to discuss a new project.\nMy email: ${email}`
    );
    window.location.href = `mailto:mohammadabdulkhader20@gmail.com?subject=${subject}&body=${body}`;
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/" onClick={closeMenu}>
            <img src={logo} alt={`${brandName} logo`} className="brand-logo" />
            <span>
              {brandName}
            </span>
          </Link>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={menuOpen ? "nav open" : "nav"}>
            <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#process" onClick={closeMenu}>Process</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <Link className="nav-login" to="/login" onClick={closeMenu}>
              Sign in <ArrowRight size={15} />
            </Link>
            <Link className="nav-signup" to="/signup" onClick={closeMenu}>
              Get started
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <Sparkles size={15} />
                Luxury digital experiences
              </span>
              <h1>
                Refined websites for brands that want to lead with presence.
              </h1>
              <p>
                {brandName} helps premium businesses look sharper, sell smarter, and grow faster with strategic design, bespoke websites, and digital systems that elevate your market position.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#contact">
                  Book a discovery call <ArrowRight size={18} />
                </a>
                <a className="button-secondary" href="#services">
                  Explore services
                </a>
              </div>
              <div className="hero-trust">
                <CheckCircle2 size={17} />
                Clear communication, fast delivery, and measurable growth.
              </div>
            </div>

            <div className="hero-visual" aria-label="Aurel product preview">
              <div className="visual-card main-card">
                <div className="card-head">
                  <span className="dot purple" />
                  <span className="dot pink" />
                  <span className="dot gold" />
                  <span className="mini-label">AUREL</span>
                </div>
                <div className="card-body">
                  <div className="chart-box">
                    <div className="chart-bar short" />
                    <div className="chart-bar medium" />
                    <div className="chart-bar tall" />
                    <div className="chart-bar medium" />
                  </div>
                  <div className="stat-stack">
                    <div className="mini-stat">
                      <span>Lead growth</span>
                      <strong>+142%</strong>
                    </div>
                    <div className="mini-stat muted">
                      <span>Avg. launch</span>
                      <strong>14 days</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div className="floating-badge top-badge">
                <Target size={15} /> Strategy first
              </div>
              <div className="floating-badge bottom-badge">
                <Globe size={15} /> Built for growth
              </div>
            </div>
          </div>
        </section>

        <section className="stats-bar">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div className="stat-item" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container split-layout">
            <div>
              <span className="section-label">WHY TEAMS CHOOSE US</span>
              <h2>Simple strategy. Strong execution. Real business value.</h2>
            </div>
            <div className="about-copy">
              <p>
                We work with founders, growing teams, and service businesses that need a clearer digital presence and a stronger online sales process.
              </p>
              <div className="feature-list">
                <div>
                  <Building2 size={18} />
                  Clear positioning for modern brands
                </div>
                <div>
                  <ShieldCheck size={18} />
                  Trusted support from planning to launch
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="templates section" id="templates">
          <div className="container">
            <div className="section-head narrow">
              <span className="section-label">TEMPLATE IDEAS</span>
              <h2>Modern website layouts designed to feel premium and conversion-ready.</h2>
            </div>
            <div className="template-grid">
              {templateCards.map((template) => (
                <article className="template-card" key={template.title}>
                  <img src={template.image} alt={template.title} />
                  <div className="template-copy">
                    <h3>{template.title}</h3>
                    <p>{template.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services section" id="services">
          <div className="container">
            <div className="section-head">
              <span className="section-label">WHAT WE DO</span>
              <h2>Digital solutions that make business easier to trust.</h2>
            </div>
            <div className="service-grid">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article className="service-card" key={service.title}>
                    <div className="service-icon">
                      <Icon size={24} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link to="/signup" className="text-link">
                      Get started <ArrowRight size={15} />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="process section" id="process">
          <div className="container">
            <div className="section-head narrow">
              <span className="section-label">OUR PROCESS</span>
              <h2>A practical system built for speed and clarity.</h2>
            </div>
            <div className="process-grid">
              {steps.map((step, index) => (
                <div className="process-card" key={step.title}>
                  <span className="process-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials section">
          <div className="container">
            <div className="section-head narrow">
              <span className="section-label">CLIENT FEEDBACK</span>
              <h2>People like working with teams that keep it simple.</h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <article className="testimonial-card" key={item.author}>
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p>“{item.quote}”</p>
                  <div className="author-block">
                    <strong>{item.author}</strong>
                    <span>{item.role}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <span className="section-label">LET'S TALK</span>
              <h2>Ready to build something that feels credible from day one?</h2>
              <p>
                Tell us what you want to improve and we’ll help you map the right next step.
              </p>
              <div className="contact-pill">
                <Mail size={17} />
                <a href="mailto:mohammadabdulkhader20@gmail.com">mohammadabdulkhader20@gmail.com</a>
              </div>
              <div className="contact-pill">
                <Phone size={17} />
                <a href="tel:+917569211459">+91 75692 11459</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContact}>
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <button className="button-primary form-button" type="submit">
                Send enquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <a
        className="wa-float"
        href="https://wa.me/917569211459?text=Hi%20Aurel%2C%20I%20want%20to%20discuss%20my%20project."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      <footer className="site-footer">
        <div className="container footer-layout">
          <Link className="brand footer-brand" to="/">
            <img src={logo} alt={`${brandName} logo`} className="brand-logo" />
            <span>
              {brandName}
            </span>
          </Link>
          <p>Thoughtfully designed for growing businesses.</p>
          <span>© {new Date().getFullYear()} {brandName}</span>
        </div>
      </footer>
    </>
  );
}

function AuthPage({ mode }) {
  const isLogin = mode === "login";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      navigate("/");
    }, 900);
  }

  return (
    <main className="auth-page">
      <div className="auth-shell">
        <Link className="brand auth-brand" to="/">
          <img src={logo} alt={`${brandName} logo`} className="brand-logo" />
          <span>
            {brandName}
          </span>
        </Link>

        <div className="auth-card">
          <span className="section-label small-label">
            {isLogin ? "Welcome back" : "Create account"}
          </span>
          <h2>{isLogin ? "Sign in to your workspace" : `Start your project with ${brandName}`}</h2>

          <div className="auth-trust">
            <span>Secure</span>
            <span>Private</span>
            <span>Fast</span>
          </div>

          <div className="auth-socials">
            <button type="button" className="auth-social-btn">Google</button>
            <button type="button" className="auth-social-btn">Apple</button>
          </div>

          <div className="divider"><span>or continue with email</span></div>

          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <label>
                Full name
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>
            )}

            {!isLogin && (
              <label>
                Company name
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your business"
                  required
                />
              </label>
            )}

            <label>
              Email address
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </label>

            {isLogin && (
              <div className="auth-row">
                <label className="remember-me">
                  <input type="checkbox" defaultChecked />
                  <span>Remember me</span>
                </label>
                <Link to="/signup" className="text-link auth-link">Forgot password?</Link>
              </div>
            )}

            <button className="button-primary form-button" type="submit">
              {isLogin ? "Sign in" : "Create account"} <ArrowRight size={18} />
            </button>

            {submitted && (
              <p className="success-message">
                {isLogin ? "Signed in successfully." : "Account created successfully."}
              </p>
            )}
          </form>

          <p className="auth-switch">
            {isLogin ? "Need an account?" : "Already have an account?"}{" "}
            <Link to={isLogin ? "/signup" : "/login"}>
              {isLogin ? "Create one" : "Sign in"}
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<AuthPage mode="login" />} />
      <Route path="/signup" element={<AuthPage mode="signup" />} />
    </Routes>
  );
}
