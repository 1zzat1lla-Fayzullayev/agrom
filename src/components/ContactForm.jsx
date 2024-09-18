import { useState } from "react";
import axios from "axios";
import InputMask from "react-input-mask";
import { getText } from "../locales";
import "aos/dist/aos.css";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phonePlaceholder, setPhonePlaceholder] = useState(
    "+998 (__) ___-__-__"
  );
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const TOKEN = "7322958889:AAHnCtMFtt1phqN3p1eIspJazUD066PcOdU";
  const USERID = "-1002384987886";

  const encodeText = (text) => encodeURIComponent(text);

  const sendFeedback = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const text = `Name: ${name}\nMessage: ${description}\nPhone number: ${phone ? phone : "Phone number is empty"
      }\nEmail: ${email.length === 0 ? "Email is empty" : email}\n`;

    try {
      await axios.post(
        `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${USERID}&text=${encodeText(
          text
        )}`
      );
      toast.success("Message sent successfully!");
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setName("");
      setPhone("");
      setPhonePlaceholder("+998 (__) ___-__-__");
      setEmail("");
      setDescription("");
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePhoneFocus = () => {
    if (!phone) {
      setPhonePlaceholder("");
    }
  };

  const handlePhoneBlur = () => {
    if (!phone) {
      setPhonePlaceholder("+998 (__) ___-__-__");
    }
  };

  return (
    <div className="contactForm mt-5">
      <div className="container">
        <div className="form-wrapper">
          <form onSubmit={sendFeedback}>
            <h3>{getText("contactFormHeading")}</h3>

            <div className="row">
              <div className="twoInput">
                <div className="floating-label">
                  <InputMask
                    placeholder={getText("contactFormInputName")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    name="name"
                    required
                  />
                  <label>{getText("contactFormInputName")}</label>
                </div>

                <div className="floating-label">
                  <InputMask
                    placeholder={phonePlaceholder}
                    value={phone}
                    onChange={handlePhoneChange}
                    onFocus={handlePhoneFocus}
                    onBlur={handlePhoneBlur}
                    mask="+999 (99) 999-99-99"
                    className="form-control"
                    name="phone"
                    required
                  />
                  <label>{getText("contactFormPhoneNumber")}</label>
                </div>
              </div>

              <div className="floating-label">
                <InputMask
                  placeholder={getText("contactFormInputEmail")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  name="email"
                  required
                  style={{left: "40px"}}
                />
                <label className="email-label">{getText("contactFormInputEmail")}</label>
              </div>
            </div>

            <div className="floating-label">
              <textarea
                placeholder={getText("contactFormMessage")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                name="message"
                required
              />
              <label>{getText("contactFormMessage")}</label>
            </div>

            <button
              type="submit"
              className="btn"
              disabled={isLoading}
              style={{ color: "white" }}
            >
              {isLoading ? (
                <span className="spinner-border-sm spinner-border ms-2"></span>
              ) : (
                <span>{getText("contactFormButton")}</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
