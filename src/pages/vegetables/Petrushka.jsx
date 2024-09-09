import { getText } from "../../locales"

const Petrushka = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers driedpetrushka__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr2l11")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/driedpetrushka.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("driedpetrushkaTitle1")}</h3>
          <p className="popular__desc">{getText("driedpetrushkaDesc1")}</p>
          <p className="popular__desc">{getText("driedpetrushkaDesc2")}</p>
          <p className="popular__desc">{getText("driedpetrushkaDesc3")}</p>
          <p className="popular__desc">{getText("driedpetrushkaDesc4")}</p>
          <p className="popular__desc">{getText("driedpetrushkaDesc5")}</p>
          <ul>
            <li>{getText("driedpetrushkaDesc_li1")}</li>
            <li>{getText("driedpetrushkaDesc_li2")}</li>
            <li>{getText("driedpetrushkaDesc_li3")}</li>
            <li>{getText("driedpetrushkaDesc_li4")}</li>
          </ul>
          <p className="popular__desc bold">{getText("driedpetrushkaDesc6")}</p>
          <p className="popular__desc">{getText("driedpetrushkaDesc7")}</p>
          <p className="popular__desc">{getText("driedpetrushkaDesc8")}</p>
          <p className="popular__desc">{getText("driedpetrushkaDesc9")}</p>
          <p className="popular__desc">{getText("driedpetrushkaDesc10")}</p>
          <p className="popular__desc">{getText("driedpetrushkaDesc11")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Petrushka
