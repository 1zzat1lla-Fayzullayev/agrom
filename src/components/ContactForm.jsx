import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import InputMask from "react-input-mask";
import { getText } from "../locales";
import "aos/dist/aos.css"; 

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 (__) ___-__-__");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const TOKEN = "6595677829:AAGkeV8LwYLNGNjsu8xus7o6gkFkOhvp1sQ";
  const USERID = "-1002173244569";

  const encodeText = (text) => encodeURIComponent(text);

  const sendFeedback = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const text = `Name: ${name}\nMessage: ${description}\nPhone number: ${phone}\nEmail: ${
      email.length === 0 ? "Email is empty" : email
    }\n Services: ${service}`;

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
      setPhone("+998 (__) ___-__-__");
      setEmail("");
      setDescription("");
      setService("");
    }
  };

  const handlePhoneChange = (e) => {
    const cleaned = e.target.value.replace(/[^+\d]/g, "");
    setPhone(cleaned);
  };

  return (
    <div className="contactForm mt-5">
      <div className="container">
        <div className="form-wrapper">
          <form onSubmit={sendFeedback} data-aos="fade-up">
            <h3 data-aos="zoom-in">{getText("contactFormHeading")}</h3>

            <div className="row" data-aos="fade-right">
              <div className="twoInput">
                <div className="inputWrap">
                  <InputMask
                    placeholder={getText("contactFormInputName")}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    name="name"
                    required
                    data-aos="fade-left"
                  />
                </div>

                <div className="inputWrap">
                  <InputMask
                    placeholder={getText("contactFormPhoneNumber")}
                    value={phone}
                    onChange={handlePhoneChange}
                    mask="+999 (99) 999-99-99"
                    className="form-control"
                    name="phone"
                    required
                    data-aos="fade-left"
                  />
                </div>
              </div>

              <div className="inputWrap" data-aos="fade-up">
                <InputMask
                  placeholder={getText("contactFormInputEmail")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  name="email"
                  required
                />
              </div>
            </div>

            <div className="inputWrap" data-aos="fade-up">
              <textarea
                placeholder={getText("contactFormMessage")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="form-control"
                name="message"
                required
              />
            </div>

            <button
              type="submit"
              className="btn"
              disabled={isLoading}
              data-aos="zoom-in"
            >
              {isLoading ? (
                <span className="spinner-border-sm spinner-border ms-2"></span>
              ) : (
                <span>{getText("contactFormButton")}</span>
              )}
            </button>

            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
