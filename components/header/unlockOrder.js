import React, { useState } from "react";
import Router from "next/router";

// API helper
import { ukApiHelper } from '../../helper/apiHelper';


const UnlockOrder = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [emailInValidMsg, setEmailInValidMsg] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);

        setFormIsValid(
            event.target.value.includes('@')
        );
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes('@'));
        setEmailInValidMsg("Email should be either valid or not be blank.");
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (enteredEmail === "") {
            setEmailInValidMsg("Please Enter Email");
        }
        else {
            setEmailInValidMsg('');
            const formData = new FormData();
            formData.append("email", enteredEmail);
            formData.append("fx", "unlockDiscount");

            ukApiHelper('createAccountV1', 'POST', formData, null)
                .then(res => {
                    const response = res.data;
                    if (response.status) {
                        // Set Data in localstrorage
                        const now = new Date()
                        const item = {
                            value: response.data,
                            expiry: now.getTime() + (12 * 60 * 60 * 1000),
                        }

                        localStorage.setItem("token", JSON.stringify(item));
                        Router.push('/order');
                        setEmailInValidMsg('');
                    }
                    else {
                        setEmailInValidMsg(res.data.message)
                    }
                })
                .catch(error => console.error(`Error: ${error}`));
        }
    };

    return (
        <div className="input-wrpper">
            <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email to unlock"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
            />
            <p className="errorMsg" title={emailInValidMsg}>{emailInValidMsg}</p>
            <button className="btn unlock-btn" onClick={submitHandler}>Unlock</button>
        </div>
    );
}
export default UnlockOrder;