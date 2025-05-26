import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      transition={{ duration: 0.6, delay }}
      className="mb-16"
    >
      {children}
    </motion.div>
  );
};

const SkillTag = ({ skill }) => (
  <span className="skill-tag">{skill}</span>
);

const ExperienceCard = ({ title, company, period, location, type, skills, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="experience-card mb-8"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-primary">{company}</p>
          <div className="flex items-center text-muted-foreground text-sm mt-1">
            <FaMapMarkerAlt className="mr-1" />
            <span>{location}</span>
            <span className="mx-2">•</span>
            <span>{type}</span>
          </div>
        </div>
        <p className="text-muted-foreground">{period}</p>
      </div>
      
      <div className={`text-muted-foreground ${isExpanded ? '' : 'line-clamp-2'}`}>
        {description.map((item, index) => (
          <p key={index} className="mb-2">• {item}</p>
        ))}
      </div>
      
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-primary hover:text-primary/80 text-sm mt-2"
      >
        {isExpanded ? 'Show less' : 'Read more'}
      </button>

      <div className="flex flex-wrap gap-2 mt-4">
        {skills.map((skill, index) => (
          <SkillTag key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};

function App() {
  const experiences = [
    {
      title: "Software & DevOps Engineer",
      company: "Startup",
      period: "Apr 2025 - Present",
      location: "Richmond, British Columbia, Canada",
      type: "Self-employed · On-site",
      description: [
        "Developed and maintained a scalable Next.js web application delivering a smooth and responsive user experience for https://cancitizenship.com/.",
        "Designed and automated CI/CD pipelines with GitHub Actions to enable seamless containerized deployments to Azure.",
        "Architected and managed Azure infrastructure including Resource Groups, Virtual Machines, and Network Security Groups."
      ],
      skills: ["Microsoft Azure", "CI/CD", "Docker", "IaC", "Next.js", "FastAPI", "PostgreSQL", "React.js"]
    },
    {
      title: "Full-Stack & DevOps Engineer",
      company: "Livewager.io",
      period: "Apr 2025 - Present",
      location: "North Vancouver, British Columbia, Canada",
      type: "Permanent Part-time · Hybrid",
      description: [
        "Integrated Polygon blockchain into the Next.js frontend using Web3 libraries for seamless user wallet connectivity.",
        "Developed and maintained GitHub CI/CD pipelines for automated deployments to AWS.",
        "Restructured project codebase and workflows, leading to improved team collaboration."
      ],
      skills: ["web3.js", "Docker", "Next.js", "AWS", "IaC", "NodeJs", "Security"]
    },
    {
      title: "Full-Stack & DevOps Engineer",
      company: "Domonit",
      period: "Oct 2023 - Feb 2025",
      location: "Berlin, Germany",
      type: "Contract Part-time · Remote",
      description: [
        "Engineered Go microservices to manage IoT device data, reducing latency by 40%.",
        "Optimized CI/CD pipelines with Docker & GitLab CI/CD, reducing deployment time by 70%.",
        "Strengthened system reliability through automated testing, increasing coverage to 75%."
      ],
      skills: ["Go", "Redis", "Docker", "GitLab", "Django", "React.js", "PostgreSQL"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center hero-gradient">
        <div className="absolute top-0 left-0 w-full p-6">
          <nav className="flex justify-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
          </nav>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.div
            className="float-animation mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent-foreground">
              Sedthawuth Maisonti
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">(Benning)</h2>
          </motion.div>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-muted-foreground mb-8">
            Cybersecurity Professional & Software Engineer
          </p>
          
          <div className="flex justify-center gap-8 mt-8">
            <motion.a 
              href="https://github.com/benning55" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/sedthawuth-benning" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:bmaisonti@gmail.com"
              className="text-3xl hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* About Section */}
        <Section id="about">
          <h2 className="section-title">Professional Summary</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Results-driven Master's student in Cybersecurity at NYIT Vancouver with over three years of IT experience, 
            including software engineering and DevOps. Proficient in Python, GoLang, and Docker, with a strong foundation 
            in cybersecurity principles, system security, and threat mitigation.
          </p>
        </Section>

        {/* Experience Section */}
        <Section id="experience" delay={0.2}>
          <h2 className="section-title">Work Experience</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" delay={0.4}>
          <h2 className="section-title">Education</h2>
          <div className="grid gap-6">
            <motion.div 
              className="experience-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Master of Science in Cybersecurity</h3>
                  <p className="text-primary">New York Institute of Technology Vancouver Campus</p>
                  <p className="text-muted-foreground">May 2024 - Aug 2026</p>
                  <p className="text-muted-foreground">GPA: 3.40</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="experience-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-2xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
                  <p className="text-primary">King Mongkut's Institute of Technology Ladkrabang</p>
                  <p className="text-muted-foreground">Aug 2017 – Jun 2021</p>
                  <p className="text-muted-foreground">GPA: 3.05</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Certifications Section */}
        <Section delay={0.6}>
          <h2 className="section-title">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="experience-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold">Certified in Cybersecurity (CC)</h3>
              <p className="text-primary">ISC2</p>
              <p className="text-muted-foreground">Dec 2024 - Dec 2027</p>
            </motion.div>
            <motion.div 
              className="experience-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold">Azure Fundamentals</h3>
              <p className="text-primary">Microsoft</p>
              <p className="text-muted-foreground">Apr 2025</p>
            </motion.div>
            <motion.div 
              className="experience-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold">SOC Fundamentals</h3>
              <p className="text-primary">LetsDefend</p>
              <p className="text-muted-foreground">Feb 2025</p>
            </motion.div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-accent/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Sedthawuth Maisonti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
