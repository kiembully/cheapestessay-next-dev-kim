import React, { useState } from "react";

// API helper
import { apiHelper } from '../../../helper/apiHelper';
import { ToastContainer, toast } from 'react-toastify';
import ReactToastifyCss from 'react-toastify/dist/ReactToastify.min.css';

// scss
import contactCss from "./contact.scss";

const Contact = () => {

  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [emailInValidMsg, setEmailInValidMsg] = useState('');

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
    setEmailInValidMsg("Email should be either valid or not be blank.");
  };


  const submitContactHandler = (e) => {
    e.preventDefault();
    if (emailIsValid) {
      if (enteredEmail === "") {
        setEmailInValidMsg("Please Enter Email");
      }
      else {
        setEmailInValidMsg('');
        const formData = new FormData();
        formData.append("name", 'User');
        formData.append("email", enteredEmail);
        formData.append("message", 'This message was submitted thru Contact Us section.');

        apiHelper('sendcontactus', 'POST', formData, null)
          .then(res => {
            if (res.data.status) {
              toast.success(res.data.message);
              setEmailInValidMsg('');
              setEnteredEmail('');
            }
            else {
              setEmailInValidMsg(res.data.message);
            }
          })
          .catch(error => console.error(`Error: ${error}`));
      }
    }
  }
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: contactCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
      <div className="contact">
        <div className="container">
          <div className="contactBlock">
            <div className="left">
              <div className="title">Let’s Talk!</div>
              <p className="desc">
                Enter your email, and we shall get back to you in an hour.
              </p>
            </div>
            <div className="contactBg">
              <div className="right">
                <form className="inputGroup" method="post" onSubmit={submitContactHandler}>
                  <div className="emailInput">
                    <input
                      type="text"
                      placeholder="Your Email"
                      className="form-control"
                      value={enteredEmail}
                      onChange={emailChangeHandler}
                      onBlur={validateEmailHandler}
                    />
                    <p className="errorMsg" title={emailInValidMsg}>{emailInValidMsg}</p>
                  </div>
                  <button type="submit" className="btn secondary-btn">Contact Me</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default Contact;
