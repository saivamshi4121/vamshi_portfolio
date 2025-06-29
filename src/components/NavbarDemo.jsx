import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./NavbarMenu";

export default function NavbarDemo() {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '2rem'
    }}>
      <Navbar />
    </div>
  );
}

function Navbar() {
  const [active, setActive] = useState(null);
  
  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000
    }}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div>
            <HoveredLink href="#home">Home</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Me">
          <div>
            <HoveredLink href="#about">About Me</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="My Projects">
          <div>
            <HoveredLink href="#projects">My Projects</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Experience">
          <div>
            <HoveredLink href="#experience">Experience</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Achievements">
          <div>
            <HoveredLink href="#achievements">Achievements</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
} 