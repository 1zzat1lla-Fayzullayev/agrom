/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getText } from "../locales";
import { Link } from "react-router-dom";

const Header = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState(null);

  const socialIcons = [
    { icon: faFacebook, text: "Facebook" },
    { icon: faTelegram, text: "Telegram" },
    { icon: faInstagram, text: "Instagram" },
    { icon: faYoutube, text: "YouTube" },
  ];

  const handleClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div className="header">
      <div className="shadow"></div>

      <nav className="social">
        <ul className="ul_icon">
          <li
            className={`li_icon ${activeItem === 0 ? "active" : ""}`}
            onClick={() => handleClick(0)}
          >
            <p>
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <a href="tel:+998900070647">+998 90 0070647</a>
            </p>
          </li>
          <li
            className={`li_icon ${activeItem === 1 ? "active" : ""}`}
            onClick={() => handleClick(1)}
          >
            <p>
              <i>
                <FontAwesomeIcon icon={faTelegram} />
              </i>
              <a href="https://t.me/AgromFP" target="_blank" rel="noreferrer">
                AgromFP
              </a>
            </p>
          </li>

          <li
            className={`li_icon ${activeItem === 2 ? "active" : ""}`}
            onClick={() => handleClick(2)}
          >
            <p>
              <i>
                <FontAwesomeIcon icon={faWhatsapp} />
              </i>
              <a
                href="https://wa.me/+998900070647"
                target="_blank"
                rel="noreferrer"
              >
                +998900070647
              </a>
            </p>
          </li>
          <li
            className={`li_icon ${activeItem === 3 ? "active" : ""}`}
            onClick={() => handleClick(3)}
          >
            <p>
              <i>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <a href="mailto:abdullaev@agrom.uz">abdullaev@agrom.uz</a>
            </p>
          </li>
        </ul>
      </nav>
      <div className="content-container">
        <div className="container z-1 h-lg-100">
          <div className="row justify-content-center h-lg-100 align-items-lg-center">
            <div className="col-lg-4">
              <div className="title">
                <h1>Agro Processing Group & Agro Feed</h1>
              </div>
              <div className="myBtn d-block d-md-none text-center">
                <Link to="/produkciya">
                  {getText("more")} <FontAwesomeIcon icon={faChevronRight} />
                </Link>
              </div>
            </div>
            <div className="col-1 d-lg-block d-none"></div>
            <div className="col-lg-5 d-md-block d-none">
              <div className="info">
                <p>{getText("headerDesc")}</p>
                <div className="myBtn">
                  <Link to="/produkciya">
                    {getText("more")} <FontAwesomeIcon icon={faChevronRight} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
