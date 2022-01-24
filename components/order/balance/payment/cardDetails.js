import React, { Component } from "react";

import { apiHelper } from '../../../../helper/apiHelper';
import { jwtDecode } from "../../../../helper/jwtHelper";

import Select from 'react-select';
import { toast } from 'react-toastify';
import { AMERICANEXPRESS, OTHERCARDS, CVV } from '../../../../helper/constantHelper';
import { Spinner } from "reactstrap";
import MaskedInput from "react-text-mask";

// scss
import cardDetailsCss from "./cardDetails.scss";

class CardDetails extends Component {

    constructor() {
        super()
        this.state = {
            countryList: [],
            isExistCard: false,
            cardHolderFName: '',
            cardHolderLName: '',
            cardNumber: '',
            expiryMonth: '',
            expiryYear: '',
            cvv: '',
            country: '',
            email: '',
            isSaveCard: true,
            cardApiLoader: false,
            formError: '',
            inputErrors: {
                cardHolderFName: '',
                cardHolderLName: '',
                cardNumber: '',
                expiryMonth: '',
                expiryYear: '',
                cvv: '',
                country: '',
                email: '',
            }
        }
    }

    componentDidMount() {

        this.getCountryList()
        if (localStorage.getItem('cardData') && localStorage.getItem('cardData') !== '') {
            var cardData = JSON.parse(localStorage.getItem('cardData'))
            this.setState({
                isExistCard: true,
                cardHolderFName: cardData.cFName,
                cardHolderLName: cardData.cLName,
                cardNumber: cardData.cNo,
                expiryMonth: cardData.expMonth,
                expiryYear: cardData.expYear,
                country: { 'value': cardData.country, 'label': cardData.country },
                email: cardData.email
            });
        } else {
            this.getCardDetails()
        }

    }

