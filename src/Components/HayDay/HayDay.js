import axios from "axios";
import { useEffect, useState } from "react";
import { Card, CardBody, CardTitle, Carousel, CarouselControl, CarouselIndicators, CarouselItem, Col, Container, Row } from "reactstrap";

import app_store from "./assets/app_store.svg";
import amazon from "./assets/amazon.png";
import galaxy from "./assets/galaxy.jpg";

import c1 from "./assets/c1.jpg";
import c2 from "./assets/c2.jpg";
import c3 from "./assets/c3.png";

import "./HayDay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faRedditAlien, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import items from "./items";

const HayDay = () => {
  const [loading, setLoading] = useState(true);
  const [text1, setText1] = useState({
    title: "",
    desc: "",
  });

  const [text2, setText2] = useState({
    title: "",
    desc: "",
  });

  const getData1 = () => {
    return axios
      .get("https://api.codetabs.com/v1/proxy/?quest=https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-1.json")
      .then((data) => {
        setText1({ desc: data.data.desc, title: data.data.title });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getData2 = () => {
    return axios
      .get("https://api.codetabs.com/v1/proxy/?quest=https://ps-data-store.s3-us-west-2.amazonaws.com/frontend-assignment/assignment-paragh-2.json")
      .then((data) => {
        setText2({ desc: data.data.desc, title: data.data.title });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData1();
    getData2();
  }, []);

  if (loading) {
    return <div style={{ height: 1000 }}>LOADING API</div>;
  }

  return (
    <>
      <div className="hay-Bg mb-5"></div>
      <Container id="custContainer">
        <Row>
          <Col xs="12" lg="6" className="my-auto">
            <img src={c1} alt="c1" className="hay-items"></img>
          </Col>
          <Col xs="12" lg="6" className="my-auto">
            <div className="font-weight-bold display-4 mb-4">{text1.title}</div>
            <p className="hay-c-text">{text1.desc}</p>
            <br />
            <div className="text-center mb-5">
              <a href="https://itunes.apple.com/app/hay-day/id506627515?mt=8">
                <img alt="Download from app store" src={app_store} className="appstore"></img>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.supercell.hayday&referrer=mat_click_id%3D2cff480805f177bb9a0b477c702bec6f-20141216-1681">
                <img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="playstore" />
              </a>
              <a href="https://www.amazon.com/Supercell-ltd-Hay-Day/dp/B018GSK5ZC/">
                <img alt="Download from app store" src={amazon} className="hay-store"></img>
              </a>
              <a href="https://galaxy.store/hay">
                <img alt="Download from app store" src={galaxy} className="hay-store"></img>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <hr />

      <Container id="custContainer">
        <Row>
          <Col xs="12" lg={{ size: "5", offset: 1 }} className="mt-5">
            <div className="font-weight-bold display-4 mb-4">{text2.title}</div>
            <p className="hay-c-text">{text2.desc}</p>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <img src={c2} alt="c2" className="hay-items"></img>
          </Col>
        </Row>
      </Container>

      <div className="hay-Bg2 mb-5">
        <Container className="my-auto my-cont" id="custContainer">
          <Row className="my-row">
            <Col xs="12" md="6" className="my-auto p-5">
              <img alt="c3" src={c3} className="hay-d-items"></img>
            </Col>
            <Col xs="12" md="6" className="my-auto">
              <div className="font-weight-bold h2 mb-4">STAY UP-TO-DATE</div>
              <p className="hay-c-text">To stay on top of your game, keep an eye on the in-game News section. Follow us on social media for the latest chatter and sneak peeks on what the team is working on. Don’t be a stranger and join the conversation.</p>
              <br />
              <p className="hay-c-text">FOLLOW HAY DAY ON</p>
              <a href="https://www.reddit.com/r/HayDay/">
                <FontAwesomeIcon icon={faRedditAlien} size="2x" color="white" className="mr-3" />
              </a>
              <a href="https://www.youtube.com/user/haydayofficial">
                <FontAwesomeIcon icon={faYoutube} size="2x" color="white" className="mr-3" />
              </a>
              <a href="https://www.facebook.com/HayDayOfficial">
                <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="white" className="mr-3" />
              </a>
              <a href="http://instagram.com/hayday">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="white" className="mr-3" />
              </a>
              <a href="http://www.twitter.com/hayday">
                <FontAwesomeIcon icon={faTwitter} size="2x" color="white" className="mr-3" />
              </a>
            </Col>
          </Row>
        </Container>
      </div>

      <Carou />
    </>
  );
};

const Carou = () => {
  const [transition, settransition] = useState(false);
  const [active, setActive] = useState(0);

  const next = () => {
    if (transition) return;
    const newslide = active === items.length - 1 ? 0 : active + 1;
    setActive(newslide);
  };

  const prev = () => {
    if (transition) return;
    const newslide = active === 0 ? items.length - 1 : active - 1;
    setActive(newslide);
  };

  const goto = (newslide) => {
    if (transition) return;
    setActive(newslide);
  };

  return (
    <Carousel activeIndex={active} next={next} previous={prev}>
      <CarouselIndicators items={items} activeIndex={active} onClickHandler={goto} />
      {items.map((item) => {
        return (
          <CarouselItem onExiting={() => settransition(true)} onExited={() => settransition(false)} key={item.index} className="text-center">
            <Card id="carou-item">
              {item.code1}
              <CardBody>
                <CardTitle tag="h4">{item.title1}</CardTitle>
              </CardBody>
            </Card>
            <Card id="carou-item">
              {item.code2}
              <CardBody>
                <CardTitle tag="h4">{item.title2}</CardTitle>
              </CardBody>
            </Card>
          </CarouselItem>
        );
      })}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={prev} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default HayDay;
