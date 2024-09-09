import { getText } from "../../locales"


const PersikovoePure = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers persikpure__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr1l7")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/persikpure.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("persikpureTitle1")}</h3>
          <p className="popular__desc">{getText("persikpureDesc11")}</p>
          <p className="popular__desc">{getText("persikpureDesc12")}</p>

          <h3 className="popular__title">{getText("persikpureTitle2")}</h3>
          <p className="popular__desc">{getText("persikpureDesc21")}</p>
          <p className="popular__desc">{getText("persikpureDesc22")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PersikovoePure
