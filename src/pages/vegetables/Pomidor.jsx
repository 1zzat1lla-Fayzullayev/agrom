import { getText } from "../../locales"

const Pomidor = () => {
  return (
    <div className="popular__productBlog">
      <div className="headers driedpomidor__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("dr2l7")}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img">
          <img loading="lazy" className="w-100" src="img/driedpomidor.webp" alt="" />

          <div className="popular__texts">
            <h3 className="popular__title">{getText("driedpomidorTitle1")}</h3>
            <p className="popular__desc">{getText("driedpomidorDesc1")}</p>
            <p className="popular__desc">{getText("driedpomidorDesc2")}</p>
            <p className="popular__desc bold">{getText("driedpomidorDesc3")}</p>
            <p className="popular__desc">{getText("driedpomidorDesc3P")}</p>
            <p className="popular__desc bold">{getText("driedpomidorDesc4")}</p>
            <p className="popular__desc">{getText("driedpomidorDesc5")}</p>
            <p className="popular__desc">{getText("driedpomidorDesc6")}</p>
            <p className="popular__desc">{getText("driedpomidorDesc7")}</p>
            <p className="popular__desc">{getText("driedpomidorDesc8")}</p>
            <p className="popular__desc">{getText("driedpomidorDesc9")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pomidor
