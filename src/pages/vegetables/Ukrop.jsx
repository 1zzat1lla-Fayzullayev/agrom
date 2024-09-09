import { getText } from "../../locales"

const Ukrop = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers driedukrop__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr2l12")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/driedukrop.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("driedukropTitle1")}</h3>
          <p className="popular__desc">{getText("driedukropDesc1")}</p>
          <p className="popular__desc">{getText("driedukropDesc2")}</p>
          <p className="popular__desc">{getText("driedukropDesc3")}</p>
          <p className="popular__desc">{getText("driedukropDesc4")}</p>
          <p className="popular__desc">{getText("driedukropDesc5")}</p>
          <p className="popular__desc bold">{getText("driedukropDesc6")}</p>
          <p className="popular__desc">{getText("driedukropDesc7")}</p>
          <p className="popular__desc">{getText("driedukropDesc8")}</p>
          <p className="popular__desc">{getText("driedukropDesc9")}</p>
          <p className="popular__desc">{getText("driedukropDesc10")}</p>
          <p className="popular__desc">{getText("driedukropDesc11")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Ukrop
