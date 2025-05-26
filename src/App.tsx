import React from 'react';
import { 
  Building, Award, Code,
  Cloud, GitBranch, Container, Database, Server, Calendar, MapPin
} from "lucide-react";
import { ThemeToggle } from "./components/theme-toggle";
import { motion } from "framer-motion";

function App() {
  return (
    <main className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='container px-4 mx-auto text-center'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className='relative'
          >
            <motion.p
              className='text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto'
              whileHover={{ scale: 1.02 }}
            >
              Passionate Cloud & Cybersecurity professional with a Master's in
              Cybersecurity at NYIT Vancouver.
              <motion.span
                className='text-primary font-semibold'
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {" "}
                Specializing in cloud infrastructure security, DevSecOps
                practices, and building resilient systems.{" "}
              </motion.span>
              Over three years of hands-on experience in IT, with a strong focus
              on AWS, Azure, and security implementations.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className='py-20 bg-muted/50'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='container px-4 mx-auto'
        >
          <h2 className='text-3xl font-bold mb-10 text-center'>
            Skills & Expertise
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: "Cybersecurity",
                skills: [
                  "Incident response",
                  "Vulnerability assessment",
                  "Secure coding practices",
                  "System hardening",
                ],
              },
              {
                title: "Security & Monitoring Tools",
                skills: ["Snort", "Splunk SIEM", "Grafana"],
              },
              {
                title: "Cloud & DevOps",
                skills: [
                  "AWS (EC2, Lambda)",
                  "Docker",
                  "Kubernetes",
                  "GitLab CI/CD",
                  "Terraform",
                ],
              },
              {
                title: "Programming & Scripting",
                skills: ["Python (requests)", "Go", "Bash scripting"],
              },
              {
                title: "Databases & Infrastructure",
                skills: [
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "Linux administration",
                ],
              },
              {
                title: "Soft Skills",
                skills: [
                  "Problem-solving",
                  "Teamwork",
                  "Adaptability",
                  "Effective communication",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className='p-6 rounded-lg bg-background shadow-lg'
              >
                <h3 className='text-xl font-semibold mb-4'>{category.title}</h3>
                <ul className='space-y-2'>
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className='flex items-center gap-2 text-muted-foreground'
                    >
                      <span className='w-1.5 h-1.5 rounded-full bg-primary' />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Work Experience Section */}
      <section className='py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='container px-4 mx-auto'
        >
          <h2 className='text-3xl font-bold mb-10 text-center'>
            Work Experience
          </h2>
          <div className='space-y-12'>
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
                  "Architected and managed Azure infrastructure including Resource Groups, Virtual Machines, and Network Security Groups to ensure high availability, security, and performance.",
                ],
                skills: [
                  "Microsoft Azure",
                  "Azure",
                  "CI/CD",
                  "Docker",
                  "IaC",
                  "Next.js",
                  "FastAPI",
                  "PostgreSQL",
                  "Resource Group",
                  "React.js",
                ],
                icons: [Cloud, GitBranch, Container],
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
                  "Restructured project codebase and workflows, which led to the adoption of Jira and Agile processes for improved team collaboration and delivery.",
                ],
                skills: [
                  "web3.js",
                  "Docker",
                  "NodeJs",
                  "Next.js",
                  "Jira Align",
                  "Security",
                  "CI/CD",
                  "AWS",
                  "Infrastructure",
                  "IaC",
                ],
                icons: [Code, Cloud, Database],
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
                  "Contributed to a system that processed 35,000+ automatic approvals, minimizing manual review by implementing security measures.",
                ],
                skills: [
                  "Go",
                  "Next.js",
                  "Redux",
                  "MongoDB",
                  "Docker",
                  "GitLab",
                  "Node.js",
                ],
                icons: [Code, Database, Server],
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
                  "Collaborated in a startup environment using modern development practices.",
                ],
                skills: ["React.js", "Node.js", "MongoDB", "Docker", "Git"],
                icons: [Code, Database, Server],
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className='relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-all duration-300'
              >
                <motion.div
                  className='absolute -left-3 top-0 w-6 h-6 bg-background border-2 border-primary rounded-full'
                  whileHover={{ scale: 1.2, borderColor: "var(--primary)" }}
                  transition={{ duration: 0.2 }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.1, duration: 0.5 }}
                  className='flex flex-wrap gap-2 items-center mb-2'
                >
                  <h3 className='text-xl font-semibold'>{job.position}</h3>
                  <span className='text-muted-foreground'>at</span>
                  <span className='font-medium text-primary'>
                    {job.company}
                  </span>
                </motion.div>

                <div className='space-y-2 mb-4'>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Building size={14} />
                    <span>{job.type}</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <MapPin size={14} />
                    <span>{job.location}</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                    <Calendar size={14} />
                    <span>{job.period}</span>
                  </div>
                </div>

                <div className='space-y-2 mb-4'>
                  {job.achievements.map((achievement, achievementIndex) => (
                    <p
                      key={achievementIndex}
                      className='text-muted-foreground'
                    >
                      • {achievement}
                    </p>
                  ))}
                </div>

                <div className='flex flex-wrap gap-2'>
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className='px-2 py-1 rounded-full bg-primary/10 text-primary text-sm'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className='py-20 bg-muted/50'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='container px-4 mx-auto'
        >
          <h2 className='text-3xl font-bold mb-10 text-center'>Education</h2>
          <div className='space-y-8'>
            {[
              {
                degree: "Master of Science in Cybersecurity",
                school: "New York Institute of Technology Vancouver Campus",
                location: "Vancouver, British Columbia",
                period: "May 2024 - Aug 2026",
                gpa: "GPA: 3.40",
              },
              {
                degree: "Bachelor of Science in Information Technology",
                school: "King Mongkut's Institute of Technology Ladkrabang",
                location: "Bangkok, Thailand",
                period: "Aug 2017 – Jun 2021",
                gpa: "GPA: 3.05",
              },
            ].map((education, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className='p-6 rounded-lg bg-background shadow-lg'
              >
                <h3 className='text-xl font-semibold mb-2'>
                  {education.degree}
                </h3>
                <div className='space-y-2 text-muted-foreground'>
                  <div className='flex items-center gap-2'>
                    <Building size={14} />
                    <span>{education.school}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <MapPin size={14} />
                    <span>{education.location}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <Calendar size={14} />
                    <span>{education.period}</span>
                  </div>
                  <div className='flex items-center gap-2 font-medium text-primary'>
                    <Award size={14} />
                    <span>{education.gpa}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className='py-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='container px-4 mx-auto'
        >
          <h2 className='text-3xl font-bold mb-10 text-center'>
            Notable Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: "Hybrid Key Exchange for Shopkati",
                description: [
                  "Designed ECDH + Kyber hybrid key exchange for secure communication, enhancing post-quantum security.",
                  "Strengthened Shopkati's data protection framework by implementing advanced cryptographic techniques.",
                ],
                icon: Code,
              },
              {
                title: "Splunk SIEM Deployment",
                description: [
                  "Deployed Splunk SIEM on AWS EC2 with Raspberry Pi forwarder, enabling real-time log monitoring over TCP (9997).",
                  "Configured laptops to forward events to Raspberry Pi, which then forwarded the events to the EC2 instance.",
                ],
                icon: Code,
              },
              {
                title: "Web Vulnerability Scan with OWASP ZAP",
                description: [
                  "Scanned website for vulnerabilities using OWASP ZAP, identifying potential risks.",
                  "Analyzed findings to assess potential security threats and saved detailed reports for further action.",
                ],
                icon: Code,
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className='p-6 rounded-lg bg-muted hover:bg-muted/80 transition-colors'
              >
                <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4'>
                  <project.icon size={24} className='text-primary' />
                </div>
                <h3 className='text-xl font-semibold mb-4'>{project.title}</h3>
                <ul className='space-y-2'>
                  {project.description.map((desc, descIndex) => (
                    <li key={descIndex} className='text-muted-foreground'>
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
      <section className='py-20 bg-muted/50'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='container px-4 mx-auto'
        >
          <h2 className='text-3xl font-bold mb-10 text-center'>
            Certifications
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                name: "Certified in Cybersecurity (CC) - ISC2",
                period: "Dec 2024 - Dec 2027",
              },
              {
                name: "Microsoft Certified: Azure Fundamentals",
                period: "Apr 2025",
              },
              {
                name: "SOC Fundamentals - LetsDefend",
                period: "Feb 2025",
              },
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className='p-6 rounded-lg bg-background shadow-lg'
              >
                <div className='flex items-start gap-4'>
                  <div className='mt-1'>
                    <Award size={24} className='text-primary' />
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>{cert.name}</h3>
                    <div className='flex items-center gap-2 text-sm text-muted-foreground'>
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

      <ThemeToggle />
    </main>
  );
}

export default App;
