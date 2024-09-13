import { useEffect } from "react";
import AboutAgrofeed from "./components/AboutAgrofeed";
import AboutAgroprocess from "./components/AboutAgroprocess";
import ContactForm from "./components/ContactForm";
import Dehydration from "./components/Dehydration";
import FeedandProcess from "./components/FeedandProcess";
import Header from "./components/Header";
import MainIcons from "./components/MainIcons";
import Welcome from "./components/Welcome";
import Aos from "aos";

const App = () => {

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,    
    });
  }, []);
  return (
    <>
      <Header />
      <div className="container">
        <Welcome />
        <Dehydration/>
        <AboutAgroprocess/>
        <AboutAgrofeed/>
        <MainIcons/>
        <FeedandProcess/>
        <ContactForm />
      </div>
    </>
  );
};

export default App;
