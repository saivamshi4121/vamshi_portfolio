import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const projects = [
  {
    icon: '🔗',
    name: 'SkillVerse – Decentralized Skill Exchange Platform',
    tech: ['Algorand', 'Smart Contracts', 'Blockchain', 'Web3'],
    problem: 'Decentralized platform enabling secure peer-to-peer skill exchange without intermediaries.',
    impact: 'Trustless environment with transparent rating and review systems.',
    code: 'https://github.com/yourusername/skillverse',
    live: 'https://skillverse.vercel.app',
    summary: 'A decentralized skill exchange platform using Algorand blockchain.',
    comingSoon: false
  },
  {
    icon: '🏭',
    name: 'Warehouse Management System (MERN Stack)',
    tech: ['MERN', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
    problem: 'Full-stack warehouse management solution with inventory tracking and admin dashboard.',
    impact: 'Reduced operational overhead by 25% · Real-time notifications and analytics.',
    code: 'https://github.com/saivamshi4121/warehouse-inventory',
    live: 'https://warehouse-inventory.vercel.app',
    summary: 'Comprehensive warehouse management with role-based access control.',
    comingSoon: false
  },
  {
    icon: '🎫',
    name: 'Event Management System (MERN Stack)',
    tech: ['MERN', 'MongoDB', 'Express.js', 'React.js', 'Node.js'],
    problem: 'Interactive platform for event discovery, registration, and management.',
    impact: 'Location-based filtering · Secure payment systems · Email alerts.',
    code: '#',
    live: '#',
    summary: 'Complete event management solution with payment integration.',
    comingSoon: true
  },
  {
    icon: '🗳️',
    name: 'Blockchain-Based Voting System',
    tech: ['Algorand', 'Smart Contracts', 'Blockchain', 'Web3'],
    problem: 'Secure, decentralized voting platform ensuring tamper-proof, verifiable transactions.',
    impact: 'National Hackathon 2023 Finalist · Innovative blockchain implementation.',
    code: '#',
    live: '#',
    summary: 'A secure voting platform leveraging Algorand blockchain.',
    comingSoon: true
  },
  {
    icon: '🏛️',
    name: 'Dastaan-e-Dilli – Story of Delhi Showcase Website',
    tech: ['React', 'Storytelling', 'CSS3', 'Interactive Media'],
    problem: 'Visually engaging website narrating the cultural and historical evolution of Delhi.',
    impact: 'Rich media elements · Interactive timelines · Mobile responsive.',
    code: 'https://github.com/saivamshi4121/candidate-003-Delhilore-module-saivamshi',
    live: 'https://candidate-003-delhilore-module-saiv.vercel.app',
    summary: "A digital showcase of Delhi's heritage and culture.",
    comingSoon: false
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, type: 'spring', stiffness: 80, damping: 12 }
  })
};

const Projects = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();
  const [hovered, setHovered] = useState(null);
  const [ripple, setRipple] = useState({ idx: null, x: 0, y: 0 });
  const [iconHover, setIconHover] = useState(null);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonPosition, setComingSoonPosition] = useState({ x: 0, y: 0 });

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

  // 3D tilt effect
  function handleMouseMove(e, i) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 12;
    card.style.transform = `perspective(700px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  }
  function handleMouseLeave(e) {
    e.currentTarget.style.transform = 'perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)';
  }

  function handleCardClick(e, i) {
    const project = projects[i];
    if (project.comingSoon) {
      const rect = e.currentTarget.getBoundingClientRect();
      setComingSoonPosition({ x: rect.left + rect.width / 2, y: rect.top });
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000);
      return;
    }

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ idx: i, x, y });
    setTimeout(() => setRipple({ idx: null, x: 0, y: 0 }), 400);
  }

  function handleButtonClick(e, project, type) {
    e.stopPropagation();
    if (project.comingSoon) {
      const rect = e.currentTarget.getBoundingClientRect();
      setComingSoonPosition({ x: rect.left + rect.width / 2, y: rect.top });
      setShowComingSoon(true);
      setTimeout(() => setShowComingSoon(false), 2000);
      return;
    }
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      style={{
        background: '#0a0a0a',
        padding: '4em 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(0, 212, 255, 0.03) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 255, 163, 0.02) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(0, 212, 255, 0.02) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }}></div>
      <div className="container" style={{maxWidth: 1100, margin: '0 auto'}}>
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
          Flagship Zone
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5em',
          justifyContent: 'center',
        }}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className="card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.07, boxShadow: '0 12px 40px #00d4ff55' }}
              style={{
                background: 'linear-gradient(135deg, #181c24 60%, #232b3a 100%)',
                borderRadius: '16px',
                boxShadow: hovered === i ? '0 8px 32px #00d4ff88' : '0 4px 24px #00d4ff11',
                padding: '1.5em 1.2em',
                minHeight: 280,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                cursor: 'pointer',
                transition: 'box-shadow 0.3s, transform 0.2s',
                willChange: 'transform',
                perspective: '700px',
                overflow: 'hidden',
              }}
              onMouseMove={e => handleMouseMove(e, i)}
              onMouseLeave={e => { handleMouseLeave(e); setHovered(null); }}
              onMouseEnter={() => setHovered(i)}
              onClick={e => handleCardClick(e, i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(e, i);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${project.name} - ${project.comingSoon ? 'Coming Soon' : 'Click to view project'}`}
            >
              {/* Ripple effect */}
              {ripple.idx === i && (
                <span style={{
                  position: 'absolute',
                  left: ripple.x,
                  top: ripple.y,
                  width: 0,
                  height: 0,
                  background: 'radial-gradient(circle, #00d4ff66 10%, transparent 70%)',
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  pointerEvents: 'none',
                  animation: 'ripple 0.4s linear',
                  zIndex: 2,
                }} />
              )}
              {/* Overlay on hover */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: hovered === i ? 'linear-gradient(135deg, #00d4ff22 0%, #232b3a88 100%)' : 'transparent',
                  opacity: hovered === i ? 1 : 0,
                  pointerEvents: 'none',
                  transition: 'opacity 0.18s',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.08em',
                  color: '#00d4ff',
                  fontWeight: 600,
                }}
              >
                {hovered === i && (
                  <div style={{textAlign: 'center'}}></div>
                )}
              </div>

              {/* Coming Soon Badge */}
              {project.comingSoon && (
                <div
                  style={{
                    position: 'absolute',
                    top: '1em',
                    right: '1em',
                    background: 'linear-gradient(135deg, #00d4ff 0%, #00ffa3 100%)',
                    color: '#0a0a0a',
                    padding: '0.3em 0.6em',
                    borderRadius: '8px',
                    fontSize: '0.7em',
                    fontWeight: '700',
                    zIndex: 3,
                    boxShadow: '0 2px 8px rgba(0, 212, 255, 0.3)',
                    animation: 'pulse 2s ease-in-out infinite',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 212, 255, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 212, 255, 0.3)';
                  }}
                >
                  🚧 COMING SOON
                </div>
              )}

              <div
                style={{fontSize: '1.8em', marginBottom: '0.4em', filter: iconHover === i ? 'drop-shadow(0 0 16px #00d4ff)' : 'drop-shadow(0 0 8px #00d4ff88)', transition: 'filter 0.18s'}}
                onMouseEnter={() => setIconHover(i)}
                onMouseLeave={() => setIconHover(null)}
              >
                <span style={{display: 'inline-block', animation: iconHover === i ? 'icon-bounce 0.5s' : 'none'}}>{project.icon}</span>
              </div>
              <h3 style={{color: '#00d4ff', fontWeight: 700, fontSize: '1.1em', marginBottom: '0.4em'}}>{project.name}</h3>
              <div style={{marginBottom: '0.5em', color: '#b0b0b0', fontSize: '0.9em'}}>
                <strong style={{color: '#00d4ff'}}>Tech:</strong> {project.tech.join(', ')}
              </div>
              <div style={{marginBottom: '0.5em', color: '#b0b0b0', fontSize: '0.9em'}}>
                <strong style={{color: '#00d4ff'}}>Problem:</strong> {project.problem}
              </div>
              <div style={{marginBottom: '0.8em', color: '#00ffa3', fontWeight: 600, fontSize: '0.9em'}}>
                🚀 <span>{project.impact}</span>
              </div>
              <div style={{display: 'flex', gap: '0.8em', marginTop: 'auto'}}>
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn" 
                  style={{
                    fontWeight: 600, 
                    fontSize: '0.9em', 
                    padding: '0.5em 1em',
                    cursor: project.comingSoon ? 'default' : 'pointer',
                    opacity: project.comingSoon ? 0.6 : 1
                  }}
                  onClick={(e) => handleButtonClick(e, project, 'code')}
                  aria-label={project.comingSoon ? 'Project coming soon' : `View code for ${project.name}`}
                >
                  {project.comingSoon ? 'Coming Soon' : 'View Code'}
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary" 
                  style={{
                    fontWeight: 600, 
                    fontSize: '0.9em', 
                    padding: '0.5em 1em',
                    cursor: project.comingSoon ? 'default' : 'pointer',
                    opacity: project.comingSoon ? 0.6 : 1
                  }}
                  onClick={(e) => handleButtonClick(e, project, 'live')}
                  aria-label={project.comingSoon ? 'Project coming soon' : `View live demo for ${project.name}`}
                >
                  {project.comingSoon ? 'Coming Soon' : 'Live Demo'}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div
          style={{
            position: 'fixed',
            left: comingSoonPosition.x,
            top: comingSoonPosition.y - 60,
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #00d4ff 0%, #00ffa3 100%)',
            color: '#0a0a0a',
            padding: '0.8em 1.2em',
            borderRadius: '12px',
            fontSize: '0.9em',
            fontWeight: '600',
            boxShadow: '0 8px 32px rgba(0, 212, 255, 0.4)',
            zIndex: 10000,
            animation: 'popupSlide 0.3s ease-out',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0, 212, 255, 0.2)'
          }}
          role="tooltip"
          aria-label="Project coming soon"
        >
          🚧 Coming Soon! 🚧
          <div
            style={{
              position: 'absolute',
              bottom: '-8px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '8px solid #00ffa3'
            }}
          ></div>
        </div>
      )}

      <style>{`
        @keyframes ripple {
          0% { width: 0; height: 0; opacity: 0.5; }
          100% { width: 300px; height: 300px; opacity: 0; }
        }
        @keyframes icon-bounce {
          0% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
          60% { transform: translateY(2px); }
          100% { transform: translateY(0); }
        }
        @keyframes popupSlide {
          0% {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
