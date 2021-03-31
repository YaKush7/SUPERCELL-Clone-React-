import { faFacebookSquare, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "reactstrap";
import app_store from "./assets/app_store.svg";
import logo from "./assets/logo.png";
import glassdoor from "./assets/glassdoor.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="pt-3">
          <Col sm="12" md="6" className="my-3">
            <div className="text1">Follow us on</div>
            <br />
            <a href="https://supr.cl/2FyB6q2">
              <FontAwesomeIcon icon={faYoutube} size="2x" color="white" className="mr-4" />
            </a>
            <a href="https://supr.cl/353IhiL">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="white" className="mr-4" />
            </a>
            <a href="https://supr.cl/3j8f2Ai">
              <FontAwesomeIcon icon={faInstagram} size="2x" color="white" className="mr-4" />
            </a>
            <a href="http://supr.cl/2pzzIsf">
              <FontAwesomeIcon icon={faTwitter} size="2x" color="white" className="mr-4" />
            </a>
            <a href="https://supr.cl/2T3yYJS">
              <FontAwesomeIcon icon={faLinkedin} size="2x" color="white" className="mr-4" />
            </a>
            <a href="https://supr.cl/2H81F5R">
              <img alt="glassfoor" src={glassdoor} className="social_glassdoor"></img>
            </a>
          </Col>
          <Col sm="12" md="6" className="my-auto d-flex justify-content-end">
            <a href="https://supr.cl/appstorescgames" className="appstore">
              <img alt="Download from app store" src={app_store} className="appstore"></img>
            </a>
            <a href="https://play.google.com/store/apps/dev?id=6715068722362591614&hl=en&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
              <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="playstore" />
            </a>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs="12">
            <ul className="fitems">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Parent's Guide</li>
              <li>Safe and Fair Play Policy</li>
            </ul>
          </Col>
        </Row>
        <Row className="lastRow">
          <Col xs="9">
            <ul className="address">
              <li>Supercell Oy</li>
              <li>Jätkäsaarenlaituri 1</li>
              <li>00180 Helsinki</li>
              <li>Finland</li>
            </ul>
          </Col>
          <Col xs="3" className="d-flex justify-content-end">
            <img alt="logo" src={logo} className="flogo"></img>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
