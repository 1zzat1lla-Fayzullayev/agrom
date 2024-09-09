import { getText } from "../locales"

const FeedandProcess = () => {
  return (
    <div className="feedprocess">
      <div className="row justify-content-center">
        <div className="col-md-9">
            <img loading="lazy" className="w-100" src="img/feedprocess.webp" alt="" />
        </div>
        <div className="col-md-12 mt-3">
            <p>{getText("feedprocess1")}</p>
            <p>{getText("feedprocess2")}</p>
            <p>{getText("feedprocess3")}</p>
            <p>{getText("feedprocess4")}</p>
        </div>
      </div>
    </div>
  )
}

export default FeedandProcess
