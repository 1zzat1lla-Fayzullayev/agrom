import { getText } from "../../locales"

const Bolgarskiy = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers driedbolgarskiy__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr2l4")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/driedbolgarskiy.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("driedbolgarskiyTitle1")}</h3>
          <p className="popular__desc">{getText("driedbolgarskiyDesc1")}</p>
          <p className="popular__desc">{getText("driedbolgarskiyDesc2")}</p>
          <p className="popular__desc">{getText("driedbolgarskiyDesc3")}</p>
          <p className="popular__desc">{getText("driedbolgarskiyDesc4")}</p>
          <p className="popular__desc bold">{getText("driedbolgarskiyDesc5")}</p>
          <p className="popular__desc">{getText("driedbolgarskiyDesc6")}</p>
          <p className="popular__desc">{getText("driedbolgarskiyDesc7")}</p>
          <p className="popular__desc">{getText("driedbolgarskiyDesc8")}</p>
          <p className="popular__desc">{getText("driedbolgarskiyDesc9")}</p>
          <p className="popular__desc">{getText("driedbolgarskiyDesc10")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Bolgarskiy
