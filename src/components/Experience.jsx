import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Import company logos
import flowbusLogo from '../assests/flowbus.jpeg';
import saSolutionsLogo from '../assests/sa solutions.jpeg';
import wintagekartLogo from '../assests/wintagekart.jpeg';
import peopleAiLogo from '../assests/people_ai_logo.jpeg';

const experiences = [
  {
    company: 'EDODWAJA',
    logo: flowbusLogo,
    title: 'Junior Software Developer',
    period: 'April 2025 – Present',
    location: 'Hyderabad, Telangana',
    tasks: [
      'Collaborating with the development team to build scalable web applications',
      'Assisting in frontend and backend tasks, with a focus on code quality and performance',
      'Working on live projects and contributing to real-time software solutions',
    ],
    impact: 'Currently contributing to live projects and real-time software solutions.'
  },
  {
    company: 'SA Solutions',
    logo: saSolutionsLogo,
    title: 'Web Developer',
    period: '2025 - Present',
    location: 'Hyderabad, Telangana',
    tasks: [
      'Designed and developed responsive websites using HTML, CSS, JavaScript, and React.js',
      'Worked closely with clients to gather requirements and deliver customized web solutions',
      'Integrated APIs and ensured cross-browser compatibility for seamless user experience',
    ],
    impact: 'Delivered customized web solutions with excellent client satisfaction.'
  },
  {
    company: 'WintageKart',
    logo: wintagekartLogo,
    title: 'Web Developer Intern',
    period: 'May 2024 – Jul 2024',
    location: 'Hyderabad, Telangana',
    tasks: [
      'Developed a fully functional frontend application using React.js, reducing page load time by 30%',
      'Integrated APIs to fetch and display real-time data, improving platform responsiveness',
      'Designed reusable UI components, ensuring modularity and scalability',
    ],
    impact: 'Reduced page load time by 30% and improved platform responsiveness.'
  },
  {
    company: 'People+AI',
    logo: peopleAiLogo,
    title: 'Backend Developer Intern',
    period: 'Jan 2024 – Apr 2024',
    location: 'Hyderabad, Telangana',
    tasks: [
      'Built and optimized backend services using Node.js and Express.js, improving API response time by 40%',
      'Designed and implemented RESTful APIs for seamless data retrieval and storage',
      'Integrated authentication mechanisms using JWT for secure user access',
    ],
    impact: 'Improved API response time by 40% and implemented secure authentication.'
  },
];

const timelineVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 70, damping: 14 }
  })
};

const Experience = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) controls.start('visible');
  }, [visible, controls]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        background: '#10131a',
        padding: '4em 0',
        position: 'relative',
        overflowX: 'auto',
        borderTop: '1.5px solid #00d4ff22',
        borderBottom: '1.5px solid #00d4ff22',
      }}
    >
      <div className="container" style={{maxWidth: 1200, margin: '0 auto'}}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '2em',
          fontSize: '2.2em',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.01em',
        }}>
          Experience Timeline
        </h2>
        <div style={{
          display: 'flex',
          gap: '2.5em',
          overflowX: 'auto',
          paddingBottom: '1em',
          scrollbarWidth: 'thin',
        }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              custom={i}
              variants={timelineVariants}
              initial="hidden"
              animate={controls}
              style={{
                minWidth: 320,
                background: 'linear-gradient(135deg, #181c24 60%, #232b3a 100%)',
                borderRadius: '18px',
                boxShadow: '0 4px 24px #00d4ff11',
                padding: '2em 1.5em',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1.5px solid #00d4ff33',
                position: 'relative',
                transition: 'box-shadow 0.3s',
              }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #00d4ff44' }}
            >
              <img
                src={exp.logo}
                alt={exp.company}
                style={{width: 60, height: 60, objectFit: 'contain', borderRadius: '50%', marginBottom: 16, background: '#fff'}}
              />
              <h3 style={{color: '#00d4ff', fontWeight: 700, fontSize: '1.1em', marginBottom: 4}}>{exp.title}</h3>
              <div style={{color: '#b0b0b0', fontWeight: 600, fontSize: '1em', marginBottom: 2}}>{exp.company}</div>
              <div style={{color: '#00ffa3', fontWeight: 500, fontSize: '0.95em', marginBottom: 10}}>{exp.period}</div>
              <div style={{color: '#00ffa3', fontWeight: 600, fontSize: '0.97em', marginBottom: 10}}>{exp.location}</div>
              <ul style={{color: '#b0b0b0', fontSize: '0.97em', marginBottom: 10, paddingLeft: 18, textAlign: 'left'}}>
                {exp.tasks.map((task, idx) => (
                  <li key={idx} style={{marginBottom: 4}}>{task}</li>
                ))}
              </ul>
              <div style={{color: '#00ffa3', fontWeight: 600, fontSize: '0.97em', marginTop: 'auto'}}>
                {exp.impact}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 