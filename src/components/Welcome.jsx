import React, { useState, useEffect } from 'react';

// Import profile picture
import vamshiPic from '../assests/vamshi.jpg';

const Welcome = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Simulate loading progress with longer duration
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowContent(true);
            setTimeout(() => {
              onComplete();
            }, 2000);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 8; // Reduced increment for longer loading
      });
    }, 150); // Increased interval for slower progress

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      transition: 'opacity 0.8s ease-out',
      opacity: showContent ? 0 : 1,
      pointerEvents: showContent ? 'none' : 'auto'
    }}>
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

      {/* Floating particles */}
      <div className="particles">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Profile Picture */}
        <div style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          margin: '0 auto 2em auto',
          position: 'relative',
          background: 'linear-gradient(135deg, #00d4ff 0%, #00ffa3 100%)',
          padding: '4px',
          boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
          animation: 'pulse 2s ease-in-out infinite'
        }}>
          <img
            src={vamshiPic}
            alt="Saivamshi"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #0a0a0a'
            }}
          />
          {/* Rotating border */}
          <div style={{
            position: 'absolute',
            top: '-2px',
            left: '-2px',
            right: '-2px',
            bottom: '-2px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, #00d4ff, #00ffa3, #00d4ff)',
            animation: 'rotate 3s linear infinite',
            zIndex: -1
          }}></div>
        </div>

        {/* Welcome Text */}
        <h1 style={{
          fontSize: '2.5em',
          fontWeight: '800',
          marginBottom: '0.5em',
          background: 'linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'fadeInUp 1s ease-out 0.5s both'
        }}>
          Welcome
        </h1>
        
        <p style={{
          fontSize: '1.2em',
          color: '#b0b0b0',
          marginBottom: '2em',
          animation: 'fadeInUp 1s ease-out 0.8s both'
        }}>
          Loading your digital experience...
        </p>

        {/* Loading Bar */}
        <div style={{
          width: '300px',
          height: '4px',
          background: 'rgba(0, 212, 255, 0.2)',
          borderRadius: '2px',
          margin: '0 auto 1em auto',
          overflow: 'hidden',
          position: 'relative'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #00d4ff 0%, #00ffa3 100%)',
            borderRadius: '2px',
            transition: 'width 0.3s ease',
            boxShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
          }}></div>
          {/* Shimmer effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent)',
            animation: 'shimmer 2s infinite'
          }}></div>
        </div>

        {/* Progress Text */}
        <div style={{
          fontSize: '0.9em',
          color: '#00d4ff',
          fontWeight: '500',
          animation: 'fadeInUp 1s ease-out 1s both'
        }}>
          {Math.round(progress)}% Complete
        </div>

        {/* Loading Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.3em',
          marginTop: '1em',
          animation: 'fadeInUp 1s ease-out 1.2s both'
        }}>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00d4ff',
                animation: `bounce 1.4s ease-in-out infinite both`,
                animationDelay: `${i * 0.16}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 30px rgba(0, 212, 255, 0.5);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 40px rgba(0, 212, 255, 0.7);
          }
        }
        
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
        
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #00d4ff;
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        .particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 60%; right: 15%; animation-delay: 1s; }
        .particle:nth-child(3) { top: 30%; right: 25%; animation-delay: 2s; }
        .particle:nth-child(4) { bottom: 30%; left: 20%; animation-delay: 3s; }
        .particle:nth-child(5) { top: 80%; left: 30%; animation-delay: 4s; }
        .particle:nth-child(6) { bottom: 60%; right: 10%; animation-delay: 5s; }
        .particle:nth-child(7) { top: 10%; right: 40%; animation-delay: 6s; }
        .particle:nth-child(8) { bottom: 20%; left: 50%; animation-delay: 7s; }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome; 