import { faTelegram, faWhatsapp, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icons = () => {
  return (
    <div className="fixed-icons">
      <ul>
        <li>
          <a href="tel:+998900070647">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </li>
        <li>
          <a href="https://t.me/AgromFP">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </li>
        <li>
          <a href="mailto:abdullaev@agrom.uz">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="https://wa.me/AgromFP">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Icons;
