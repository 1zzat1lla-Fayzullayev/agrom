import Personals from "../components/Personals";
import { getText } from "../locales";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="headers contacts__header">
        <div className="shadow"></div>
        <div className="container">
          <div className="headers__title">
            <h2>{getText("contacts")}</h2>
          </div>
        </div>
      </div>
      <Personals/>
    </div>
  );
};

export default Contacts;
