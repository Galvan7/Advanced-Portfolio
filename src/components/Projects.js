import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import prjimg2 from "../assets/img/prjimg2.png";
import c6 from "../assets/img/6.png";
import c7 from "../assets/img/7.png";
import prjimg3 from "../assets/img/prjimg3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import c3 from "../assets/img/3.png";
import c8 from "../assets/img/8.png";
import c9 from "../assets/img/9.png";
import c10 from "../assets/img/10.png";
import bzh from "../assets/img/buzzhive-logo.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Buzz Hive",
      description: "Buzz Hive is a  MERN stack chat app which is a real-time messaging platform that leverages the latest web development technologies. Built using the MERN (MongoDB, Express.js, React, Node.js) stack, this chat app provides users with a seamless messaging experience.Features include user authentication, theme selection, media sharing and much more.",
      imgUrl: bzh,
    },
    {
      title: "My Personal Portfolio",
      description: "My portfolio website built with react using modern animations. It contains different sections which can be accessed for details regarding myself. I have implemented nodemailer to receive contact mails through the form provided.",
      imgUrl: prjimg2,
    },
    {
      title: "TODO's List",
      description: "A simple ToDo's list built with react which utiizes Localstorage to store records which remain intact for a particular user. We can perform CRUD operations",
      imgUrl: prjimg3,
    },
  ];
  const exps = [
    {
      title: "Enigma Website",
      description: "Contributed in developing the website of the coding club of my college,Enigma. Worked in MERN stack to form the frontend structure and API integrated it with the backend where I managed the database during induction ceremony as well as hosted contests on the website",
      imgUrl: c3,
    },
    {
      title: "Amazon Web Services",
      description: "Worked with Amazon web services cloud labs and learned the basics of Cloud computing. Managed remote servers and cloud traffic",
      imgUrl: c6,
    },
    {
      title: "Freelancing Work",
      description: "Worked with a group of college seniors on three freelancing projects where I contributed as a MERN Stack developer. The tasks included creation of a payment gateway, a customized enrollment form and a food delivery app where I implemented the Google Places API.",
      imgUrl: c7,
    },
  ];
  const achis = [
    {
      title: "Codechef",
      description: "Three Star Coder in Competitive Coder in Codechef with a rating of 1620. Achieved best AIR of 98 in September 2022 Long Challenge. Primary coding language includes C++ and Python",
      imgUrl: c8,
    },
    {
      title: "Google Cloud Community Program",
      description: "Successfully completed Google Cloud labs where I worked with Google cloud services, Command line work, Kubernetes Engine. Received Tshirt and bottle as merch from Google for successful completion.",
      imgUrl: c9,
    },
    {
      title: "Internshala Student Partner",
      description: "Got selected as Internshala Student Partner where I conducted 7 talk sessions in my college and did awareness campaign as a result of which got over 200 students to register to the program.",
      imgUrl: c10,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects/Experience</h2>
                <p>I have had the opportunity to participate in a range of projects that have allowed me to develop a breadth of experience in the domains of concern. Through these projects, I have gained valuable knowledge and expertise that have equipped me with the necessary skills to make meaningful contributions in this field. Furthermore, I have actively sought out opportunities to contribute to this domain, which have further enhanced my understanding and proficiency. Collectively, my experience and contributions reflect my commitment to continually improving my skills and knowledge in this area.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Achievements</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          exps.map((exp, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...exp}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          achis.map((achi, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...achi}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
