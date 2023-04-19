import { useState } from "react";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [changeClass, setChangeClass] = useState("send-form-off");
  const myErrorFstN = document.getElementById("errorFstN");
  const myErrorLstN = document.getElementById("errorLstN");
  const myErrorEm = document.getElementById("errorEm");
  const myErrorMes = document.getElementById("errorMes");
  const myRegex = /^[a-zA-Z-\s]+$/;

  /* Validation Form*************************** */

  function submit(e) {
    if (firstName.trim() === "") {
      e.preventDefault();
      myErrorFstN.innerHTML = "First Name is required ";
    } else if (myRegex.test(firstName) === false) {
      e.preventDefault();
      myErrorFstN.innerHTML = "First Name need letter an - only ! ";
    } else if (lastName.trim() === "") {
      e.preventDefault();
      myErrorLstN.innerHTML = "Last Name is required ";
    } else if (myRegex.test(lastName) === false) {
      e.preventDefault();
      myErrorLstN.innerHTML = "Last Name need letter an - only ! ";
    } else if (email.trim() === "") {
      e.preventDefault();
      myErrorEm.innerHTML = "Email is required ";
    } else if (myRegex.test(email) === false) {
      e.preventDefault();
      myErrorEm.innerHTML = "Email need letter an - only ! ";
    } else if (message.trim() === "") {
      e.preventDefault();
      myErrorMes.innerHTML = "Message is required ";
    } else if (myRegex.test(message) === false) {
      e.preventDefault();
      myErrorMes.innerHTML = "Message need letter an - only ! ";
    }
    return true;
  }

  /* Form **************************** */

  return (
    <div className="contact-page">
      <form className="contact-form" id="my_Form" onSubmit={() => submit()}>
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
          <span id="errorFstN"> </span>
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
          <span id="errorLstN"> </span>
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
          <span id="errorEm"> </span>
        </label>
        <textarea
          id="text_area"
          className="textaera"
          placeholder="Enter your message here :"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />
        <span id="errorMes"> </span>

        <button
          className="buttonContact"
          id="button_contact"
          type="submit"
          onClick={() => {
            if (submit === true) {
              setChangeClass("send-form-on");
            }
          }}
        >
          Send
        </button>

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
              myErrorFstN.innerHTML = " ";
            }}
          >
            &#128640;
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
