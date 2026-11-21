import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaCode, FaGraduationCap, FaBriefcase, FaPenNib } from 'react-icons/fa';
import './index.css';

export default function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Edward</div>
        <ul className="nav-links">
          <li className="active" onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('services')}>Services</li>
          <li onClick={() => scrollToSection('skills')}>Skills</li>
          <li onClick={() => scrollToSection('education')}>Education</li>
          <li onClick={() => scrollToSection('experience')}>Experience</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
        </ul>
      </nav>

      <main id="home" className="hero-section">
        <div className="hero-container">
          <div className="image-wrapper">
            <div className="red-ellipse"></div>
            <img src="/main.jpg" alt="Edward Profile" className="profile-img" />
          </div>

          <div className="text-content">
            <div>
              <h1>Hi, It's <span className="highlight">Edward</span></h1>
              <h2>I'm a <span className="highlight">3rd Year BSIT Student</span></h2>
            </div>
            <p>
              My Name is Edward A. Locsin, I'm a 3rd Year BSIT Student from Gordon College, and this is my final project for submission IT Elective 2.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF size={20} /></a>
              <a href="#" className="social-icon" aria-label="GitHub"><FaGithub size={20} /></a>
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram size={20} /></a>
            </div>
            <button className="hire-btn" onClick={() => scrollToSection('contact')}>Hire me</button>
          </div>
        </div>
      </main>

      <section id="services" className="section-container">
        <h2 className="section-title">My <span className="highlight">Services</span></h2>
        <div className="cards-grid">
          <div className="card">
            <FaPenNib className="card-icon" />
            <h3>Script Writing</h3>
            <p>Writing engaging scripts for short films, documentaries, and social media content.</p>
          </div>
          <div className="card">
            <FaCode className="card-icon" />
            <h3>Web Development</h3>
            <p>Building responsive and modern websites using React and other web technologies.</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section-container">
        <h2 className="section-title">My <span className="highlight">Skills</span></h2>
        <div className="skills-list">
          <div className="skill-item"><span>HTML & CSS</span><div className="progress-bar"><div className="progress" style={{width: '90%'}}></div></div></div>
          <div className="skill-item"><span>JavaScript / React</span><div className="progress-bar"><div className="progress" style={{width: '80%'}}></div></div></div>
          <div className="skill-item"><span>Script Writing</span><div className="progress-bar"><div className="progress" style={{width: '95%'}}></div></div></div>
          <div className="skill-item"><span>UI/UX Design</span><div className="progress-bar"><div className="progress" style={{width: '75%'}}></div></div></div>
        </div>
      </section>

      <section id="education" className="section-container">
        <h2 className="section-title">My <span className="highlight">Education</span></h2>
        <div className="timeline">
          <div className="timeline-item">
            <FaGraduationCap className="timeline-icon" />
            <div className="timeline-content">
              <h3>BS in Information Technology</h3>
              <h4>Gordon College | 2024 - Present</h4>
              <p>Currently in my 3rd year, focusing on web development and software engineering.</p>
            </div>
          </div>
          <div className="timeline-item">
            <FaGraduationCap className="timeline-icon" />
            <div className="timeline-content">
              <h3>Senior High School</h3>
              <h4>SJC Olongapo SHS Dept. | 2022 - 2024</h4>
              <p>Graduated with honors in the STEM strand.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section-container">
        <h2 className="section-title">My <span className="highlight">Experience</span></h2>
        <div className="timeline">
          <div className="timeline-item">
            <FaBriefcase className="timeline-icon" />
            <div className="timeline-content">
              <h3>Freelance Web Developer</h3>
              <h4>Self-Employed | 2023 - Present</h4>
              <p>Building custom portfolio websites and landing pages for local businesses.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-container">
        <h2 className="section-title">Contact <span className="highlight">Me</span></h2>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Edward A. Locsin. All rights reserved.</p>
      </footer>
    </div>
  );
}
