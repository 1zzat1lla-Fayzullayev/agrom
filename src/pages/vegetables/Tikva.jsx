import { getText } from "../../locales"

const Tikva = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers driedtikva__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("tikva")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/driedtikva.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("driedtikvaTitle1")}</h3>
          <p className="popular__desc">{getText("driedtikvaDesc1")}</p>
          <p className="popular__desc">{getText("driedtikvaDesc2")}</p>
          <p className="popular__desc">{getText("driedtikvaDesc3")}</p>
          <p className="popular__desc">{getText("driedtikvaDesc4")}</p>
          <p className="popular__desc bold">{getText("driedtikvaDesc5")}</p>
          <p className="popular__desc">{getText("driedtikvaDesc6")}</p>
          <p className="popular__desc">{getText("driedtikvaDesc7")}</p>
          <p className="popular__desc">{getText("driedtikvaDesc8")}</p>
          <p className="popular__desc">{getText("driedtikvaDesc9")}</p>
          <p className="popular__desc">{getText("driedtikvaDesc10")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Tikva
