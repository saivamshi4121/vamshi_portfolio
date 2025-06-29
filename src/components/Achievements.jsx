import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const achievements = [
  {
    icon: '🔖',
    title: 'AWS Certified Solutions Architect – Associate',
    org: 'Amazon Web Services',
    year: '2023',
  },
  {
    icon: '💻',
    title: 'MERN Stack Development',
    org: 'Student Tribe',
    year: '2023',
  },
  {
    icon: '🐍',
    title: 'Python for Data Science',
    org: 'IBM',
    year: '2022',
  },
  {
    icon: '⛓️',
    title: 'Blockchain Fundamentals',
    org: 'Algorand Foundation',
    year: '2022',
  },
  {
    icon: '🎯',
    title: 'Blockchain Club Lead',
    org: 'University Club',
    year: '2022-2023',
  },
];

const Achievements = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [visible]);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, type: 'spring', stiffness: 80, damping: 12 }
    })
  };

  const slideVariants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 }
  };

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-title"
      ref={sectionRef}
      style={{
        background: '#0a0a0a',
        padding: '2.5em 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1.5px solid #00d4ff22',
        borderBottom: '1.5px solid #00d4ff22',
      }}
    >
      {/* Floating Icons */}
      <div className="grid-bg"></div>
      <div className="floating-element" style={{ top: '15%', left: '8%', fontSize: '2em', color: '#00d4ff', opacity: '0.1' }}>🔖</div>
      <div className="floating-element" style={{ bottom: '25%', right: '10%', fontSize: '1.8em', color: '#00d4ff', opacity: '0.1' }}>💻</div>
      <div className="floating-element" style={{ top: '60%', left: '20%', fontSize: '1.5em', color: '#00d4ff', opacity: '0.1' }}>⛓️</div>
      
      {/* Background Certificates Text */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '6em',
        fontWeight: '900',
        color: 'rgba(0, 212, 255, 0.03)',
        letterSpacing: '0.1em',
        whiteSpace: 'nowrap',
        zIndex: -1,
        animation: 'float 8s ease-in-out infinite'
      }}>
        CERTIFICATES
      </div>

      <div className="container" style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* 🔽 Section Title */}
        <motion.h2
          id="achievements-title"
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 0.1 }}
          style={{
            textAlign: 'center',
            marginBottom: '1.2em',
            fontSize: '1.5em',
            fontWeight: 800,
            background: 'linear-gradient(135deg, #4a90e2 0%, #00d4ff 50%, #0066cc 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.01em',
            textShadow: '0 2px 16px #00d4ff88, 0 1px 0 #222',
            zIndex: 2,
            position: 'relative',
            backgroundColor: 'rgba(10, 20, 30, 0.85)',
            borderRadius: '12px',
            boxShadow: '0 2px 16px #000a',
            padding: '0.4em 1.2em',
            display: 'inline-block',
          }}
        >
          🏆 Achievements
        </motion.h2>

        {/* 🔽 Auto Slider */}
        <div style={{
          position: 'relative',
          height: 220,
          marginBottom: '1.5em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            style={{
              position: 'absolute',
              width: '100%',
              maxWidth: 400,
              background: 'linear-gradient(135deg, #181c24 60%, #232b3a 100%)',
              borderRadius: '14px',
              boxShadow: '0 4px 16px #00d4ff22',
              padding: '1.2em',
              border: '1.5px solid #00d4ff44',
              textAlign: 'center',
              transformStyle: 'preserve-3d',
            }}
          >
            <div style={{ fontSize: '2.2em', marginBottom: '0.3em', filter: 'drop-shadow(0 0 20px #00d4ff88)', transform: 'translateZ(20px)' }}>
              {achievements[currentIndex].icon}
            </div>
            <h3 style={{ color: '#00d4ff', fontSize: '1.05em', fontWeight: 700, marginBottom: '0.3em', transform: 'translateZ(15px)' }}>
              {achievements[currentIndex].title}
            </h3>
            <p style={{ color: '#b0b0b0', fontSize: '0.95em', lineHeight: '1.4', marginBottom: '0.5em', transform: 'translateZ(10px)' }}>
              {achievements[currentIndex].org}
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', transform: 'translateZ(5px)' }}>
              <span style={{
                background: 'linear-gradient(135deg, #00ffa322, #00ffa344)',
                color: '#00ffa3',
                padding: '0.3em 0.8em',
                borderRadius: '20px',
                fontSize: '0.8em',
                fontWeight: 600,
                border: '1px solid #00ffa366'
              }}>
                {achievements[currentIndex].year}
              </span>
            </div>
          </motion.div>
        </div>

        {/* 🔽 Badge Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1em',
          marginTop: '1em'
        }}>
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              style={{
                background: 'linear-gradient(135deg, #181c24 60%, #232b3a 100%)',
                borderRadius: '12px',
                boxShadow: '0 2px 8px #00d4ff11',
                padding: '0.9em',
                border: '1px solid #00d4ff33',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.4em',
                minHeight: 110,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px #00d4ff44' }}
              onClick={() => setCurrentIndex(i)}
            >
              <div style={{ fontSize: '1.3em', filter: 'drop-shadow(0 0 8px #00d4ff88)' }}>{item.icon}</div>
              <div style={{ color: '#00d4ff', fontWeight: 700, fontSize: '0.95em', textAlign: 'center', marginBottom: 2 }}>{item.title}</div>
              <div style={{ color: '#b0b0b0', fontSize: '0.85em', textAlign: 'center', marginBottom: 2 }}>{item.org}</div>
              <div style={{ color: '#00ffa3', fontWeight: 600, fontSize: '0.85em', marginTop: 'auto' }}>{item.year}</div>
            </motion.div>
          ))}
        </div>

        {/* 🔽 Dots Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5em', marginTop: '1em' }}>
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentIndex ? '#00d4ff' : '#00d4ff44',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
 