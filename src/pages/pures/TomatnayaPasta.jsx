import { getText } from "../../locales"

    
    const TomatnayaPasta = () => {
      return (
        <div className="popular__productBlog">
        <div className="headers tomat__header">
          <div className="shadow"></div>
          <div className="container">
            <div className="headers__title">
              <h2>{getText("dr1l1")}</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="img">
            <img loading="lazy" className="w-100" src="img/tomat.webp" alt="" />
  
            <div className="popular__texts">
              <h3 className="popular__title">{getText("tomatTitle1")}</h3>
              <p className="popular__desc">{getText("tomatDesc11")}</p>
              <p className="popular__desc">{getText("tomatDesc12")}</p>
              <p className="popular__desc">{getText("tomatDesc13")}</p>
              <p className="popular__desc">{getText("tomatDesc14")}</p>
              <ul>
                <li>{getText("tomatDesc1_li1")}</li>
                <li>{getText("tomatDesc1_li2")}</li>
                <li>{getText("tomatDesc1_li3")}</li>
                <li>{getText("tomatDesc1_li4")}</li>
              </ul>
  
              <h3 className="popular__title">{getText("tomatTitle2")}</h3>
              <p className="popular__desc">{getText("tomatDesc2")}</p>
            </div>
          </div>
        </div>
      </div>
      )
    }
    
    export default TomatnayaPasta
    