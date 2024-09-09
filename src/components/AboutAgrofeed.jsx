import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const AboutAgrofeed = () => {
  return (
    <div className="abouts agrofeed">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="info">
            <img className="mb-5 w-lg-auto" src="img/agrofeed.webp" alt="" />
            <p>{getText("aboutFeed")}</p>

            <div className="myBtn">
              <a href="/">
                {getText("more")} <FontAwesomeIcon icon={faChevronRight} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0">
          <div className="img">
            <img className="w-100" src="/img/aboutpic2.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAgrofeed;
