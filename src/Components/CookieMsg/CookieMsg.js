import { useState } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import "./CookieMsg.css";

const CookieMsg = () => {
  const getCookieStatus = () => {
    if (localStorage.getItem("Cookie") === "true") return true;
    else return false;
  };

  const [status, setStatus] = useState(getCookieStatus);

  const acceptCookie = (value) => {
    localStorage.setItem("Cookie", "true");
    setStatus(true);
  };

  if (status === false) {
    return (
      <div className="cookiemsg p-2">
        <Container>
          <Row>
            <Col xs="9">
              <span className="msg">Our site uses cookies to enhance your user experience and measure site traffic.</span>
              <br />
              <a href="https://supercell.com/en/privacy-policy/" className="msgLink">
                Learn More
              </a>
            </Col>
            <Col xs="3" className="my-auto d-flex justify-content-end">
              <Button color="primary" onClick={acceptCookie}>
                <span className="consent px-1">GOT IT!</span>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CookieMsg;
