import { getText } from "../../locales"


const YablochnoePure = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers yablokopure__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr1l5")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/yablokopure.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("yablokopureTitle1")}</h3>
          <p className="popular__desc">{getText("yablokopureDesc11")}</p>
          <p className="popular__desc">{getText("yablokopureDesc12")}</p>

          <h3 className="popular__title">{getText("yablokopureTitle2")}</h3>
          <p className="popular__desc">{getText("yablokopureDesc21")}</p>
          <p className="popular__desc">{getText("yablokopureDesc22")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default YablochnoePure
