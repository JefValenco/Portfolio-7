import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useRef, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styles from "./Test.module.css";

import {
  videogameVideo,
  miniBahia,
  testVideo,
  testSlide,
  bahiaVideo,
  countriesVideo,
  spoonacularVideo,
  pokemonVideo,
  rickVideo,
  dogsVideo,
  expe3,
  git,
  expe5,
  expe6,
  expe7,
  figma9,
  screencaptureVideogame,
} from "../../images/images.js";

import { useInView } from "react-intersection-observer";

const Test = () => {
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

      {/* figmaLogo project */}

      <div
        ref={textRef1}
        style={{
          opacity: text1Visibility.opacity,
          paddingTop: text1Visibility.position,
          transition: "opacity 3s, padding-top 3s",
        }}
      >
        {" "}
        {/* Divider */}
        <div>
          <div
            className={styles.dividerSlider}
            style={{
              paddingTop: "2em",
            }}
          ></div>

          <div className={styles.dividerSlider}></div>
        </div>
        <div
          className={styles.innerContainer}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {" "}
          <p className={styles.cardText} style={{ textAlign: "center" }}>
            "Test" is a full stack React app with PostgreSQL database and REST
            API for comprehensive CRUD functionality.
          </p>
        </div>
      </div>

      <img
        src={expe7}
        alt="expe7"
        className={styles.imageFrame2}
        style={{
          width: "100%",
        }}
      />

      <div style={{ paddingTop: "2em" }}>
        {" "}
        <img src={testSlide} alt="testSlide" className={styles.imageFrame} />
      </div>

      <div className={styles.videoContainer}>
        {" "}
        <video className={styles.video} width="100%" height="auto" controls>
          <source src={testVideo} type="video/mp4" />
        </video>
      </div>

      {/* Divider */}
      <div>
        <div
          className={styles.dividerSlider}
          style={{
            paddingTop: "2em",
          }}
        ></div>

        <div className={styles.dividerSlider}></div>
      </div>
    </div>
  );
};

export default Test;
