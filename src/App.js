import Layout from "./components/Layout";
import RouterAnimation from "./components/RouterAnimation";

const App = () => {
  const personalDetails = {
    name: "Purwa Wiadnyana.",
    location: "Tabanan, Bali.",
    email: "purwawiadnyana08@gmail.com",
    availability: "Open for work.",
    brand:
      "Motivated Junior Web Developer with a background in programming languages and web technologies. Experienced in creating and maintaining websites and applications. Committed to working with teams to achieve project goals and enhance technical skills.",
  };

  return (
    <>
      <Layout>
        <RouterAnimation personalDetails={personalDetails} />
      </Layout>
    </>
  );
};

export default App;
