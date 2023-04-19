import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [changeClass, setChangeClass] = useState("send-form-off");

  return (
    <div className="contact-page">
      <form className="contact-form">
        <h1 className="h1-Contact">Contact Us</h1>
        <label>
          <input
            className="input"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label>
          <input
            className="input"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <label>
          <input
            className="input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <textarea
          className="textaera"
          placeholder="Enter your message here :"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />

        <div id="send_form" className={changeClass}>
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
            }}
          >
            &#128640;
          </button>
        </div>

        <button
          className="buttonContact"
          type="button"
          onClick={() => setChangeClass("send-form-on")}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
