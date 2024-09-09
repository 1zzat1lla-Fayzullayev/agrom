import { HashRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/main.scss";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Up from "./components/Up.jsx";
import ScrollToTop from "./components/ScrollToTop.js";

import Proizvodstvo from "./pages/Proizvodstvo.jsx";
import Investitsiya from "./pages/Investitsiya.jsx";
import Contacts from "./pages/Contacts.jsx";
import PartnersandSertificates from "./pages/PartnersandSertificates.jsx";
import Fotogalereya from "./pages/Fotogalereya.jsx";
import Produkciya from "./pages/Produkciya.jsx";
import ConcentratesandPure from "./pages/ConcentratesandPure.jsx";
import DriedVegetables from "./pages/DriedVegetables.jsx";
import DriedFruits from "./pages/DriedFruits.jsx";
import Yabloko from "./pages/fruits/Yabloko.jsx";
import Hurma from "./pages/fruits/Hurma.jsx";
import TomatnayaPasta from "./pages/pures/TomatnayaPasta.jsx";
import AbrikosovoePure from './pages/pures/AbrikosovoePure';
import MorkovnoePure from './pages/pures/MorkovnoePure';
import PersikovoePure from './pages/pures/PersikovoePure';
import SlivovoePure from './pages/pures/SlivovoePure';
import SvekolnoePure from './pages/pures/SvekolnoePure';
import TikvennoePure from './pages/pures/TikvennoePure';
import YablochnoePure from './pages/pures/YablochnoePure';
import Baklajan from "./pages/vegetables/Baklajan.jsx";
import Ukrop from "./pages/vegetables/Ukrop.jsx";
import Tikva from "./pages/vegetables/Tikva.jsx";
import Svekla from "./pages/vegetables/Svekla.jsx";
import Pomidor from "./pages/vegetables/Pomidor.jsx";
import Petrushka from "./pages/vegetables/Petrushka.jsx";
import Perec from "./pages/vegetables/Perec.jsx";
import Morkov from "./pages/vegetables/Morkov.jsx";
import LukZeleniy from "./pages/vegetables/LukZeleniy.jsx";
import Luk from "./pages/vegetables/Luk.jsx";
import Kapusta from "./pages/vegetables/Kapusta.jsx";
import Bolgarskiy from "./pages/vegetables/Bolgarskiy.jsx";
import Icons from "./components/Icons.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Navbar />
    <ScrollToTop />
    <Routes>
      <Route path="/" exact element={<App />} />
      <Route path="/proizvodstvo" exact element={<Proizvodstvo />} />
      <Route path="/gallery" exact element={<Fotogalereya />} />
      <Route path="/testimonials" exact element={<PartnersandSertificates />} />
      <Route path="/invest" exact element={<Investitsiya />} />
      <Route path="/contacts" exact element={<Contacts />} />

      <Route path="/produkciya" exact element={<Produkciya />} />
      <Route path="/produkciya/koncentraty-pyure" exact element={<ConcentratesandPure />} />
      <Route path="/produkciya/koncentraty-pyure/tomatnaya" exact element={<TomatnayaPasta />} />
      <Route path="/produkciya/koncentraty-pyure/abrikosovoe" exact element={<AbrikosovoePure />} />
      <Route path="/produkciya/koncentraty-pyure/morkovnoe" exact element={<MorkovnoePure />} />
      <Route path="/produkciya/koncentraty-pyure/persikovoe" exact element={<PersikovoePure />} />
      <Route path="/produkciya/koncentraty-pyure/slivovoe" exact element={<SlivovoePure />} />
      <Route path="/produkciya/koncentraty-pyure/svekolnoe" exact element={<SvekolnoePure />} />
      <Route path="/produkciya/koncentraty-pyure/tikvennoe" exact element={<TikvennoePure />} />
      <Route path="/produkciya/koncentraty-pyure/yablochnoe" exact element={<YablochnoePure />} />


      <Route path="/produkciya/dried-vegetables" exact element={<DriedVegetables />} />
      <Route path="/produkciya/dried-vegetables/baklajan" exact element={<Baklajan />} />
      <Route path="/produkciya/dried-vegetables/bolgarskiy" exact element={<Bolgarskiy />} />
      <Route path="/produkciya/dried-vegetables/kapusta" exact element={<Kapusta />} />
      <Route path="/produkciya/dried-vegetables/luk" exact element={<Luk />} />
      <Route path="/produkciya/dried-vegetables/lukzeleniy" exact element={<LukZeleniy />} />
      <Route path="/produkciya/dried-vegetables/morkov" exact element={<Morkov />} />
      <Route path="/produkciya/dried-vegetables/perec" exact element={<Perec />} />
      <Route path="/produkciya/dried-vegetables/petrushka" exact element={<Petrushka />} />
      <Route path="/produkciya/dried-vegetables/pomidor" exact element={<Pomidor />} />
      <Route path="/produkciya/dried-vegetables/svekla" exact element={<Svekla />} />
      <Route path="/produkciya/dried-vegetables/tikva" exact element={<Tikva />} />
      <Route path="/produkciya/dried-vegetables/ukrop" exact element={<Ukrop />} />


      <Route path="/produkciya/dried-fruits" exact element={<DriedFruits />} />
      <Route path="/produkciya/dried-fruits/yabloko" exact element={<Yabloko />} />
      <Route path="/produkciya/dried-fruits/hurma" exact element={<Hurma />} />

    
    </Routes>
    <Footer />
    <Up />
    <Icons/>
  </HashRouter>
);
