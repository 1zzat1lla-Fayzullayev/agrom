import { faBan, faCarrot, faLeaf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { getText } from "../locales"


const MainIcons = () => {
  return (
    <div className="icon_blog">
      <div className="row justify-content-center">
        <div className="col-md-3 mt-4 mt-md-0">
            <div className="card">
               <i><FontAwesomeIcon icon={faBan}/></i>
               <h6>{getText("icon1")}</h6>
            </div>
        </div>
        <div className="col-md-3 mt-4 mt-md-0">
            <div className="card">
               <i><FontAwesomeIcon icon={faCarrot}/></i>
               <h6>{getText("icon2")}</h6>
            </div>
        </div>
        <div className="col-md-3 mt-4 mt-md-0">
            <div className="card">
               <i><FontAwesomeIcon icon={faLeaf}/></i>
               <h6>{getText("icon3")}</h6>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainIcons
