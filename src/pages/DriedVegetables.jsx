import { vegetableBlog } from "../components/VegetableBlog";
import { getText } from "../locales";

const DriedVegetables = () => {
  return (
    <div className="dried-vegetables">
      <div className="headers driedvegetables__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("dr2")}</h2>
          </div>
          {/* <div className="headers__desc">
              <p>{getText("ourProductsDesc")}</p>
            </div> */}
        </div>
      </div>

      <div className="container">
        <div className="dried-vegetables__list popular__blogcards">
          <div className="row">{vegetableBlog}</div>
        </div>

        <div className="vegetables__description popular__texts">
            <h3 className="popular__title">{getText("vegetTitle1")}</h3>
            <p className="popular__desc">{getText("vegetDesc11")}</p>
            <p className="popular__desc">{getText("vegetDesc12")}</p>
            <p className="popular__desc">{getText("vegetDesc13")}</p>
          
            <h3 className="popular__title">{getText("vegetTitle2")}</h3>
            <p className="popular__desc">{getText("vegetDesc2")}</p>
            <ul>
                <li>{getText("vegetDesc2_li1")}</li>
                <li>{getText("vegetDesc2_li2")}</li>
                <li>{getText("vegetDesc2_li3")}</li>
                <li>{getText("vegetDesc2_li4")}</li>
                <li>{getText("vegetDesc2_li5")}</li>
                <li>{getText("vegetDesc2_li6")}</li>
                <li>{getText("vegetDesc2_li7")}</li>
                <li>{getText("vegetDesc2_li8")}</li>
                <li>{getText("vegetDesc2_li9")}</li>
            </ul>

            <h3 className="popular__title">{getText("vegetTitle3")}</h3>
            <p className="popular__desc">{getText("vegetDesc31")}</p>
            <p className="popular__desc">{getText("vegetDesc32")}</p>
        </div>
      </div>
    </div>
  );
};

export default DriedVegetables;
