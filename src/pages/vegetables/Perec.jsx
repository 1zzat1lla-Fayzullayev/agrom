import { getText } from "../../locales"

const Perec = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers driedperec__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr2l5")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/driedperec.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("driedperecTitle1")}</h3>
          <p className="popular__desc">{getText("driedperecDesc1")}</p>
          <p className="popular__desc">{getText("driedperecDesc2")}</p>
          <p className="popular__desc">{getText("driedperecDesc3")}</p>
          <p className="popular__desc">{getText("driedperecDesc4")}</p>
          <p className="popular__desc">{getText("driedperecDesc5")}</p>
          <ul>
            <li>{getText("driedperecDesc_li1")}</li>
            <li>{getText("driedperecDesc_li2")}</li>
            <li>{getText("driedperecDesc_li3")}</li>
          </ul>
          <p className="popular__desc">{getText("driedperecDesc6")}</p>
          <p className="popular__desc bold">{getText("driedperecDesc7")}</p>
          <p className="popular__desc">{getText("driedperecDesc8")}</p>
          <p className="popular__desc">{getText("driedperecDesc9")}</p>
          <p className="popular__desc">{getText("driedperecDesc10")}</p>
          <p className="popular__desc">{getText("driedperecDesc11")}</p>
          <p className="popular__desc">{getText("driedperecDesc12")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Perec
