import FormContact from "../components/FormContact";
import InfoContact from "../components/InfoContact";
import HeaderPage from "../components/HeaderPage";
import SocialMediaIcons from "../components/SocialMediaIcons";

const ContactPage = ({ name, email, location }) => {
  return (
    <section className="contact">
      <HeaderPage title="Contact" description="Get in touch" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <InfoContact name={name} location={location} email={email} />
          </div>
          <div className="col-12 col-lg-6">
            <FormContact />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center width-icons">
        <SocialMediaIcons />
      </div>
    </section>
  );
};

export default ContactPage;
