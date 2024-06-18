import About from "../component/About/About";
import AppSect from "../component/AppSection/AppSect";
import DowApp from "../component/DowApp/DowApp";
import { Footer } from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";
import MenuFood from "../component/MenuFood/MenuFood";
import Reserve from "../component/Reserve/Reserve";
import Service from "../component/Service/Service";
const Index = () => {
  return (
    <div>
      <Hero />
      <About />
      <AppSect />
      <Service />
      <MenuFood />
      <Reserve />
      <DowApp />
      <Footer />
    </div>
  );
};

export default Index;
