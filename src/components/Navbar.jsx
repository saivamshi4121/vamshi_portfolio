import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      const sections = ['home', 'about', 'experience', 'projects', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div 
        style={{
          background: isScrolled 
            ? 'rgba(15, 15, 15, 0.95)' 
            : 'rgba(10, 10, 10, 0.85)',
          backdropFilter: 'blur(25px)',
          borderRadius: '60px',
          padding: '1em 1.8em',
          border: isScrolled 
            ? '1px solid rgba(0, 212, 255, 0.3)' 
            : '1px solid rgba(0, 212, 255, 0.15)',
          boxShadow: isScrolled 
            ? '0 12px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(0, 212, 255, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
            : '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 212, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8em',
          minWidth: '400px',
          justifyContent: 'center',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background gradient */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isHovered 
            ? 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(0, 255, 163, 0.05) 100%)' 
            : 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, transparent 100%)',
          transition: 'all 0.4s ease',
          borderRadius: '60px'
        }}></div>

        {/* Brand Logo */}
        <div style={{
          marginRight: '1.2em',
          paddingRight: '1.2em',
          borderRight: '1px solid rgba(0, 212, 255, 0.25)',
          display: 'flex',
          alignItems: 'center',
          position: 'relative'
        }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #00d4ff 0%, #00ffa3 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            fontSize: '0.9em',
            color: '#000',
            boxShadow: '0 4px 12px rgba(0, 212, 255, 0.4)',
            transition: 'all 0.3s ease'
          }}>
            PS
          </div>
        </div>

        {/* Navigation Items */}
        <div style={{
          display: 'flex',
          gap: '0.4em',
          position: 'relative'
        }}>
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4em',
                padding: '0.7em 1.2em',
                borderRadius: '30px',
                textDecoration: 'none',
                color: activeSection === item.id ? '#00d4ff' : '#b0b0b0',
                background: activeSection === item.id 
                  ? 'rgba(0, 212, 255, 0.2)' 
                  : 'transparent',
                border: activeSection === item.id 
                  ? '1px solid rgba(0, 212, 255, 0.4)' 
                  : '1px solid transparent',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden',
                fontSize: '0.9em',
                fontWeight: '500',
                transform: activeSection === item.id ? 'scale(1.05)' : 'scale(1)',
                boxShadow: activeSection === item.id 
                  ? '0 4px 16px rgba(0, 212, 255, 0.3)' 
                  : 'none'
              }}
              onMouseEnter={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.background = 'rgba(0, 212, 255, 0.15)';
                  e.target.style.color = '#00d4ff';
                  e.target.style.transform = 'scale(1.05) translateY(-2px)';
                  e.target.style.boxShadow = '0 6px 20px rgba(0, 212, 255, 0.25)';
                }
              }}
              onMouseLeave={(e) => {
                if (activeSection !== item.id) {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#b0b0b0';
                  e.target.style.transform = 'scale(1) translateY(0)';
                  e.target.style.boxShadow = 'none';
                }
              }}
            >
              {/* Ripple effect */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '0',
                height: '0',
                borderRadius: '50%',
                background: 'rgba(0, 212, 255, 0.3)',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.6s ease',
                pointerEvents: 'none'
              }}></div>
              
              <span style={{ 
                fontSize: '1.1em',
                filter: activeSection === item.id ? 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.6))' : 'none',
                transition: 'all 0.3s ease'
              }}>
                {item.icon}
              </span>
              <span style={{ 
                opacity: isScrolled ? 1 : 0,
                transform: isScrolled ? 'translateX(0)' : 'translateX(-10px)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                whiteSpace: 'nowrap',
                fontWeight: activeSection === item.id ? '600' : '500'
              }}>
                {item.label}
              </span>
            </a>
          ))}
        </div>

        {/* Status Indicator */}
        <div style={{
          marginLeft: '1.2em',
          paddingLeft: '1.2em',
          borderLeft: '1px solid rgba(0, 212, 255, 0.25)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.4em'
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #00d4ff 0%, #00ffa3 100%)',
            boxShadow: '0 0 15px rgba(0, 212, 255, 0.6)',
            animation: 'pulse 2s infinite',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-2px',
              left: '-2px',
              right: '-2px',
              bottom: '-2px',
              borderRadius: '50%',
              background: 'rgba(0, 212, 255, 0.3)',
              animation: 'ripple 2s infinite'
            }}></div>
          </div>
          <span style={{
            fontSize: '0.85em',
            color: '#00d4ff',
            opacity: isScrolled ? 1 : 0,
            transform: isScrolled ? 'translateX(0)' : 'translateX(-10px)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            whiteSpace: 'nowrap',
            fontWeight: '500'
          }}>
            Available
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;