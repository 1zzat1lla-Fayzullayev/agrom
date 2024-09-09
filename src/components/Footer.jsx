import {
  faFacebook,
  faTelegram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="footer">
      <div className="mainFooter">
        <div className="shadow"></div>
        <ul className="social">
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <div className="container">
          <p>Copyright © 2024 Agrom</p>
          <p>Powered by <a href="https://zamaan.uz/">Zamaan Group</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
