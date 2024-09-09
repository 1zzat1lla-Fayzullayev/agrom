import { getText } from "../../locales"


const SlivovoePure = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers slivapure__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr1l8")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/slivapure.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("slivapureTitle1")}</h3>
          <p className="popular__desc">{getText("slivapureDesc11")}</p>
          <p className="popular__desc">{getText("slivapureDesc12")}</p>

          <h3 className="popular__title">{getText("slivapureTitle2")}</h3>
          <p className="popular__desc">{getText("slivapureDesc21")}</p>
          <p className="popular__desc">{getText("slivapureDesc22")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SlivovoePure
