import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { getText } from "../locales";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Investitsiya = () => {
  return (
    <div className="investigation">
      <div className="headers investigation__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("invest")}</h2>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="popular__texts">
          <h3 className="popular__title">{getText("investTitle1")}</h3>
          <p className="popular__desc">{getText("investDesc11")}</p>
          <p className="popular__desc">{getText("investDesc12")}</p>
          <p className="popular__desc">{getText("investDesc13")}</p>
          <h3 className="popular__title">{getText("investTitle2")}</h3>
          <p className="popular__desc">{getText("investDesc21")}</p>
          <p className="popular__desc">{getText("investDesc22")}</p>
          <h3 className="popular__title">{getText("investTitle3")}</h3>
          <p className="popular__desc">{getText("investDesc31")}</p>
          <p className="popular__desc">{getText("investDesc32")}</p>
          <h3 className="popular__title">{getText("investTitle4")}</h3>
          <p className="popular__desc">
            <span className="bold">{getText("invest4_li1")}</span>
            {getText("investDesc41")}
          </p>
          <p className="popular__desc">
            <span className="bold">{getText("invest4_li2")}</span>
            {getText("investDesc42")}
          </p>
          <p className="popular__desc">{getText("investDesc421")}</p>

          <p className="popular__desc">
            <span className="bold">{getText("invest4_li3")}</span>
            {getText("investDesc43")}
          </p>
          <p className="popular__desc">{getText("investDesc431")}</p>

          <p className="popular__desc">
            <span className="bold">{getText("invest4_li4")}</span>
            {getText("investDesc44")}
          </p>
          <p className="popular__desc">{getText("investDesc441")}</p>

          <p className="popular__desc">
            <span className="bold">{getText("invest4_li5")}</span>
            {getText("investDesc45")}
          </p>
          <p className="popular__desc">{getText("investDesc451")}</p>

          <p className="popular__desc">
            <span className="bold">{getText("invest4_li6")}</span>
            {getText("investDesc46")}
          </p>
          <p className="popular__desc">{getText("investDesc461")}</p>

          <h3 className="popular__title">{getText("investTitle5")}</h3>
          <p className="popular__desc">
            <span className="bold">{getText("invest5_li1")}</span>
            {getText("investDesc51")}
          </p>
          <p className="popular__desc">
            <span className="bold">{getText("invest5_li2")}</span>
            {getText("investDesc52")}
          </p>

          <h3 className="popular__title">{getText("investTitle6")}</h3>
          <p className="popular__desc">{getText("investDesc61")}</p>
        </div>

        <div className="row mb-5">
          <div className="col-md-4 col-6">
            <div className="wrap">
              <div className="img">
                <img loading="lazy" className="w-100" src="img/invest-pres1.webp" alt="" />
              </div>
              <div className="myBtn">
                <a href="presentations/invest1.pdf">
                  {getText("downloadPres")}
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="wrap">
              <div className="img">
                <img loading="lazy" className="w-100" src="img/invest-pres2.webp" alt="" />
              </div>
              <div className="myBtn">
                <a href="presentations/invest2.pdf">
                  {getText("downloadPres")}
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="wrap">
              <div className="img">
                <img loading="lazy" className="w-100" src="img/invest-pres3.webp" alt="" />
              </div>
              <div className="myBtn">
                <a href="presentations/invest3.pdf">
                  {getText("downloadPres")}
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="wrap">
              <div className="img">
                <img loading="lazy" className="w-100" src="img/invest-pres4.webp" alt="" />
              </div>
              <div className="myBtn">
                <a href="presentations/invest4.pdf">
                  {getText("downloadPres")}
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="wrap">
              <div className="img">
                <img loading="lazy" className="w-100" src="img/invest-pres5.webp" alt="" />
              </div>
              <div className="myBtn">
                <a href="presentations/invest5.pdf">
                  {getText("downloadPres")}
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-6">
            <div className="wrap">
              <div className="img">
                <img loading="lazy" className="w-100" src="img/invest-pres6.webp" alt="" />
              </div>
              <div className="myBtn">
                <a href="presentations/invest6.pdf">
                  {getText("downloadPres")}
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investitsiya;
