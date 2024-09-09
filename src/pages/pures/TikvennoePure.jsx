import { getText } from "../../locales"


const TikvennoePure = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers tikvapure__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr1l2")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/tikvapure.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("tikvapureTitle1")}</h3>
          <p className="popular__desc">{getText("tikvapureDesc11")}</p>
          <p className="popular__desc">{getText("tikvapureDesc12")}</p>
          <p className="popular__desc">{getText("tikvapureDesc13")}</p>

          <h3 className="popular__title">{getText("tikvapureTitle2")}</h3>
          <p className="popular__desc">{getText("tikvapureDesc21")}</p>
          <p className="popular__desc">{getText("tikvapureDesc22")}</p>
          <p className="popular__desc">{getText("tikvapureDesc23")}</p>
          <p className="popular__desc">{getText("tikvapureDesc24")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default TikvennoePure
