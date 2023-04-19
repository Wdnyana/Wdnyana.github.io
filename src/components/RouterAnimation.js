import { Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProjectPage from "../pages/ProjectPage";

const RouterAnimation = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <LandingPage
            name={personalDetails.name}
            tagline={personalDetails.tagline}
          />
        }
      />
      <Route
        path="/about"
        element={
          <AboutPage
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />
      <Route path="/project" element={<ProjectPage />} />
      <Route
        path="/contact"
        element={
          <ContactPage
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
          />
        }
      />
    </Routes>
  );
};

export default RouterAnimation;
