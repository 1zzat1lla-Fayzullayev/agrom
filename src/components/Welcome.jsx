import { getText } from "../locales"


const Welcome = () => {
  return (
    <div className="welcome">
      <div className="row align-items-center justify-content-center">
        <div className="col-md-4 col-10 mb-md-3">
            <div className="img">
                <img className="w-100" src="img/pulatov.webp" alt="" />
            </div>
        </div>
        <div className="col-md-8 mb-md-3">
            <div className="info">
                <p className="d-none d-md-block">{getText("welcomeDesc1")}</p>
                <p className="d-none d-md-block">{getText("welcomeDesc2")}</p>
                <p className="d-none d-md-block">{getText("welcomeDesc3")}</p>
                <p className="d-none d-md-block">{getText("welcomeDesc4")}</p>
                <p className="d-block d-md-none">{getText("welcomeDesc")}</p>
                <h6>{getText("welcomeSubDesc")}</h6>
                
            </div>
        </div>
        <img className="w-100 mt-5 d-none d-md-block" src="img/seperate.webp" alt="" />
        <img className="w-100 mt-3 d-block d-md-none" src="img/seperate1.webp" alt="" />
      </div>
    </div>
  )
}

export default Welcome
