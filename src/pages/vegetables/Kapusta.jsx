import { getText } from "../../locales"

const Kapusta = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers driedkapusta__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr2l6")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/driedkapusta.webp" alt="" />

        <div className="popular__texts">
        <h3 className="popular__title">{getText("driedkapustaTitle1")}</h3>
          <p className="popular__desc">{getText("driedkapustaDesc1")}</p>
          <p className="popular__desc">{getText("driedkapustaDesc2")}</p>
          <p className="popular__desc">{getText("driedkapustaDesc3")}</p>
          <p className="popular__desc">{getText("driedkapustaDesc4")}</p>
          <p className="popular__desc">{getText("driedkapustaDesc5")}</p>
          <ul>
            <li>{getText("driedkapustaDesc_li1")}</li>
            <li>{getText("driedkapustaDesc_li2")}</li>
            <li>{getText("driedkapustaDesc_li3")}</li>
          </ul>
          <p className="popular__desc bold">{getText("driedkapustaDesc6")}</p>
          <p className="popular__desc">{getText("driedkapustaDesc7")}</p>
          <p className="popular__desc">{getText("driedkapustaDesc8")}</p>
          <p className="popular__desc">{getText("driedkapustaDesc9")}</p>
          <p className="popular__desc">{getText("driedkapustaDesc10")}</p>
          <p className="popular__desc">{getText("driedkapustaDesc11")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Kapusta
