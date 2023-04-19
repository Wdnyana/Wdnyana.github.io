import About from "../components/About";
import HeaderPage from "../components/HeaderPage";

const AboutPage = ({ name, location, brand, email, availability }) => {
  return (
    <section className="about">
      <HeaderPage title="About" description="Let me introduce myself" />
      <About
        name={name}
        location={location}
        brand={brand}
        email={email}
        availability={availability}
      />
    </section>
  );
};

export default AboutPage;
