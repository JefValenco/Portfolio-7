import React, { useRef, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";

// CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import styles from "./Home.module.css";

// React Bootstrap Components
import { Navbar, Nav, Container, Col, Modal, Button } from "react-bootstrap";

// Images
import {
  framev,
  git5,
  miniBahia,
  miniTes,
  frameS,
  frameD,
  frameR,
  frameC,
  frameP,
  expe1,
  expe2,
  expe3,
  xImg,
  up,
  back,
  home,
  figmaIcon,
  projectsCarrusel,
} from "../../images/images.js";

// Custom Components
import Experience from "../../components/Experience/Experience";
import Figma from "../../components/Figma/Figma";
import Videogames from "../../components/Videogames/Videogames";
import Pintario from "../../components/Pintario/Pintario";
import Pokemon from "../../components/Pokemon/Pokemon";

import Food from "../../components/Food/Food";

import Dogs from "../../components/Dogs/Dogs";

import Rick from "../../components/Rick/Rick";

import Countries from "../../components/Countries/Countries";

import Test from "../../components/Test/Test";

// Organize imports for readability and maintainability

const Home = () => {
  const { ref: colorChange1, inView: myCardstIsVisible } = useInView();
  const { ref: colorChange2, inView: myCardsWHVisible } = useInView();

  const { ref: textRef1, inView: myText1IsVisible } = useInView();
  const { ref: textRef2, inView: myText2IsVisible } = useInView();
  const { ref: textRef3, inView: myText3IsVisible } = useInView();
  const { ref: textRef4, inView: myText4IsVisible } = useInView();
  const { ref: textRef5, inView: myText5IsVisible } = useInView();
  const { ref: textRef6, inView: myText6IsVisible } = useInView();
  const { ref: textRef7, inView: myText7IsVisible } = useInView();
  const { ref: widthRef, inView: myWidthIsVisible } = useInView();

  const text1Visibility = useTextVisibility(myText1IsVisible);
  const text2Visibility = useTextVisibility(myText2IsVisible);
  const text3Visibility = useTextVisibility(myText3IsVisible);
  const text4Visibility = useTextVisibility(myText4IsVisible);
  const text5Visibility = useTextVisibility(myText5IsVisible);
  const text6Visibility = useTextVisibility(myText6IsVisible);
  const text7Visibility = useTextVisibility(myText7IsVisible);

  console.log("myText2IsVisible:", myText2IsVisible);

  const ref = useRef(null);
  const refDark = useRef(null);

  const [backgroundColor, setBackgroundColor] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (myCardstIsVisible) {
      setBackgroundColor("#222221");
    }
  }, [myCardstIsVisible]);

  useEffect(() => {
    if (myCardsWHVisible) {
      setBackgroundColor("#ffffff");
    }
  }, [myCardsWHVisible]);

  const bg = "light";
  const variant = "dark";

  const { scrollYProgress } = useScroll({});
  const x = useTransform(scrollYProgress, [0, 1], [0, -1200]);

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: refDark,
    offset: ["start start", "end end"],
  });
  const x2 = useTransform(scrollYProgress2, [0, 1], [-500, 0]);

  const isMobile = window.matchMedia("(max-width: 576px)").matches;

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

  const [width, setWidth] = useState("0%");

  useEffect(() => {
    if (myWidthIsVisible) {
      setWidth("90%");
    } else {
      setWidth("0%");
    }
  }, [myWidthIsVisible]);

  const [show, setShow] = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [showTes, setShowTes] = useState(false);
  const [showVid, setShowVid] = useState(false);
  const [showFood, setShowFood] = useState(false);
  const [showPoke, setShowPoke] = useState(false);
  const [showDogs, setShowDogs] = useState(false);
  const [showRick, setShowRick] = useState(false);
  const [showCountry, setShowCountry] = useState(false);
  const [showModalPopup, setShowModalPopup] = useState(false);

  const handleModalClick = () => {
    setShowModalPopup(true);
  };

  const handleClosePopup = () => {
    setShowModalPopup(false);
  };

  const [displayButton, setDisplayButton] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setDisplayButton(true);
    } else {
      setDisplayButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => {
      window.removeEventListener("scroll", scrollFunction);
    };
  }, []);

  const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const [closeModal, setCloseModal] = useState(false);

  const handleCloseModal = () => {
    setCloseModal(true);
  };

  if (isLoading) {
    return (
      <div
        style={{
          backgroundColor: "#b2a88c",
          width: "100%",
          height: "100%",
          paddingTop: "20%",
          paddingBottom: "100%",
        }}
      >
        <span
          className={styles.loader}
          style={{
            backgroundColor: "#D5D2CA",
            width: "100%",
            height: "100%",
          }}
        ></span>
      </div>
    );
  }

  return (
    <div>
      <div>
        {" "}
        {showModalPopup && (
          <div className={styles.popupContainer}>
            <div className={styles.popup}>
              <div className={styles.popupContent}>
                <div className={styles.closeButton} onClick={handleClosePopup}>
                  <span className={styles.closeIcon}>X</span>
                </div>
                <Experience />
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        ref={ref}
        style={{ backgroundColor, transition: "background-color 0.5s ease" }}
      >
        {/* Scroll-up Button*/}
        <button
          type="button"
          className={`btn  btn-floating btn-lg ${styles.backToTop}`}
          id="btn-back-to-top"
          onClick={backToTop}
        >
          <img src={up} alt="up" className={styles.imageSide} />
        </button>
        <br />
        <Navbar bg="light" variant="light" fixed="top">
          <Container>
            <Nav className="me-auto">
              <Nav.Link onClick={() => setShowExp(true)}>Experience</Nav.Link>

              <Modal
                show={showExp}
                onHide={() => setShowExp(false)}
                dialogClassName="modal-xl"
                aria-labelledby="example-custom-modal-styling-title"
                style={{
                  backgroundColor: "rgba(243, 240, 235, 0.3)",
                }}
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
                </Modal.Header>
                <Modal.Body
                  style={{
                    backgroundColor: "#ffffff",
                  }}
                >
                  <img
                    src={expe2}
                    alt="figma0"
                    className={styles.imageFrame2}
                    style={{
                      width: "100%",
                    }}
                  />
                  <div className={styles.dividerSlider}></div>

                  <img
                    src={expe1}
                    alt="figma0"
                    className={styles.imageFrame2}
                    style={{
                      width: "100%",
                    }}
                  />
                  <div className={styles.dividerSlider}></div>
                  <Experience />

                  <div className={styles.dividerSlider}></div>

                  <img
                    src={expe3}
                    alt="figma0"
                    className={styles.imageFrame2}
                    style={{
                      width: "100%",
                    }}
                  />
                  <div className={styles.dividerSlider}></div>
                </Modal.Body>
              </Modal>

              <Nav.Link href="#contactSection">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div></div>
        {/*   <div>
                {" "}
                <img
                  src={git5}
                  alt="git5"
                  style={{ width: "100%", marginBottom: "3em" }}
                />
              </div> */}
        {!isMobile && (
          <div
            style={{
              backgroundImage: `url(${git5})`,
              backgroundSize: "100% auto",
              backgroundRepeat: "no-repeat",
            }}
            className={`${styles.section1} ${
              myCardsWHVisible ? styles.animateExperience2 : ""
            }`}
          >
            <div
              className={styles.titleSpacing}
              style={{ paddingBottom: "0em" }}
            >
              <p
                className={styles.h2}
                style={{
                  color: `#ffff`,
                }}
              >
                Jefry{" "}
              </p>
              <p
                className={styles.h2}
                style={{
                  color: `#ffff`,
                }}
              >
                {" "}
                Valenco
              </p>
            </div>
            <Container
              className="d-flex justify-content-center"
              style={{
                paddingTop: `0em`,
              }}
            >
              <Col xs={9} className={styles.p1}>
                <p
                  style={{
                    color: `#ffff`,
                  }}
                >
                  I am a Junior Fullstack Developer with a strong foundation in
                  visual design. My expertise primarily lies in web design,
                  digital and physical prototyping, and branding.
                </p>
              </Col>
            </Container>
          </div>
        )}
        {isMobile && (
          <div
            ref={colorChange2}
            className={`${styles.section1} ${
              myCardsWHVisible ? styles.animateExperience2 : ""
            }`}
          >
            <p className={styles.h3}>Jefry Valenco</p>
            <Container className="d-flex justify-content-center">
              <Col xs={9} className={styles.p1}>
                <p>
                  I am a Junior Fullstack Developer with a strong foundation in
                  visual design. My expertise primarily lies in web design,
                  digital and physical prototyping, and branding.
                </p>
              </Col>
            </Container>
          </div>
        )}
        <div className={styles.carruselDiv}>
          <div className={styles.dividerSlider}></div>

          <div style={{ overflow: "hidden", width: "100vw" }}>
            <motion.div style={{ x }}>
              {" "}
              <img
                src={projectsCarrusel}
                alt="projectsCarrusel"
                className={styles.carruselP}
              />
            </motion.div>
          </div>
          <div className={styles.dividerSlider}></div>
        </div>

        <div
          ref={textRef1}
          style={{
            opacity: text1Visibility.opacity,
            paddingTop: text1Visibility.position,
            transition: "opacity 3s, padding-top 3s",
          }}
        >
          {" "}
          <div className={styles.innerContainer}>
            {" "}
            <p className={styles.cardText}>
              These are full-stack React apps that utilize PostgreSQL as their
              database and incorporate comprehensive CRUD functionality.
            </p>
          </div>
        </div>

        {/*   Videogames project */}

        <div>
          {" "}
          <div>
            {" "}
            <a onClick={() => setShowVid(true)} style={{ cursor: "pointer" }}>
              <img src={framev} alt="framev" className={styles.imageFrame} />
            </a>
          </div>
          <Modal
            show={showVid}
            onHide={() => setShowVid(false)}
            dialogClassName="modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
            style={{
              backgroundColor: "rgba(243, 240, 235, 0.3)",
            }}
          >
            <Modal.Body
              style={{
                backgroundColor: "#F3F0EB",
              }}
            >
              {/* Closing Buttom */}
              <div
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1",
                  padding: "0.5em",
                  backgroundColor: "#f3f0ea",
                  display: "flex",
                  justifyContent: "flex-end",
                  /*   boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)", */
                  width: "100%",
                }}
              >
                <button
                  className={styles.Submmit3}
                  onClick={() => setShowVid(false)}
                >
                  <img src={xImg} alt="xImg" className={styles.imageSide2} />
                </button>
              </div>
              <Videogames />

              <div
                className={styles.dividerSlider}
                style={{
                  paddingTop: "2em",
                }}
              ></div>

              <img
                src={expe3}
                alt="figma0"
                className={styles.imageFrame2}
                style={{
                  width: "100%",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.Submmit2}
                onClick={() => setShowVid(false)}
              >
                <p className={styles.h7} style={{ marginBottom: "0px" }}>
                  Close
                </p>
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Spoonacular project */}
        <div style={{ marginTop: "5em" }}>
          <div>
            <a onClick={() => setShowFood(true)} style={{ cursor: "pointer" }}>
              <img src={frameS} alt="frameS" className={styles.imageFrame} />
            </a>
          </div>
          <Modal
            show={showFood}
            onHide={() => setShowFood(false)}
            dialogClassName="modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
            style={{
              backgroundColor: "rgba(243, 240, 235, 0.3)",
            }}
          >
            {/* <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
            </Modal.Header> */}
            <Modal.Body
              style={{
                backgroundColor: "#F3F0EB",
              }}
            >
              {/* Closing Buttom */}
              <div
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1",
                  padding: "0.5em",
                  backgroundColor: "#f3f0ea",
                  display: "flex",
                  justifyContent: "flex-end",
                  /*   boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)", */
                  width: "100%",
                }}
              >
                <button
                  className={styles.Submmit3}
                  onClick={() => setShowFood(false)}
                >
                  <img src={xImg} alt="xImg" className={styles.imageSide2} />
                </button>
              </div>
              <Food />

              <div
                className={styles.dividerSlider}
                style={{
                  paddingTop: "2em",
                }}
              ></div>

              <img
                src={expe3}
                alt="figma0"
                className={styles.imageFrame2}
                style={{
                  width: "100%",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.Submmit2}
                onClick={() => setShowFood(false)}
              >
                <p className={styles.h7} style={{ marginBottom: "0px" }}>
                  Close
                </p>
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* Dogs project */}

        <div style={{ marginTop: "5em" }}>
          <div>
            <a onClick={() => setShowDogs(true)} style={{ cursor: "pointer" }}>
              <img src={frameD} alt="frameD" className={styles.imageFrame} />
            </a>
          </div>
          <Modal
            show={showDogs}
            onHide={() => setShowDogs(false)}
            dialogClassName="modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
            style={{
              backgroundColor: "rgba(243, 240, 235, 0.3)",
            }}
          >
            {/* <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
            </Modal.Header> */}
            <Modal.Body
              style={{
                backgroundColor: "#F3F0EB",
                position: "relative",
              }}
            >
              {/* Closing Buttom */}
              <div
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1",
                  padding: "0.5em",
                  backgroundColor: "#f3f0ea",
                  display: "flex",
                  justifyContent: "flex-end",
                  /*   boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)", */
                  width: "100%",
                }}
              >
                <button
                  className={styles.Submmit3}
                  onClick={() => setShowDogs(false)}
                >
                  <img src={xImg} alt="xImg" className={styles.imageSide2} />
                </button>
              </div>

              <Dogs />

              <div
                className={styles.dividerSlider}
                style={{
                  paddingTop: "2em",
                }}
              ></div>

              <img
                src={expe3}
                alt="figma0"
                className={styles.imageFrame2}
                style={{
                  width: "100%",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.Submmit2}
                onClick={() => setShowDogs(false)}
              >
                <p className={styles.h7} style={{ marginBottom: "0px" }}>
                  Close
                </p>
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* Pokemon project */}

        <div style={{ marginTop: "5em" }}>
          {" "}
          <div>
            {" "}
            <a onClick={() => setShowPoke(true)} style={{ cursor: "pointer" }}>
              <img src={frameP} alt="frameP" className={styles.imageFrame} />
            </a>
          </div>
          <Modal
            show={showPoke}
            onHide={() => setShowPoke(false)}
            dialogClassName="modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
            style={{
              backgroundColor: "rgba(243, 240, 235, 0.3)",
            }}
          >
            <Modal.Body
              style={{
                backgroundColor: "#F3F0EB",
              }}
            >
              {/* Closing Buttom */}
              <div
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1",
                  padding: "0.5em",
                  backgroundColor: "#f3f0ea",
                  display: "flex",
                  justifyContent: "flex-end",
                  /*   boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)", */
                  width: "100%",
                }}
              >
                <button
                  className={styles.Submmit3}
                  onClick={() => setShowPoke(false)}
                >
                  <img src={xImg} alt="xImg" className={styles.imageSide2} />
                </button>
              </div>
              <Pokemon />

              <div
                className={styles.dividerSlider}
                style={{
                  paddingTop: "2em",
                }}
              ></div>

              <img
                src={expe3}
                alt="figma0"
                className={styles.imageFrame2}
                style={{
                  width: "100%",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.Submmit2}
                onClick={() => setShowPoke(false)}
              >
                <p className={styles.h7} style={{ marginBottom: "0px" }}>
                  Close
                </p>
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        <div ref={colorChange2}></div>

        {/* Countries project */}
        <div style={{ marginTop: "5em" }}>
          {" "}
          <div>
            {" "}
            <a
              onClick={() => setShowCountry(true)}
              style={{ cursor: "pointer" }}
            >
              <img src={frameC} alt="frameC" className={styles.imageFrame} />
            </a>
          </div>
          <Modal
            show={showCountry}
            onHide={() => setShowCountry(false)}
            dialogClassName="modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
            style={{
              backgroundColor: "rgba(243, 240, 235, 0.3)",
            }}
          >
            <Modal.Body
              style={{
                backgroundColor: "#F3F0EB",
              }}
            >
              {/* Closing Buttom */}
              <div
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1",
                  padding: "0.5em",
                  backgroundColor: "#f3f0ea",
                  display: "flex",
                  justifyContent: "flex-end",
                  /*   boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)", */
                  width: "100%",
                }}
              >
                <button
                  className={styles.Submmit3}
                  onClick={() => setShowCountry(false)}
                >
                  <img src={xImg} alt="xImg" className={styles.imageSide2} />
                </button>
              </div>
              <Countries />

              <div
                className={styles.dividerSlider}
                style={{
                  paddingTop: "2em",
                }}
              ></div>

              <img
                src={expe3}
                alt="figma0"
                className={styles.imageFrame2}
                style={{
                  width: "100%",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.Submmit2}
                onClick={() => setShowCountry(false)}
              >
                <p className={styles.h7} style={{ marginBottom: "0px" }}>
                  Close
                </p>
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Rick project */}

        <div style={{ marginTop: "5em" }}>
          {" "}
          <div>
            {" "}
            <a onClick={() => setShowRick(true)} style={{ cursor: "pointer" }}>
              <img src={frameR} alt="frameR" className={styles.imageFrame} />
            </a>
          </div>
          <Modal
            show={showRick}
            onHide={() => setShowRick(false)}
            dialogClassName="modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
            style={{
              backgroundColor: "rgba(243, 240, 235, 0.3)",
            }}
          >
            <Modal.Body
              style={{
                backgroundColor: "#F3F0EB",
              }}
            >
              {/* Closing Buttom */}
              <div
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1",
                  padding: "0.5em",
                  backgroundColor: "#f3f0ea",
                  display: "flex",
                  justifyContent: "flex-end",
                  /*   boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)", */
                  width: "100%",
                }}
              >
                <button
                  className={styles.Submmit3}
                  onClick={() => setShowRick(false)}
                >
                  <img src={xImg} alt="xImg" className={styles.imageSide2} />
                </button>
              </div>
              <Rick />

              <div
                className={styles.dividerSlider}
                style={{
                  paddingTop: "2em",
                }}
              ></div>

              <img
                src={expe3}
                alt="figma0"
                className={styles.imageFrame2}
                style={{
                  width: "100%",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.Submmit2}
                onClick={() => setShowRick(false)}
              >
                <p className={styles.h7} style={{ marginBottom: "0px" }}>
                  Close
                </p>
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        {/* Figma project */}

        <div style={{ marginTop: "5em", marginBottom: "5em" }}>
          {" "}
          <a onClick={() => setShow(true)} style={{ cursor: "pointer" }}>
            <img
              src={figmaIcon}
              alt="figmaIcon"
              className={styles.imageFrame}
            />
          </a>
        </div>

        {/*   Bahia project */}

        <div style={{ marginTop: "5em", marginBottom: "5em" }}>
          {" "}
          <div>
            {" "}
            <a onClick={() => setShowPin(true)} style={{ cursor: "pointer" }}>
              <img
                src={miniBahia}
                alt="miniBahia"
                className={styles.imageFrame}
              />
            </a>
          </div>
          <Modal
            show={showPin}
            onHide={() => setShowPin(false)}
            dialogClassName="modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
            style={{
              backgroundColor: "rgba(243, 240, 235, 0.3)",
            }}
          >
            <Modal.Body
              style={{
                backgroundColor: "#F3F0EB",
              }}
            >
              {/* Closing Buttom */}
              <div
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1",
                  padding: "0.5em",
                  backgroundColor: "#f3f0ea",
                  display: "flex",
                  justifyContent: "flex-end",
                  /*   boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)", */
                  width: "100%",
                }}
              >
                <button
                  className={styles.Submmit3}
                  onClick={() => setShowPin(false)}
                >
                  <img src={xImg} alt="xImg" className={styles.imageSide2} />
                </button>
              </div>
              <Pintario />

              <div
                className={styles.dividerSlider}
                style={{
                  paddingTop: "2em",
                }}
              ></div>

              <img
                src={expe3}
                alt="figma0"
                className={styles.imageFrame2}
                style={{
                  width: "100%",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.Submmit2}
                onClick={() => setShowVid(false)}
              >
                <p className={styles.h7} style={{ marginBottom: "0px" }}>
                  Close
                </p>
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        {/*   Test project */}

        <div style={{ marginTop: "5em", marginBottom: "5em" }}>
          {" "}
          <div>
            {" "}
            <a onClick={() => setShowTes(true)} style={{ cursor: "pointer" }}>
              <img src={miniTes} alt="miniTes" className={styles.imageFrame} />
            </a>
          </div>
          <Modal
            show={showTes}
            onHide={() => setShowTes(false)}
            dialogClassName="modal-xl"
            aria-labelledby="example-custom-modal-styling-title"
            style={{
              backgroundColor: "rgba(243, 240, 235, 0.3)",
            }}
          >
            <Modal.Body
              style={{
                backgroundColor: "#F3F0EB",
              }}
            >
              {/* Closing Buttom */}
              <div
                style={{
                  position: "sticky",
                  top: "0",
                  zIndex: "1",
                  padding: "0.5em",
                  backgroundColor: "#f3f0ea",
                  display: "flex",
                  justifyContent: "flex-end",
                  /*   boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)", */
                  width: "100%",
                }}
              >
                <button
                  className={styles.Submmit3}
                  onClick={() => setShowTes(false)}
                >
                  <img src={xImg} alt="xImg" className={styles.imageSide2} />
                </button>
              </div>
              <Test />

              <div
                className={styles.dividerSlider}
                style={{
                  paddingTop: "2em",
                }}
              ></div>

              <img
                src={expe3}
                alt="figma0"
                className={styles.imageFrame2}
                style={{
                  width: "100%",
                }}
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                className={styles.Submmit2}
                onClick={() => setShowVid(false)}
              >
                <p className={styles.h7} style={{ marginBottom: "0px" }}>
                  Close
                </p>
              </button>
            </Modal.Footer>
          </Modal>
        </div>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-xl"
          aria-labelledby="example-custom-modal-styling-title"
          style={{
            backgroundColor: "rgba(243, 240, 235, 0.3)",
          }}
        >
          {/* <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title"></Modal.Title>
          </Modal.Header> */}
          <Modal.Body
            style={{
              backgroundColor: "#F3F0EB",
            }}
          >
            {/* Closing Buttom */}
            <div
              style={{
                position: "sticky",
                top: "0",
                zIndex: "1",
                padding: "0.5em",
                backgroundColor: "#f3f0ea",
                display: "flex",
                justifyContent: "flex-end",
                /*     boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.1)", */
                width: "100%",
              }}
            >
              <button
                className={styles.Submmit3}
                onClick={() => setShow(false)}
              >
                <img src={xImg} alt="xImg" className={styles.imageSide2} />
              </button>
            </div>
            <Figma />

            <div
              className={styles.dividerSlider}
              style={{
                paddingTop: "2em",
              }}
            ></div>

            <img
              src={expe3}
              alt="figma0"
              className={styles.imageFrame2}
              style={{
                width: "100%",
              }}
            />
            <div className={styles.dividerSlider}></div>
          </Modal.Body>
          <Modal.Footer>
            <button className={styles.Submmit2} onClick={() => setShow(false)}>
              <p className={styles.h7} style={{ marginBottom: "0px" }}>
                Close
              </p>
            </button>
          </Modal.Footer>
        </Modal>

        <div className={styles.carruselDiv}>
          <div className={styles.dividerSlider}></div>

          <div ref={refDark} style={{ overflow: "hidden", width: "100vw" }}>
            <motion.div style={{ x: x2 }}>
              {" "}
              <img
                src={projectsCarrusel}
                alt="projectsCarrusel"
                className={styles.carruselP}
              />
            </motion.div>
          </div>
          <div className={styles.dividerSlider}></div>
        </div>

        {/* Animated Divider project */}
        <div
          id="contactSection"
          style={{
            paddingTop: "1em",
          }}
        ></div>
        <div
          ref={widthRef}
          style={{
            marginLeft: "2em",
          }}
          className={styles.aniDivider2}
        >
          <div
            style={{
              width: width,
              transition: "width 2s",
              backgroundColor: "#d5d2ca",
            }}
            className={styles.aniDivider1}
          ></div>
        </div>

        <div ref={colorChange1}>
          <div className={styles.containerFooter}>
            <p className={styles.h4} style={{ textAlign: "left" }}>
              Let´s{" "}
            </p>
            <p className={styles.h4} style={{ textAlign: "left" }}>
              {" "}
              collaborate
            </p>
          </div>

          {/* Animated Divider project */}
          <div
            ref={widthRef}
            style={{
              marginLeft: "2em",
            }}
            className={styles.aniDivider3}
          >
            <div
              style={{
                width: width,
                transition: "width 2s",
                transitionDelay: "0.3s",
                backgroundColor: "#d5d2ca",
              }}
              className={styles.aniDivider1}
            ></div>
          </div>

          <Container>
            {" "}
            <Col md={9}>
              <p className={styles.h5} style={{ textAlign: "left" }}>
                jefryvalenco@gmail.com{" "}
              </p>
            </Col>
          </Container>
          <Container
            className={`d-flex justify-content-left ${styles.containerButton}`}
          >
            <Col md={2} className={styles.individualButton}>
              {" "}
              <a
                href="https://www.linkedin.com/in/jefry-valenco/"
                target="_blank"
              >
                <button className={styles.Submmit}>LinkedIn</button>
              </a>
            </Col>
            <Col md={2} className={styles.individualButton}>
              <a href="https://github.com/JefValenco" target="_blank">
                <button className={styles.Submmit}>Github</button>
              </a>
            </Col>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Home;
