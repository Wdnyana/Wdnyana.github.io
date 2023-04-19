import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";
import CardImageTitle from "./CardImageTitle";
import CardEducation from "./CardEducation";
import CardCertification from "./CardCertification";
import {
  aboutImage,
  FutsalIcon,
  GameIcon,
  TravellingIcon,
  MusicIcon,
  PythonLogo,
  JSLogo,
  HTMLLogo,
  CSSLogo,
  BootstrapLogo,
  ReactLogo,
  SassLogo,
  MysqlLogo,
  MongoDBLogo,
  FigmaLogo,
  ExcelLogo,
  UbuntuLogo,
  imageCertif,
} from "../assets/img";

const About = ({ name, email, location, availability, brand }) => {
  return (
    <div className=" container">
      <div className="aboutContainer topContent">
        {/* About */}
        <div className="row">
          <motion.div
            className="personalImage col-12 col-lg-4"
            initial={{ x: "-10vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
          >
            <img src={aboutImage} alt={name} />
          </motion.div>
          <motion.div
            className="personalInfo col-12 col-lg-8"
            initial={{ x: "10vw", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
          >
            <div className="contentContainer">
              <h4>Who Am I ?</h4>
              <h5>
                Junior Frontend Web Developer and Data Analyst with a passion
                for creating digital solutions.
              </h5>
              <div className="contentDescription">
                <p>{brand}</p>
              </div>
              <div className="infoContainer ps-md-0">
                <div className="row">
                  <div className="col-12 col-md-6 info">
                    <span>Name:</span>
                    <p>{name}</p>
                  </div>
                  <div className="col-12 col-md-6 info">
                    <span>Email:</span>
                    <p>
                      <a href={`mailto:${email}`}>{email}</a>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 info">
                    <span>Location:</span>
                    <p>{location}</p>
                  </div>
                  <div className="col-12 col-md-6 info">
                    <span>Availability:</span>
                    <p>{availability}</p>
                  </div>
                </div>
              </div>
              <div className="iconsContainer ps-md-2">
                <SocialMediaIcons />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hobby */}
      <div className="hobbyContainer">
        <div className="row">
          <motion.div
            className="cardHobbies"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
          >
            <div className="hobbyContent">
              <h3 className="subPageTitle">My Hobby</h3>
              <div className="col-12">
                <div className="d-md-flex justify-content-md-center align-items-md-center">
                  <CardImageTitle
                    className="cardHobby"
                    title="Futsal"
                    imageUrl={FutsalIcon}
                  />
                  <CardImageTitle
                    className="cardHobby"
                    title="Music"
                    imageUrl={MusicIcon}
                  />
                  <CardImageTitle
                    className="cardHobby"
                    title="Game"
                    imageUrl={GameIcon}
                  />
                  <CardImageTitle
                    className="cardHobby"
                    title="Travelling"
                    imageUrl={TravellingIcon}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Education */}
      <div className="educationContainer">
        <div className="row">
          <motion.div
            className="cardEducation "
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
          >
            <div className="educationContent">
              <h3 className="subPageTitle">My Education</h3>
              <div className="col-12">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <CardEducation
                    className="educationCard"
                    title="Lithan EduClaas."
                    subtitle="Applied Degree in Software Engineer."
                    text="2022 - Present, Singapore."
                  />

                  <CardEducation
                    className="educationCard"
                    title="Institut Teknologi dan Bisnis STIKOM Bali"
                    subtitle="Bachelor of Computer Systems."
                    text="2019 - Present, Bali - Indonesia."
                  />

                  <CardEducation
                    className="educationCard"
                    title="SMA Negeri 2 Tabanan."
                    subtitle="High School diploma - Social Sciences."
                    text="2015 - 2018, Bali - Indonesia."
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Skills */}
      <div className="skillsContainer">
        <div className="row">
          <motion.div
            className="cardSkills"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
          >
            <div className="skillsContent">
              <h3 className="subPageTitle">My Skills</h3>
              <div className=" col-12 mb-3">
                <div className="d-md-flex justify-content-md-center align-items-md-center">
                  <CardImageTitle
                    className="cardHobby"
                    title="Python"
                    imageUrl={PythonLogo}
                  />

                  <CardImageTitle
                    className="cardHobby"
                    title="Javascript"
                    imageUrl={JSLogo}
                  />

                  <CardImageTitle
                    className="cardHobby"
                    title="HTML"
                    imageUrl={HTMLLogo}
                  />

                  <CardImageTitle
                    className="cardHobby"
                    title="CSS"
                    imageUrl={CSSLogo}
                  />
                </div>
              </div>

              <div className=" col-12 mb-3">
                <div className="d-md-flex justify-content-md-center align-items-md-center">
                  <CardImageTitle
                    className="cardHobby"
                    title="Bootstrap"
                    imageUrl={BootstrapLogo}
                  />

                  <CardImageTitle
                    className="cardHobby"
                    title="React"
                    imageUrl={ReactLogo}
                  />

                  <CardImageTitle
                    className="cardHobby"
                    title="Sass"
                    imageUrl={SassLogo}
                  />

                  <CardImageTitle
                    className="cardHobby"
                    title="MySQL"
                    imageUrl={MysqlLogo}
                  />
                </div>
              </div>

              <div className=" col-12 mb-3">
                <div className="d-md-flex justify-content-md-center align-items-md-center">
                  <CardImageTitle
                    className="cardHobby"
                    title="MongoDB"
                    imageUrl={MongoDBLogo}
                  />

                  <CardImageTitle
                    className="cardHobby"
                    title="Figma"
                    imageUrl={FigmaLogo}
                  />

                  <CardImageTitle
                    className="cardHobby"
                    title="Microsoft Excel"
                    imageUrl={ExcelLogo}
                  />

                  <CardImageTitle
                    className="cardHobby"
                    title="Ubuntu OS"
                    imageUrl={UbuntuLogo}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certification */}
      <div className="certificationContainer">
        <div className="row">
          <motion.div
            className="cardCertification"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, ease: "easeInOut", duration: 0.5 }}
          >
            <div className="certificationContent">
              <h3 className="subPageTitle">My Certification</h3>
              <div className="col-12">
                <div className="d-md-flex justify-content-md-between align-items-md-center">
                  <CardCertification
                    className="cardCertification"
                    cardTitle="CERTIFICATION CTF GKSK 5"
                    imgUrl={imageCertif}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
