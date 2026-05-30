"use strict";
"use client";

import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, Award, Briefcase, GraduationCap, ChevronRight, MessageSquare, BookOpen, Star } from "lucide-react";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import ContactForm from "@/components/ContactForm";
import { personalInfo, skills, projects, experience, technicalFoundationsDetails, education, certifications, strengths, blogPosts } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO SECTION */}
        <section id="hero" className="section" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
          <div className="container">
            <div className="hero-wrapper">
              <div className="hero-content">
                <Reveal delay={0.1}>
                  <div className="hero-badge">Available for Remote & Relocation</div>
                </Reveal>
                <Reveal delay={0.2}>
                  <h1 className="hero-title">
                    Hi, I'm <span className="text-gradient">{personalInfo.name}</span>
                  </h1>
                </Reveal>
                <Reveal delay={0.3}>
                  <h2 style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginBottom: "1rem", fontWeight: "600" }}>
                    {personalInfo.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.4}>
                  <p className="hero-subtitle">
                    {personalInfo.summary}
                  </p>
                </Reveal>
                <Reveal delay={0.5}>
                  <div className="hero-cta">
                    <a href="#contact" className="btn btn-primary">
                      Get In Touch <MessageSquare size={18} />
                    </a>
                    <a href="#projects" className="btn btn-secondary">
                      View My Work <ChevronRight size={18} />
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="hero-visual">
                <Reveal delay={0.3}>
                  <div className="sphere-container">
                    <div className="profile-img-glow">
                      <img 
                        src={personalInfo.profilePicture} 
                        alt={personalInfo.name} 
                        className="profile-img"
                      />
                    </div>
                    <div className="sphere-ring"></div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & STRENGTHS SECTION */}
        <section id="about" className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">A brief overview of my professional focus and core values</p>
            
            <div className="about-grid">
              <Reveal delay={0.1} width="100%">
                <div className="glass-card about-desc">
                  <h3>Professional Summary</h3>
                  <p style={{ marginTop: "1rem", color: "var(--text-secondary)" }}>
                    I specialize in building custom cloud applications and scalable microservices. By combining enterprise-level Salesforce architectures with highly interactive modern web development patterns, I build workflows and features that provide immediate value to organizations and their clients.
                  </p>
                  <p style={{ marginTop: "1rem", color: "var(--text-secondary)" }}>
                    My experience spans automating complex backend transactional operations, implementing external web APIs, and building fluid frontends in React and Next.js.
                  </p>
                  <div style={{ marginTop: "2rem" }}>
                    <a href={personalInfo.resumeUrl} download className="btn btn-primary">
                      Download Resume <Download size={18} />
                    </a>
                  </div>
                </div>
              </Reveal>

              <div className="strengths-wrapper">
                <h3 style={{ marginBottom: "1.5rem", paddingLeft: "0.5rem" }}>Core Strengths</h3>
                <div className="strengths-grid">
                  {strengths.map((strength, index) => (
                    <Reveal key={strength.title} delay={0.1 * index} width="100%">
                      <div className="strength-card glass-card">
                        <div className="strength-icon">
                          <Star size={20} />
                        </div>
                        <h4>{strength.title}</h4>
                        <p>{strength.description}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">Technical Expertise</h2>
            <p className="section-subtitle">The tools, languages, and frameworks I use to bring ideas to life</p>

            <div className="skills-grid">
              {/* Analytics & Cloud Skill Block */}
              <Reveal delay={0.1} width="100%">
                <div className="skill-category glass-card">
                  <div className="category-header">
                    <Award className="category-icon text-gradient" size={24} />
                    <h3>Analytics & Cloud</h3>
                  </div>
                  <ul className="skill-list">
                    {skills.dataAnalyticsCloud.map((skill) => (
                      <li key={skill} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Core Programming Skill Block */}
              <Reveal delay={0.2} width="100%">
                <div className="skill-category glass-card">
                  <div className="category-header">
                    <Award className="category-icon text-gradient-alt" size={24} />
                    <h3>Core Programming</h3>
                  </div>
                  <ul className="skill-list">
                    {skills.programmingLanguages.map((skill) => (
                      <li key={skill} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Web & Frontend Design Skill Block */}
              <Reveal delay={0.3} width="100%">
                <div className="skill-category glass-card">
                  <div className="category-header">
                    <Award className="category-icon" size={24} style={{ color: "var(--accent-color)" }} />
                    <h3>Web & Frontend Design</h3>
                  </div>
                  <ul className="skill-list">
                    {skills.webDevelopment.map((skill) => (
                      <li key={skill} className="skill-item">{skill}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CLOUD & TECHNICAL FOUNDATIONS SECTION */}
        <section id="foundations" className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <div className="pd1-wrapper glass-card">
              <div className="pd1-header">
                <div className="badge-glow-container">
                  <div className="salesforce-badge-icon">
                    <Award size={36} />
                  </div>
                </div>
                <div>
                  <span className="badge-prefix">Academic Foundations</span>
                  <h2>{technicalFoundationsDetails.title}</h2>
                  <p className="credential-id">Status: {technicalFoundationsDetails.credentialId}</p>
                </div>
              </div>

              <div className="pd1-content">
                <div className="pd1-summary-col">
                  <p>{technicalFoundationsDetails.summary}</p>
                  <div style={{ marginTop: "1.5rem" }}>
                    <a
                      href={technicalFoundationsDetails.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      Verify Credentials <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <div className="pd1-skills-col">
                  <h4>Core Competency Areas</h4>
                  <ul className="pd1-skills-list">
                    {technicalFoundationsDetails.skillsCovered.map((item) => (
                      <li key={item} className="pd1-skill-item">
                        <ChevronRight size={16} className="bullet-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="container">
            <h2 className="section-title">Selected Projects</h2>
            <p className="section-subtitle">A collection of cloud integrations, custom components, and web applications</p>

            <div className="projects-grid">
              {projects.map((project, index) => (
                <Reveal key={project.id} delay={0.1 * index} width="100%">
                  <TiltCard className="project-card">
                    <div className="project-card-inner">
                      <div className="project-meta">
                        <span className="project-number">0{index + 1}</span>
                        <div className="project-links">
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                              <Github size={20} />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.description}</p>
                      <div className="project-tech-list">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section id="experience" className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <h2 className="section-title">Journey & Education</h2>
            <p className="section-subtitle">A timeline of my professional roles and academic qualifications</p>

            <div className="timeline-grid">
              {/* Experience Timeline */}
              <div className="timeline-col">
                <div className="timeline-header">
                  <Briefcase size={22} className="timeline-header-icon" />
                  <h3>Work History</h3>
                </div>
                <div className="timeline-items">
                  {experience.map((exp, index) => (
                    <Reveal key={exp.id} delay={0.1 * index} width="100%">
                      <div className="timeline-item glass-card">
                        <div className="timeline-date">{exp.duration}</div>
                        <h4 className="timeline-role">{exp.role}</h4>
                        <div className="timeline-company">{exp.company}</div>
                        <ul className="timeline-desc-list">
                          {exp.description.map((desc, dIndex) => (
                            <li key={dIndex}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Education and Certifications */}
              <div className="timeline-col">
                <div className="timeline-header">
                  <GraduationCap size={22} className="timeline-header-icon" />
                  <h3>Education & Certificates</h3>
                </div>
                <div className="timeline-items">
                  {education.map((edu, index) => (
                    <Reveal key={edu.degree} delay={0.1} width="100%">
                      <div className="timeline-item glass-card">
                        <div className="timeline-date">{edu.duration}</div>
                        <h4 className="timeline-role">{edu.degree}</h4>
                        <div className="timeline-company">{edu.institution}</div>
                        <p style={{ marginTop: "0.5rem", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                          Grade: {edu.grade}
                        </p>
                      </div>
                    </Reveal>
                  ))}

                  <div className="certifications-inline" style={{ marginTop: "2rem" }}>
                    <h4 style={{ marginBottom: "1rem" }}>Other Achievements</h4>
                    <div className="cert-list">
                      {certifications.map((cert, index) => (
                        <Reveal key={cert.title} delay={0.05 * index} width="100%">
                          <div className="cert-item">
                            <Award size={18} className="cert-icon" />
                            <div>
                              <h5>{cert.title}</h5>
                              <p>{cert.issuer} ({cert.date})</p>
                            </div>
                          </div>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLOG SECTION */}
        <section id="blog" className="section">
          <div className="container">
            <h2 className="section-title">Technical Blogs</h2>
            <p className="section-subtitle">Articles on Salesforce configuration, LWC tips, and modern frontend tricks</p>

            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <Reveal key={post.id} delay={0.1 * index} width="100%">
                  <TiltCard className="blog-card">
                    <div className="blog-card-inner">
                      <div className="blog-header">
                        <span className="blog-date">{post.date}</span>
                        <span className="blog-time">{post.readTime}</span>
                      </div>
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <span className="blog-link">
                        Read Article <BookOpen size={16} />
                      </span>
                    </div>
                  </TiltCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section" style={{ background: "var(--bg-secondary)" }}>
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">Let's build something amazing together or discuss Salesforce consulting</p>

            <div className="contact-grid">
              <Reveal delay={0.1} width="100%">
                <div className="contact-info glass-card">
                  <h3>Contact Information</h3>
                  <p style={{ margin: "1rem 0 2rem 0", color: "var(--text-muted)" }}>
                    Feel free to drop a message. I'm open to discussing new opportunities, custom web solutions, or Salesforce advisory projects.
                  </p>

                  <div className="info-item-list">
                    <div className="info-item">
                      <Mail className="info-icon" />
                      <div>
                        <h5>Email</h5>
                        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                      </div>
                    </div>

                    <div className="info-item">
                      <Phone className="info-icon" />
                      <div>
                        <h5>Phone</h5>
                        <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                      </div>
                    </div>

                    <div className="info-item">
                      <MapPin className="info-icon" />
                      <div>
                        <h5>Location</h5>
                        <span>{personalInfo.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="socials-container">
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
                      <Github size={20} />
                    </a>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2} width="100%">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container">
            <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
            <p style={{ marginTop: "0.5rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
              Designed & Built with Next.js & Vanilla CSS
            </p>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        /* About section layout */
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 2rem;
          margin-top: 2rem;
        }

        .about-desc {
          height: 100%;
        }

        .strengths-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .strength-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .strength-icon {
          color: var(--secondary-color);
          margin-bottom: 0.25rem;
        }

        /* Skills grid styles */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          height: 100%;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--card-border);
          padding-bottom: 0.75rem;
        }

        .skill-list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .skill-item {
          background: var(--bg-secondary);
          border: 1px solid var(--card-border);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .skill-item:hover {
          border-color: var(--primary-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--primary-glow);
        }

        /* Salesforce PD1 Specific Styles */
        .pd1-wrapper {
          padding: 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .pd1-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .badge-glow-container {
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
          padding: 3px;
          border-radius: 50%;
          box-shadow: 0 0 20px var(--primary-glow);
        }

        .salesforce-badge-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-color);
        }

        .badge-prefix {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          font-weight: 700;
          color: var(--secondary-color);
        }

        .credential-id {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .pd1-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          border-top: 1px solid var(--card-border);
          padding-top: 2rem;
        }

        .pd1-skills-col h4 {
          margin-bottom: 1rem;
        }

        .pd1-skills-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .pd1-skill-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .bullet-icon {
          color: var(--primary-color);
        }

        /* Projects Section Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .project-card {
          height: 100%;
        }

        .project-card-inner {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .project-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .project-number {
          font-size: 1.5rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          color: var(--primary-color);
          opacity: 0.7;
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-links a {
          color: var(--text-muted);
          transition: color 0.3s ease;
        }

        .project-links a:hover {
          color: var(--primary-color);
        }

        .project-title {
          font-size: 1.35rem;
          margin-bottom: 0.75rem;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-tag {
          font-size: 0.8rem;
          font-weight: 600;
          background: var(--bg-secondary);
          color: var(--text-muted);
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          border: 1px solid var(--card-border);
        }

        /* Timeline & Education Grid */
        .timeline-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 4rem;
        }

        .timeline-col {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          border-bottom: 1px solid var(--card-border);
          padding-bottom: 1rem;
        }

        .timeline-header-icon {
          color: var(--primary-color);
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .timeline-date {
          display: inline-block;
          align-self: flex-start;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--secondary-color);
          background: var(--secondary-glow);
          padding: 0.25rem 0.75rem;
          border-radius: 50px;
          margin-bottom: 0.25rem;
        }

        .timeline-role {
          font-size: 1.2rem;
        }

        .timeline-company {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.95rem;
        }

        .timeline-desc-list {
          margin-top: 0.5rem;
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.95rem;
        }

        /* Achievements/Certs list */
        .cert-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .cert-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: var(--border-radius-md);
        }

        .cert-icon {
          color: var(--primary-color);
        }

        .cert-item h5 {
          font-size: 0.95rem;
        }

        .cert-item p {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Blog Section */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        .blog-card-inner {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .blog-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .blog-title {
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        .blog-excerpt {
          font-size: 0.95rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .blog-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--primary-color);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Contact Section layout */
        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 3rem;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .info-item-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          flex-grow: 1;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .info-icon {
          color: var(--primary-color);
          width: 24px;
          height: 24px;
        }

        .info-item h5 {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 600;
        }

        .info-item a, .info-item span {
          font-size: 1.05rem;
          color: var(--text-primary);
          text-decoration: none;
          font-weight: 600;
        }

        .info-item a:hover {
          color: var(--primary-color);
        }

        .socials-container {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 1px solid var(--card-border);
          color: var(--text-primary);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          transform: translateY(-3px);
          border-color: var(--primary-color);
          box-shadow: 0 5px 15px var(--primary-glow);
          color: var(--primary-color);
        }

        /* Footer styling */
        .footer {
          padding: 3rem 0;
          text-align: center;
          border-top: 1px solid var(--card-border);
          background: var(--bg-primary);
        }

        /* Responsive Grids & Layouts */
        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .pd1-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .timeline-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 600px) {
          .pd1-wrapper {
            padding: 1.5rem;
          }
          .pd1-header {
            flex-direction: column;
            text-align: center;
          }
        }

        .profile-img-glow {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          padding: 6px;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 50%, var(--accent-color) 100%);
          box-shadow: 0 0 40px var(--primary-glow);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: absolute;
          top: 0;
          left: 0;
        }

        .profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          background: var(--bg-secondary);
        }
      `}</style>
    </>
  );
}
