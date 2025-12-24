import React from "react";
import "./home.css";
import credlock from "../assets/credlock.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        const revealElements = document.querySelectorAll(".reveal");

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;

            revealElements.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;

                if (elementTop < windowHeight - 100) {
                    el.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll(); // page load pe bhi check kare

        return () => window.removeEventListener("scroll", revealOnScroll);
    }, []);
    useEffect(() => {
        const intro = document.querySelector(".intro-screen");

        setTimeout(() => {
            intro.classList.add("unlock");
        }, 1200); // lock + key animation start

        setTimeout(() => {
            intro.classList.add("hide");
        }, 3000); // fade out intro
    }, []);

    return (
        <>

            <div>
                {/* HOME PAGE HEADER (ONLY FOR HOME) */}
                <div className="home-header">
                    <div className="home-nav-left">
                        <span className="home-lock">🔐</span>
                        <span className="home-brand">CredLock</span>
                    </div>

                    <div className="home-nav-right">
                        <a href="#know">Know More</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>

                {/* HERO SECTION */}
                <section className="hero reveal">
                    <img
                        src={credlock}
                        alt="credlockLogo"
                        className="hero-logo"
                    />


                    <p className="tagline">The Trust Layer of Modern Hiring</p>

                    <h1 className="hero-title">CredLock</h1>

                    <p className="hero-desc">
                        Blockchain-powered credential verification platform that eliminates
                        fake certificates, long verification cycles, and trust issues in hiring.
                    </p>

                    <div className="hero-buttons">
                        <button className="primary-btn" onClick={() => {
                            document
                                .getElementById("who-uses-credlock")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}>Get Started</button>
                        <button className="secondary-btn" onClick={() => {
                            document
                                .getElementById("who-uses-credlock")
                                ?.scrollIntoView({ behavior: "smooth" });
                        }}>Verify Credential</button>
                    </div>

                    {/* FILLING EMPTY SPACE */}
                    <div className="intro-cards">
                        <div className="intro-card">
                            <h4>⏳ 15–30 Days</h4>
                            <p>Traditional verification time</p>
                        </div>

                        <div className="intro-card highlight">
                            <h4>⚡ Seconds</h4>
                            <p>Instant blockchain-backed verification</p>
                        </div>

                        <div className="intro-card">
                            <h4>🛡️ Tamper-Proof</h4>
                            <p>Credentials secured using blockchain hashes</p>
                        </div>
                    </div>
                </section>


                {/* WHAT IS CREDLOCK */}
                <section className="whatIsSection reveal">
                    <div className="whatIsContent">
                        <h2 className="whatTitle">What is CredLock?</h2>

                        <p className="whatDesc">
                            CredLock is a blockchain-powered credential verification platform built to
                            solve one of the biggest problems in modern hiring — trust.
                            <br /><br />
                            Today, employers struggle with fake certificates, long verification cycles,
                            third-party dependency, and manual paperwork that can take weeks or even
                            months. Candidates suffer delays, lost opportunities, and repeated
                            verification requests for the same credentials.
                            <br /><br />
                            CredLock eliminates these issues by issuing and verifying credentials on a
                            decentralized blockchain network. Once a credential is issued, it becomes
                            tamper-proof, instantly verifiable, and globally trusted. Employers can
                            verify authenticity in seconds, candidates gain ownership of their verified
                            records, and organizations reduce cost, time, and risk — all without
                            paperwork or intermediaries.
                        </p>
                    </div>




                    {/* ===== STATS (RESTORED – SAME STYLE) ===== */}
                    <div className="statsGrid">

                        <div className="statCard">
                            <h3>90%</h3>
                            <p>Faster Verification</p>
                        </div>

                        <div className="statCard">
                            <h3>100%</h3>
                            <p>Tamper-Proof Records</p>
                        </div>

                        <div className="statCard">
                            <h3>0</h3>
                            <p>Manual Paperwork</p>
                        </div>

                        <div className="statCard">
                            <h3>Global</h3>
                            <p>Trust at Scale</p>
                        </div>
                    </div>

                </section>

                {/* WHY CREDLOCK MATTERS */}
                <section className="why-matters-section reveal">
                    <div className="why-matters-container">

                        {/* LEFT CONTENT */}
                        <div className="why-left">
                            <h2 className="why-title">Why CredLock Matters</h2>

                            <p className="why-desc">
                                Hiring today is digital, global, and fast — but trust still relies on
                                outdated systems. CredLock introduces a new trust layer for modern hiring,
                                where credentials are instantly verifiable, tamper-proof, and owned by candidates.
                            </p>

                            <p className="why-desc">
                                With CredLock, organizations eliminate repeated verification cycles,
                                candidates gain ownership of their achievements, and employers hire with confidence —
                                all powered by blockchain-backed trust.
                            </p>
                        </div>

                        {/* RIGHT CARDS */}
                        <div className="why-cards">

                            <div className="why-card">
                                <h3>⚡ Faster Hiring</h3>
                                <p>Verify credentials in seconds instead of weeks.</p>
                            </div>

                            <div className="why-card">
                                <h3>🔐 Tamper-Proof Trust</h3>
                                <p>Immutable records secured using blockchain hashes.</p>
                            </div>

                            <div className="why-card">
                                <h3>🌍 Global Acceptance</h3>
                                <p>One verification that works across organizations.</p>
                            </div>

                            <div className="why-card">
                                <h3>👤 Candidate Ownership</h3>
                                <p>Users fully control and share their verified credentials.</p>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="how-works-section reveal" id="how-it-works">
                    <div className="how-works-container">

                        <h2 className="how-works-title">How CredLock Works</h2>

                        <p className="how-works-desc">
                            CredLock converts traditional credential verification into a secure,
                            blockchain-powered digital flow. Instead of slow manual checks and
                            repeated verification requests, CredLock creates a single source of truth
                            that anyone can verify instantly.
                        </p>

                        <p className="how-works-desc">
                            Credentials are issued once, stored securely, and verified globally —
                            eliminating fraud, delays, and dependency on third parties.
                        </p>

                        <div className="how-works-cards">

                            <div className="work-card">
                                <h3>Issue Digital Credentials</h3>
                                <p>
                                    Employers or institutions issue verified digital credentials directly
                                    on CredLock after authentication.
                                </p>
                            </div>

                            <div className="work-card">
                                <h3>Secure on Blockchain</h3>
                                <p>
                                    Credential hashes are stored immutably on the blockchain, ensuring
                                    tamper-proof and transparent records.
                                </p>
                            </div>

                            <div className="work-card">
                                <h3>Instant Verification</h3>
                                <p>
                                    Employers verify credentials in seconds without paperwork, emails,
                                    or third-party delays.
                                </p>
                            </div>

                            <div className="work-card">
                                <h3>Candidate Ownership</h3>
                                <p>
                                    Candidates fully control their verified credentials and reuse them
                                    across organizations globally.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>


                {/* ===== WHO USES ===== */}
                <section id="who-uses-credlock" className="who-uses reveal" >
                    <h2 className="section-title">Who Uses CredLock?</h2>

                    <div className="who-cards">

                        <div className="who-card">
                            <h3>Employer</h3>
                            <p>
                                Instantly verify candidate credentials, eliminate fraud,
                                and hire faster with blockchain-backed trust.
                            </p>
                            <div className="who-actions">
                                <button onClick={() => navigate("/login/employer")} className="btn secondary">Login</button>
                                <button onClick={() => navigate("/signup/employer")} className="btn primary">Sign Up</button>
                            </div>
                        </div>

                        <div className="who-card">
                            <h3>Candidate</h3>
                            <p>
                                Own your verified credentials and share trusted records
                                instantly without repeated verification.
                            </p>
                            <div className="who-actions">
                                <button className="btn secondary" onClick={() => navigate("/login/candidate")}>Login</button>
                                <button className="btn primary" onClick={() => navigate("/signup/candidate")}>Sign Up</button>
                            </div>
                        </div>

                        <div className="who-card">
                            <h3>Institution</h3>
                            <p>
                                Issue tamper-proof digital credentials that are
                                globally verifiable and fraud-resistant.
                            </p>
                            <div className="who-actions">
                                <button className="btn secondary" onClick={() => navigate("/login/institution")}>Login</button>
                                <button className="btn primary" onClick={() => navigate("/signup/institution")}>Sign Up</button>
                            </div>
                        </div>

                    </div>
                </section>


                {/* ===== CONTACT ===== */}
                <section className="contact-section reveal" id="contact">
                    <div className="contact-container">

                        <div className="contact-left">
                            <h2>Contact Us</h2>
                            <p>
                                Have questions about CredLock, partnerships, or integrations?
                                Our team is here to help you build trust in modern hiring.
                            </p>

                            <div className="contact-info">
                                <div>
                                    <span>📍 Address</span>
                                    <p>CredLock HQ, Tech Park, Bengaluru, India</p>
                                </div>

                                <div>
                                    <span>📧 Email</span>
                                    <p>support@credlock.io</p>
                                </div>

                                <div>
                                    <span>📞 Phone</span>
                                    <p>+91 98765 43210</p>
                                </div>

                                <div>
                                    <span>🕒 Working Hours</span>
                                    <p>Mon – Fri, 10:00 AM – 6:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-right">
                            <form className="contact-form">
                                <input type="text" placeholder="Your Name" />
                                <input type="email" placeholder="Your Email" />
                                <input type="text" placeholder="Subject" />
                                <textarea placeholder="Your Message" rows="5"></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                        </div>

                    </div>
                </section>


            </div>
        </>
    );
}
