import { getText } from "../../locales"

const Svekla = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers driedsvekla__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("svekla")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/driedsvekla.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("driedsveklaTitle1")}</h3>
          <p className="popular__desc">{getText("driedsveklaDesc1")}</p>
          <p className="popular__desc">{getText("driedsveklaDesc2")}</p>
          <p className="popular__desc">{getText("driedsveklaDesc3")}</p>
          <p className="popular__desc bold">{getText("driedsveklaDesc4")}</p>
          <p className="popular__desc">{getText("driedsveklaDesc5")}</p>
          <p className="popular__desc">{getText("driedsveklaDesc6")}</p>
          <p className="popular__desc">{getText("driedsveklaDesc7")}</p>
          <p className="popular__desc">{getText("driedsveklaDesc8")}</p>
          <p className="popular__desc">{getText("driedsveklaDesc9")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Svekla
