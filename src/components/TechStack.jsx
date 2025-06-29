import React, { useRef, useEffect, useState } from 'react';

const stacks = [
  {
    label: 'MERN Stack',
    icon: '🟩',
    level: 95,
    color: '#00d4ff',
    barBg: 'linear-gradient(90deg, #00d4ff 0%, #1976d2 100%)'
  },
  {
    label: 'Algorand + Smart Contracts',
    icon: '🔗',
    level: 50,
    color: '#00ffa3',
    barBg: 'linear-gradient(90deg, #00ffa3 0%, #00d4ff 100%)'
  },
  {
    label: 'AWS + Firebase',
    icon: '☁️',
    level: 75,
    color: '#ffb300',
    barBg: 'linear-gradient(90deg, #ffb300 0%, #00d4ff 100%)'
  },
  {
    label: 'Git, REST APIs',
    icon: '🔧',
    level: 90,
    color: '#ff4081',
    barBg: 'linear-gradient(90deg, #ff4081 0%, #00d4ff 100%)'
  }
];

const TechStack = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="techstack"
      ref={sectionRef}
      style={{
        background: '#10131a',
        padding: '2.5em 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1.5px solid #00d4ff22',
        borderBottom: '1.5px solid #00d4ff22',
      }}
    >
      <div className="container" style={{maxWidth: 800, margin: '0 auto'}}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.2em',
          fontSize: '1.5em',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '0.01em',
        }}>
          Tech Stack
        </h2>
        <div style={{
          background: 'rgba(10,20,30,0.85)',
          borderRadius: '14px',
          boxShadow: '0 4px 16px rgba(0, 212, 255, 0.08)',
          padding: '1.2em 1em',
          border: '1.5px solid #00d4ff33',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.1em',
        }}>
          {stacks.map((stack, i) => (
            <div key={stack.label} style={{display: 'flex', alignItems: 'center', gap: '0.8em'}}>
              <span style={{fontSize: '1.3em', filter: 'drop-shadow(0 0 6px #00d4ff88)'}}>{stack.icon}</span>
              <div style={{flex: 1}}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3}}>
                  <span style={{color: '#fff', fontWeight: 600, fontSize: '0.98em', letterSpacing: '0.01em'}}>{stack.label}</span>
                  <span style={{color: stack.color, fontWeight: 700, fontSize: '0.95em'}}>{stack.level}%</span>
                </div>
                <div style={{
                  background: '#1a1a1a',
                  borderRadius: '7px',
                  height: '10px',
                  boxShadow: '0 1px 4px #00d4ff22',
                  overflow: 'hidden',
                  border: `1px solid ${stack.color}44`,
                  position: 'relative',
                }}>
                  <div style={{
                    width: visible ? `${stack.level}%` : '0%',
                    height: '100%',
                    background: stack.barBg,
                    borderRadius: '7px',
                    boxShadow: `0 0 8px ${stack.color}66`,
                    transition: 'width 1.2s cubic-bezier(.6,1.5,.5,1) '+(i*0.2)+'s',
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    borderRadius: '7px',
                    pointerEvents: 'none',
                    boxShadow: '0 0 0 1px #00d4ff11 inset',
                  }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; 