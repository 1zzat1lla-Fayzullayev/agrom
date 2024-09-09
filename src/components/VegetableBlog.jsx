// import pures

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { vegetables } from "../data/vegetables";
import { Link } from "react-router-dom";

export const vegetableBlog = vegetables.map((item) => {
  return (
    <>
      <div className="col-md-3 col-6">
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
