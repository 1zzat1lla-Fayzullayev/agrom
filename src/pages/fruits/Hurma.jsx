import { getText } from "../../locales"


const Hurma = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers hurma__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr3l2")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/sushenaya-hurma.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("hurmaTitle1")}</h3>
          <p className="popular__desc">{getText("hurmaDesc1")}</p>
          <p className="popular__desc">{getText("hurmaDesc2")}</p>
          <p className="popular__desc">{getText("hurmaDesc3")}</p>
          <p className="popular__desc">{getText("hurmaDesc4")}</p>
          <p className="popular__desc bold">{getText("hurmaDesc5")}</p>
          <p className="popular__desc">{getText("hurmaDesc6")}</p>
          <p className="popular__desc">{getText("hurmaDesc7")}</p>
          <p className="popular__desc">{getText("hurmaDesc8")}</p>
          <p className="popular__desc">{getText("hurmaDesc9")}</p>
          <p className="popular__desc">{getText("hurmaDesc10")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hurma

