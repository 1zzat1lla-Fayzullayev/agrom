import Gallery from "../components/Gallery";
import { getText } from "../locales";

const Fotogalereya = () => {
  return (
    <div className="photogallery">
      <div className="headers photogallery__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("gallery")}</h2>
          </div>
          {/* <div className="headers__desc">
            <p>{getText("proizDesc")}</p>
          </div> */}
        </div>
      </div>
      <Gallery/>
    </div>
  );
};

export default Fotogalereya;
