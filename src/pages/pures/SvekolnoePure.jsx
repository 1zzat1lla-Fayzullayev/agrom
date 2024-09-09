import { getText } from "../../locales"


const SvekolnoePure = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers sveklapure__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr1l3")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/sveklapure.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("sveklapureTitle1")}</h3>
          <p className="popular__desc">{getText("sveklapureDesc11")}</p>
          <p className="popular__desc">{getText("sveklapureDesc12")}</p>

          <h3 className="popular__title">{getText("sveklapureTitle2")}</h3>
          <p className="popular__desc">{getText("sveklapureDesc21")}</p>
          <p className="popular__desc">{getText("sveklapureDesc22")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SvekolnoePure
