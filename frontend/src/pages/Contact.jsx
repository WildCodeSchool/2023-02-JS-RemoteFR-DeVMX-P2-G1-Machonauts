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

  /* Validation Form*************************** */

  function submit(e) {
    e.preventDefault();
    setChangeClass("send-form-on");
    disable.disabled = "disabled";
  }

  /* Form **************************** */

  return (
    <>
      <Header />
      <div className="contact-page">
        <form className="contact-form" id="my_Form" onSubmit={submit}>
          <h1 className="h1-Contact">Contact Us</h1>
          <label>
            <input
              id="first_Name"
              className="input"
              type="text"
              placeholder="First Name"
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
              placeholder="Last Name"
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
            id="text_area"
            className="textaera"
            placeholder="Enter your message here :"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          />

          <button className="buttonContact" id="button_contact" type="submit">
            Send
          </button>

          <div id="send_form" className={changeClass}>
            <div className="send-container">
              <p>Demande transmise</p>
              <p>See you in space, Cowboy !</p>
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
