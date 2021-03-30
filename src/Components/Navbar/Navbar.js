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
      <Navbar dark expand="md" style={{ backgroundColor: "black" }}>
        <img src={logo} href="#home" alt="logo" style={{ height: 70, width: 70 }} onMouseEnter={offAll} />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/games/" className="ml-4 h5 triggerGames" onMouseEnter={onGames}>
                Games
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/careers/" className="ml-4 h5" onMouseEnter={onCareers}>
                Careers
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/support/" className="ml-4 h5" onMouseEnter={offAll}>
                Support
              </NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              <NavLink href="#social" id="mitem">
                <img src={sid} alt="supercell id" className="mt-1 mr-1" style={{ height: 30 }} />
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
              <NavLink href={item.link} className="my-3 ml-4 h5">
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
              <NavLink href={item.lunk} className="my-3 ml-4 h5">
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
