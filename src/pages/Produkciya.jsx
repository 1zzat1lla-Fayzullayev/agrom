import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import MainIcons from "../components/MainIcons";
// import Cards from "../components/Cards";

const Produkciya = () => {

  return (
    <>
      <div className="produkciya">
        <div className="headers produkciya__header">
          <div className="shadow"></div>
          <div className="container">
            <div className="headers__title">
              <h2>{getText("ourProducts")}</h2>
            </div>
            <div className="headers__desc">
              <p>{getText("ourProductsDesc")}</p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="produkt__description">
            <h3>{getText("produkciya_title")}</h3>
            <p>{getText("produkciya_desc1")}</p>
            <p>{getText("produkciya_desc2")}</p>
          </div>

          <div className="produkciya__blog">
            <div className="row mb-5 justify-content-between align-items-center">
              <div className="col-lg-7">
                <div className="img">
                  <img loading="lazy" className="w-100" src="img/produkciya1.webp" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text">
                  <span>01.</span>
                  <h5>{getText("produkciyaWrap1__title")}</h5>
                  <p>{getText("produkciyaWrap1__desc1")}</p>
                  <ul>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("morkov")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("tikva")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("svekla")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("dr2l8")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("dr2l7")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("dr2l10")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("dr2l5")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("dr2l4")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("dr2l6")}
                    </li>
                  </ul>
                  <p>{getText("produkciyaWrap1__desc2")}</p>
                </div>
              </div>
            </div>
            <div className="row mb-5 justify-content-between align-items-center">
              <div className="col-lg-7">
                <div className="img">
                  <img loading="lazy" className="w-100" src="img/produkciya2.webp" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text">
                  <span>02.</span>
                  <h5>{getText("produkciyaWrap2__title")}</h5>
                  <p>{getText("produkciyaWrap2__desc1")}</p>
                  <p>{getText("produkciyaWrap2__desc2")}</p>
                  <ul>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("dr3l1")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("dr3l2")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("others")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mb-5 justify-content-between align-items-center">
              <div className="col-lg-7">
                <div className="img">
                  <img loading="lazy" className="w-100" src="img/produkciya3.webp" alt="" />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="text">
                  <span>03.</span>
                  <h5>{getText("produkciyaWrap3__title")}</h5>
                  <p>{getText("produkciyaWrap3__desc1")}</p>
                  <ul>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("yablochniy")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("tomatniy")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("abrikosoviy")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("morkovniy")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("persikoviy")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("slivoviy")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("tikvenniy")}
                    </li>
                    <li>
                      <i>
                        <FontAwesomeIcon icon={faCheckCircle} />
                      </i>
                      {getText("svekolniy")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MainIcons />
      </div>
    </>
  );
};

export default Produkciya;
