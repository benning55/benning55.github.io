import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

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
      className="mb-12"
    >
      {children}
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Hero Section */}
      <header className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary/10 to-secondary/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Sedthawuth Maisonti</h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">(Benning)</h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground">
            Cybersecurity Professional & Software Engineer
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <a href="https://github.com/benning55" target="_blank" rel="noopener noreferrer" 
               className="text-2xl hover:text-primary transition-colors">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sedthawuth-benning" target="_blank" rel="noopener noreferrer"
               className="text-2xl hover:text-primary transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:bmaisonti@gmail.com"
               className="text-2xl hover:text-primary transition-colors">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* About Section */}
        <Section>
          <h2 className="text-3xl font-bold mb-6">Professional Summary</h2>
          <p className="text-lg text-muted-foreground">
            Results-driven Master's student in Cybersecurity at NYIT Vancouver with over three years of IT experience, 
            including software engineering and DevOps. Proficient in Python, GoLang, and Docker, with a strong foundation 
            in cybersecurity principles, system security, and threat mitigation.
          </p>
        </Section>

        {/* Skills Section */}
        <Section delay={0.2}>
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Cybersecurity</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Incident response</li>
                <li>Vulnerability assessment</li>
                <li>Secure coding practices</li>
                <li>System hardening</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Cloud & DevOps</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>AWS (EC2, Lambda)</li>
                <li>Docker</li>
                <li>Kubernetes</li>
                <li>GitLab CI/CD</li>
                <li>Terraform</li>
              </ul>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold mb-4">Programming</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Python</li>
                <li>Go</li>
                <li>Bash scripting</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section delay={0.4}>
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          <div className="space-y-8">
            <div className="p-6 rounded-lg bg-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                  <p className="text-primary">Domonit</p>
                </div>
                <p className="text-muted-foreground">Oct 2023 – Feb 2025</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Engineered Go microservices to manage IoT device data</li>
                <li>Optimized CI/CD pipelines with Docker & GitLab CI/CD</li>
                <li>Strengthened system reliability through automated testing</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-card">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">Software Engineer</h3>
                  <p className="text-primary">LINEMAN Wongnai</p>
                </div>
                <p className="text-muted-foreground">Mar 2022 – May 2024</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Implemented Grafana dashboards for real-time monitoring</li>
                <li>Optimized Elasticsearch queries for improved performance</li>
                <li>Provided on-call troubleshooting support</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Education Section */}
        <Section delay={0.6}>
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold">Master of Science in Cybersecurity</h3>
              <p className="text-primary">New York Institute of Technology Vancouver Campus</p>
              <p className="text-muted-foreground">May 2024 - Aug 2026</p>
              <p className="text-muted-foreground">GPA: 3.40</p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold">Bachelor of Science in Information Technology</h3>
              <p className="text-primary">King Mongkut's Institute of Technology Ladkrabang</p>
              <p className="text-muted-foreground">Aug 2017 – Jun 2021</p>
              <p className="text-muted-foreground">GPA: 3.05</p>
            </div>
          </div>
        </Section>

        {/* Certifications Section */}
        <Section delay={0.8}>
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold">Certified in Cybersecurity (CC)</h3>
              <p className="text-primary">ISC2</p>
              <p className="text-muted-foreground">Dec 2024 - Dec 2027</p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold">Azure Fundamentals</h3>
              <p className="text-primary">Microsoft</p>
              <p className="text-muted-foreground">Apr 2025</p>
            </div>
            <div className="p-6 rounded-lg bg-card">
              <h3 className="text-xl font-semibold">SOC Fundamentals</h3>
              <p className="text-primary">LetsDefend</p>
              <p className="text-muted-foreground">Feb 2025</p>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Sedthawuth Maisonti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
