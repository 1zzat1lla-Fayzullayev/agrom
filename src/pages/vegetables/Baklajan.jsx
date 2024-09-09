import { getText } from "../../locales"

const Baklajan = () => {
  return (
    <div className="popular__productBlog">
      <div className="headers driedbaklajan__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("dr2l10")}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img">
          <img loading="lazy" className="w-100" src="img/driedbaklajan.webp" alt="" />

          <div className="popular__texts">
            <h3 className="popular__title">{getText("driedbaklajanTitle1")}</h3>
            <p className="popular__desc">{getText("driedbaklajanDesc1")}</p>
            <p className="popular__desc">{getText("driedbaklajanDesc2")}</p>
            <p className="popular__desc">{getText("driedbaklajanDesc3")}</p>
            <p className="popular__desc">{getText("driedbaklajanDesc4")}</p>
            <p className="popular__desc bold">{getText("driedbaklajanDesc5")}</p>
            <p className="popular__desc">{getText("driedbaklajanDesc6")}</p>
            <p className="popular__desc">{getText("driedbaklajanDesc7")}</p>
            <p className="popular__desc">{getText("driedbaklajanDesc8")}</p>
            <p className="popular__desc">{getText("driedbaklajanDesc9")}</p>
            <p className="popular__desc">{getText("driedbaklajanDesc10")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Baklajan
