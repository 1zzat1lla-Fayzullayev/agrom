import AboutAgrofeed from "./components/AboutAgrofeed";
import AboutAgroprocess from "./components/AboutAgroprocess";
import Dehydration from "./components/Dehydration";
import FeedandProcess from "./components/FeedandProcess";
import Header from "./components/Header";
import MainIcons from "./components/MainIcons";
import Welcome from "./components/Welcome";

const App = () => {
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
      </div>
    </>
  );
};

export default App;
