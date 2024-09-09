import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";

const Personals = () => {
  return (
    <div className="personals">
      <div className="container">
        <div className="row justify-content-between mb-5">
          <div className="col-md-5">
            <div className="wrap d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faGlobe} /> <h5>WWW.AGROM.UZ</h5>
            </div>
            <div className="wrap d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <h5>{getText("address")}</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div className="wrap d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faEnvelope} /> <h5>INFO@AGROM.UZ</h5>
            </div>
            <div className="wrap d-flex align-items-center mb-3">
              <FontAwesomeIcon icon={faEnvelope} /> <h5>SALE@AGROM.UZ</h5>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="card founder-card">
              <div className="img">
                <FontAwesomeIcon icon={faUserTie} />
              </div>
              <div className="info">
                <h4>{getText("founder_title")}</h4>
                <h5>{getText("founder_name")}</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <div className="text-start">
                    <h6>Email</h6>
                    <a href="mailto:сeo@agrom.uz">сeo@agrom.uz</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-center my-5">
          <div className="col-md-4">
            <div className="card">
              <h4>{getText("ceo_title")}</h4>

              <div className="img">
                <img loading="lazy" className="w-75" src="img/buriev.webp" alt="" />
              </div>

              <div className="info">
                <div className="d-flex mb-3">
                  <FontAwesomeIcon icon={faUserTie} />{" "}
                  <h5>{getText("ceo_name")}</h5>
                </div>
                <div className="d-flex mb-3">
                  <i>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  <div>
                    <h6>Mob & WhatsApp & Telegram</h6>
                    <a href="tel:+998999552157">+998 99 955 21 57</a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <div>
                    <h6>Email</h6>
                    <a href="mailto:buriev@agrom.uz">buriev@agrom.uz</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <h4>{getText("sales_title")}</h4>

              <div className="img">
                <img loading="lazy" className="w-75" src="img/abdullaev.webp" alt="" />
              </div>

              <div className="info">
                <div className="d-flex mb-3">
                  <FontAwesomeIcon icon={faUserTie} />{" "}
                  <h5>{getText("sales_name")}</h5>
                </div>
                <div className="d-flex mb-3">
                  <i>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  <div>
                    <h6>Mob & WhatsApp & Telegram</h6>
                    <a href="tel:+998900070647">+998 90 007 06 47</a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <div>
                    <h6>Email</h6>
                    <a href="mailto:abdullaev@agrom.uz">abdullaev@agrom.uz</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <h4>{getText("technic_title")}</h4>

              <div className="img">
                <img loading="lazy" className="w-75" src="img/polyahov.webp" alt="" />
              </div>

              <div className="info">
                <div className="d-flex mb-3">
                  <FontAwesomeIcon icon={faUserTie} />{" "}
                  <h5>{getText("technic_name")}</h5>
                </div>
                <div className="d-flex mb-3">
                  <i>
                    <FontAwesomeIcon icon={faPhone} />
                  </i>
                  <div>
                    <h6>Mob & WhatsApp & Telegram</h6>
                    <a href="tel:+998909319168">+998 90 931 91 68</a>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <i>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <div>
                    <h6>Email</h6>
                    <a href="mailto:polyahov@agrom.uz">polyahov@agrom.uz</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12">
            <div className="map">
            <iframe className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d25217.600727167017!2d67.56614800000001!3d37.808782!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b55794464d0c33%3A0x7253dbd22cf82381!2sAgro%20Processing%20Group!5e0!3m2!1sru!2sus!4v1704122843381!5m2!1sru!2sus"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personals;
