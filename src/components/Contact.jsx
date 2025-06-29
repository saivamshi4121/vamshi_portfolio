import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'saivamshi@example.com',
      link: 'mailto:saivamshi@example.com'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Hyderabad, India'
    },
    {
      icon: '⏰',
      label: 'Available',
      value: 'Mon - Fri, 9AM - 6PM IST'
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, type: 'spring', stiffness: 70, damping: 14 }
    })
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        background: '#0a0a0a',
        padding: '4em 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1.5px solid #00d4ff22',
      }}
    >
      {/* Grid Background */}
      <div className="grid-bg"></div>
      
      {/* Floating Elements */}
      <div className="floating-element" style={{
        top: '20%',
        left: '10%',
        fontSize: '1.8em',
        color: '#00d4ff',
        opacity: '0.1'
      }}>📞</div>
      <div className="floating-element" style={{
        bottom: '30%',
        right: '15%',
        fontSize: '1.5em',
        color: '#00d4ff',
        opacity: '0.1'
      }}>📧</div>
      
      <div className="container" style={{maxWidth: 800, margin: '0 auto'}}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ delay: 0.1 }}
          style={{
            textAlign: 'center',
            marginBottom: '2em',
            fontSize: '2.2em',
            background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.01em',
          }}
        >
          📞 Contact Information
        </motion.h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5em',
          maxWidth: 500,
          margin: '0 auto'
        }}>
          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.02, x: 5 }}
              style={{
                background: 'linear-gradient(135deg, #181c24 60%, #232b3a 100%)',
                borderRadius: '16px',
                boxShadow: '0 4px 24px #00d4ff11',
                padding: '1.5em 2em',
                display: 'flex',
                alignItems: 'center',
                gap: '1.2em',
                border: '1.5px solid #00d4ff33',
                transition: 'box-shadow 0.3s',
                cursor: info.link ? 'pointer' : 'default'
              }}
              onClick={() => info.link && window.open(info.link, '_blank')}
            >
              <div style={{
                fontSize: '2em',
                filter: 'drop-shadow(0 0 8px #00d4ff88)',
                minWidth: '1.2em',
                textAlign: 'center'
              }}>
                {info.icon}
              </div>
              <div style={{flex: 1}}>
                <div style={{
                  color: '#00d4ff',
                  fontWeight: 600,
                  fontSize: '1em',
                  marginBottom: '0.2em'
                }}>
                  {info.label}
                </div>
                <div style={{
                  color: '#ffffff',
                  fontSize: '1.1em',
                  fontWeight: 500
                }}>
                  {info.value}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
  </section>
);
};

export default Contact;