import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getText } from "../locales"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

const AboutAgroprocess = () => {
  return (
    <div className="abouts agroprocess">
      <div className="row align-items-center">
        <div className="col-lg-6">
            <div className="info">
                <img className="w-100 mb-5" src="img/agroprocessing.webp" alt="" />
                <p>{getText("aboutDesc")}</p>
                <ul>
                    <li>{getText("aboutLi1")}</li>
                    <li>{getText("aboutLi2")}</li>
                    <li>{getText("aboutLi3")}</li>
                </ul>
                <div className="myBtn">
              <a href="/">{getText("more")} <FontAwesomeIcon icon={faChevronRight}/></a>
            </div>
            </div>
        </div>
        <div className="col-lg-6 mt-5 mt-lg-5">
            <div className="img">
                <img className="w-100" src="/img/aboutpic.webp" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAgroprocess
