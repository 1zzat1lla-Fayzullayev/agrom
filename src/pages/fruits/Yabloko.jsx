import { getText } from "../../locales";

const Yabloko = () => {
  return (
    <div className="popular__productBlog">
      <div className="headers yabloko__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("dr3l1")}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img">
          <img loading="lazy" className="w-100" src="img/sushenoe-yabloko.webp" alt="" />

          <div className="popular__texts">
            <h3 className="popular__title">{getText("yablokoTitle1")}</h3>
            <p className="popular__desc">{getText("yablokoDesc1")}</p>
            <p className="popular__desc">{getText("yablokoDesc2")}</p>

            <h3 className="popular__title">{getText("yablokoTitle2")}</h3>
            <p className="popular__desc">{getText("yablokoDesc21")}</p>
            <p className="popular__desc">{getText("yablokoDesc22")}</p>
            <p className="popular__desc bold">{getText("yablokoDesc23")}</p>
            <p className="popular__desc">{getText("yablokoDesc24")}</p>
            <p className="popular__desc">{getText("yablokoDesc25")}</p>
            <p className="popular__desc">{getText("yablokoDesc26")}</p>
            <p className="popular__desc">{getText("yablokoDesc27")}</p>
            <p className="popular__desc">{getText("yablokoDesc28")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yabloko;
