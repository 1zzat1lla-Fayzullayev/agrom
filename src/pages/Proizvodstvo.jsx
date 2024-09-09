import ProizvodstvoBody from "../components/ProizvodstvoBody";
import { getText } from "../locales";

const Proizvodstvo = () => {
  return (
    <div className="proizvodstvo">
      <div className="headers proizvodstvo__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("production")}</h2>
          </div>
          <div className="headers__desc">
            <p>{getText("proizDesc")}</p>
          </div>
        </div>
      </div>
        <ProizvodstvoBody />
    </div>
  );
};

export default Proizvodstvo;
