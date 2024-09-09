import Certificates from "../components/Certificates"
import Presentation from "../components/Presentation"
import Prices from "../components/Prices"
import { getText } from "../locales"


const PartnersandSertificates = () => {
  return (
    <div className="testimonials">
            <div className="headers testimonials__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("partners")}</h2>
          </div>
          {/* <div className="headers__desc">
            <p>{getText("proizDesc")}</p>
          </div> */}
        </div>
      </div>

      <Certificates/>
      <Presentation/>
      <Prices/>
    </div>
  )
}

export default PartnersandSertificates
