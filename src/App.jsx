import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Dehydration from "./components/Dehydration";
import AboutAgroprocess from "./components/AboutAgroprocess";
import AboutAgrofeed from "./components/AboutAgrofeed";
import FeedandProcess from "./components/FeedandProcess";
import ContactForm from "./components/ContactForm";
import MainIcons from "./components/MainIcons";
import Aos from "aos";
import { Toaster } from "react-hot-toast";

const App = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Производитель концентрированных пюре (концентратов), сушеных овощей и фруктов - Agrom</title>
        <meta name="description" content="Agrom is a leading manufacturer of natural concentrates, dried fruits, and vegetables. Explore our 100% natural products sourced directly from Uzbekistan. Affordable pricing and fast delivery." />
        <meta name="keywords" content="concentrated puree, dried vegetables, dried fruits, natural products, Uzbekistan, wholesale, tomato paste, apricot puree, dried apples, carrot puree, pumpkin puree, pepper, parsley, dried plums, концентрированное пюре, сушеные овощи, сухофрукты, натуральные продукты, Узбекистан, оптом, томатная паста, абрикосовое пюре, сушеные яблоки, морковное пюре, тыквенное пюре, перец, петрушка, чернослив" />
        <meta property="og:title" content="Agrom - Натуральные концентраты и сухофрукты" />
        <meta property="og:description" content="Discover our range of 100% natural dried fruits, vegetables, and concentrated purees from Uzbekistan." />
        <meta property="og:url" content="https://agrom.uz/" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className="container">
        <Welcome />
        <Dehydration />
        <AboutAgroprocess />
        <AboutAgrofeed />
        <MainIcons />
        <FeedandProcess />
        <ContactForm />
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            zIndex: 99999,
            marginTop: "100px",
          },
        }}
      />
    </>
  );
};

export default App;
