import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [changeClass, setChangeClass] = useState("send-form-off");
  const disable = document.getElementById("button_contact");

  function submit(e) {
    e.preventDefault();
    setChangeClass("send-form-on");
    disable.disabled = "disabled";
  }

  return (
    <>
      <Header />
      <div className="contact-page">
        <form className="contact-form" id="my_Form" onSubmit={submit}>
          <h1 className="h1-Contact">Contactez-nous</h1>
          <label>
            <input
              id="first_Name"
              className="input"
              type="text"
              placeholder="Prénom"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </label>
          <label>
            <input
              id="last_Name"
              className="input"
              type="text"
              placeholder="Nom"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
          <label>
            <input
              id="email"
              className="input"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <textarea
            id="text_Area"
            className="textaera"
            placeholder="Saisissez votre message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />

          <button className="buttonContact" id="button_Contact" type="submit">
            Envoyer
          </button>

          <div id="send_Form" className={changeClass}>
            <div className="send-container">
              <p>Demande transmise</p>
              <p lang="en">See you in space, Cowboy !</p>
              <button
                className="buttonSend"
                type="button"
                onClick={() => {
                  setChangeClass("send-form-off");
                  setFirstName("");
                  setLastName("");
                  setEmail("");
                  setFirstName("");
                  setMessage("");
                  disable.disabled = false;
                }}
              >
                &#128640;
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
