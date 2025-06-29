import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} style={{position: 'relative'}}>
      <motion.p
        transition={{ duration: 0.3 }}
        style={{
          cursor: 'pointer',
          color: '#ffffff',
          margin: 0,
          padding: '0.3em 0.7em',
          borderRadius: '25px',
          transition: 'all 0.3s ease',
          fontSize: '0.95em'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(0, 212, 255, 0.1)';
          e.target.style.color = '#00d4ff';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'transparent';
          e.target.style.color = '#ffffff';
        }}
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div style={{
              position: 'absolute',
              top: 'calc(100% + 0.7rem)',
              left: '50%',
              transform: 'translateX(-50%)',
              paddingTop: '0.5rem'
            }}>
              <motion.div
                transition={transition}
                layoutId="active"
                style={{
                  background: 'rgba(26, 26, 26, 0.95)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 212, 255, 0.2)',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
                  minWidth: '160px'
                }}
              >
                <motion.div
                  layout
                  style={{
                    width: 'max-content',
                    height: '100%',
                    padding: '0.7rem'
                  }}
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      style={{
        position: 'relative',
        borderRadius: '40px',
        border: '1px solid rgba(0, 212, 255, 0.2)',
        background: 'rgba(26, 26, 26, 0.95)',
        backdropFilter: 'blur(20px)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        padding: '0.7rem 1.2rem',
        minWidth: '260px'
      }}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src
}) => {
  return (
    <a href={href} style={{
      display: 'flex',
      gap: '0.3rem',
      textDecoration: 'none',
      color: '#ffffff',
      padding: '0.3rem',
      borderRadius: '6px',
      transition: 'all 0.3s ease',
      fontSize: '0.95em'
    }}
    onMouseEnter={(e) => {
      e.target.style.background = 'rgba(0, 212, 255, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.target.style.background = 'transparent';
    }}
    >
      <img
        src={src}
        width={110}
        height={55}
        alt={title}
        style={{
          flexShrink: 0,
          borderRadius: '6px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
        }}
      />
      <div>
        <h4 style={{
          fontSize: '1.05rem',
          fontWeight: 'bold',
          marginBottom: '0.15rem',
          color: '#ffffff'
        }}>
          {title}
        </h4>
        <p style={{
          color: '#b0b0b0',
          fontSize: '0.8rem',
          maxWidth: '8rem',
          lineHeight: '1.3'
        }}>
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}) => {
  return (
    <a
      {...rest}
      style={{
        color: '#b0b0b0',
        textDecoration: 'none',
        padding: '0.3rem',
        borderRadius: '6px',
        transition: 'all 0.3s ease',
        display: 'block',
        fontSize: '0.95em'
      }}
      onMouseEnter={(e) => {
        e.target.style.color = '#00d4ff';
        e.target.style.background = 'rgba(0, 212, 255, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.color = '#b0b0b0';
        e.target.style.background = 'transparent';
      }}
    >
      {children}
    </a>
  );
}; 