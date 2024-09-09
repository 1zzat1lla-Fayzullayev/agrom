import { pureBlog } from "../components/PureBlog";
import { getText } from "../locales";

const ConcentratesandPure = () => {
  return (
    <div className="concentrates">
      <div className="headers concentrates__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("dr1")}</h2>
          </div>
          {/* <div className="headers__desc">
              <p className="popular__desc">{getText("ourProductsDesc")}</p>
            </div> */}
        </div>
      </div>
      <div className="container">
        <div className="pureshki popular__blogcards">
          <div className="row">{pureBlog}</div>
        </div>

        <div className="pure__description popular__texts">
            <h3 className="popular__title">{getText("pureTitle1")}</h3>
            <p className="popular__desc">{getText("pureDesc11")}</p>
            <p className="popular__desc">{getText("pureDesc12")}</p>
            <p className="popular__desc">{getText("pureDesc13")}</p>
            <h3 className="popular__title">{getText("pureTitle2")}</h3>
            <p className="popular__desc">{getText("pureDesc21")}</p>
            <p className="popular__desc">{getText("pureDesc22")}</p>
            <p className="popular__desc">{getText("pureDesc23")}</p>
            <p className="popular__desc">{getText("pureDesc24")}</p>
            <p className="popular__desc">{getText("pureDesc25")}</p>
            <p className="popular__desc">{getText("pureDesc26")}</p>
            <h3 className="popular__title">{getText("pureTitle3")}</h3>
            <p className="popular__desc">{getText("pureDesc3")}</p>
            <ul>
                <li>{getText("pureDesc3_li1")}</li>
                <li>{getText("pureDesc3_li2")}</li>
                <li>{getText("pureDesc3_li3")}</li>
                <li>{getText("pureDesc3_li4")}</li>
                <li>{getText("pureDesc3_li5")}</li>
                <li>{getText("pureDesc3_li6")}</li>
                <li>{getText("pureDesc3_li7")}</li>
                <li>{getText("pureDesc3_li8")}</li>
            </ul>
            <h3 className="popular__title">{getText("pureTitle4")}</h3>
            <p className="popular__desc">{getText("pureDesc41")}</p>
            <p className="popular__desc">{getText("pureDesc42")}</p>
            <p className="popular__desc">{getText("pureDesc43")}</p>
        </div>
      </div>
    </div>
  );
};

export default ConcentratesandPure;