    getCardDetails = () => {
        const loginToken = localStorage.getItem('token');
        var convertedToken = JSON.parse(loginToken);

        const formData = new FormData();
        formData.append("user_token", (convertedToken ? convertedToken.value : ''));

        apiHelper('getCardDetails', 'POST', formData, null)
            .then(res => {
                if (res.data.status) {

                    const cardData = res.data.data;
                    var decodeToken = cardData ? jwtDecode(cardData.card_token) : []
                    decodeToken = decodeToken.length > 0 ? decodeToken[0] : null

                    this.setState({
                        isExistCard: true,
                        cardHolderFName: decodeToken ? decodeToken.cFName : '',
                        cardHolderLName: decodeToken ? decodeToken.cLName : '',
                        cardNumber: decodeToken ? decodeToken.cNo : '',
                        expiryMonth: decodeToken ? decodeToken.expMonth : '',
                        expiryYear: decodeToken ? decodeToken.expYear : '',
                        country: decodeToken ? { 'value': decodeToken.country, 'label': decodeToken.country } : '',
                        email: decodeToken ? decodeToken.email : '',
                    })

                    var cardDataSession = {
                        cFName: decodeToken ? decodeToken.cFName : '',
                        cLName: decodeToken ? decodeToken.cLName : '',
                        cNo: decodeToken ? decodeToken.cNo : '',
                        expMonth: decodeToken ? decodeToken.expMonth : '',
                        expYear: decodeToken ? decodeToken.expYear : '',
                        cvv: '',
                        country: decodeToken ? decodeToken.country : '',
                        email: decodeToken ? decodeToken.email : ''
                    }
                    localStorage.setItem('cardData', JSON.stringify(cardDataSession));
                }
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    getCountryList = () => {

        apiHelper('countrylist', 'GET', null, null)
            .then(res => {
                if (res.data.status) {
                    var countryArr = res.data.data.map(info => ({ value: info.country_name, label: info.country_name }))
                    this.setState({
                        countryList: countryArr
                    })
                }
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    handleCountryChange = selectedOption => {
        this.setState({ country: selectedOption }, () => {
            this.formValidation()
        });
    };

    handleSaveCard = () => {
        this.setState({ isSaveCard: !this.state.isSaveCard });
    }

    changeFName = (e) => {
        this.setState({
            cardHolderFName: e.target.value
        }, () => {
            this.formValidation()
        })
    }

    changeLName = (e) => {
        this.setState({
            cardHolderLName: e.target.value
        }, () => {
            this.formValidation()
        })
    }

    changeCardNumber = (e) => {
        this.setState({
            cardNumber: e.target.value
        }, () => {
            this.formValidation()
        })
    }

    changeEMonth = (e) => {
        this.setState({
            expiryMonth: e.target.value !== '' ? parseInt(e.target.value) : ''
        }, () => {
            this.formValidation()
        })
    }

    changeEYear = (e) => {
        this.setState({
            expiryYear: e.target.value !== '' ? parseInt(e.target.value) : ''
        }, () => {
            this.formValidation()
        })
    }

    changeCvv = (e) => {
        this.setState({
            cvv: e.target.value
        }, () => {
            this.formValidation()
        })
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        }, () => {
            this.formValidation()
        })
    }

    //formValidation
    formValidation = () => {

        const { cardHolderFName, cardHolderLName, cardNumber, expiryMonth, expiryYear, cvv, country, email } = this.state;

        var reEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        var reFLName = /[0-9`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/

        var date = new Date();
        var currMonth = date.getMonth() + 1;
        var currYear = date.getFullYear();

        // Form validation
        let err = {};
        if (!cardHolderFName) { err.cardHolderFName = "Enter first name"; }
        if (reFLName.test(cardHolderFName)) { err.cardHolderFName = "May only include letters and spaces" }
        if (!cardHolderLName) { err.cardHolderLName = "Enter last name"; }
        if (reFLName.test(cardHolderLName)) { err.cardHolderLName = "May only include letters and spaces" }
        if (!cardNumber) {
            err.cardNumber = "Enter card number";
        } else {
            const regexPattern = {
                MASTERCARD: new RegExp(/^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/),
                VISA: new RegExp(/^4[0-9]{2,}$/),
                AMERICAN_EXPRESS: new RegExp(/^3[47][0-9]{5,}$/),
                DISCOVER: new RegExp(/^6(?:011|5[0-9]{2})[0-9]{3,}$/),
                // DINERS_CLUB:  new RegExp(/^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/),
                JCB: new RegExp(/^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/),
                UNIONPAY: new RegExp(/^(62[0-9]{14,17})$/),
                MAESTRO: new RegExp(/^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/),
                DINERS_CLUB: new RegExp(/3(?:0[0-5]|[68][0-9])[0-9]{11}/g)
            };
            for (const card in regexPattern) {
                if (cardNumber.replace(/[^\d]/g, "").match(regexPattern[card])) {
                    if (!/^[1-6]{1}[0-9]{11,15}$/i.test(cardNumber.replace(/[^\d]/g, "").trim())) {
                        err.cardNumber = "Enter a valid Card";
                    }
                }
            }
        }
        if (!expiryMonth || expiryMonth === '') {
            err.expiryMonth = "Enter expiry month";
        } else if (expiryMonth !== '' && (expiryMonth > 12 || expiryMonth <= 0)) {
            err.expiryMonth = "Invalid expiry month";
        } else {
            if (!expiryYear) { err.expiryYear = "Enter expiry year"; }
            else if (expiryYear !== '' && (expiryYear < currYear || (expiryYear.toString()).length > 4)) { err.expiryYear = "Invalid expiry year"; }
            else if (expiryMonth !== '' && expiryYear !== '' && expiryYear === currYear && expiryMonth <= currMonth) { err.expiryMonth = "Invalid expiry month"; }
        }
        if (!cvv) { err.cvv = "Enter CVV"; }
        if (cvv !== '' && ((cvv).length < 3 || (cvv).length > 4)) { err.cvv = "Invalid cvv"; }
        if (!country) { err.country = "select country"; }
        if (!email) { err.email = "Enter email"; }
        if (!reEmail.test(email)) { err.email = "Please enter a valid email address" }

        this.setState({ inputErrors: err });
    }

    addBalance = () => {

        // First check validation 
        this.formValidation();

        setTimeout(() => {

            if (Object.getOwnPropertyNames(this.state.inputErrors).length === 0) {

                const { isSaveCard, isExistCard } = this.state;
                const loginToken = localStorage.getItem('token');
                var convertedToken = JSON.parse(loginToken);
                const { cardHolderFName, cardHolderLName, cardNumber, expiryMonth, expiryYear, country, cvv, email } = this.state

                let expiry_date = expiryMonth + "/" + expiryYear;
                var cardData = {
                    cFName: cardHolderFName,
                    cLName: cardHolderLName,
                    cNo: cardNumber.replace(/[^\d]/g, "").trim(),
                    expMonth: expiryMonth,
                    expYear: expiryYear,
                    cvv: cvv,
                    country: country.label,
                    email: email
                }
                localStorage.setItem('cardData', JSON.stringify(cardData));

                if (isSaveCard) {
                    // add card to db

                    this.setState({
                        cardApiLoader: true
                    })

                    //formData
                    const formData = new FormData();
                    formData.append("card_firstname", cardHolderFName);
                    formData.append("card_lastname", cardHolderLName);
                    formData.append("cardnumber", cardNumber.replace(/[^\d]/g, "").trim());
                    formData.append("expiry", expiry_date);
                    formData.append("country", country.label);
                    formData.append("cvv", cvv);
                    formData.append("email", email);
                    formData.append("user_token", convertedToken ? convertedToken.value : '');

                    // sendCardDetails
                    apiHelper('saveCardDetails', 'POST', formData, null).then(res => {
                        this.setState({
                            cardApiLoader: false
                        })
                        if (res.data.status === true) {
                            toast.success(res.data.message);
                            this.props.updateChangeCard()
                            this.props.backOnList()
                            // this.setState({ addEditSection: false });
                        }
                        else if (res.data.status === false) {
                            toast.error(res.data.message);
                        }
                    }).catch(error => console.error(`Error: ${error}`));

                } else {
                    //remove card from db

                    if (isExistCard) {
                        this.setState({
                            cardApiLoader: true
                        })
                        const formData = new FormData();
                        formData.append("user_token", convertedToken ? convertedToken.value : '');

                        // sendCardDetails
                        apiHelper('deleteCardDetails', 'POST', formData, null).then(res => {
                            this.setState({
                                cardApiLoader: false
                            })
                            if (res.data.status === true) {
                                toast.success(res.data.message);
                                this.props.updateChangeCard()
                                this.props.backOnList()
                                // this.setState({ addEditSection: false });
                            }
                            else if (res.data.status === false) {
                                toast.error(res.data.message);
                            }
                        }).catch(error => console.error(`Error: ${error}`));
                    } else {
                        this.props.backOnList()
                    }
                }
            }

        }, 20);
    }

    render() {

        const { cardHolderFName, cardHolderLName, cardNumber, expiryMonth, expiryYear, cvv, country, email, countryList, inputErrors, isSaveCard, cardApiLoader } = this.state;

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: cardDetailsCss }}></style>
                <div className="cardDetails">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="First name as on card"
                                            value={cardHolderFName}
                                            onChange={this.changeFName}
                                        />
                                        <p className="error-text">{inputErrors.cardHolderFName}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Last name as on card"
                                            value={cardHolderLName}
                                            onChange={this.changeLName}
                                        />
                                        <p className="error-text">{inputErrors.cardHolderLName}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Card Number</label>
                                {/* <input
                                    type="number"
                                    className="form-control"
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    value={cardNumber}
                                    onChange={this.changeCardNumber}
                                /> */}
                                <MaskedInput
                                    mask={["37", "34"].includes(this.state && cardNumber !== '' && cardNumber.split("").splice(0, 2).join("")) ? AMERICANEXPRESS : OTHERCARDS}
                                    guide={false}
                                    placeholderChar={"\u2000"}
                                    placeholder="xxxx xxxx xxxx xxxx"
                                    name="cardNum"
                                    value={cardNumber}
                                    onChange={this.changeCardNumber}
                                    className='form-control'
                                // onBlur={handleBlur}
                                />
                                <p className="error-text">{inputErrors.cardNumber}</p>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Card Expiry</label>
                                        <div className="d-flex">
                                            <div className="input-group flex-wrap">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="MM"
                                                    value={expiryMonth}
                                                    onChange={this.changeEMonth}
                                                />
                                                <p className="error-text">{inputErrors.expiryMonth}</p>
                                            </div> 
                                            <span className="arrow">/</span>
                                            <div className="input-group">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="YYYY"
                                                    value={expiryYear}
                                                    onChange={this.changeEYear}
                                                />
                                                <p className="error-text">{inputErrors.expiryYear}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Security number</label>
                                        {/* <input
                                            type="number"
                                            className="form-control"
                                            placeholder="CVV2"
                                            value={cvv}
                                            onChange={this.changeCvv}
                                        /> */}
                                        <MaskedInput
                                            type="password"
                                            mask={CVV}
                                            guide={false}
                                            name="cvv"
                                            className='form-control'
                                            placeholderChar={"\u2000"}
                                            placeholder="CVV2"
                                            value={cvv}
                                            onChange={this.changeCvv}
                                        />
                                        <p className="error-text">{inputErrors.cvv}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Country</label>
                                        <Select
                                            value={country}
                                            onChange={this.handleCountryChange}
                                            options={countryList}
                                            isSearchable={true}
                                            classNamePrefix="country-dd"
                                            // menuIsOpen
                                        />
                                        <p className="error-text">{inputErrors.country}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            value={email}
                                            onChange={this.changeEmail}
                                        />
                                        <p className="error-text">{inputErrors.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-between bottom">
                                <p className="condition">
                                    <input type="checkbox" checked={isSaveCard} onChange={this.handleSaveCard} />
                                    <label>
                                        Save information to pay faster next time
                                    </label>
                                </p>
                                <a className="btn confirmPay-btn">Update Card</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn theme-btn w-100" onClick={this.addBalance} disabled={cardApiLoader}>
                    {cardApiLoader ? <Spinner animation="border" /> : 'Save'}
                </button>
            </>
        )
    }
}
export default CardDetails;
