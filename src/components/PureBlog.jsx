// import pures

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pures } from "../data/pure";
import { getText } from "../locales";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const pureBlog = pures.map((item) => {
  return (
    <>
      <div className="col-lg-3 col-md-6 ">
        <div className="card">
          <h5>{item.title}</h5>
          <div className="img">
            <img loading="lazy" className="w-100" src={item.image} alt="" />
          </div>
          <div className="info">
            <p>{item.description}</p>
            <div className="myBtn">
              <Link to={item.link}>
                {getText("more")} <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
