import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Dehydration = () => {
  return (
    <div className="dehydration">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="info">
            <h2>{getText("dehydrationTitle")}</h2>
            <p>{getText("dehydrationDesc")}</p>
            <div className="myBtn">
            <a href="/">{getText("more")} <FontAwesomeIcon icon={faChevronRight}/></a>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-4">
          <div className="wrap">
         <div className="img">
               <img loading="lazy" className="w-100" src="img/dehy1.webp" alt="" />
         </div>
            <div className="text">
                <h6>{getText("dehyCard1")}</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="wrap">
         <div className="img">
               <img loading="lazy" className="w-100" src="img/dehy2.webp" alt="" />
         </div>
            <div className="text">
                <h6>{getText("dehyCard2")}</h6>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="wrap">
         <div className="img">
               <img loading="lazy" className="w-100" src="img/dehy3.webp" alt="" />
         </div>
            <div className="text">
                <h6>{getText("dehyCard3")}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dehydration;
