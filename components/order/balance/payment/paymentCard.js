import React, { Component } from "react";
import { toast } from "react-toastify";
import {
    UncontrolledTooltip,
} from "reactstrap";
import MaskedInput from "react-text-mask";

import { apiHelper } from '../../../../helper/apiHelper';
import { jwtDecode } from "../../../../helper/jwtHelper";
import { CVV } from '../../../../helper/constantHelper';

// scss
import paymentCss from "./paymentCard.scss";

class PaymentCard extends Component {

    constructor() {
        super()
        this.state = {
            isAddCard: true,
            cardNumber: '**** **** ***** *****',
            cvv: ''
        }
    }

    componentDidMount() {
        if (localStorage.getItem('cardData') && localStorage.getItem('cardData') !== '') {
            var cardData = JSON.parse(localStorage.getItem('cardData'))
            this.setState({
                cardNumber: cardData.cNo ? '**** **** **** ' + cardData.cNo.substr(-4) : '**** **** ***** *****',
                cvv: cardData.cvv ? cardData.cvv : '',
                isAddCard: false
            });
        } else {
            this.getCardDetails()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.changeCard !== this.props.changeCard) {
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
                    var decodeToken = []
                    if (cardData) {
                        decodeToken = jwtDecode(cardData.card_token)
                    }
                    this.setState({
                        cardNumber: decodeToken && decodeToken.length > 0 ? '**** **** **** ' + decodeToken[0].cNo.substr(-4) : '**** **** ***** *****',
                        isAddCard: false
                    })

                    var cardDataSession = {
                        cFName: decodeToken && decodeToken.length > 0 ? decodeToken[0].cFName : '',
                        cLName: decodeToken && decodeToken.length > 0 ? decodeToken[0].cLName : '',
                        cNo: decodeToken && decodeToken.length > 0 ? decodeToken[0].cNo : '',
                        expMonth: decodeToken && decodeToken.length > 0 ? decodeToken[0].expMonth : '',
                        expYear: decodeToken && decodeToken.length > 0 ? decodeToken[0].expYear : '',
                        cvv: '',
                        country: decodeToken && decodeToken.length > 0 ? decodeToken[0].country : '',
                        email: decodeToken && decodeToken.length > 0 ? decodeToken[0].email : ''
                    }
                    localStorage.setItem('cardData', JSON.stringify(cardDataSession));
                }
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    cvvInputHandler = (val) => {
        this.setState({
            cvv: val
        }, () => {
            var cardData = localStorage.getItem('cardData');
            if (cardData && cardData !== '' && JSON.parse(cardData)) {
                cardData = JSON.parse(cardData);
                cardData.cvv = val
                localStorage.setItem('cardData', JSON.stringify(cardData))
            }
        })
    }

    render() {

        const { isAddCard, cardNumber, cvv } = this.state

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: paymentCss }}></style>
                <div className="paymentCard">
                    <div className="orderFormLabel">
                        <div className="d-flex align-items-center">
                            <div className="radioLabel d-flex align-items-center">
                                <input type="radio" name="card" onClick={() => this.props.changePaymentType('card')} defaultChecked={this.props.paymentType === 'card'} />
                                <label>
                                    Pay using Payment Card
                                    <span id="paymentCard" className="paymentCard ms-2">
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0)">
                                                <path d="M7.99967 14.8103C11.6816 14.8103 14.6663 11.8256 14.6663 8.14367C14.6663 4.46177 11.6816 1.47701 7.99967 1.47701C4.31778 1.47701 1.33301 4.46177 1.33301 8.14367C1.33301 11.8256 4.31778 14.8103 7.99967 14.8103Z" stroke="#C4C4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.99963 5.47701V8.14367" stroke="#C4C4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.99963 10.8103H8.0063" stroke="#C4C4C4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect width={16} height={16} fill="white" transform="translate(-0.000366211 0.143677)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                </label>
                                <UncontrolledTooltip
                                    placement="right"
                                    target="paymentCard"
                                >
                                    Abstract Page - is a brief summary of the service
                                    you avail or any in-depth analysis of a particular
                                    subject and is often used to help the reader
                                    quickly ascertain the paper's purpose.
                                </UncontrolledTooltip>
                            </div>
                        </div>
                    </div>
                    <div className="input-group">
                        {!isAddCard ?
                            <>
                                <input
                                    type="text"
                                    placeholder="**** **** ***** *****"
                                    className="cardInput form-control cardNumber"
                                    value={cardNumber}
                                    readOnly
                                />
                                <div className="p-relative">
                                    <MaskedInput
                                        type="password"
                                        mask={CVV}
                                        guide={false}
                                        name="cvv"
                                        className='cardInput form-control cvvInput'
                                        placeholderChar={"\u2000"}
                                        placeholder="CVV2"
                                        value={cvv}
                                        onChange={(e) => this.cvvInputHandler(e.target.value)}
                                    />
                                    {this.props.cvvError !== '' ? <p className='error-text mb-0 errorMsg'>{this.props.cvvError}</p> : null}
                                </div>
                            </>
                            :
                            null}
                        <button className={`editBtn btn outline-btn ${!isAddCard ? 'ms-3' : null}`} onClick={() => this.props.handleOpenCardFormClick(true)}>
                            {!isAddCard ? 'Edit' : 'Add'}
                        </button>
                    </div>
                    {/* <div className="d-flex align-items-center orderFormLabel">
                        <div className="radioLabel d-flex align-items-center">
                            <input type="radio" name="card" onClick={() => this.props.changePaymentType('paypal')} defaultChecked={this.props.paymentType === 'paypal'} />
                            <label htmlFor="paypal">
                                <img src="./order/paypal.svg" alt="paypal" />
                            </label>
                        </div>
                    </div>
                    <div className="d-flex align-items-center orderFormLabel">
                        <div className="radioLabel d-flex align-items-center">
                            <input type="radio" name="card" onClick={() => this.props.changePaymentType('applepay')} defaultChecked={this.props.paymentType === 'applepay'} />
                            <label htmlFor="applepay">
                                <img src="./order/applepay.svg" alt="applepay" />
                            </label>
                        </div>
                    </div> */}
                </div>
            </>
        );
    }
}

export default PaymentCard;
