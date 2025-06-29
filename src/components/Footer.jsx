import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/saivamshi4121',
      icon: (
        <svg style={{width: '20px', height: '20px'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saivamshi-webdev/',
      icon: (
        <svg style={{width: '20px', height: '20px'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'Twitter',
      url: 'https://x.com/Saivams17963142',
      icon: (
        <svg style={{width: '20px', height: '20px'}} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:palamurivamshi2005@gmail.com',
      icon: (
        <svg style={{width: '20px', height: '20px'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      color: 'white',
      padding: '1.2em 0 0.7em 0',
      borderTop: '1px solid #333',
      fontSize: '0.98em'
    }}>
      <div className="container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7em'}}>
        <div style={{fontWeight: 700, fontSize: '1.1em', background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', marginBottom: 2}}>
          Palamuri Saivamshi
        </div>
        <div style={{display: 'flex', gap: '1em', marginBottom: 2}}>
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#b0b0b0',
                transition: 'all 0.3s ease',
                padding: '0.3em',
                borderRadius: '6px',
                background: 'rgba(0, 212, 255, 0.04)',
                border: '1px solid rgba(0, 212, 255, 0.08)'
              }}
              onMouseEnter={e => {
                e.target.style.color = '#00d4ff';
                e.target.style.background = 'rgba(0, 212, 255, 0.12)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.target.style.color = '#b0b0b0';
                e.target.style.background = 'rgba(0, 212, 255, 0.04)';
                e.target.style.transform = 'translateY(0)';
              }}
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div style={{
          color: '#b0b0b0', 
          fontSize: '0.95em', 
          textAlign: 'center',
          marginBottom: '0.5em',
          display: 'flex',
          gap: '1em',
          alignItems: 'center',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          <span style={{display: 'flex', alignItems: 'center', gap: '0.3em'}}>
            <span style={{color: '#00d4ff'}}>📞</span>
            <a 
              href="tel:+919490940282" 
              style={{
                color: '#b0b0b0',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.color = '#00d4ff'}
              onMouseLeave={e => e.target.style.color = '#b0b0b0'}
            >
              9490940282
            </a>
          </span>
          <span style={{color: '#666'}}>|</span>
          <span style={{display: 'flex', alignItems: 'center', gap: '0.3em'}}>
            <span style={{color: '#00d4ff'}}>✉️</span>
            <a 
              href="mailto:palamurivamshi2005@gmail.com" 
              style={{
                color: '#b0b0b0',
                textDecoration: 'none',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={e => e.target.style.color = '#00d4ff'}
              onMouseLeave={e => e.target.style.color = '#b0b0b0'}
            >
              palamurivamshi2005@gmail.com
            </a>
          </span>
        </div>
        <div style={{color: '#b0b0b0', fontSize: '0.92em', textAlign: 'center'}}>
          © {currentYear} Palamuri Saivamshi. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 