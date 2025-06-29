import React, { useEffect, useState } from 'react';

const roles = [
  'Web Developer',
  'Cloud Enthusiast',
  'Full-Stack Engineer',
  'Open Source Contributor'
];

function useTypingEffect(words, speed = 80, pause = 1200) {
  const [display, setDisplay] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      setSubIndex(0);
      setDeleting(false);
      return;
    }
    if (!deleting && subIndex === words[index].length) {
      setTimeout(() => setDeleting(true), pause);
      return;
    }
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setDisplay(words[index].substring(0, subIndex + (deleting ? -1 : 1)));
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, speed, pause]);

  return display;
}

const Hero = () => {
  const typing = useTypingEffect(roles);

  return (
    <section id="home" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Grid Background */}
      <div className="grid-bg"></div>
      
      {/* Floating Elements */}
      <div className="floating-element" style={{
        top: '20%',
        left: '10%',
        fontSize: '2em',
        color: '#00d4ff',
        opacity: '0.1'
      }}>⚛️</div>
      <div className="floating-element" style={{
        top: '60%',
        right: '15%',
        fontSize: '1.5em',
        color: '#00d4ff',
        opacity: '0.1'
      }}>🚀</div>
      <div className="floating-element" style={{
        top: '30%',
        right: '25%',
        fontSize: '1.8em',
        color: '#00d4ff',
        opacity: '0.1'
      }}>💻</div>
      <div className="floating-element" style={{
        bottom: '30%',
        left: '20%',
        fontSize: '1.3em',
        color: '#00d4ff',
        opacity: '0.1'
      }}>🔗</div>
      
      {/* Particle Effects */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0, 212, 255, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>
      
      <div className="container" style={{textAlign: 'center', position: 'relative', zIndex: 1}}>
        {/* Animated background text */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '8em',
          fontWeight: '900',
          color: 'rgba(0, 212, 255, 0.03)',
          letterSpacing: '0.1em',
          whiteSpace: 'nowrap',
          zIndex: -1,
          animation: 'float 6s ease-in-out infinite'
        }}>
          DEVELOPER
        </div>
        
        {/* Main content */}
        <div style={{marginBottom: '2em', position: 'relative'}}>
          {/* Greeting with animated underline */}
          <div style={{
            fontSize: '0.95em',
            color: '#00d4ff',
            fontWeight: '600',
            marginBottom: '1.5em',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            position: 'relative',
            display: 'inline-block'
          }}>
            <span style={{position: 'relative'}}>
              Hello, I'm
              <div style={{
                position: 'absolute',
                bottom: '-8px',
                left: '0',
                width: '100%',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)',
                animation: 'expand 2s ease-out forwards'
              }}></div>
            </span>
          </div>
          
          {/* Name with advanced styling */}
          <h1 style={{
            fontSize: '4.5em',
            fontWeight: '900',
            marginBottom: '0.4em',
            lineHeight: '0.9',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.1em'
          }}>
            <span style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 30%, #00ffa3 70%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 50px rgba(0, 212, 255, 0.5)',
              animation: 'glow 3s ease-in-out infinite alternate'
            }}>
              Saivamshi
            </span>
            <div style={{
              fontSize: '0.4em',
              fontWeight: '300',
              color: '#666',
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              marginTop: '0.2em',
              opacity: 0,
              animation: 'fadeInUp 1s ease-out 0.5s forwards'
            }}>
              Palamuri
            </div>
          </h1>
          
          {/* Professional title with typewriter effect */}
          <div style={{
            fontSize: '1.6em',
            minHeight: '2.4em',
            marginBottom: '1.5em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5em',
            position: 'relative'
          }}>
            <span style={{
              color: '#00d4ff',
              fontWeight: '600',
              letterSpacing: '0.02em',
              position: 'relative'
            }}>
              {typing}
            </span>
            <span style={{
              display: 'inline-block',
              width: '2px',
              background: '#00d4ff',
              height: '1.4em',
              marginLeft: '4px',
              animation: 'blink 1s steps(1) infinite',
              boxShadow: '0 0 10px #00d4ff'
            }}></span>
          </div>
          
          {/* Expertise badges */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1em',
            marginBottom: '2em',
            flexWrap: 'wrap'
          }}>
            {['Full-Stack', 'Blockchain', 'Cloud Native'].map((skill, index) => (
              <div key={skill} style={{
                padding: '0.4em 1.2em',
                background: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: '25px',
                fontSize: '0.9em',
                color: '#00d4ff',
                fontWeight: '500',
                letterSpacing: '0.05em',
                backdropFilter: 'blur(10px)',
                opacity: 0,
                animation: `slideInUp 0.6s ease-out ${0.8 + index * 0.2}s forwards`
              }}>
              {skill}
              </div>
            ))}
          </div>
          
          {/* Description with sophisticated typography */}
          <div style={{
            fontSize: '1.1em',
            color: '#b0b0b0',
            fontWeight: '300',
            maxWidth: '700px',
            margin: '0 auto 2em auto',
            lineHeight: '1.7',
            letterSpacing: '0.02em',
            opacity: 0,
            animation: 'fadeIn 1s ease-out 1.5s forwards'
          }}>
            Transforming ideas into elegant digital solutions. Specializing in modern web technologies, 
            blockchain innovation, and scalable cloud architectures that drive business growth.
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', gap: '1.2em', marginBottom: '2em', flexWrap: 'wrap'}}>
          <a href="https://www.linkedin.com/in/saivamshi-webdev/" target="_blank" rel="noopener noreferrer" className="btn" style={{fontWeight: 600, fontSize: '1.1em'}}>
            Let's Connect
          </a>
          <a href="/saivamshi%20resume.pdf" download className="btn btn-secondary" style={{fontWeight: 600, fontSize: '1.1em'}}>
            View Resume
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div style={{
          position: 'absolute',
          bottom: '2em',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <div style={{
            width: '2px',
            height: '30px',
            background: 'linear-gradient(to bottom, #00d4ff, transparent)',
            borderRadius: '1px'
          }}></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(-50%, -50%) translateY(0px); }
          50% { transform: translate(-50%, -50%) translateY(-20px); }
        }
        
        @keyframes expand {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes glow {
          0% { text-shadow: 0 0 50px rgba(0, 212, 255, 0.5); }
          100% { text-shadow: 0 0 80px rgba(0, 212, 255, 0.8), 0 0 120px rgba(0, 212, 255, 0.3); }
        }
        
        @keyframes fadeInUp {
          0% { 
            opacity: 0;
            transform: translateY(20px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          0% { 
            opacity: 0;
            transform: translateY(30px);
          }
          100% { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
