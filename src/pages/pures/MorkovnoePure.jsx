import { getText } from "../../locales"


const MorkovnoePure = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers morkovpure__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr1l4")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/morkovpure.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("morkovpureTitle1")}</h3>
          <p className="popular__desc">{getText("morkovpureDesc11")}</p>
          <p className="popular__desc">{getText("morkovpureDesc12")}</p>

          <h3 className="popular__title">{getText("morkovpureTitle2")}</h3>
          <p className="popular__desc">{getText("morkovpureDesc21")}</p>
          <p className="popular__desc">{getText("morkovpureDesc22")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MorkovnoePure
