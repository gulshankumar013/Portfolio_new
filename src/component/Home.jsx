import React, { useEffect, useRef, useState } from "react";
import "../Css/Home.css";
import blurImage from "../assets/blur-1.png";
import flotingImage from "../assets/astronaut.png";
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import successSound from '../assets/mixkit-correct-answer-tone-2870.wav';
import failSound from '../assets/mixkit-software-interface-start-2574.wav';


import {
  FaFigma,
  FaDatabase,
  FaSitemap,
  FaMobileAlt,
  FaLaptopCode,
  FaCodeBranch,
  FaDownload,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderFinish = () => {
    setShowLoader(false);
  };

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animating elements with class "observe-me"
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.2 }
    );

    const targets = document.querySelectorAll(".observe-me");
    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const handleMouseMove = (e) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const moveX = (x / rect.width - 0.5) * 30; // adjust intensity
        const moveY = (y / rect.height - 0.5) * 30;

        card.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
      });
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", () => {
        card.style.backgroundPosition = "center";
      });
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
      });
    };
  }, []);



  // send email funtions by EmailJs

 const form = useRef();
  const playSound = (audioFile) => {
  const audio = new Audio(audioFile);
  audio.play();
};

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_s7u4omg',
    'template_f83bkp5',
    form.current,
    'NS2GNTIzRxd4Yp6ln'
  )
  .then((result) => {
    console.log('Email sent:', result.text);
    playSound(successSound);             // Play success sound
    toast.success('Message sent successfully!');
    e.target.reset();
  }, (error) => {
    playSound(failSound);                // Play fail sound
    toast.error('Error sending email!');
    alert('Failed to send message.');
  });
};

  return (
    <>
      {/* Transparent Navbar */}
   <nav className={`navbar ${isScrolled ? "scrolled-nav" : "transparent-nav"}`}>
  <div className="nav-content-wrapper">
    {/* Nav menu centered */}
    <ul className="nav-menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    {/* Right side: Resume button + social icons */}
    <div className="nav-right-items">
      <a
        href="GULSHAN KUMAR.pdf"
        download
        className="resume-btn"
      >
        <FaDownload className="download-icon" /> Resume
      </a>

      <a
        href="https://www.linkedin.com/in/gulshan-kumar-1b036717a/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="LinkedIn"
      >
        <FaLinkedin  className="download-icon-social"/>
      </a>
      <a
        href="https://github.com/gulshankumar013"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="GitHub"
      >
        <FaGithub className="download-icon-social" />
      </a>
    </div>
  </div>
</nav>
      {/* Main Slide Section */}
      <div id="home" className="pxl-slide-item">
        <img src={blurImage} alt="Blur effect" className="blur-overlay" />
        <div className="pxl-slide-inner">
          <img
            src={flotingImage}
            alt="Astronaut"
            className="astronaut-overlay"
          />
          <div className="pxl-slide-heading">
            <div className="pxl-heading-subtitle1">Hi, I AM GULSHAN KUMAR</div>
            <h1 className="pxl-heading-title">
              <span className="pxl-title-text">
                CREATIVITY{" "}
                <span className="pxl-text-highlight">INNOVATION &amp;</span>{" "}
                USER EXPERIENCE
              </span>
            </h1>
          </div>
          <div className="pxl-slide-content">
            <a
              href="https://demo.casethemes.net/mouno/about"
              className="pxl-slide-icon wow zoomInUpRight"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="117"
                height="115"
                viewBox="0 0 117 115"
                fill="none"
                color="white"
              >
                <path
                  d="M116 1H1V23.8283H76.9L2.15 96.8788L19.4 114L93 40.9495V114H116V1Z"
                  stroke="currentColor"
                  strokeWidth="0.6"
                ></path>
              </svg>
            </a>
            <p className="pxl-slide-description">
              Thank you for placing your trust in me. I take full responsibility
              for delivering high-quality outcomes in every project I
              undertake...
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div id="about" className="section2">
        <div className="section2-child1"></div>
        <div className="section2-child2 observe-me">
          <h3 className="section2-heading2-h3">// About Me</h3>
          <h2 className="section2-heading2">Innovative full-service</h2>
          <h4 className="section2-heading4">
            I am a passionate Full Stack Developer with over 1 year of hands-on
            experience in building and maintaining scalable web applications
            using Java (Spring Boot) for the backend and React.js for the
            frontend. My core strength lies in crafting end-to-end solutions
            that are not only robust and efficient but also intuitive and
            user-friendly. I have strong expertise in RESTful API development,
            component-based UI architecture, and integrating dynamic frontends
            with secure and efficient backend systems. In addition to my
            development skills, I bring solid knowledge of relational databases
            including MySQL and Oracle SQL, allowing me to design, query, and
            optimize complex data models. I also have a creative edge with a
            keen eye for design, thanks to my proficiency in Figma, where I
            design clean, responsive, and user-centered interfaces. With a deep
            interest in problem-solving, clean code, and modern software
            practices, I continuously explore new tools and methodologies to
            improve performance and maintainability. Whether it’s collaborating
            in Agile teams, contributing to system architecture discussions, or
            refining UI/UX, I bring a balanced approach to both the technical
            and creative aspects of software development."
          </h4>
        </div>
      </div>

      <div className="section2-bottom">
        _________________________________________________________________________________________________________________________
      </div>
      <div className="section2-bottom-1 observe-me">
        <div className="section2-bottom-4">
          <li>UI/UX Design & Development</li>
          <li>Software Development Database</li>
          <li>Website Designing Requirement</li>
        </div>
        <div className="section2-bottom-2">
          <h2>MY MISSION</h2>
          <p>
            To craft efficient, scalable, and user-focused software solutions by
            combining strong backend logic with intuitive front-end experiences.
            I aim to continuously grow as a full-stack developer, embrace new
            technologies, and contribute to impactful projects in leading global
            tech environments
          </p>
        </div>
        <div className="section2-bottom-3">
          <h2>MY OBJECTIVE</h2>
          <p>
            To obtain a challenging role as a Full-Stack Developer where I can
            apply my skills in Java, Spring Boot, React, and MySQL to build
            innovative solutions. I am seeking opportunities in forward-thinking
            organizations where I can contribute to impactful projects, enhance
            my technical expertise, and grow into a high-performing software
            professional in a dynamic team environment.
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <div id="services" className="section3">
        <div className="section3-child-1">
          <h2>// MY SERVICE</h2>
          <p>Offering versatile digital services</p>
        </div>
        <div className="section3-child-2">
          {/* Floating text inside the green background */}
        </div>

        {/* Floating cards over center area */}
        <div className="floating-card-container">
          <div className="card-row">
            {/* Card 1: UI/UX Design */}
            <div className="card">
              <div className="card-bg-icon">
                <FaFigma />
              </div>
              <div className="card-icon-title">
                <FaFigma className="card-icon" />
                <h3 className="card-title">UI/UX Design</h3>
              </div>
              <p className="card-description">
                Designing user-friendly, interactive, and visually appealing
                interfaces using Figma and UX best practices.
              </p>
            </div>

            {/* Card 2: Database Design */}
            <div className="card">
              <div className="card-bg-icon">
                <FaDatabase />
              </div>
              <div className="card-icon-title">
                <FaDatabase className="card-icon" />
                <h3 className="card-title">Database Design</h3>
              </div>
              <p className="card-description">
                Creating scalable, normalized, and well-indexed databases using
                MySQL and other RDBMS technologies.
              </p>
            </div>

            {/* Card 3: System Design */}
            <div className="card">
              <div className="card-bg-icon">
                <FaSitemap />
              </div>
              <div className="card-icon-title">
                <FaSitemap className="card-icon" />
                <h3 className="card-title">System Design</h3>
              </div>
              <p className="card-description">
                Architecting robust systems using design principles,
                microservices, and scalable architecture patterns.
              </p>
            </div>
          </div>

          <div className="card-row">
            {/* Card 4: App Development */}
            <div className="card">
              <div className="card-bg-icon">
                <FaMobileAlt />
              </div>
              <div className="card-icon-title">
                <FaMobileAlt className="card-icon" />
                <h3 className="card-title">App Development</h3>
              </div>
              <p className="card-description">
                Building responsive mobile apps with seamless performance using
                modern frameworks and APIs.
              </p>
            </div>

            {/* Card 5: Web App Development */}
            <div className="card">
              <div className="card-bg-icon">
                <FaLaptopCode />
              </div>
              <div className="card-icon-title">
                <FaLaptopCode className="card-icon" />
                <h3 className="card-title">Web App Development</h3>
              </div>
              <p className="card-description">
                Developing interactive and scalable web applications using
                React, Spring Boot, and RESTful APIs.
              </p>
            </div>

            {/* Card 6: API Development & Integration */}
            <div className="card">
              <div className="card-bg-icon">
                <FaCodeBranch />
              </div>
              <div className="card-icon-title">
                <FaCodeBranch className="card-icon" />
                <h3 className="card-title">API Development & Integration</h3>
              </div>
              <p className="card-description">
                Designing and integrating secure, scalable APIs to connect
                services and third-party platforms effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="floating-text-container">
        <div class="floating-text-wrapper">
          <div class="floating-text">
            <span class="outlined-text">Full Stack Developer</span> Turning
            Ideas Into Reality — Experienced in Java, Spring Boot, React, MySQL
            — Passionate About Building Scalable, Clean & User-Friendly Web
            Applications.
          </div>
          <div class="floating-text">
            <span class="outlined-text">Full Stack Developer</span> Turning
            Ideas Into Reality — Experienced in Java, Spring Boot, React, MySQL
            — Passionate About Building Scalable, Clean & User-Friendly Web
            Applications.
          </div>
        </div>
      </div>

      {/* My projects cards section 4 */}
        <div className="section-4">
      <div className="section-4-a1">
        <div className="section4-child-1">
          <h2>// MY PROJECTS</h2>
          <p>Checkout my exclusive projects</p>
        </div>

        <div className="project-cards-container">
          <div className="project-card card-1">
            <div className="card-bg"></div>
            <div className="card-content">Project 1</div>
          </div>
          <div className="project-card card-2 lift-up">
            <div className="card-bg"></div>
            <div className="card-content">Project 2</div>
          </div>
          <div className="project-card card-3">
            <div className="card-bg"></div>
            <div className="card-content">Project 3</div>
          </div>
          <div className="project-card card-4">
            <div className="card-bg"></div>
            <div className="card-content">Project 4</div>
          </div>
          <div className="project-card card-5 lift-up">
            <div className="card-bg"></div>
            <div className="card-content">Project 5</div>
          </div>
          <div className="project-card card-6">
            <div className="card-bg"></div>
            <div className="card-content">Project 6</div>
          </div>
        </div>
      </div>
    </div>

      {/* section-5 */}
        <div id="contact" className="contact-section">
      <div className="contact-left">
        <p className="contact-label">// CONTACT US</p>
        <h1 className="contact-heading">
          <strong>Feel Free To <span>Ask</span></strong> Us Anything
        </h1>
        <p className="contact-desc">
          Have a <strong>project</strong> in mind or just want to say hello?
          Feel free to reach out. I'm always open to discussing new ideas,
          collaborations, or opportunities.
        </p>
      </div>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-row">
          <input type="text" name="user_name" placeholder="Your full name" required />
          <input type="email" name="user_email" placeholder="E-mail address" required />
        </div>
        <div className="form-row">
          <input type="text" name="subject" placeholder="Subject" required />
        </div>
        <div className="form-row">
          <textarea name="message" placeholder="Message" required></textarea>
        </div>
        
        <div className="submit-row">
          <button className="send-button" type="submit">Send Message</button>
        </div>
      </form>
    </div>
  

    
    </>
  );
};

export default Home;
