import React, { useState } from "react";
import logo from "./assets/logo.png";
import sid from "./assets/sid.png";
import { GamesItems, CareersItems } from "./Items";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from "reactstrap";

import "./Navigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [mouseOn, setMouseOn] = useState({
    games: "none",
    careers: "none",
  });

  const onGames = () => {
    setMouseOn((prev) => ({ games: "block", careers: "none" }));
  };

  const onCareers = () => {
    setMouseOn((prev) => ({ games: "none", careers: "block" }));
  };

  const offGames = () => {
    setMouseOn((prev) => ({ ...prev, games: "none" }));
  };

  const offCareers = () => {
    setMouseOn((prev) => ({ ...prev, careers: "none" }));
  };

  const offAll = () => {
    setMouseOn({ games: "none", careers: "none" });
  };

  return (
    <div>
      <Navbar dark expand="md" className="navigation">
        <img src={logo} href="#home" alt="logo" className="logo" onMouseEnter={offAll} />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/games/" className="menuItem ml-4 triggerGames" onMouseEnter={onGames}>
                Games
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/careers/" className="menuItem ml-4" onMouseEnter={onCareers}>
                Careers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/support/" className="menuItem ml-4" onMouseEnter={offAll}>
                Support
              </NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              <NavLink href="#social" id="mitem">
                <img src={sid} alt="supercell id" className="mt-2 mr-1" style={{ height: 30 }} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#social" id="mitem">
                <FontAwesomeIcon icon={faSearch} size="1x" color="white" className="mt-2 h4" />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div style={{ display: mouseOn.games }} onMouseLeave={offGames}>
        <Games />
      </div>

      <div style={{ display: mouseOn.careers }} onMouseLeave={offCareers}>
        <Careers />
      </div>
    </div>
  );
};

const Games = () => {
  return (
    <Navbar dark expand="md" style={{ backgroundColor: "rgba(0, 0, 0, 0.638)" }}>
      <Nav className="mr-auto" navbar>
        {GamesItems.map((item) => {
          return (
            <NavItem key={item.index}>
              <NavLink href={item.link} className="my-2 ml-4 menuItem">
                {item.game}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </Navbar>
  );
};

const Careers = () => {
  return (
    <Navbar dark expand="md" style={{ backgroundColor: "rgba(0, 0, 0, 0.638)" }}>
      <Nav className="mr-auto" navbar>
        {CareersItems.map((item) => {
          return (
            <NavItem key={item.index}>
              <NavLink href={item.lunk} className="my-2 ml-4 menuItem">
                {item.carr}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
