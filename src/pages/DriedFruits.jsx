import { fruitBlog } from "../components/FruitBlog";
import { getText } from "../locales";

const Driedfruits = () => {
  return (
    <div className="dried-fruits">
      <div className="headers driedfruits__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("dr3")}</h2>
          </div>
          {/* <div className="headers__desc">
              <p>{getText("ourProductsDesc")}</p>
            </div> */}
        </div>
      </div>

      <div className="container">
        <div className="dried-fruits__list popular__blogcards">
          <div className="row">{fruitBlog}</div>
        </div>

        <div className="fruits__description popular__texts">
            <h3 className="popular__title">{getText("fruitTitle1")}</h3>
            <p className="popular__desc">{getText("fruitDesc1")}</p>
          
            <h3 className="popular__title">{getText("fruitTitle2")}</h3>
            <p className="popular__desc">{getText("fruitDesc21")}</p>
            <ul>
                <li>{getText("fruitDesc2_li1")}</li>
                <li>{getText("fruitDesc2_li2")}</li>
                <li>{getText("fruitDesc2_li3")}</li>
            </ul>
            <p className="popular__desc">{getText("fruitDesc22")}</p>
            <p className="popular__desc">{getText("fruitDesc23")}</p>
            <p className="popular__desc">{getText("fruitDesc24")}</p>
            <p className="popular__desc">{getText("fruitDesc25")}</p>

            <h3 className="popular__title">{getText("fruitTitle3")}</h3>
            <p className="popular__desc">{getText("fruitDesc31")}</p>
            <ul>
                <li>{getText("fruitDesc3_li1")}</li>
                <li>{getText("fruitDesc3_li2")}</li>
                <li>{getText("others")}</li>
            </ul>
            <p className="popular__desc">{getText("fruitDesc32")}</p>
            <h3 className="popular__title">{getText("fruitTitle4")}</h3>
            <p className="popular__desc">{getText("fruitDesc41")}</p>
            <p className="popular__desc">{getText("fruitDesc42")}</p>
        </div>
      </div>
    </div>
  );
};

export default Driedfruits;
