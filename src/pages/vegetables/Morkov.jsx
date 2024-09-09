import { getText } from "../../locales"

const Morkov = () => {
  return (
    <div className="popular__productBlog">
      <div className="headers driedmorkov__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("morkov")}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img">
          <img loading="lazy" className="w-100" src="img/driedmorkov.webp" alt="" />

          <div className="popular__texts">
            <h3 className="popular__title">{getText("driedmorkovTitle1")}</h3>
            <p className="popular__desc">{getText("driedmorkovDesc1")}</p>
            <p className="popular__desc">{getText("driedmorkovDesc2")}</p>
            <p className="popular__desc">{getText("driedmorkovDesc3")}</p>
            <p className="popular__desc bold">{getText("driedmorkovDesc4")}</p>
            <p className="popular__desc">{getText("driedmorkovDesc5")}</p>
            <p className="popular__desc">{getText("driedmorkovDesc6")}</p>
            <p className="popular__desc">{getText("driedmorkovDesc7")}</p>
            <p className="popular__desc">{getText("driedmorkovDesc8")}</p>
            <p className="popular__desc">{getText("driedmorkovDesc9")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Morkov
