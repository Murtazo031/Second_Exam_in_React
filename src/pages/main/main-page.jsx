import Container from "../../components/atoms/container/container";
import Header from "../../components/templates/header/header";
import HeroSection from "../../components/templates/hero-section/hero-section";
import LatestProjects from "../../components/templates/latest-projects/latest-projects";
import Expertise from "../../components/templates/expetise/expertise";
import SomeVideo from "../../components/templates/some-viseo_page/some-video";
import Quotes from "../../components/templates/quotes/quotes";
import ContactUs from "../../components/templates/contacUs/contactUs";
import Useful from "../../components/templates/usefull-articles/usfule";
import Carusel from "../../components/templates/carusel-articles/carusel-articles";
import FAQ from "../../components/templates/faq/faq";
import Footer from "../../components/templates/footer/footer";

export default function MainPage() {
  return (
    <Container>
      <Header />
      <HeroSection />
      <LatestProjects/>
      <Expertise/>
      <SomeVideo/>
      <Quotes/>
      <ContactUs/>
      <Useful/>
      <Carusel/>
      <FAQ/>
      <Footer/> 
    </Container>
  );
}
