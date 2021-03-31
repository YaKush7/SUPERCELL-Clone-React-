import { Button, Col, Container, Row } from "reactstrap";

import c1 from "./assets/c1.jpg";
import c2 from "./assets/c2.jpg";
import c3 from "./assets/c3.jpg";
import c4 from "./assets/c4.jpg";
import c5 from "./assets/c5.jpg";

import "./Games.css";

const Games = () => {
  return (
    <>
      <div className="game-Bg">
        <div className="g-title">
          <h3 className="font-weight-bold">GAMES</h3>
          <span>Farm, Clash, Boom, Battle, Brawl!</span>
          <br />
          <Button color="primary rounded-pill mt-4 font-weight-bold">
            <span className="px-3">SEE ALL GAMES</span>
          </Button>
        </div>
      </div>

      <Container id="custContainer">
        <Row>
          <Col xs="12" md="6">
            <a href="/games/hayday/">
              <img src={c1} alt="c1" className="g-items"></img>
            </a>
            <div className="d-flex justify-content-center g-c-title">FARM WITH FRIENDS AND FAMILY</div>
            <a href="/games/hayday/" className="d-flex justify-content-center" id="g-c-heading">
              Hay Day
            </a>
          </Col>
          <Col xs="12" md="6">
            <a href="https://supercell.com/en/games/clashofclans/">
              <img src={c2} alt="c2" className="g-items"></img>
            </a>
            <div className="d-flex justify-content-center g-c-title">LEAD YOUR CLAN TO VICTORY!</div>
            <a href="https://supercell.com/en/games/clashofclans/" className="d-flex justify-content-center" id="g-c-heading">
              Clash Of Clans
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <a href="https://supercell.com/en/games/boombeach/">
              <img src={c3} alt="c3" className="g-items"></img>
            </a>
            <div className="d-flex justify-content-center g-c-title">BUILD. PLAN. BOOM!</div>
            <a href="https://supercell.com/en/games/boombeach/" className="d-flex justify-content-center" id="g-c-heading">
              Boom Beach
            </a>
          </Col>
          <Col xs="12" md="6">
            <a href="https://supercell.com/en/games/clashroyal/">
              <img src={c4} alt="c4" className="g-items"></img>
            </a>
            <div className="d-flex justify-content-center g-c-title">EPIC REAL-TIME CARD BATTLES</div>
            <a href="https://supercell.com/en/games/clashroyal/" className="d-flex justify-content-center" id="g-c-heading">
              Clash Royal
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6" className="mb-4">
            <a href="https://supercell.com/en/games/brawlstars/">
              <img src={c5} alt="c5" className="g-items"></img>
            </a>
            <div className="d-flex justify-content-center g-c-title">3V3 AND BATTLE ROYALE</div>
            <a href="https://supercell.com/en/games/brawlstars/" className="d-flex justify-content-center" id="g-c-heading">
              Brawl Stars
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Games;
