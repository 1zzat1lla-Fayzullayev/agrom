/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import { Link } from "react-router-dom";
import { flagImages, getLanguage, getText } from "../locales/index";
import { LANGUAGE } from "../tools/constants";
import {
  faChevronDown,
  faChevronRight,
  // eslint-disable-next-line no-unused-vars
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
//   Accordion,
//   // AccordionBody,
//   // AccordionHeader,
//   // AccordionItem,
// } from "reactstrap";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [burger, setBurger] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  const changeLanguage = (e) => {
    localStorage.setItem(LANGUAGE, e.target.value);
    document.location.reload(true);
  };

  // const [open, setOpen] = useState("");
  // const toggle = (id) => {
  //   if (open === id) {
  //     setOpen();
  //   } else {
  //     setOpen(id);
  //   }
  // };

  return (
    <div className={`navBar ${navbar ? "active" : ""}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2 col-md-4 col-5">
            <div className="logo">
              <a href="/">
                <img className="w-100" src="img/logo.webp" alt="" />
              </a>
            </div>
          </div>
          <div className={`col-10 mobileWrap ${burger ? "" : "burgered"}`}>
            <ul className="nav-menu">
              <li>
                <Link
                  className="nav-link"
                  onClick={() => setBurger(!burger)}
                  to="/"
                >
                  {getText("home")}
                </Link>
              </li>
              <li className="dropdown_link d-none d-lg-block">
                <Link
                  className="nav-link"
                  onClick={() => setBurger(!burger)}
                  to="/proizvodstvo"
                >
                  {getText("production")}
                  <FontAwesomeIcon icon={faChevronDown} />
                  <ul className="dropdown-box">
                    <li className="dropdown_link1 drop_li">
                      <Link
                        className="drop_links"
                        onClick={() => setBurger(!burger)}
                        to="/produkciya"
                      >
                        {getText("ourProduction")}
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Link>
                      <ul className="dropdown-box1">
                        <li className="dropdown_link2 drop_li">
                          <Link
                            className="drop_links"
                            onClick={() => setBurger(!burger)}
                            to="/produkciya/koncentraty-pyure"
                          >
                            {getText("dr1")}
                            <FontAwesomeIcon icon={faChevronRight} />
                          </Link>
                          <ul className="dropdown-box3">
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/koncentraty-pyure/tomatnaya"
                              >
                                {getText("dr1l1")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/koncentraty-pyure/tikvennoe"
                              >
                                {getText("dr1l2")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/koncentraty-pyure/svekolnoe"
                              >
                                {getText("dr1l3")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/koncentraty-pyure/morkovnoe"
                              >
                                {getText("dr1l4")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/koncentraty-pyure/yablochnoe"
                              >
                                {getText("dr1l5")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/koncentraty-pyure/abrikosovoe"
                              >
                                {getText("dr1l6")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/koncentraty-pyure/persikovoe"
                              >
                                {getText("dr1l7")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/koncentraty-pyure/slivovoe"
                              >
                                {getText("dr1l8")}
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown_link2 drop_li">
                          <Link
                            className="drop_links"
                            onClick={() => setBurger(!burger)}
                            to="/produkciya/dried-vegetables"
                          >
                            {getText("dr2")}
                            <FontAwesomeIcon icon={faChevronRight} />
                          </Link>
                          <ul className="dropdown-box3 drp2">
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/tikva"
                              >
                                {getText("tikva")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/morkov"
                              >
                                {getText("morkov")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/svekla"
                              >
                                {getText("svekla")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/bolgarskiy"
                              >
                                {getText("dr2l4")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/perec"
                              >
                                {getText("dr2l5")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/kapusta"
                              >
                                {getText("dr2l6")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/pomidor"
                              >
                                {getText("dr2l7")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/luk"
                              >
                                {getText("dr2l8")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/lukzeleniy"
                              >
                                {getText("dr2l9")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/baklajan"
                              >
                                {getText("dr2l10")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/petrushka"
                              >
                                {getText("dr2l11")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-vegetables/ukrop"
                              >
                                {getText("dr2l12")}
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown_link2 drop_li">
                          <Link
                            className="drop_links"
                            onClick={() => setBurger(!burger)}
                            to="/produkciya/dried-fruits"
                          >
                            {getText("dr3")}
                            <FontAwesomeIcon icon={faChevronRight} />
                          </Link>
                          <ul className="dropdown-box3 drp3">
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-fruits/yabloko"
                              >
                                {getText("dr3l1")}
                              </Link>
                            </li>
                            <li className="dropdown_linkk2 drop_li">
                              <Link
                                className="drop_links"
                                onClick={() => setBurger(!burger)}
                                to="/produkciya/dried-fruits/hurma"
                              >
                                {getText("dr3l2")}
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Link>
              </li>
              <li className="d-lg-none d-flex">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <Link
                        onClick={() => setBurger(!burger)}
                        className="nav-link"
                        to="/proizvodstvo"
                      >
                        {getText("production")}
                      </Link>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </Accordion.Header>
                    <Accordion.Body>
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <Link
                              onClick={() => setBurger(!burger)}
                              className="nav-link colored"
                              to="/produkciya"
                            >
                              {getText("ourProduction")}
                            </Link>
                            <FontAwesomeIcon icon={faChevronDown} />
                          </Accordion.Header>
                          <Accordion.Body>
                            <Accordion defaultActiveKey="1">
                              <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                  <Link
                                    className="nav-link colored"
                                    onClick={() => setBurger(!burger)}
                                    to="/produkciya/koncentraty-pyure"
                                  >
                                    {getText("dr1")}
                                  </Link>
                                  <FontAwesomeIcon icon={faChevronDown} />
                                </Accordion.Header>
                                <Accordion.Body>
                                  <ul>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/koncentraty-pyure/tomatnaya"
                                      >
                                        {getText("dr1l1")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/koncentraty-pyure/tikvennoe"
                                      >
                                        {getText("dr1l2")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/koncentraty-pyure/svekolnoe"
                                      >
                                        {getText("dr1l3")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/koncentraty-pyure/morkovnoe"
                                      >
                                        {getText("dr1l4")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/koncentraty-pyure/yablochnoe"
                                      >
                                        {getText("dr1l5")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/koncentraty-pyure/abrikosovoe"
                                      >
                                        {getText("dr1l6")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/koncentraty-pyure/persikovoe"
                                      >
                                        {getText("dr1l7")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/koncentraty-pyure/slivovoe"
                                      >
                                        {getText("dr1l8")}
                                      </Link>
                                    </li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="3">
                                <Accordion.Header>
                                  <Link
                                    className="nav-link colored"
                                    onClick={() => setBurger(!burger)}
                                    to="/produkciya/dried-vegetables"
                                  >
                                    {getText("dr2")}
                                  </Link>
                                  <FontAwesomeIcon icon={faChevronDown} />
                                </Accordion.Header>
                                <Accordion.Body>
                                  <ul>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/tikva"
                                      >
                                        {getText("tikva")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/morkov"
                                      >
                                        {getText("morkov")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/svekla"
                                      >
                                        {getText("svekla")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/bolgarskiy"
                                      >
                                        {getText("dr2l4")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/perec"
                                      >
                                        {getText("dr2l5")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/kapusta"
                                      >
                                        {getText("dr2l6")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/pomidor"
                                      >
                                        {getText("dr2l7")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/luk"
                                      >
                                        {getText("dr2l8")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/lukzeleniy"
                                      >
                                        {getText("dr2l9")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/baklajan"
                                      >
                                        {getText("dr2l10")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/petrushka"
                                      >
                                        {getText("dr2l11")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-vegetables/ukrop"
                                      >
                                        {getText("dr2l12")}
                                      </Link>
                                    </li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                              <Accordion.Item eventKey="4">
                                <Accordion.Header>
                                  <Link
                                    className="nav-link colored"
                                    onClick={() => setBurger(!burger)}
                                    to="/produkciya/dried-fruits"
                                  >
                                    {getText("dr3")}
                                  </Link>
                                  <FontAwesomeIcon icon={faChevronDown} />
                                </Accordion.Header>
                                <Accordion.Body>
                                  <ul>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-fruits/yabloko"
                                      >
                                        {getText("dr3l1")}
                                      </Link>
                                    </li>
                                    <li className="dropdown_linkk2 drop_li">
                                      <Link
                                        className="nav-link"
                                        onClick={() => setBurger(!burger)}
                                        to="/produkciya/dried-fruits/hurma"
                                      >
                                        {getText("dr3l2")}
                                      </Link>
                                    </li>
                                  </ul>
                                </Accordion.Body>
                              </Accordion.Item>
                            </Accordion>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <Link
                  className="nav-link"
                  onClick={() => setBurger(!burger)}
                  to="/gallery"
                >
                  {getText("gallery")}
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  onClick={() => setBurger(!burger)}
                  to="/testimonials"
                >
                  {getText("partners")}
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  onClick={() => setBurger(!burger)}
                  to="/invest"
                >
                  {getText("invest")}
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  onClick={() => setBurger(!burger)}
                  to="/contacts"
                >
                  {getText("contacts")}
                </Link>
              </li>

              <li className="d-flex align-items-center">
                <span className="langIcon">
                  {/* <FontAwesomeIcon icon={faGlobe} /> */}
                  <img
                    src={flagImages[getLanguage()]}
                    alt="flag"
                    className="langFlag"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                    }}
                  />
                </span>
                <select className="siteLang" onChange={changeLanguage}>
                  <option value="ru" selected={getLanguage() === "ru"}>
                    Русский
                  </option>
                  <option value="en" selected={getLanguage() === "en"}>
                    English
                  </option>
                  <option value="gr" selected={getLanguage() === "gr"}>
                    German
                  </option>
                </select>
              </li>
            </ul>
          </div>

          <div
            onClick={() => setBurger(!burger)}
            className={`burger pr-4 ml-auto d-flex d-lg-none ${
              burger ? "burgered" : ""
            }`}
          >
            <div className="burger1"></div>
            <div className="burger2"></div>
            <div className="burger3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
