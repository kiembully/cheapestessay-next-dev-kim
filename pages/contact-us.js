import React, { useState, useEffect } from "react";
import Head from "next/head";

import { useRouter } from 'next/router';

// API and JWT helper
import { ukApiHelper } from '../helper/apiHelper';
import { ToastContainer, toast } from 'react-toastify';
import ReactToastifyCss from 'react-toastify/dist/ReactToastify.min.css';

// scss
import contactCss from "../styles/contact.scss";

import Img from "../components/Common/image";

import dynamic from 'next/dynamic';

const Meta = dynamic(() => import('../components/meta'));

const Contact = (props) => {

    const [firstname, setFirstName] = useState('');
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const [lastname, setLastName] = useState('');
    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [emailvalErr, setEmailvalErr] = useState(false);
    const handleEmail = (e) => {
        setEmail(e.target.value)
        var emailRegex = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/
        if (emailRegex.test(e.target.value)) {
            setEmailErr("");
        }
        else {
            setEmailErr("Please enter a valid email address");
        }
        if (email === "") {
            setEmailvalErr("Please enter email")
        }
    }

    const [mobile, setNumber] = useState('');
    const handleNumber = (e) => {
        if ((e.target.value).length <= 15) {
            setNumber(e.target.value);
        }
        document.getElementById('yourInputID').addEventListener('keydown', function (e) {
            if (e.which === 38 || e.which === 40) {
                e.preventDefault();
            }
        });
    }

    const [message, setMessage] = useState('');
    const [messageErr, setMessageErr] = useState('');
    const [messagevalErr, setMessagevalErr] = useState(false);
    const [msgVal, setMsgVal] = useState(false);

    const handleMessage = (e) => {
        if ((e.target.value).length < 300) {
            setMessage(e.target.value);
            setMessagevalErr();
        }
        else {
            setMessagevalErr("Don't enter more than 300 character")
        }
        if (message === "") {
            setMessageErr("Please enter message")
        }
        var characterCount = (e.target.value).length;
        setMsgVal(characterCount)
    }


    const contactSubmit = (event) => {
        event.preventDefault();
        if (email === "") {
            setEmailvalErr("Please enter email")
        }
        if (message === "") {
            setMessageErr("Please enter message")
        }
        const formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("email", email);
        formData.append("mobile", mobile);
        formData.append("message", message);

        ukApiHelper('sendContactUsV1', 'POST', formData, null)
            .then(res => {
                if (res.data.status === true) {
                    toast.success("Thank you, We will contact you within 24 hours.");
                    setFirstName("")
                    setLastName("")
                    setEmail("")
                    setEmailvalErr("")
                    setNumber("")
                    setMessage("")
                    setMessageErr("")
                }
            })
            .catch(error => console.error(`Error: ${error}`));
    };

    // router
    const router = useRouter()
    var contactSchema = `{
        "@context": "https://schema.org/",
        "@type": "ContactPage",
        "url": "${process.env.hostBaseUrl}${router && router.asPath ? router.asPath : ''}",
        "name": "${props.meta && props.meta.pageName ? props.meta.pageName : ''}",
        "description": "${props.meta.description ? (props.meta.description).replace(/"/g, '&quot;') : ''}"
      }`

    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
            <style dangerouslySetInnerHTML={{ __html: contactCss }}></style>
            <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
            <Head>
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: contactSchema }} />
            </Head>

            <div className="contact">
                <div className="top-navbar">
                    <div className="header">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <h1 className="title">Reach Out to Us</h1>
                                    <ul className="contactDetails">
                                        <li><Img title="Email" src="/contact/msg-io.svg" alt="mail" width="30" height="23" />Support@CheapestEssay.com</li>
                                        <li><Img title="Whatsapp" src="/contact/call-io.svg" alt="mobile" width="30" height="23" />+1 (909) 441-1414 </li>
                                        <li><Img title="Location" src="/contact/location-io.svg" alt="location" width="30" height="23" />Columbus, OH 43229</li>
                                    </ul>
                                    <a className="btn secondary-btn" href="#contactNow">Contact now</a>
                                </div>
                                <div className="col-sm-6">
                                    <div className="text-center mapImg">
                                        <Img title="Map" src="/contact/map.webp" alt="map" width="636" height="412" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="contact-details" id="contactNow">
                <div className="container">
                    <div className="contact-form text-center">
                        <h2 className="section-title">contact us</h2>
                        <p className="desc">Do you need someone to help you with your paper, or just want to say hi? Go right ahead!</p>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="text" value={firstname} onChange={handleFirstName} placeholder="First Name" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="text" value={lastname} onChange={handleLastName} placeholder="Last Name" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="Email" value={email} onChange={handleEmail} onBlur={handleEmail} />
                                    {!email ? <p className="text-start errorMsg">{emailvalErr}</p> : <p className="text-start errorMsg">{emailErr}</p>}
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-group">
                                    <input className="form-control" id="yourInputID" type="number" placeholder="Phone Number" value={mobile} onChange={handleNumber} />
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <textarea className="form-control" rows="6" value={message} onChange={handleMessage} placeholder="Message" onBlur={handleMessage}></textarea>
                                    <div className="d-flex justify-content-between align-items-center">
                                        {!message ? <p className="text-start errorMsg mb-0">{messageErr}</p> : <p className="text-start errorMsg mb-0">{messagevalErr}</p>}
                                        <span className="text-end d-block mt-1 currentText" id="current">{!message ? "0" : msgVal}/300</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                <div className="submit-btn">
                                    <button className="submit" type="submit" onClick={contactSubmit} ><Img src="/contact/submit.svg" alt="submit" width="25" height="25" /></button>
                                </div>
                            </div>
                            <ToastContainer autoClose={2000} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=contact-us&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default Contact;