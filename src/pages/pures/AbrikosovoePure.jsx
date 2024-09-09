import { getText } from "../../locales"


const AbrikosovoePure = () => {
  return (
    <div className="popular__productBlog">
    <div className="headers abrikospure__header">
      <div className="shadow"></div>
      <div className="container">
        <div className="headers__title">
          <h2>{getText("dr1l6")}</h2>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="img">
        <img loading="lazy" className="w-100" src="img/abrikospure.webp" alt="" />

        <div className="popular__texts">
          <h3 className="popular__title">{getText("abrikospureTitle1")}</h3>
          <p className="popular__desc">{getText("abrikospureDesc11")}</p>
          <p className="popular__desc">{getText("abrikospureDesc12")}</p>
          <p className="popular__desc">{getText("abrikospureDesc13")}</p>

          <h3 className="popular__title">{getText("abrikospureTitle2")}</h3>
          <p className="popular__desc">{getText("abrikospureDesc21")}</p>
          <p className="popular__desc">{getText("abrikospureDesc22")}</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AbrikosovoePure
