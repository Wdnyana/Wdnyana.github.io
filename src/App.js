import Layout from "./components/Layout";
import RouterAnimation from "./components/RouterAnimation";

const App = () => {
  const personalDetails = {
    name: "Purwa Wiadnyana.",
    location: "Tabanan, Bali.",
    email: "purwawiadnyana08@gmail.com",
    availability: "Open for work.",
    brand:
      "As a Junior Frontend Web Developer and Data Analyst, my background in both technical expertise and data analysis allows me to approach each project with a data-driven perspective and develop effective solutions. I'm passionate about combining creativity and analytical thinking to build user-friendly digital products that meet the needs of end-users. Let's work together to create innovative solutions that make a difference.",
  };

  return (
    <Layout>
      <RouterAnimation personalDetails={personalDetails} />
    </Layout>
  );
};

export default App;
