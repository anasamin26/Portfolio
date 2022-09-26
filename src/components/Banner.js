import { Container, Row, Col, Nav } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Dev", "Computer Scientist"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100); //speed
  const period = 2000; //time
  const [activeLink, setActiveLink] = useState("connect");

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText == "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={7} xl={7}>
            <span className="tagline">Welcome to My Portfolio</span>
            <h1>
              {`Hi I'm Anas`}
              <br></br>
              <span className="wrap">{text}</span>
            </h1>
            <p>
              A passionate Full Stack Software Developer having experience of
              building Web applications with JavaScript/Reactjs/Java/Nodejs and
              some other cool libraries and frameworks.
            </p>
            <Nav.Link
              href="#connect"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("connect")}
            >
              <button onClick={() => console.log("connect")}>
                Let's Connect
                <ArrowRightCircle size={25} />
              </button>
            </Nav.Link>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header IMG" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
