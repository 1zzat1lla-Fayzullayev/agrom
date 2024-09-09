import { getText } from "../../locales"

const LukZeleniy = () => {
  return (
    <div className="popular__productBlog">
      <div className="headers driedlukzeleniy__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("dr2l9")}</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="img">
          <img loading="lazy" className="w-100" src="img/driedlukzeleniy.webp" alt="" />

          <div className="popular__texts">
            <h3 className="popular__title">{getText("driedlukzeleniyTitle1")}</h3>
            <p className="popular__desc">{getText("driedlukzeleniyDesc1")}</p>
            <p className="popular__desc">{getText("driedlukzeleniyDesc2")}</p>
            <p className="popular__desc">{getText("driedlukzeleniyDesc3")}</p>
            <p className="popular__desc bold">{getText("driedlukzeleniyDesc4")}</p>
            <p className="popular__desc">{getText("driedlukzeleniyDesc5")}</p>
            <p className="popular__desc">{getText("driedlukzeleniyDesc6")}</p>
            <p className="popular__desc">{getText("driedlukzeleniyDesc7")}</p>
            <p className="popular__desc">{getText("driedlukzeleniyDesc8")}</p>
            <p className="popular__desc">{getText("driedlukzeleniyDesc9")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LukZeleniy
