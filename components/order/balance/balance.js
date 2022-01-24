import React, { Component } from "react";
import CardDetails from "./payment/cardDetails";
import PaymentCard from "./payment/paymentCard";
import CardpaymentDetails from "./cardpaymentDetails";
import DataTable from "../../TableData";
import { apiHelper } from '../../../helper/apiHelper';
import { jwtDecode } from "../../../helper/jwtHelper";
import { toast } from 'react-toastify';
import ReactToastifyCss from 'react-toastify/dist/ReactToastify.min.css';
import { Spinner } from "reactstrap";
import moment from "moment";

// scss
import tableData from "../../TableData/tableDate.scss";
import balanceCss from "./balance.scss";
class Balance extends Component {
    constructor() {
        super()
        this.state = {
            isShowAddBalance: false,
            listLoader: false,
            sizePerPage: 10,
            balanceList: [],
            balancePage: 1,
            balanceData: [],
            totalBalanceRecord: 0,
            userBalance: 0,
            redeemAmount: '',
            redeemAmountErr: '',
            redeemApiLoader: false,
            paymentType: 'card',
            privacyAccept: false,
            cvvError: '',
            isOpenCardForm: false,
            changeCard: false
        }
    }

    componentDidMount() {
        const loginToken = localStorage.getItem('token');
        var convertedToken = JSON.parse(loginToken);
        var decodeToken = convertedToken ? jwtDecode(convertedToken.value) : null;

        this.setState({
            userBalance: (decodeToken && decodeToken.account.total_balance ? decodeToken.account.total_balance : 0)
        })

        this.setState({
            listLoader: true
        })
        this.getBalanceList(1, '', '', '');
        localStorage.setItem('currStep', 1)
    }

    componentWillUnmount() {
        localStorage.removeItem('cardData')
    }

