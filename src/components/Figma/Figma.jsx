import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styles from "./Figma.module.css";

import {
  figma2,
  figma3,
  figma4,
  figma5,
  figma6,
  figma8,
  figmaV1,
  figmaVAbout,
  figmaVStore,
  figLogo,
} from "../../images/images.js";

import { useInView } from "react-intersection-observer";

const Figma = () => {
  const { ref: textRef1, inView: myText1IsVisible } = useInView();

  const text1Visibility = useTextVisibility(myText1IsVisible);

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && ref) {
      videoRef.current.play();
    }
  }, []);

  const ref = useRef(null);
  const refDark = useRef(null);

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
      style={{
        backgroundColor: "#F3F0EB",
      }}
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
          style={{ paddingBottom: "2em" }}
        >
          <Col md={3} style={{ textAlign: "center" }}>
            <img
              src={figLogo}
              alt="figLogo"
              className={styles.imageFrame}
              style={{ width: "50%" }}
            />
          </Col>
          <Col md={9}>
            <p className={styles.p1}> Pintario</p>
            <p className={styles.p2}>
              A UI/UX project that was prototyped and developed in Figma,
              leveraging a personal entrepreneurial endeavor.
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

      {/* figmaLogo project */}

      <div className={styles.videoContainer}>
        {" "}
        <video
          className={styles.video}
          ref={videoRef}
          width="100%"
          height="auto"
          autoPlay={ref}
          loop
        >
          <source src={figmaV1} type="video/mp4" />
        </video>
      </div>

      <div className={styles.videoContainer}>
        {" "}
        <video
          className={styles.video}
          ref={videoRef}
          width="100%"
          height="auto"
          autoPlay={ref}
          loop
        >
          <source src={figmaVAbout} type="video/mp4" />
        </video>
      </div>

      <div className={styles.videoContainer}>
        {" "}
        <video
          className={styles.video}
          ref={videoRef}
          width="100%"
          height="auto"
          autoPlay={ref}
          loop
        >
          <source src={figmaVStore} type="video/mp4" />
        </video>
      </div>

      <div className={styles.containerSide}>
        <div>
          <img src={figma8} alt="figma0" className={styles.imageFrame} />

          <img src={figma2} alt="figma0" className={styles.imageFrame} />
          <img src={figma3} alt="figma0" className={styles.imageFrame} />
          <img src={figma4} alt="figma0" className={styles.imageFrame} />
          <img src={figma5} alt="figma0" className={styles.imageFrame} />
          <img src={figma6} alt="figma0" className={styles.imageFrame} />
        </div>
      </div>
    </div>
  );
};

export default Figma;
