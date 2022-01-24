import React, { useState, useEffect, useRef } from "react";
import { Modal, ModalBody } from "reactstrap";

// API and JWT helper
import { apiHelper } from "../../../helper/apiHelper";
import { jwtDecode } from "../../../helper/jwtHelper";

// scss
import profileCss from "./profile.scss";
import IntlTelInputCss from "react-intl-tel-input/dist/main.css";

// Toaster
import { ToastContainer, toast } from "react-toastify";
import ReactToastifyCss from "react-toastify/dist/ReactToastify.min.css";

import Img from "../../Common/image";

import DummyProfile from "../../../public/dummy-profile.webp";
const countryCodeList = require("./countryCodeList.json");

const Profile = (props) => {
    // Signin and securiry
    const [emailValue, setemailValue] = useState("");
    const [pwdValue, setPwdValue] = useState("");
    const [emailModal, setemailModal] = useState(false);
    const [password_error, setPassword_error] = useState("");
    const [email_error, setEmail_error] = useState("");
    const [emailupdate, setEmailupdate] = useState("");

    //change password
    const [currPwdValue, setCurrPwd] = useState("");
    const [newPwdValue, setNewPwd] = useState("");
    const [confirmPwdValue, setConfirmPwd] = useState("");
    const [old_password_error, setold_password_error] = useState("");
    const [new_password_error, setnew_password_error] = useState("");
    const [confirm_password_error, setconfirm_password_error] = useState("");
    const [passwordupdate, setpasswordupdate] = useState(false);

    // full name
    const [fNamemodal, setFNameModal] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [firstname_error, setfirstname_error] = useState("");
    const [lastname_error, setlastname_error] = useState("");
    const [fullnameupdate, setfullnameupdate] = useState("");

    // Whatsapp number
    const [whtappmodal, setwhtappModal] = useState(false);
    const [whtsNoUpdate, setWhtsNoUpdate] = useState("");
    const [wtp_update, setwtp_update] = useState("");
    const [wtp_error, setwtp_error] = useState("");
    const [billing_update, setbilling_update] = useState("");

    // billing address error
    const [ccode_error, setccode_error] = useState("");
    const [country_error, setcountry_error] = useState("");
    const [state_error, setstate_error] = useState("");
    const [city_error, setcity_error] = useState("");
    const [zip_error, setzip_error] = useState("");
    const [street_error, setstreet_error] = useState("");

    // simple state
    const [addressVal, setaddress] = useState("");
    const [cityVal, setCity] = useState("");
    const [stateVal, setState] = useState("");
    const [postCodeVal, setPostCode] = useState("");
    const [isoCodeVal, setIsoCode] = useState("");
    const [countryVal, setcountryVal] = useState("");

    // profile
    const [userToken, setUserToken] = useState("");
    const [leveldata, setleveldata] = useState('');
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        getProfileData();
        getLevelData();
        localStorage.setItem('currStep', 1)
    }, []);

    //getLevelData
    const getLevelData = () => {
        const loginToken = localStorage.getItem("token");
        var convertedToken = JSON.parse(loginToken);

        const formData = new FormData();
        formData.append("user_token", convertedToken ? convertedToken.value : "");

        // call delete API
        apiHelper("displaylevelpercentage", "POST", formData, null)
            .then((res) => {
                if (res.data.status) {
                    setleveldata(res.data.data.user_level);
                }
            })
            .catch((error) => console.error(`Error: ${error}`));
    };

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, (event) => handleWindowClick());

    // mobile number
    const [isDDOpen, setIsDDOpen] = useState(false);
    const [countryPrifix, setCountryPrifix] = useState({
        name: "United States",
        dial_code: "+1",
        code: "US",
    });
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [searchCountryCodeDD, setSearchCountryCodeDD] = useState("");
    const [filterCountryCode, setFilterCountryCode] = useState(countryCodeList);

    const handleWindowClick = () => {
        setSearchCountryCodeDD("");
        setIsDDOpen(false);
        setFilterCountryCode(countryCodeList);
    };

    const dropdownHandler = (e) => {
        e.preventDefault();
        setSearchCountryCodeDD("");
        setIsDDOpen(!isDDOpen);
        setFilterCountryCode(countryCodeList);
    };

    const searchCountryCode = (e) => {
        var val = e.target.value;
        var newArray = countryCodeList;
        if (val) {
            val = val.toLowerCase();
            newArray = countryCodeList.filter(function (el) {
                return (
                    el.name.toLowerCase().indexOf(val) > -1 ||
                    el.dial_code.indexOf(val) > -1
                );
            });
        }

        setSearchCountryCodeDD(val);
        setFilterCountryCode(newArray);
    };

    const keyPressPhone = (e) => {
        var regExp = /[0-9]/i;
        var value = String.fromCharCode(e.which) || e.key;

        if (!regExp.test(value)) {
            e.preventDefault();
            return false;
        } else {
            setPhoneNumberError("");
        }
    };

    const selectPhoneCountryHandler = (info) => {
        setCountryPrifix(info);
        setSearchCountryCodeDD("");
        setIsDDOpen(!isDDOpen);
        setFilterCountryCode(countryCodeList);
    };

    const changePhoneNumber = (e) => {
        var val = e.target.value,
            err = "";
        if (val === "") {
            err = "Enter number";
        } else if (val.length < 6 || val.length > 16) {
            err = "Number is invalid";
        }

        setPhoneNumberError(err);
        setPhoneNumber(val);
    };

    const mobileNoUpdate = () => {
        var regExp = /^\d+$/;
        if (
            !regExp.test(phoneNumber) ||
            phoneNumber.length < 6 ||
            phoneNumber.length > 16
        ) {
            setPhoneNumberError("Number is invalid");
        } else {
            const formData = new FormData();
            formData.append(
                "telephone",
                phoneNumber.includes(countryPrifix)
                    ? phoneNumber.split(countryPrifix)[1].trim()
                    : phoneNumber
            );
            formData.append(
                "prefix",
                countryPrifix && countryPrifix.dial_code ? countryPrifix.dial_code : ""
            );
            formData.append("user_token", userToken);

            apiHelper("updatemobile", "POST", formData, null)
                .then((res) => {
                    if (res.data.status) {
                        setmobileModal(false);
                        setUserToken(res.data.data.user_token);
                        var currUserToken = JSON.parse(localStorage.getItem("token"));
                        const item = {
                            value: res.data.data.user_token,
                            expiry: currUserToken.expiry,
                        };
                        localStorage.setItem("token", JSON.stringify(item));
                        getProfileData();
                    } else if (res.data.status === false) {
                        setPhoneNumberError(res.data.message);
                    }
                })
                .catch((error) => console.error(`Error: ${error}`));
        }
    };

    //getProfileData
    const getProfileData = () => {
        const loginToken = localStorage.getItem("token");

        var convertedToken = JSON.parse(loginToken);
        setUserToken(convertedToken.value);
        var decodeToken = jwtDecode(convertedToken.value);

        setUserData(decodeToken.user_details);

        if (decodeToken.user_details) {
            setemailValue(decodeToken.user_details.user_email && decodeToken.user_details.user_email);
            setFirstName(decodeToken.user_details.first_name);
            setlastName(decodeToken.user_details.last_name);
            setWhtsNoUpdate(decodeToken.user_details.whatsapp_number);
            setIsoCode(decodeToken.user_details.iso_code);
            setcountryVal(decodeToken.user_details.country);
            setState(decodeToken.user_details.state);
            setPostCode(decodeToken.user_details.post_code);
            setaddress(decodeToken.user_details.address);
            setCity(decodeToken.user_details.city);
        }

        var countryPrefixSel = [
            {
                name: "United States",
                dial_code: "+1",
                code: "US",
            },
        ];

        if (
            decodeToken.user_details.telephone_prefix &&
            decodeToken.user_details.telephone_prefix !== "" &&
            decodeToken.user_details.telephone_prefix !== null
        ) {
            countryPrefixSel = countryCodeList.filter(function (el) {
                return el.dial_code === decodeToken.user_details.telephone_prefix;
            });
        }

        setCountryPrifix(countryPrefixSel[0]);
        setPhoneNumber(decodeToken.user_details.customer_telephone);
    };

    const profileFileType = (e) => {
        const formData = new FormData();
        formData.append("user_token", userToken);
        formData.append("profile_pic", e.target.files[0]);

        // update profile pic
        apiHelper("updateprofilepic", "POST", formData, null)
            .then((res) => {
                if (res.data.status === true) {
                    setUserToken(res.data.data.user_token);
                    var currUserToken = JSON.parse(localStorage.getItem("token"));
                    const item = {
                        value: res.data.data.user_token,
                        expiry: currUserToken.expiry,
                    };

                    localStorage.setItem("token", JSON.stringify(item));
                    getProfileData();

                    props.changeUserProfile();

                    setTimeout(() => {
                        toast.success(res.data.message);
                    }, 1500);
                } else {
                    toast.error(res.data.message);
                }
            })
            .catch((error) => console.error(`Error: ${error}`));
    };

    const firstNameHandler = (e) => {
        var fname = e.target.value;
        if (fname === "") {
            setfirstname_error("Enter Firstname");
        } else {
            setfirstname_error("");
        }
        setFirstName(fname);
    };

    const lastNameHandler = (e) => {
        var lname = e.target.value;
        if (lname === "") {
            setlastname_error("Enter Lastname");
        } else {
            setlastname_error("");
        }
        setlastName(lname);
    };

    //updateName
    const updateName = () => {
        setlastname_error("");
        setfirstname_error("");

        if (firstName === "") {
            setfirstname_error("Enter Firstname");
        }
        if (lastName === "") {
            setlastname_error("Enter Lastname");
        }

        if (firstName !== "" && lastName !== "") {
            const formData = new FormData();
            formData.append("first_name", firstName);
            formData.append("last_name", lastName);
            formData.append("user_token", userToken);

            apiHelper("updatefullname", "POST", formData, null)
                .then((res) => {
                    if (res.data.status === true) {
                        setUserToken(res.data.data.user_token);
                        var currUserToken = JSON.parse(localStorage.getItem("token"));

                        const item = {
                            value: res.data.data.user_token,
                            expiry: currUserToken.expiry,
                        };
                        localStorage.setItem("token", JSON.stringify(item));

                        setfullnameupdate(
                            <span className="msgText successMsg">{res.data.message}</span>
                        );

                        getProfileData();

                        props.changeUserProfile();

                        setTimeout(() => {
                            setFNameModal(false);
                        }, 1500);
                    } else if (res.data.status === false) {
                        setfullnameupdate(
                            <span className="msgText errorMsg">{res.data.message}</span>
                        );
                    }
                })
                .catch((error) => console.error(`Error: ${error}`));
        }
    };

    const whtsappHandler = (e) => {
        let wNo = e.target.value;
        if (wNo === "") {
            setwtp_error("Enter WhatsApp Number");
        }
        if (wNo.length < 15) {
            setWhtsNoUpdate(e.target.value);
        } else {
            setwtp_error("Length sould be within 15");
        }
    };

    // updateWhtsNo
    const updateWhtsNo = () => {
        if (whtsNoUpdate === "") {
            setwtp_error("Enter Whatsapp number");
        } else {
            const formData = new FormData();
            formData.append("whatsapp_num", whtsNoUpdate);
            formData.append("user_token", userToken);

            apiHelper("updatewhatsapp", "POST", formData, null)
                .then((res) => {
                    if (res.data.status === true) {
                        setUserToken(res.data.data.user_token);
                        var currUserToken = JSON.parse(localStorage.getItem("token"));
                        const item = {
                            value: res.data.data.user_token,
                            expiry: currUserToken.expiry,
                        };

                        localStorage.setItem("token", JSON.stringify(item));
                        setwtp_update(
                            <span className="msgText successMsg">{res.data.message}</span>
                        );

                        // get profile data refresh
                        getProfileData();

                        setTimeout(() => {
                            setwhtappModal(false);
                        }, 2000);
                    } else {
                        setwtp_update(
                            <span className="msgText errorMsg">{res.data.message}</span>
                        );
                    }
                })
                .catch((error) => console.error(`Error: ${error}`));
        }
    };

    const ctyCodeHandler = (e) => {
        var ccode = e.target.value;
        if (ccode === "") {
            setccode_error("Enter Code");
        } else {
            setccode_error("");
        }
        setIsoCode(ccode);
    };

    const ctyHandler = (e) => {
        var ct = e.target.value;
        if (ct === "") {
            setcountry_error("Enter City");
        } else {
            setcountry_error("");
        }
        setcountryVal(ct);
    };

    const stateHandler = (e) => {
        var st = e.target.value;
        if (st === "") {
            setstate_error("Enter State");
        } else {
            setstate_error("");
        }
        setState(st);
    };

    const cityHandler = (e) => {
        var ct = e.target.value;
        if (ct === "") {
            setcity_error("Enter City");
        } else {
            setcity_error("");
        }
        setCity(ct);
    };

    const zipCHandler = (e) => {
        var zip = e.target.value;
        if (zip === "") {
            setzip_error("Enter ZipCode");
        } else {
            setzip_error("");
        }
        setPostCode(zip);
    };

    const streetHandler = (e) => {
        var st = e.target.value;
        if (st === "") {
            setstreet_error("Enter Street");
        } else {
            setstreet_error("");
        }
        setaddress(st);
    };

    const updateBillingAdd = () => {
        // validation
        if (addressVal === "") {
            setstreet_error("Enter Street");
        }
        if (cityVal === "") {
            setcity_error("Enter City");
        }
        if (stateVal === "") {
            setstate_error("Enter State");
        }
        if (postCodeVal === "") {
            setzip_error("Enter ZipCode");
        }
        if (isoCodeVal === "") {
            setccode_error("Enter Code");
        }
        if (countryVal === "") {
            setcountry_error("Enter Country");
        }

        if (
            addressVal !== "" &&
            cityVal !== "" &&
            stateVal !== "" &&
            postCodeVal !== "" &&
            isoCodeVal !== "" &&
            countryVal !== ""
        ) {
            const formData = new FormData();
            formData.append("street", addressVal);
            formData.append("city", cityVal);
            formData.append("state", stateVal);
            formData.append("zipcode", postCodeVal);
            formData.append("countrycode", isoCodeVal);
            formData.append("country", countryVal);
            formData.append("user_token", userToken);

            apiHelper("updatebillingaddress", "POST", formData, null)
                .then((res) => {
                    if (res.data.status === true) {
                        setUserToken(res.data.data.user_token);
                        var currUserToken = JSON.parse(localStorage.getItem("token"));
                        const item = {
                            value: res.data.data.user_token,
                            expiry: currUserToken.expiry,
                        };
                        localStorage.setItem("token", JSON.stringify(item));
                        setbilling_update(
                            <span className="msgText successMsg">{res.data.message}</span>
                        );

                        // getProfileData
                        getProfileData();

                        setTimeout(() => {
                            setBillindAddModal(false);
                        }, 2000);
                    } else {
                        setbilling_update(
                            <span className="msgText errorMsg">{res.data.message}</span>
                        );
                    }
                })
                .catch((error) => console.error(`Error: ${error}`));
        }
    };

    const emailHandler = (e) => {
        let eValue = e.target.value;
        const emailRegex = /^[a-z0-9]+@[a-z0-9]+\.[a-z0-9]+$/g;
        if (eValue === "") {
            setEmail_error("Enter Email.");
        }
        if (emailRegex.test(eValue)) {
            setEmail_error("");
        } else {
            setEmail_error("Enter valid email");
        }

        setemailValue(eValue);
    };

    const pwdHandler = (e) => {
        let pwdval = e.target.value;
        if (pwdval === "") {
            setPassword_error("Enter password");
        } else {
            setPassword_error("");
        }
        setPwdValue(pwdval);
    };

    //emailUpdate
    const emailUpdate = () => {
        if (emailValue === "") {
            setEmail_error("Enter Email");
            setPassword_error("");
        } else if (pwdValue === "") {
            setPassword_error("Enter Password");
            setEmail_error("");
        } else if (emailValue !== "" && pwdValue !== "") {
            const formData = new FormData();
            formData.append("email", emailValue);
            formData.append("password", pwdValue);
            formData.append("user_token", userToken);

            apiHelper("updateemail", "POST", formData, null)
                .then((res) => {
                    if (res.data.status === true) {
                        setUserToken(res.data.data.user_token);
                        var currUserToken = JSON.parse(localStorage.getItem("token"));
                        const item = {
                            value: res.data.data.user_token,
                            expiry: currUserToken.expiry,
                        };
                        localStorage.setItem("token", JSON.stringify(item));
                        setEmailupdate(
                            <span className="msgText successMsg">{res.data.message}</span>
                        );
                        setTimeout(() => {
                            setemailModal(false);
                        }, 2000);
                    } else {
                        setEmailupdate(
                            <span className="msgText errorMsg">{res.data.message}</span>
                        );
                    }
                })
                .catch((error) => console.error(`Error: ${error}`));
        }
    };

    const currPwdHandle = (e) => {
        const oldPwd = e.target.value;
        if (oldPwd === "") {
            setold_password_error("Enter old password");
        } else {
            setold_password_error("");
        }
        setCurrPwd(oldPwd);
    };
    const newPwdHandle = (e) => {
        const newPwd = e.target.value;
        if (newPwd === "") {
            setnew_password_error("Enter new password");
        } else {
            setnew_password_error("");
        }
        setNewPwd(newPwd);
    };
    const confirmPwdHandle = (e) => {
        const confirmPwd = e.target.value;
        if (confirmPwd === "") {
            setconfirm_password_error("Enter confirm password");
        } else {
            setconfirm_password_error("");
        }
        setConfirmPwd(confirmPwd);
    };

    const pwdUpdate = () => {
        //check FormValidation
        check_FormValidation();

        if (currPwdValue !== "" && newPwdValue !== "" && confirmPwdValue !== "") {
            const formData = new FormData();
            formData.append("current_password", currPwdValue);
            formData.append("new_password", newPwdValue);
            formData.append("retype_password", confirmPwdValue);
            formData.append("user_token", userToken);
            if (currPwdValue === newPwdValue) {
                setpasswordupdate(
                    <span className="msgText errorMsg">
                        Your new password must be different
                    </span>
                );
            } else {
                apiHelper("updatepassword", "POST", formData, null)
                    .then((res) => {
                        if (res.data.status === true) {
                            setpasswordupdate(
                                <span className="msgText successMsg">{res.data.message}</span>
                            );
                            setTimeout(() => {
                                pwdToggle(false);
                            }, 1500);
                        } else {
                            setpasswordupdate(
                                <span className="msgText errorMsg">{res.data.message}</span>
                            );
                        }
                    })
                    .catch((error) => console.error(`Error: ${error}`));
            }
        }
    };

    //check FormValidation
    const check_FormValidation = () => {
        if (currPwdValue === "") {
            setold_password_error("Enter old password");
        } else {
            setold_password_error("");
        }
        if (newPwdValue === "") {
            setnew_password_error("Enter New password");
        } else {
            setnew_password_error("");
        }
        if (confirmPwdValue === "") {
            setconfirm_password_error("Enter Confirm password");
        } else {
            setconfirm_password_error("");
        }
    };

    // fullname toggle
    const fNametoggle = () => {
        setFNameModal(!fNamemodal);

        // set all error blank
        setfirstname_error("");
        setlastname_error("");
        setfullnameupdate("");
    };

    const [mobilemodal, setmobileModal] = useState(false);
    const mobiletoggle = () => {
        setmobileModal(!mobilemodal);

        var countryPrefixSel = [
            {
                name: "United States",
                dial_code: "+1",
                code: "US",
            },
        ];

        if (
            userData.telephone_prefix &&
            userData.telephone_prefix !== "" &&
            userData.telephone_prefix !== null
        ) {
            countryPrefixSel = countryCodeList.filter(function (el) {
                return el.dial_code === userData.telephone_prefix;
            });
        }

        setCountryPrifix(countryPrefixSel[0]);
        setPhoneNumber(userData.customer_telephone);
    };

    const whtapptoggle = () => {
        setwhtappModal(!whtappmodal);
        setwtp_update("");
        setwtp_error("");
    };

    const [billindAddmodal, setBillindAddModal] = useState(false);

    const billindAddtoggle = () => {
        setBillindAddModal(!billindAddmodal);
        setbilling_update("");
        setccode_error("");
        setcountry_error("");
        setstate_error("");
        setcity_error("");
        setzip_error("");
        setstreet_error("");
    };

    const emailToggle = () => {
        setemailModal(!emailModal);
        setEmail_error("");
        setPassword_error("");
        setEmailupdate("");
    };

    const [pwdModal, setPwdModal] = useState(false);

    //pwdToggle
    const pwdToggle = () => {
        setPwdModal(!pwdModal);

        // set all error is blank
        setpasswordupdate("");
        setconfirm_password_error("");
        setnew_password_error("");
        setold_password_error("");
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: IntlTelInputCss }}></style>
            <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
            <style dangerouslySetInnerHTML={{ __html: profileCss }}></style>

            <div className="profile">
                <h2 className="title">profile</h2>
                <div className="bg-white">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="profilePicture">
                                        <h3 className="innerTitle">Profile Picture</h3>
                                        <div className="d-flex align-content-center justify-content-center profileBlock">
                                            <div className="updateProfile">
                                                <input type="file" onChange={profileFileType} />
                                                <img
                                                    src={
                                                        userData &&
                                                            userData.profile_pic &&
                                                            userData.profile_pic !== ""
                                                            ? userData.profile_pic
                                                            : DummyProfile
                                                    }
                                                    title="Profile Picture" 
                                                    alt="Profile Picture"
                                                    className="profileImg"
                                                    id="output"
                                                   width={50}
                                                   height={50}
                                                />
                                                <span className="edit">
                                                    <svg
                                                       width={16}
                                                       height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.33333 1.3335L12 4.00016L4.66667 11.3335H2V8.66683L9.33333 1.3335Z"
                                                            stroke="#151515"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2 14.6665H14"
                                                            stroke="#151515"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="profilePicture">
                                        <h3 className="innerTitle">Member Level</h3>
                                        <div className="updateProfile">
                                            <div className="d-flex align-content-center justify-content-center profileBlock">
                                                {leveldata && leveldata !== '' && (
                                                    <>
                                                        {(function () {
                                                            if (leveldata.toLowerCase() === "blue") {
                                                                return (
                                                                    <>
                                                                        <Img
                                                                            src="/order/blueLevel.svg"
                                                                            alt="Blue Level"
                                                                            title="Blue Level"
                                                                            className="blueLevelImg"
                                                                           width={50}
                                                                           height={50}
                                                                        />
                                                                    </>
                                                                );
                                                            } else if (leveldata.toLowerCase() === "silver") {
                                                                return (
                                                                    <>
                                                                        <Img
                                                                            src="/order/silverLevel.svg"
                                                                            alt="Blue Level"    
                                                                            title="Blue Level"
                                                                            className="silverLevelImg"
                                                                           width={50}
                                                                           height={50}
                                                                        />
                                                                    </>
                                                                );
                                                            } else if (leveldata.toLowerCase() === "gold") {
                                                                return (
                                                                    <>
                                                                        <Img
                                                                            src="/order/goldLevel.svg"
                                                                            alt="Gold Level"
                                                                            title="Gold Level"
                                                                            className="goldLevelImg"
                                                                           width={50}
                                                                           height={50}
                                                                        />
                                                                    </>
                                                                );
                                                            } else if (leveldata.toLowerCase() === "vip") {
                                                                return (
                                                                    <>
                                                                        <Img
                                                                            src="/order/vipLevel.svg"
                                                                            alt="Vip Level"
                                                                            title="Vip Level"
                                                                            className="vipLevelImg"
                                                                           width={50}
                                                                           height={50}
                                                                        />
                                                                    </>
                                                                );
                                                            }
                                                        })()}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="editprofile">
                                <div className="profilePicture">
                                    <h3 className="innerTitle">Signin &amp; Security</h3>
                                    <div className="editprofileInner">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <div className="inputBox">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    value={userData && userData.user_email ? userData.user_email : ''}
                                                    disabled={true}
                                                />
                                                <span className="edit" onClick={emailToggle}>
                                                    <svg
                                                       width={16}
                                                       height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.33333 1.3335L12 4.00016L4.66667 11.3335H2V8.66683L9.33333 1.3335Z"
                                                            stroke="#888"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2 14.6665H14"
                                                            stroke="#888"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>
                                            <Modal
                                                isOpen={emailModal}
                                                toggle={emailToggle}
                                                centered
                                                className="profile"
                                            >
                                                <ModalBody className="profilePicture">
                                                    <div className="editprofileInner p-0">
                                                        <h3 className="modalTitle text-center">
                                                            Update Your Email
                                                        </h3>
                                                        <div className="form-group">
                                                            <label>email</label>
                                                            <div className="inputBox">
                                                                <input
                                                                    type="text"
                                                                    placeholder="Enter email"
                                                                    className="form-control"
                                                                    onChange={emailHandler}
                                                                    value={emailValue}
                                                                />
                                                                {email_error ? (
                                                                    <>
                                                                        {" "}
                                                                        <p className="errorMsg">
                                                                            {email_error}
                                                                        </p>{" "}
                                                                    </>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>verify password</label>
                                                            <div className="inputBox">
                                                                <input
                                                                    type="password"
                                                                    placeholder="Enter password"
                                                                    className="form-control"
                                                                    value={pwdValue}
                                                                    onChange={pwdHandler}
                                                                />
                                                                {password_error ? (
                                                                    <>
                                                                        {" "}
                                                                        <p className="errorMsg">
                                                                            {password_error}
                                                                        </p>{" "}
                                                                    </>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        {emailupdate && emailupdate}
                                                        <div className="modalBtn text-end mt-5">
                                                            <button
                                                                className="btn outline-btn"
                                                                onClick={emailToggle}
                                                            >
                                                                {" "}
                                                                Cancel{" "}
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn theme-btn"
                                                                onClick={emailUpdate}
                                                            >
                                                                {" "}
                                                                Save{" "}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                        <div className="form-group">
                                            <label>Password</label>
                                            <div className="inputBox">
                                                <input
                                                    type="password"
                                                    value=""
                                                    className="form-control"
                                                    disabled={true}
                                                />
                                                <span className="edit" onClick={pwdToggle}>
                                                    <svg
                                                       width={16}
                                                       height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.33333 1.3335L12 4.00016L4.66667 11.3335H2V8.66683L9.33333 1.3335Z"
                                                            stroke="#888"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2 14.6665H14"
                                                            stroke="#888"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                            </div>

                                            <Modal
                                                isOpen={pwdModal}
                                                toggle={pwdToggle}
                                                centered
                                                className="profile"
                                            >
                                                <ModalBody className="profilePicture">
                                                    <div className="editprofileInner p-0">
                                                        <h3 className="modalTitle text-center">
                                                            {" "}
                                                            Update Your Password{" "}
                                                        </h3>
                                                        <div className="form-group">
                                                            <label>Current Password</label>
                                                            <div className="inputBox">
                                                                <input
                                                                    type="password"
                                                                    value={currPwdValue && currPwdValue}
                                                                    id="oldPassword"
                                                                    placeholder="Enter current password"
                                                                    className="form-control"
                                                                    onChange={currPwdHandle}
                                                                />
                                                                {old_password_error ? (
                                                                    <p className="errorMsg">
                                                                        {old_password_error}
                                                                    </p>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>New password</label>
                                                            <div className="inputBox">
                                                                <input
                                                                    type="password"
                                                                    value={newPwdValue && newPwdValue}
                                                                    id="newPassword"
                                                                    placeholder="Enter new password"
                                                                    className="form-control"
                                                                    onChange={newPwdHandle}
                                                                />
                                                                {new_password_error ? (
                                                                    <p className="errorMsg">
                                                                        {new_password_error}
                                                                    </p>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirm New password</label>
                                                            <div className="inputBox">
                                                                <input
                                                                    type="password"
                                                                    placeholder="Enter confirm password"
                                                                    value={confirmPwdValue && confirmPwdValue}
                                                                    className="form-control"
                                                                    onChange={confirmPwdHandle}
                                                                />
                                                                {confirm_password_error ? (
                                                                    <p className="errorMsg">
                                                                        {confirm_password_error}
                                                                    </p>
                                                                ) : null}
                                                            </div>
                                                        </div>

                                                        {/* API Error */}
                                                        {passwordupdate && passwordupdate}

                                                        <div className="modalBtn text-end mt-5">
                                                            <button
                                                                className="btn outline-btn"
                                                                onClick={pwdToggle}
                                                            >
                                                                Cancel
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn theme-btn"
                                                                onClick={pwdUpdate}
                                                            >
                                                                Save
                                                            </button>
                                                        </div>
                                                    </div>
                                                </ModalBody>
                                            </Modal>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="editprofile ps-xl-3 mt-0">
                                <div className="profilePicture">
                                    <h3 className="innerTitle">general Details</h3>
                                    <div className="editprofileInner">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <div className="inputBox">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={
                                                        userData && (userData.first_name || userData.last_name) ?
                                                            userData.first_name + " " + userData.last_name : ''
                                                    }
                                                    disabled={true}
                                                />
                                                <span className="edit" onClick={fNametoggle}>
                                                    <svg
                                                       width={16}
                                                       height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.33333 1.3335L12 4.00016L4.66667 11.3335H2V8.66683L9.33333 1.3335Z"
                                                            stroke="#888"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2 14.6665H14"
                                                            stroke="#888"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                <Modal
                                                    isOpen={fNamemodal}
                                                    toggle={fNametoggle}
                                                    centered
                                                    className="profile"
                                                >
                                                    <ModalBody className="profilePicture">
                                                        <div className="editprofileInner p-0">
                                                            <h3 className="modalTitle text-center">
                                                                {" "}
                                                                Update Full Name{" "}
                                                            </h3>

                                                            <div className="form-group">
                                                                <label>Firstname</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={firstNameHandler}
                                                                        placeholder="Enter firstname"
                                                                        value={firstName}
                                                                    />
                                                                    {firstname_error ? (
                                                                        <p className="errorMsg">
                                                                            {firstname_error}
                                                                        </p>
                                                                    ) : null}
                                                                </div>
                                                            </div>

                                                            <div className="form-group">
                                                                <label>Lastname</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={lastNameHandler}
                                                                        placeholder="Enter lastname"
                                                                        value={lastName}
                                                                    />
                                                                    {lastname_error ? (
                                                                        <p className="errorMsg">{lastname_error}</p>
                                                                    ) : null}
                                                                </div>
                                                            </div>

                                                            {/* API Error */}
                                                            {fullnameupdate && fullnameupdate}

                                                            <div className="modalBtn text-end mt-5">
                                                                <button
                                                                    className="btn outline-btn"
                                                                    onClick={fNametoggle}
                                                                >
                                                                    {" "}
                                                                    Cancel{" "}
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="btn theme-btn"
                                                                    onClick={updateName}
                                                                >
                                                                    {" "}
                                                                    Save{" "}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </ModalBody>
                                                </Modal>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="form-group">
                                                    <label>Mobile</label>
                                                    <div className="inputBox">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={userData && userData.mobile ? userData.mobile : ''}
                                                            disabled={true}
                                                        />
                                                        <span className="edit" onClick={mobiletoggle}>
                                                            <svg
                                                               width={16}
                                                               height={16}
                                                                viewBox="0 0 16 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.33333 1.3335L12 4.00016L4.66667 11.3335H2V8.66683L9.33333 1.3335Z"
                                                                    stroke="#888"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M2 14.6665H14"
                                                                    stroke="#888"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </span>
                                                        <Modal
                                                            isOpen={mobilemodal}
                                                            toggle={mobiletoggle}
                                                            centered
                                                            className="profile"
                                                        >
                                                            <ModalBody className="profilePicture">
                                                                <div className="editprofileInner p-0">
                                                                    <h3 className="modalTitle text-center">
                                                                        Update Mobile Number
                                                                    </h3>
                                                                    <div className="position-relative">
                                                                        <div className="mobile-n-dropdown">
                                                                            <div
                                                                                className={`backDrop ${isDDOpen ? "open" : ""
                                                                                    }`}
                                                                            ></div>
                                                                            <div
                                                                                className="custom-flag"
                                                                                ref={wrapperRef}
                                                                            >
                                                                                <button
                                                                                    className="flag-icon"
                                                                                    onClick={dropdownHandler}
                                                                                >
                                                                                    <span
                                                                                        className={`iti-flag ${countryPrifix &&
                                                                                            countryPrifix.code
                                                                                            ? countryPrifix.code.toLowerCase()
                                                                                            : ""
                                                                                            }`}
                                                                                    ></span>
                                                                                    <div
                                                                                        className={`arrow ${isDDOpen ? "up" : "down"
                                                                                            }`}
                                                                                    ></div>
                                                                                </button>
                                                                                <ul
                                                                                    className={`flag-menu ${isDDOpen ? "open" : ""
                                                                                        }`}
                                                                                >
                                                                                    <li>
                                                                                        <input
                                                                                            type="text"
                                                                                            onChange={searchCountryCode}
                                                                                            value={searchCountryCodeDD}
                                                                                        />
                                                                                    </li>
                                                                                    {filterCountryCode &&
                                                                                        filterCountryCode.length > 0 ? (
                                                                                        filterCountryCode.map((data, i) => (
                                                                                            <li
                                                                                                key={i}
                                                                                                onClick={() =>
                                                                                                    selectPhoneCountryHandler(
                                                                                                        data
                                                                                                    )
                                                                                                }
                                                                                                className={
                                                                                                    countryPrifix &&
                                                                                                        countryPrifix.code &&
                                                                                                        countryPrifix &&
                                                                                                        countryPrifix.code ===
                                                                                                        data.code
                                                                                                        ? "selected"
                                                                                                        : ""
                                                                                                }
                                                                                            >
                                                                                                <div
                                                                                                    className={`iti-flag ${data.code.toLowerCase()}`}
                                                                                                ></div>
                                                                                                <div>
                                                                                                    ({data.dial_code}) {data.name}
                                                                                                </div>
                                                                                            </li>
                                                                                        ))
                                                                                    ) : (
                                                                                        <li style={{ fontSize: "13px" }}>
                                                                                            No Record Found
                                                                                        </li>
                                                                                    )}
                                                                                </ul>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                placeholder="Enter mobile number"
                                                                                value={phoneNumber}
                                                                                onKeyPress={keyPressPhone}
                                                                                onChange={changePhoneNumber}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    {phoneNumberError ? (
                                                                        <p className="errorMsg">
                                                                            {phoneNumberError}
                                                                        </p>
                                                                    ) : null}
                                                                    <div className="modalBtn text-end mt-5">
                                                                        <button
                                                                            className="btn outline-btn"
                                                                            onClick={mobiletoggle}
                                                                        >
                                                                            Cancel
                                                                        </button>
                                                                        <button
                                                                            type="submit"
                                                                            className="btn theme-btn"
                                                                            onClick={mobileNoUpdate}
                                                                        >
                                                                            Save
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </ModalBody>
                                                        </Modal>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="form-group">
                                                    <label>
                                                        {" "}
                                                        WhatsApp <span>(Optional)</span>
                                                    </label>
                                                    <div className="inputBox">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={userData && userData.whatsapp_number ? userData.whatsapp_number : ''}
                                                            disabled={true}
                                                        />
                                                        <span className="edit" onClick={whtapptoggle}>
                                                            <svg
                                                               width={16}
                                                               height={16}
                                                                viewBox="0 0 16 16"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M9.33333 1.3335L12 4.00016L4.66667 11.3335H2V8.66683L9.33333 1.3335Z"
                                                                    stroke="#888"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                                <path
                                                                    d="M2 14.6665H14"
                                                                    stroke="#888"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>

                                                    <Modal
                                                        isOpen={whtappmodal}
                                                        toggle={whtapptoggle}
                                                        centered
                                                        className="profile"
                                                    >
                                                        <ModalBody className="profilePicture">
                                                            <div className="editprofileInner p-0">
                                                                <h3 className="modalTitle text-center">
                                                                    Update Whatsapp Number
                                                                </h3>
                                                                <div className="form-group">
                                                                    <label>Whatsapp Number</label>
                                                                    <div className="inputBox">
                                                                        <input
                                                                            id="whtsappNoInput"
                                                                            type="number"
                                                                            className="form-control"
                                                                            onChange={whtsappHandler}
                                                                            placeholder="Enter whatsapp number"
                                                                            value={whtsNoUpdate}
                                                                        />
                                                                        {wtp_error ? (
                                                                            <p className="errorMsg">{wtp_error}</p>
                                                                        ) : null}
                                                                    </div>
                                                                </div>

                                                                {/* API Error */}
                                                                {wtp_update && wtp_update}

                                                                <div className="modalBtn text-end mt-5">
                                                                    <button
                                                                        className="btn outline-btn"
                                                                        onClick={whtapptoggle}
                                                                    >
                                                                        {" "}
                                                                        Cancel{" "}
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="btn theme-btn"
                                                                        onClick={updateWhtsNo}
                                                                    >
                                                                        {" "}
                                                                        Save{" "}
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </ModalBody>
                                                    </Modal>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0">
                                            <label>
                                                Billing Address <span>(Optional)</span>
                                            </label>
                                            <div className="inputBox">
                                                <textarea
                                                    value={
                                                        userData &&
                                                            (userData.address || userData.city || userData.state || userData.country) ?
                                                            userData.address +
                                                            "," +
                                                            userData.city +
                                                            "," +
                                                            userData.state +
                                                            "," +
                                                            userData.country :
                                                            ''
                                                    }
                                                    rows="3"
                                                    className="form-control"
                                                    disabled={true}
                                                ></textarea>
                                                <span className="edit" onClick={billindAddtoggle}>
                                                    <svg
                                                       width={16}
                                                       height={16}
                                                        viewBox="0 0 16 16"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M9.33333 1.3335L12 4.00016L4.66667 11.3335H2V8.66683L9.33333 1.3335Z"
                                                            stroke="#888"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                        <path
                                                            d="M2 14.6665H14"
                                                            stroke="#888"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </svg>
                                                </span>
                                                <Modal
                                                    isOpen={billindAddmodal}
                                                    toggle={billindAddtoggle}
                                                    centered
                                                    className="profile"
                                                >
                                                    <ModalBody className="profilePicture">
                                                        <div className="editprofileInner p-0">
                                                            <h3 className="modalTitle text-center">
                                                                {" "}
                                                                Update Your Billing Address
                                                            </h3>
                                                            <div className="form-group">
                                                                <label>Country</label>
                                                                <div className="inputBox">
                                                                    <div className="row">
                                                                        <div className="col-md-4">
                                                                            <input
                                                                                type="number"
                                                                                className="form-control"
                                                                                onChange={ctyCodeHandler}
                                                                                value={isoCodeVal}
                                                                                placeholder="Enter code"
                                                                            />
                                                                            {ccode_error ? (
                                                                                <p className="errorMsg">
                                                                                    {ccode_error}
                                                                                </p>
                                                                            ) : null}
                                                                        </div>
                                                                        <div className="col-md-8">
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                value={countryVal}
                                                                                onChange={ctyHandler}
                                                                                placeholder="Enter country"
                                                                            />
                                                                            {country_error ? (
                                                                                <p className="errorMsg">
                                                                                    {country_error}
                                                                                </p>
                                                                            ) : null}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>State</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={stateVal}
                                                                        onChange={stateHandler}
                                                                        placeholder="Enter state"
                                                                    />
                                                                    {state_error ? (
                                                                        <p className="errorMsg">{state_error}</p>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>City</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={cityVal}
                                                                        onChange={cityHandler}
                                                                        placeholder="Enter city"
                                                                    />
                                                                    {city_error ? (
                                                                        <p className="errorMsg">{city_error}</p>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Zip Code</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        value={postCodeVal}
                                                                        onChange={zipCHandler}
                                                                        placeholder="Enter zipcode"
                                                                    />
                                                                    {zip_error ? (
                                                                        <p className="errorMsg">{zip_error}</p>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Street</label>
                                                                <div className="inputBox">
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        onChange={streetHandler}
                                                                        value={addressVal}
                                                                        placeholder="Enter street"
                                                                    />
                                                                    {street_error ? (
                                                                        <p className="errorMsg">{street_error}</p>
                                                                    ) : null}
                                                                </div>
                                                            </div>

                                                            {/* API Error */}
                                                            {billing_update && billing_update}

                                                            <div className="modalBtn text-end mt-5">
                                                                <button
                                                                    className="btn outline-btn"
                                                                    onClick={billindAddtoggle}
                                                                >
                                                                    Cancel
                                                                </button>
                                                                <button
                                                                    type="submit"
                                                                    className="btn theme-btn"
                                                                    onClick={updateBillingAdd}
                                                                >
                                                                    {" "}
                                                                    Save{" "}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </ModalBody>
                                                </Modal>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </>
    );
};
export default Profile;

function useOutsideAlerter(ref, handler) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, handler]);
}
