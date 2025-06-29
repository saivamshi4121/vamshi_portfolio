import React, { useEffect, useRef, useState } from 'react';

const badges = [
  { label: 'AWS Certified', color: '#232f3e', bg: '#f3f6fa', icon: '☁️', desc: 'Amazon Web Services Certified Solutions Architect' },
  { label: 'Blockchain Club Lead', color: '#1976d2', bg: '#e3f2fd', icon: '🔗', desc: 'Led university blockchain club, fostering innovation' },
  { label: 'SSOC Contributor', color: '#00897b', bg: '#e0f7fa', icon: '🌟', desc: 'Active contributor to Student Open Source Community' },
];

const valueTooltips = {
  Innovation: 'Always exploring new tech and creative solutions.',
  Community: 'Building, sharing, and learning together.',
  Mentorship: 'Helping others grow is as rewarding as building products.'
};

const About = () => {
  const sectionRef = useRef(null);
  const [badgeTooltip, setBadgeTooltip] = useState(null);
  const [valueTooltip, setValueTooltip] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        background: '#0f0f0f',
        padding: '2.2em 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid Background */}
      <div className="grid-bg"></div>
      {/* Floating Elements */}
      <div className="floating-element" style={{
        top: '15%',
        right: '10%',
        fontSize: '1.2em',
        color: '#00d4ff',
        opacity: '0.04',
      }}>💡</div>
      <div className="floating-element" style={{
        bottom: '20%',
        left: '15%',
        fontSize: '1.4em',
        color: '#00d4ff',
        opacity: '0.04',
      }}>⚡</div>
      <div className="container" style={{maxWidth: 1200, margin: '0 auto'}}>
        <h2 style={{
          textAlign: 'center',
          marginBottom: '1.5em',
          fontSize: '1.7em',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          position: 'relative',
          zIndex: 1,
        }}>
          About Me
        </h2>
        <div className="card glow" style={{
          margin: '0 auto',
          maxWidth: '100%',
          position: 'relative',
          zIndex: 1,
          padding: '1.2em 1.1em',
          display: 'flex',
          flexDirection: 'row',
          gap: '2em',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          flexWrap: 'wrap',
        }}>
          {/* Passion (Story Hook) */}
          <div style={{ flex: 1, minWidth: 240, maxWidth: 370, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '1em' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.3em', fontSize: '1.08em' }}>🚀 About Me</h3>
            <p style={{ fontSize: '0.98em', color: '#b0b0b0', lineHeight: 1.6 }}>
            I am a Computer Science student with expertise in full-stack development, cloud computing, and blockchain technologies. Passionate about solving real-world problems, I specialize in building scalable solutions and optimizing system performance. Currently pursuing a B.Tech with a CGPA of 8.7, I strive to combine technical expertise and leadership skills to create impactful digital solutions while staying at the forefront of emerging technologies.
            </p>
          </div>
          {/* What I'm Great At */}
          <div style={{ flex: 1, minWidth: 240, maxWidth: 370, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '1em' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.3em', fontSize: '1.08em' }}>💡 What I'm Great At</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#b0b0b0', fontSize: '0.97em', margin: 0, textAlign: 'left', display: 'inline-block' }}>
              <li style={{ marginBottom: '0.5em' }}>
                <strong style={{ color: '#00d4ff' }}>Full-Stack Engineering:</strong> React, Node.js, JavaScript, Python, Solidity
              </li>
              <li style={{ marginBottom: '0.5em' }}>
                <strong style={{ color: '#00d4ff' }}>Cloud & DevOps:</strong> AWS (Certified), CI/CD, scalable deployments
              </li>
              <li style={{ marginBottom: '0.5em' }}>
                <strong style={{ color: '#00d4ff' }}>Blockchain:</strong> Smart contracts, dApps, Ethereum, Web3
              </li>
              <li>
                <strong style={{ color: '#00d4ff' }}>Community:</strong> Mentoring, open-source, leading tech initiatives
              </li>
            </ul>
          </div>
          {/* Values */}
          <div style={{ flex: 1, minWidth: 240, maxWidth: 370, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '1em' }}>
            <h3 style={{ color: '#00d4ff', marginBottom: '0.3em', fontSize: '1.08em' }}>🌱 My Values</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#b0b0b0', fontSize: '0.97em', margin: 0, textAlign: 'left', display: 'inline-block' }}>
              {['Innovation', 'Community', 'Mentorship'].map((val, idx) => (
                <li
                  key={val}
                  style={{ marginBottom: idx < 2 ? '0.5em' : 0, cursor: 'pointer', position: 'relative', transition: 'color 0.2s' }}
                  onMouseEnter={() => setValueTooltip(val)}
                  onMouseLeave={() => setValueTooltip(null)}
                >
                  <strong
                    style={{
                      color: '#00d4ff',
                      borderBottom: valueTooltip === val ? '2px solid #00ffa3' : '2px solid transparent',
                      transition: 'border 0.2s',
                    }}
                  >
                    {val}:
                  </strong>{' '}
                  {val === 'Innovation' && 'I love exploring new tech and pushing boundaries.'}
                  {val === 'Community' && 'Building, sharing, and learning together is at my core.'}
                  {val === 'Mentorship' && 'Helping others grow is as rewarding as building products.'}
                  {/* Tooltip */}
                  {valueTooltip === val && (
                    <span style={{
                      position: 'absolute',
                      left: '50%',
                      top: '110%',
                      transform: 'translateX(-50%)',
                      background: '#181c24',
                      color: '#00ffa3',
                      padding: '0.4em 1em',
                      borderRadius: '8px',
                      fontSize: '0.92em',
                      boxShadow: '0 2px 8px #00d4ff22',
                      whiteSpace: 'nowrap',
                      zIndex: 10,
                    }}>
                      {valueTooltips[val]}
                    </span>
                  )}
                </li>
              ))}
    </ul>
          </div>
        </div>
        {/* Highlight Badges */}
        <div style={{
          marginTop: '1.2em',
          display: 'flex',
          gap: '0.5em',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {badges.map((badge, i) => (
            <span
              key={badge.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4em',
                background: badge.bg,
                color: badge.color,
                borderRadius: '16px',
                padding: '0.28em 0.7em',
                fontWeight: 600,
                fontSize: '0.89em',
                boxShadow: badgeTooltip === i ? '0 4px 16px #00ffa366' : '0 2px 6px rgba(0,0,0,0.06)',
                border: `1px solid ${badge.color}`,
                letterSpacing: '0.01em',
                cursor: 'pointer',
                transform: badgeTooltip === i ? 'scale(1.08)' : 'scale(1)',
                transition: 'all 0.18s',
                position: 'relative',
              }}
              onMouseEnter={() => setBadgeTooltip(i)}
              onMouseLeave={() => setBadgeTooltip(null)}
            >
              <span style={{ fontSize: '1em' }}>{badge.icon}</span> {badge.label}
              {/* Tooltip */}
              {badgeTooltip === i && (
                <span style={{
                  position: 'absolute',
                  left: '50%',
                  top: '110%',
                  transform: 'translateX(-50%)',
                  background: '#181c24',
                  color: '#00d4ff',
                  padding: '0.4em 1em',
                  borderRadius: '8px',
                  fontSize: '0.92em',
                  boxShadow: '0 2px 8px #00d4ff22',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                }}>
                  {badge.desc}
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
  </section>
);
};

export default About;
