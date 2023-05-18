import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { landingImage } from "../assets/img";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ name }) => {
  const styles = {
    landing: {
      height: "calc(100% - 93px)",
      marginTop: "115px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    landingImage: {
      position: "absolute",
      bottom: "0",
      opacity: "0.3",
      mixBlendMode: "lighten",
      height: "85%",
    },

    textContainer: {
      display: "flex",
      flexDirection: "column",
      letterSpacing: "1px",
      textAlign: "center",
      zIndex: "1",
      color: "#fff",
      textShadow: "1px 1px 3px #000",
    },

    name: {
      color: "#fff",
      fontWeight: "700",
      marginTop: "-100px",
      paddingBottom: "28px",
    },
  };

  return (
    <>
      <section className="landing" style={styles.landing}>
        <div className="textContainer" style={styles.textContainer}>
          <h1 className="name" style={styles.name}>
            {name}
          </h1>
          <div className="description">
            <Typewriter
              className="description"
              onInit={(typewriter) => {
                typewriter
                  .typeString("I'm a Junior Web Developer")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString(
                    "Building Digital solutions that bring your ideas to fruition."
                  )
                  .start();
              }}
            />
            <div className="buttonContainer">
              <a
                href="https://drive.google.com/uc?export=download&id=1TOGm_oBigugmrfbGOAMtPbjR_gWWc-ma"
                target="_blank"
                rel="noreferrer"
              >
                <button className="btn downloadCV">Download CV</button>
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <SocialMediaIcons />
          </div>
        </div>
        <div className="image-container">
          <motion.img
            className="landingImage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            style={styles.landingImage}
            src={landingImage}
            alt="Purwa Wiadnyana"
            quality="90"
          />
        </div>
      </section>
    </>
  );
};

export default Landing;
