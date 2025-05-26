import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, 
  FaBriefcase, FaGraduationCap, FaClock, FaBuilding 
} from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Section = ({ children, delay = 0, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      id={id}
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
  <motion.span 
    className="skill-tag"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {skill}
  </motion.span>
);

const ExperienceCard = ({ title, company, period, location, type, skills, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className="experience-card mb-8 relative"
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      <div className="absolute -left-3 top-0 h-full timeline-line" />
      <div className="timeline-dot" />
      
      <div className="ml-6">
        <div className="flex justify-between items-start mb-4 flex-wrap">
          <div>
            <h3 className="text-xl font-semibold text-primary">{title}</h3>
            <p className="text-lg text-foreground/90">{company}</p>
            <div className="flex items-center text-muted-foreground text-sm mt-2 flex-wrap gap-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-1" />
                <span>{location}</span>
              </div>
              <div className="flex items-center">
                <FaBuilding className="mr-1" />
                <span>{type}</span>
              </div>
              <div className="flex items-center">
                <FaClock className="mr-1" />
                <span>{period}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`text-foreground/80 ${isExpanded ? '' : 'line-clamp-2'}`}>
          {description.map((item, index) => (
            <p key={index} className="mb-2">• {item}</p>
          ))}
        </div>
        
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary/80 text-sm mt-2 flex items-center gap-1"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill, index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const experiences = [
    {
      title: "Software & DevOps Engineer | Azure + GitHub Actions",
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
    },
    {
      title: "Back End Developer",
      company: "LINE MAN Wongnai",
      period: "Mar 2022 - May 2024",
      location: "Bangkok, Thailand",
      type: "Full-time",
      description: [
        "Implemented Grafana dashboards, improving real-time monitoring and reducing incident response time by 35%.",
        "Optimized Elasticsearch queries, cutting API response time from 500ms to 200ms.",
        "Provided on-call troubleshooting, resolving 95% of incidents within SLA."
      ],
      skills: ["Kubernetes", "Python", "SQL", "Linux", "MySQL", "GitLab", "Odoo", "PostgreSQL", "Go", "Rancher"]
    },
    {
      title: "Software Developer",
      company: "Finema",
      period: "Jun 2021 - Feb 2022",
      location: "Bangkok, Thailand",
      type: "Full-time",
      description: [
        "Developed APIs for the Thailand Pass project using Golang and MongoDB, enabling real-time processing for over 44,000 international arrivals.",
        "Built a back office website frontend for the Vaccine Certificate app with Next.js and Redux.",
        "Contributed to a system that processed 35,000+ automatic approvals with robust security measures."
      ],
      skills: ["Go", "React.js", "Next.js", "Redux", "MongoDB", "Vue.js", "Nuxt.js", "Node.js"]
    },
    {
      title: "Software Developer",
      company: "Finema",
      period: "Feb 2021 - May 2021",
      location: "Bangkok, Thailand",
      type: "Part-time",
      description: [
        "Developed and maintained web applications using React.js and Node.js.",
        "Worked with MongoDB for data storage and retrieval.",
        "Collaborated in a startup environment using modern development practices."
      ],
      skills: ["React.js", "Node.js", "MongoDB", "JavaScript", "Docker"]
    },
    {
      title: "Full Stack Engineer",
      company: "Homepro",
      period: "Jun 2020 - Nov 2020",
      location: "Nonthaburi, Thailand",
      type: "Internship",
      description: [
        "Developed mobile applications using Flutter framework.",
        "Implemented automated testing using Appium.",
        "Worked with ASP.NET MVC for web development."
      ],
      skills: ["Flutter", "Appium", "ASP.NET MVC", "Java"]
    },
    {
      title: "Back End Developer",
      company: "CODIUM",
      period: "Oct 2019 - Dec 2019",
      location: "Thailand",
      type: "Internship",
      description: [
        "Developed REST APIs using Django REST Framework.",
        "Worked with PostgreSQL for database management.",
        "Built frontend components using AngularJS."
      ],
      skills: ["Python", "Django", "PostgreSQL", "AngularJS"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#certifications" className="nav-link">Certifications</a>
          </div>
        </div>
      </nav>

      {/* Header/Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center hero-gradient pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center px-4"
        >
          <motion.div
            className="float-animation mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-accent">
              Sedthawuth Maisonti
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary/80 mb-6">(Benning)</h2>
          </motion.div>
          
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-foreground/80 mb-8">
            Cybersecurity Professional & Software Engineer
          </p>
          
          <div className="flex justify-center gap-8 mt-8">
            <motion.a 
              href="https://github.com/benning55" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a 
              href="https://linkedin.com/in/sedthawuth-benning" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-primary hover:text-primary/80 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a 
              href="mailto:bmaisonti@gmail.com"
              className="text-3xl text-primary hover:text-primary/80 transition-colors"
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
          <motion.p 
            className="text-lg text-foreground/80 leading-relaxed"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            Results-driven Master's student in Cybersecurity at NYIT Vancouver with over three years of IT experience, 
            including software engineering and DevOps. Proficient in Python, GoLang, and Docker, with a strong foundation 
            in cybersecurity principles, system security, and threat mitigation.
          </motion.p>
        </Section>

        {/* Experience Section */}
        <Section id="experience" delay={0.2}>
          <h2 className="section-title">Work Experience</h2>
          <div className="space-y-6 relative pl-4">
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
              className="experience-card glow-animation"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-3xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Master of Science in Cybersecurity</h3>
                  <p className="text-primary">New York Institute of Technology Vancouver Campus</p>
                  <p className="text-foreground/80">May 2024 - Aug 2026</p>
                  <p className="text-primary">GPA: 3.40</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="experience-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-3xl text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
                  <p className="text-primary">King Mongkut's Institute of Technology Ladkrabang</p>
                  <p className="text-foreground/80">Aug 2017 – Jun 2021</p>
                  <p className="text-primary">GPA: 3.05</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Certifications Section */}
        <Section id="certifications" delay={0.6}>
          <h2 className="section-title">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="experience-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold">Certified in Cybersecurity (CC)</h3>
              <p className="text-primary">ISC2</p>
              <p className="text-foreground/80">Dec 2024 - Dec 2027</p>
            </motion.div>
            <motion.div 
              className="experience-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold">Azure Fundamentals</h3>
              <p className="text-primary">Microsoft</p>
              <p className="text-foreground/80">Apr 2025</p>
            </motion.div>
            <motion.div 
              className="experience-card"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold">SOC Fundamentals</h3>
              <p className="text-primary">LetsDefend</p>
              <p className="text-foreground/80">Feb 2025</p>
            </motion.div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-card py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60">© 2024 Sedthawuth Maisonti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
