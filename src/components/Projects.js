import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/pin.jfif";
import projImg2 from "../assets/img/sentiment.jpeg";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const researchprojects = [
    {
      title: "Sturctured Sentiment Analysis",
      description: "Research & Development",
      imgUrl: projImg2,
    },
  ];
  const devprojects = [
    {
      title: "Pinterest 2.0",
      description: "Web Development",
      imgUrl: projImg1,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              "Management is ,above all, a practice where art,science, and craft
              meet"
            </p>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="flex-row  mb-5 justify-content-center align-items-center  "
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Development</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Research</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {devprojects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {researchprojects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
