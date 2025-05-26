'use client';

import Link from "next/link";
import { 
  Mail, Linkedin, MapPin, Phone, Calendar, Building, Award, Code,
  Cloud, GitBranch, Container, Database, Globe, Braces, Server, Cog, User, Shield, Wrench
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { ScrollToTop } from "@/components/scroll-to-top";
import { motion, AnimatePresence } from "@/components/motion";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4 mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 0.8,
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary transition-all duration-300 transform hover:scale-105"
          >
            <div className="w-full h-full bg-muted flex items-center justify-center relative group">
              <User size={64} className="text-muted-foreground group-hover:text-primary transition-colors" />
              <motion.div
                className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Sedthawuth Maisonti
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-2xl md:text-3xl text-muted-foreground mt-2"
            >
              (Benning)
            </motion.span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8 text-muted-foreground"
          >
            {[
              { href: "mailto:bmaisonti@gmail.com", icon: Mail, text: "bmaisonti@gmail.com" },
              { href: "https://linkedin.com/in/sedthawuth-benning", icon: Linkedin, text: "linkedin.com/in/sedthawuth-benning" },
              { icon: MapPin, text: "Richmond, British Columbia" },
              { icon: Phone, text: "(236) 987 2961" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                whileHover={{ scale: 1.05, x: 5 }}
              >
                {item.href ? (
                  <Link 
                    href={item.href} 
                    className="flex items-center gap-2 hover:text-primary transition-all duration-300 hover:scale-105"
                  >
                    <item.icon size={20} />
                    <span>{item.text}</span>
                  </Link>
                ) : (
                  <div className="flex items-center gap-2">
                    <item.icon size={20} />
                    <span>{item.text}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="relative"
          >
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              Passionate Cloud & Cybersecurity professional with a Master's in Cybersecurity at NYIT Vancouver. 
              <motion.span 
                className="text-primary font-semibold"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {" "}Specializing in cloud infrastructure security, DevSecOps practices, and building resilient systems.{" "}
              </motion.span>
              Over three years of hands-on experience in IT, with a strong focus on AWS, Azure, and security implementations.
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <motion.div 
                className="w-1 h-3 bg-primary rounded-full mt-2"
                animate={{ 
                  opacity: [1, 0.5, 1],
                  scale: [1, 0.9, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-muted/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-4 mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Cybersecurity",
                skills: ["Incident response", "Vulnerability assessment", "Secure coding practices", "System hardening"]
              },
              {
                title: "Security & Monitoring Tools",
                skills: ["Snort", "Splunk SIEM", "Grafana"]
              },
              {
                title: "Cloud & DevOps",
                skills: ["AWS (EC2, Lambda)", "Docker", "Kubernetes", "GitLab CI/CD", "Terraform"]
              },
              {
                title: "Programming & Scripting",
                skills: ["Python (requests)", "Go", "Bash scripting"]
              },
              {
                title: "Databases & Infrastructure",
                skills: ["PostgreSQL", "MongoDB", "Redis", "Linux administration"]
              },
              {
                title: "Soft Skills",
                skills: ["Problem-solving", "Teamwork", "Adaptability", "Effective communication"]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-lg bg-background shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-muted-foreground">• {skill}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-4 mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Work Experience</h2>
          <div className="space-y-12">
            {[
              {
                company: "Startup",
                location: "Richmond, British Columbia, Canada",
                position: "Software & DevOps Engineer | Azure + GitHub Actions",
                period: "Apr 2025 - Present",
                type: "Self-employed · On-site",
                achievements: [
                  "Developed and maintained a scalable Next.js web application delivering a smooth and responsive user experience for https://cancitizenship.com/.",
                  "Designed and automated CI/CD pipelines with GitHub Actions to enable seamless containerized deployments to Azure, incorporating image versioning, tag-based rollbacks, and secure secret management using Doppler.",
                  "Architected and managed Azure infrastructure including Resource Groups, Virtual Machines, and Network Security Groups to ensure high availability, security, and performance."
                ],
                skills: ["Microsoft Azure", "Azure", "CI/CD", "Docker", "IaC", "Next.js", "FastAPI", "PostgreSQL", "Resource Group", "React.js"],
                icons: [Cloud, GitBranch, Container]
              },
              {
                company: "Livewager.io",
                location: "North Vancouver, British Columbia, Canada",
                position: "Full-Stack & DevOps Engineer",
                period: "Apr 2025 - Present",
                type: "Permanent Part-time · Hybrid",
                achievements: [
                  "Integrated Polygon blockchain into the Next.js frontend using Web3 libraries for seamless user wallet connectivity.",
                  "Developed and maintained GitHub CI/CD pipelines for automated deployments to AWS, ensuring secure environment variable handling via Doppler.",
                  "Restructured project codebase and workflows, which led to the adoption of Jira and Agile processes for improved team collaboration and delivery."
                ],
                skills: ["web3.js", "Docker", "NodeJs", "Next.js", "Jira Align", "Security", "CI/CD", "AWS", "Infrastructure", "IaC"],
                icons: [Code, Cloud, Database]
              },
              {
                company: "Domonit",
                location: "Berlin, Germany",
                position: "Full-Stack & DevOps Engineer",
                period: "Oct 2023 - Feb 2025",
                type: "Contract Part-time · Remote",
                achievements: [
                  "Engineered Go microservices to manage IoT device data, using reverse SSH tunnels & Redis caching, reducing latency by 40%.",
                  "Optimized CI/CD pipelines with Docker & GitLab CI/CD, reducing deployment time by 70%.",
                  "Strengthened system reliability by implementing automated tests, increasing code coverage from 40% to 75%."
                ],
                skills: ["Go", "Redis", "GitLab", "Docker", "CI/CD", "Django", "React.js", "PostgreSQL", "Linux"],
                icons: [Server, Cloud, Cog]
              },
              {
                company: "LINE MAN Wongnai",
                location: "Bangkok, Thailand",
                position: "Back End Developer",
                period: "Mar 2022 - May 2024",
                type: "Full-time",
                achievements: [
                  "Implemented Grafana dashboards, improving real-time monitoring and reducing incident response time by 35%.",
                  "Optimized Elasticsearch queries, cutting API response time from 500ms to 200ms.",
                  "Provided on-call troubleshooting, resolving 95% of incidents within SLA."
                ],
                skills: ["Kubernetes", "Python", "Go", "Docker", "PostgreSQL", "MySQL", "Rancher", "Linux"],
                icons: [Server, Database, Cloud]
              },
              {
                company: "Finema",
                location: "Bangkok, Thailand",
                position: "Software Developer",
                period: "Jun 2021 - Feb 2022",
                type: "Full-time",
                achievements: [
                  "Developed APIs for the Thailand Pass project using Golang and MongoDB, enabling real-time processing for over 44,000 international arrivals in 11 days.",
                  "Built a back office website frontend for the Vaccine Certificate app with Next.js and Redux, focusing on secure, scalable design for government use.",
                  "Contributed to a system that processed 35,000+ automatic approvals, minimizing manual review by implementing security measures."
                ],
                skills: ["Go", "Next.js", "Redux", "MongoDB", "Docker", "GitLab", "Node.js"],
                icons: [Code, Database, Server]
              },
              {
                company: "Finema",
                location: "Bangkok, Thailand",
                position: "Software Developer",
                period: "Feb 2021 - May 2021",
                type: "Part-time",
                achievements: [
                  "Developed and maintained web applications using React.js and Node.js.",
                  "Worked with MongoDB for data storage and retrieval.",
                  "Collaborated in a startup environment using modern development practices."
                ],
                skills: ["React.js", "Node.js", "MongoDB", "Docker", "Git"],
                icons: [Code, Database, Server]
              },
              {
                company: "Homepro",
                location: "Nonthaburi, Thailand",
                position: "Full Stack Engineer",
                period: "Jun 2020 - Nov 2020",
                type: "Internship",
                achievements: [
                  "Developed mobile applications using Flutter framework.",
                  "Implemented automated testing using Appium.",
                  "Worked with ASP.NET MVC for web development."
                ],
                skills: ["Flutter", "ASP.NET MVC", "Java", "Appium", "Git"],
                icons: [Code, Server, Database]
              },
              {
                company: "CODIUM",
                location: "Thailand",
                position: "Back End Developer",
                period: "Oct 2019 - Dec 2019",
                type: "Internship",
                achievements: [
                  "Developed REST APIs using Django REST Framework.",
                  "Worked with PostgreSQL for database management.",
                  "Built frontend components using AngularJS."
                ],
                skills: ["Python", "Django", "PostgreSQL", "AngularJS", "Git"],
                icons: [Server, Database, Code]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-all duration-300"
              >
                <motion.div 
                  className="absolute -left-3 top-0 w-6 h-6 bg-background border-2 border-primary rounded-full"
                  whileHover={{ scale: 1.2, borderColor: "var(--primary)" }}
                  transition={{ duration: 0.2 }}
                />
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                  className="flex flex-wrap gap-2 items-center mb-2"
                >
                  <h3 className="text-xl font-semibold">{job.position}</h3>
                  <span className="text-muted-foreground">at</span>
                  <span className="font-medium text-primary">{job.company}</span>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
                  className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4"
                >
                  <div className="flex items-center gap-1">
                    <Building size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{job.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary/80">
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.5 }}
                  className="flex gap-2 mb-4"
                >
                  {job.icons.map((Icon, iconIndex) => (
                    <motion.div
                      key={iconIndex}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-2 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors"
                    >
                      <Icon size={20} className="text-primary" />
                    </motion.div>
                  ))}
                </motion.div>
                
                <ul className="space-y-3 mb-4">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (achievementIndex * 0.1) + 0.4, duration: 0.5 }}
                      className="text-muted-foreground flex gap-2 items-start group"
                    >
                      <motion.span 
                        className="text-primary mt-1"
                        whileHover={{ scale: 1.2 }}
                      >•</motion.span>
                      <motion.span
                        whileHover={{ x: 5 }}
                        className="group-hover:text-foreground transition-colors"
                      >{achievement}</motion.span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                  className="flex flex-wrap gap-2"
                >
                  {job.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, x: 2 }}
                      transition={{ delay: (index * 0.2) + (skillIndex * 0.05) + 0.6, duration: 0.3 }}
                      className="px-3 py-1 bg-primary/5 text-primary rounded-full text-sm hover:bg-primary/10 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-muted/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-4 mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: "Master of Science in Cybersecurity",
                school: "New York Institute of Technology Vancouver Campus",
                location: "Vancouver, British Columbia",
                period: "May 2024 - Aug 2026",
                gpa: "GPA: 3.40"
              },
              {
                degree: "Bachelor of Science in Information Technology",
                school: "King Mongkut's Institute of Technology Ladkrabang",
                location: "Bangkok, Thailand",
                period: "Aug 2017 – Jun 2021",
                gpa: "GPA: 3.05"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="p-6 rounded-lg bg-background shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <div className="text-muted-foreground">
                  <p className="font-medium">{edu.school}</p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                    <div>{edu.gpa}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-4 mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Notable Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hybrid Key Exchange for Shopkati",
                description: [
                  "Designed ECDH + Kyber hybrid key exchange for secure communication, enhancing post-quantum security.",
                  "Strengthened Shopkati's data protection framework by implementing advanced cryptographic techniques."
                ],
                icon: Code
              },
              {
                title: "Splunk SIEM Deployment",
                description: [
                  "Deployed Splunk SIEM on AWS EC2 with Raspberry Pi forwarder, enabling real-time log monitoring over TCP (9997).",
                  "Configured laptops to forward events to Raspberry Pi, which then forwarded the events to the EC2 instance."
                ],
                icon: Code
              },
              {
                title: "Web Vulnerability Scan with OWASP ZAP",
                description: [
                  "Scanned website for vulnerabilities using OWASP ZAP, identifying potential risks.",
                  "Analyzed findings to assess potential security threats and saved detailed reports for further action."
                ],
                icon: Code
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <project.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <ul className="space-y-2">
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className="text-muted-foreground">
                      • {desc}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-muted/50">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container px-4 mx-auto"
        >
          <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Certified in Cybersecurity (CC) - ISC2",
                period: "Dec 2024 - Dec 2027"
              },
              {
                name: "Microsoft Certified: Azure Fundamentals",
                period: "Apr 2025"
              },
              {
                name: "SOC Fundamentals - LetsDefend",
                period: "Feb 2025"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-lg bg-background shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Award size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{cert.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      <span>{cert.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-muted-foreground">
        <div className="container px-4 mx-auto">
          <p>© {new Date().getFullYear()} Sedthawuth Maisonti. All rights reserved.</p>
        </div>
      </footer>

      <ThemeToggle />
      <ScrollToTop />
    </main>
  );
}
