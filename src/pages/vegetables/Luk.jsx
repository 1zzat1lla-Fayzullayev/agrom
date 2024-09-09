import { getText } from "../../locales"

const Luk = () => {
  return (
    <div className="popular__productBlog">
      <div className="headers driedluk__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("dr2l8")}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img">
          <img loading="lazy" className="w-100" src="img/driedluk.webp" alt="" />

          <div className="popular__texts">
            <h3 className="popular__title">{getText("driedlukTitle1")}</h3>
            <p className="popular__desc">{getText("driedlukDesc1")}</p>
            <p className="popular__desc">{getText("driedlukDesc2")}</p>
            <p className="popular__desc">{getText("driedlukDesc3")}</p>
            <p className="popular__desc bold">{getText("driedlukDesc4")}</p>
            <p className="popular__desc">{getText("driedlukDesc4P")}</p>
            <p className="popular__desc bold">{getText("driedlukDesc5")}</p>
            <p className="popular__desc">{getText("driedlukDesc6")}</p>
            <p className="popular__desc">{getText("driedlukDesc7")}</p>
            <p className="popular__desc">{getText("driedlukDesc8")}</p>
            <p className="popular__desc">{getText("driedlukDesc9")}</p>
            <p className="popular__desc">{getText("driedlukDesc10")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Luk
