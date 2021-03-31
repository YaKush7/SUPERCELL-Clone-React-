import { Button, Col, Container, Row } from "reactstrap";

import c1 from "./assets/c1.jpg";
import c2 from "./assets/c2.jpg";
import c3 from "./assets/c3.jpg";
import c4 from "./assets/c4.jpg";

import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-Bg">
        <div className="h-title">
          <h3 className="font-weight-bold">SUPERCELL</h3>
          <span>Makers of Hay Day, Clash of Clans, Boom Beach,</span>
          <br />
          <span>Clash Royale and Brawl Stars.</span>
          <br />
          <Button color="primary rounded-pill mt-4 font-weight-bold">
            <span className="px-3">SEE LATEST</span>
          </Button>
        </div>
      </div>

      <Container id="custContainer">
        <Row>
          <Col xs="12" md="6">
            <img src={c1} alt="c1" className="h-items"></img>
            <div className="d-flex justify-content-center h-c-title">NEWS</div>
            <div className="d-flex justify-content-center h-c-heading">The Art of Supercell Out Now</div>
          </Col>
          <Col xs="12" md="6">
            <img src={c2} alt="c2" className="h-items"></img>
            <div className="d-flex justify-content-center h-c-title">NEWS</div>
            <div className="d-flex justify-content-center h-c-heading">Supercell ID Now in Beatstar by Space Ape</div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="6">
            <img src={c3} alt="c3" className="h-items"></img>
            <div className="d-flex justify-content-center h-c-title">NEWS</div>
            <div className="d-flex justify-content-center h-c-heading">Ilkka's Take on Supercell in 2020</div>
          </Col>
          <Col xs="12" md="6">
            <img src={c4} alt="c4" className="h-items"></img>
            <div className="d-flex justify-content-center h-c-title">NEWS</div>
            <div className="d-flex justify-content-center h-c-heading">10 Learnings from 10 Years</div>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="d-flex justify-content-center mt-5 mb-3">
            <Button color="primary">
              <span className="h-butText">NEWS ARCHIVE</span>
            </Button>
          </Col>
        </Row>
      </Container>

      <div className="h-d1">
        <Container>
          <Row>
            <Col md="5" xs="6" className="h-dtext">
              <h2>GAMES</h2>
              <div className="mt-3 h5">Our dream is to create games that are played by as many people as possible, enjoyed for years and remembered forever.</div>
              <br />
              <Button color="light" className="mt-1">
                <span className="h-butText">See Games</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="h-d2 mt-0">
        <Container>
          <Row>
            <Col md={{ size: 5, offset: 7 }} xs={{ size: 6, offset: 6 }} className="h-dtext">
              <h2>CAREERS</h2>
              <div className="mt-3 h5">Join us and create games that are played for years and remembered forever.</div>
              <br />
              <Button color="light" className="mt-1">
                <span className="h-butText">See Careers</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