    getBalanceList = (page, search, sortField, sortOrder) => {
        const loginToken = localStorage.getItem('token');
        var convertedToken = JSON.parse(loginToken);

        const formData = new FormData();
        formData.append("user_token", (convertedToken ? convertedToken.value : ''));
        formData.append("search", search);
        formData.append("sortField", (sortField === 'transaction_amount' ? 'amount' : (sortField === 'current_wallet_balance' ? 'balance' : sortField)));
        formData.append("sortType", sortOrder);

        apiHelper('displaybalance', 'POST', formData, null)
            .then(res => {
                const balanceListData = res.data.status ? res.data.data : [];

                var balanceData = [];
                if (balanceListData.length > 0) {
                    var currentIndex = (page - 1) * this.state.sizePerPage;
                    balanceData = balanceListData.slice(currentIndex, currentIndex + this.state.sizePerPage);
                }

                this.setState({
                    listLoader: false,
                    balancePage: page,
                    totalBalanceRecord: balanceListData.length,
                    balanceData: balanceData
                })
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    updateChangeCard = () => {
        this.setState({ changeCard: !this.state.changeCard })
    }

    changeDateFormat = (cell, row) => {
        return moment(new Date(cell)).format('DD MMM YYYY');
    }

    changeTrNoFormat = (cell, row) => {
        return <div className='transNo-column'>{cell}</div>;
    }

    changeTrDetailFormat = (cell, row) => {
        return <div className='transDetail-column'>{cell}</div>;
    }

    changePriceFormat = (cell, row) => {
        return <span className={cell.includes('+') ? 'balance-plus' : 'balance-minus'}>{cell}</span>;
    }

    handleBalancePageChange = (type, { page, searchText, sortField, sortOrder }) => {
        var pageNo = page
        if (type === 'search') {
            pageNo = 1
        }

        this.getBalanceList(pageNo, searchText, sortField, sortOrder)
    }

    addBalanceClick = () => {
        this.setState({
            isShowAddBalance: true
        })
    }

    handleOpenCardFormClick = (status) => {
        this.setState({
            isOpenCardForm: status
        })
    }

    backOnList = () => {
        if (this.state.isOpenCardForm) {
            this.setState({
                isOpenCardForm: false
            })
        } else {
            this.setState({
                isShowAddBalance: false
            })
            localStorage.removeItem('cardData')
        }
    }

    handleReedemAmount = (val) => {
        var err = '';

        if (val <= 0 || val === '') {
            err = 'Please enter a redeem amount.'
        }
        // else if (val > this.state.userBalance) {
        //     err = 'You can not redeem more than wallet value.'
        // }
        else {
            err = ''
        }

        this.setState({
            redeemAmount: val,
            redeemAmountErr: err
        })
    }

    changePaymentType = (type) => {
        this.setState({
            paymentType: type
        })
    }

    handlePrivacyAccept = () => {
        this.setState({
            privacyAccept: !this.state.privacyAccept
        })
    }

    addBalanceToWallet = () => {
        this.setState({
            cvvError: ''
        })
        if (this.state.paymentType !== '') {
            if (this.state.paymentType === 'card') {
                if (localStorage.getItem('cardData') && localStorage.getItem('cardData') !== '') {
                    var cardData = JSON.parse(localStorage.getItem('cardData'))

                    this.handleReedemAmount(this.state.redeemAmount)
                    setTimeout(() => {

                        if (this.state.redeemAmountErr === '') {
                            if (cardData && cardData.cvv !== '') {
                                if ((cardData.cvv).length < 3 || (cardData.cvv).length > 4) {
                                    // toast.error('Invalid cvv')
                                    this.setState({
                                        cvvError: 'Invalid cvv'
                                    })
                                } else {
                                    if (this.state.privacyAccept) {
                                        this.setState({
                                            redeemApiLoader: true
                                        })

                                        const loginToken = localStorage.getItem('token');
                                        var convertedToken = JSON.parse(loginToken);

                                        const formData = new FormData();
                                        formData.append("user_token", (convertedToken ? convertedToken.value : ''));
                                        formData.append("amount", this.state.redeemAmount);
                                        formData.append("cardnumber", cardData.cNo);
                                        formData.append("cvv", cardData.cvv);
                                        formData.append("expiry", cardData.expMonth + '/' + cardData.expYear);

                                        apiHelper('addBalance', 'POST', formData, null)
                                            .then(res => {

                                                this.setState({
                                                    redeemApiLoader: false
                                                })

                                                if (res.data.status) {

                                                    convertedToken.value = res.data.data.user_token
                                                    localStorage.setItem('token', JSON.stringify(convertedToken));

                                                    localStorage.removeItem('cardData')

                                                    var decodeToken = jwtDecode(res.data.data.user_token)
                                                    this.setState({
                                                        redeemAmount: 0,
                                                        privacyAccept: false,
                                                        userBalance: decodeToken && decodeToken.account.total_balance ? decodeToken.account.total_balance : 0
                                                    })
                                                    toast.success(res.data.message);

                                                    this.getBalanceList(1, '', '', '');
                                                    this.props.changeUserProfile()
                                                    this.backOnList()
                                                } else {
                                                    toast.error(res.data.message);
                                                }
                                            })
                                            .catch(error => console.error(`Error: ${error}`));
                                    } else {
                                        toast.error('Please accept privacy policy');
                                    }
                                }
                            } else {
                                // toast.error('enter cvv');
                                this.setState({
                                    cvvError: 'Enter cvv'
                                })
                            }
                        }
                    }, 50);

                } else {
                    toast.error('please add card');
                }
            }
        } else {
            toast.error('please select payment type');
        }
    }

    render() {

        const { isShowAddBalance, balanceData, balancePage, sizePerPage, totalBalanceRecord, userBalance, redeemAmount, redeemAmountErr, paymentType, isOpenCardForm, redeemApiLoader, privacyAccept, listLoader, cvvError } = this.state

        const balanceColumns = [
            { dataField: 'date', text: 'Date', sort: true, formatter: this.changeDateFormat },
            { dataField: 'transaction_text', text: 'Transaction Number', sort: false, formatter: this.changeTrNoFormat },
            { dataField: 'journal_text', text: 'Transaction Details', sort: false, formatter: this.changeTrDetailFormat },
            { dataField: 'transaction_amount', text: 'Amount', sort: true, formatter: this.changePriceFormat },
            { dataField: 'current_wallet_balance', text: 'Balance', sort: true }
        ];

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: tableData }}></style>
                <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
                <style dangerouslySetInnerHTML={{ __html: balanceCss }}></style>
                <div className="balance">
                    <h2 className="title">Balance</h2>
                    <div className="row orderBalance align-items-center">
                        <div className="col">
                            {isShowAddBalance ? (
                                <div className="back" onClick={this.backOnList}>
                                    <svg
                                        width={12}
                                        height={12}
                                        viewBox="0 0 12 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5.99935 1.3335L1.33268 6.00016L5.99935 10.6668M10.666 6.00016H1.99935H10.666Z"
                                            stroke="#12245A"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="ms-2">Back</span>
                                </div>
                            ) :
                                <div className="myBalance input-group">
                                    <span>My Balance</span>
                                    <span>${userBalance.toFixed(2)}</span>
                                </div>
                            }
                        </div>
                        <div className="col">
                            {
                                !isShowAddBalance ?
                                    <div className="text-end">
                                        <button className="btn theme-btn" onClick={this.addBalanceClick}>Add Balance</button>
                                    </div> :
                                    <div className="myBalance input-group ms-auto">
                                        <span>My Balance</span>
                                        <span>${userBalance.toFixed(2)}</span>
                                    </div>
                            }
                        </div>
                    </div>

                    {
                        isShowAddBalance ?
                            <div className="section-part">
                                <div className="addAmount">
                                    <h3 className="title">Add funds to your account</h3>
                                    {!isOpenCardForm ?
                                        <div className="row">
                                            <div className="col-md-6 pe-xl-5">
                                                <div className="form-group">
                                                    <label>Amount to Add</label>
                                                    <input
                                                        type="number"
                                                        placeholder="$0.00"
                                                        className="form-control"
                                                        value={redeemAmount}
                                                        onChange={(e) => this.handleReedemAmount(e.target.value)}
                                                    />
                                                    <span className={redeemAmountErr !== '' ? 'errorMsg' : ''}>{redeemAmountErr}</span>
                                                </div>
                                                <PaymentCard
                                                    changeCard={this.state.changeCard}
                                                    changePaymentType={this.changePaymentType}
                                                    paymentType={paymentType}
                                                    handleOpenCardFormClick={this.handleOpenCardFormClick}
                                                    cvvError={cvvError}
                                                />
                                                <p className="condition">
                                                    <input type="checkbox" checked={privacyAccept} onChange={this.handlePrivacyAccept} />
                                                    <label>
                                                        YES, i understand and agree to the
                                                        <a href={`${process.env.hostBaseUrl}/terms-of-use`}>&nbsp;terms of service</a>, including the
                                                        <a href={`${process.env.hostBaseUrl}/privacy-policy`}>&nbsp;Privacy Policy</a>&nbsp;and&nbsp;<a href={`${process.env.hostBaseUrl}/revision-policy`}>Refund Policy</a>
                                                    </label>
                                                </p>
                                                <button className="btn theme-btn w-100" onClick={this.addBalanceToWallet} disabled={redeemApiLoader}>
                                                    {redeemApiLoader ? <Spinner animation="border" /> :
                                                        'Proceed'}
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <CardpaymentDetails
                                                    src="/order/enterCard.svg"
                                                    title="Make a secure payment"
                                                    desc="We use advanced 256 bit encryption to protect your information and securely process all transactions."
                                                />
                                            </div>
                                        </div>
                                        :
                                        <div className="row">
                                            <div className="col-md-6 pe-xl-5">
                                                {/* <div className="accAmount">
                                                    <label>Amount</label>
                                                    <span>$180.00</span>
                                                </div> */}
                                                <CardDetails backOnList={this.backOnList} updateChangeCard={this.updateChangeCard} />
                                            </div>
                                            <div className="col-md-6">
                                                <CardpaymentDetails
                                                    src="/order/securePayment.svg"
                                                    title="Enter Card Details"
                                                    desc="Enter your card details to proceed this payment"
                                                />
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div> :
                            <div className="p-relative">
                                {listLoader ?
                                    <div className="loader">
                                        <Spinner animation="border" />
                                    </div> :
                                    <DataTable
                                        keyField="record_id"
                                        data={balanceData}
                                        page={balancePage}
                                        columns={balanceColumns}
                                        sizePerPage={sizePerPage}
                                        totalSize={totalBalanceRecord}
                                        handleTableChange={this.handleBalancePageChange}
                                        isSearchable={true}
                                    />
                                }
                            </div>
                    }
                </div>
            </>
        )
    }
}

export default Balance