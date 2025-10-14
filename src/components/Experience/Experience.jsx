import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styles from "./Experience.module.css";

import { useInView } from "react-intersection-observer";

const Experience = () => {
  const { ref: textRef1, inView: myText1IsVisible } = useInView();
  const { ref: textRef2, inView: myText2IsVisible } = useInView();
  const { ref: textRef3, inView: myText3IsVisible } = useInView();
  const { ref: textRef4, inView: myText4IsVisible } = useInView();
  const { ref: textRef5, inView: myText5IsVisible } = useInView();
  const { ref: textRef6, inView: myText6IsVisible } = useInView();

  const text1Visibility = useTextVisibility(myText1IsVisible);
  const text2Visibility = useTextVisibility(myText2IsVisible);
  const text3Visibility = useTextVisibility(myText3IsVisible);
  const text4Visibility = useTextVisibility(myText4IsVisible);
  const text5Visibility = useTextVisibility(myText5IsVisible);
  const text6Visibility = useTextVisibility(myText6IsVisible);

  console.log("myText2IsVisible:", myText2IsVisible);

  const ref = useRef(null);

  const [backgroundColor, setBackgroundColor] = useState("");

  function useTextVisibility(initialState) {
    const [opacity, setOpacity] = useState(0);
    const [position, setPosition] = useState("10em");

    useEffect(() => {
      if (initialState) {
        setOpacity(1);
        setPosition("0em");
      } else {
        setOpacity(0);
        setPosition("10em");
      }
    }, [initialState]);

    return { opacity, position };
  }

  return (
    <div
      ref={ref}
      style={{ backgroundColor, transition: "background-color 0.5s ease" }}
    >
      <br />

      <div
        ref={textRef1}
        style={{
          opacity: text1Visibility.opacity,
          paddingTop: text1Visibility.position,
          transition: "opacity 3s, padding-top 3s",
        }}
      >
        <Container
          className={`d-flex justify-content-left ${styles.containerSide}`}
        >
          <Col md={3} style={{ textAlign: "left" }}>
            <p className={styles.p1}>Henry </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Teaching Assistant
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Mar 2023 - May 2023
            </p>
          </Col>
          <Col md={9}>
            <p className={styles.p3}>
              Coordinated and supported new students, guided their learning
              progress, and fostered collaboration and community within the
              group.
            </p>
          </Col>
        </Container>

        <Container className="d-flex justify-content-left">
          {" "}
          <Col xs={12}>
            {" "}
            <hr className={styles.divider} />
          </Col>
        </Container>
      </div>

      <div
        ref={textRef2}
        style={{
          opacity: text2Visibility.opacity,
          paddingTop: text2Visibility.position,
          transition: "opacity 3s, padding-top 3s",
        }}
      >
        <Container className={styles.containerSide}>
          <Col style={{ textAlign: "left" }}>
            <p className={styles.p1}>Pintario</p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Entrepreneurial Activity
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Jan 2022 - Oct 2022{" "}
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Colombia
            </p>
          </Col>
          <Col md={9}>
            <p className={styles.p3}>
              Designed and manufactured all the clothes for the brand. Aside
              from developing branding activities.
            </p>
          </Col>
        </Container>

        <Container className="d-flex justify-content-left">
          {" "}
          <Col xs={12}>
            {" "}
            <hr className={styles.divider} />
          </Col>
        </Container>
      </div>

      <div
        ref={textRef3}
        style={{
          opacity: text3Visibility.opacity,
          paddingTop: text3Visibility.position,
          transition: "opacity 3s, padding-top 3s",
        }}
      >
        <Container
          className={`d-flex justify-content-left ${styles.containerSide}`}
        >
          <Col md={3} style={{ textAlign: "left" }}>
            <p className={styles.p1}>Food Manufacturing </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Classic Cooking
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Sep. 2018 - Dec. 2021
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              United States
            </p>
          </Col>
          <Col md={9}>
            <p className={styles.p3}>
              Lead manufacturing projects while supervising a team that could
              range from 35 to 60 employees.
            </p>
          </Col>
        </Container>

        <Container className="d-flex justify-content-left">
          {" "}
          <Col xs={12}>
            {" "}
            <hr className={styles.divider} />
          </Col>
        </Container>
      </div>

      <div
        ref={textRef4}
        style={{
          opacity: text4Visibility.opacity,
          paddingTop: text4Visibility.position,
          transition: "opacity 3s, padding-top 3s",
        }}
      >
        <Container
          className={`d-flex justify-content-left ${styles.containerSide}`}
        >
          <Col md={3} style={{ textAlign: "left" }}>
            <p className={styles.p1}>Freelance </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Jan 2018 - May 2021
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              United States
            </p>
          </Col>
          <Col md={9}>
            <p className={styles.p3}>
              Work on a variety of projects on interface design, branding and
              illustration.
            </p>
          </Col>
        </Container>

        <Container className="d-flex justify-content-left">
          {" "}
          <Col xs={12}>
            {" "}
            <hr className={styles.divider} />
          </Col>
        </Container>
      </div>

      <div
        ref={textRef5}
        style={{
          opacity: text5Visibility.opacity,
          paddingTop: text5Visibility.position,
          transition: "opacity 3s, padding-top 3s",
        }}
      >
        <Container
          className={`d-flex justify-content-left ${styles.containerSide}`}
        >
          <Col md={3} style={{ textAlign: "left" }}>
            <p className={styles.p1}>Web Designer </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Universidad de Caldas
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              May 2017 - Dec. 2017
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Colombia
            </p>
          </Col>
          <Col md={9}>
            <p className={styles.p3}>
              HTML, CSS and Wordpress support for the relaunch of the university
              website in July 2017. Interface design on Adobe XD for the Faculty
              of Arts new website; Launched in January 2018.
            </p>
          </Col>
        </Container>

        <Container className="d-flex justify-content-left">
          {" "}
          <Col xs={12}>
            {" "}
            <hr className={styles.divider} />
          </Col>
        </Container>
      </div>

      <div
        ref={textRef6}
        style={{
          opacity: text6Visibility.opacity,
          paddingTop: text6Visibility.position,
          transition: "opacity 3s, padding-top 3s",
        }}
      >
        <Container
          className={`d-flex justify-content-left ${styles.containerSide}`}
        >
          <Col md={3} style={{ textAlign: "left" }}>
            <p className={styles.p1}>Interaction Designer Internship </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Conde Nast
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              May 2016 - Jul. 2016
            </p>
            <p className={styles.p2} style={{ width: "250px" }}>
              {" "}
              Italy
            </p>
          </Col>
          <Col md={9}>
            <p className={styles.p3}>
              Support for interface design on desktop and mobile platforms for
              Vogue Italia, Wired Italia and La Cucina Italiana.
            </p>
          </Col>
        </Container>
      </div>
    </div>
  );
};

export default Experience;
