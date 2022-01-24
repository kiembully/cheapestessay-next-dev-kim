import React, { Component } from 'react';
import { UncontrolledTooltip } from "reactstrap";
import Select from "react-select";

// API and JWT helper
import { apiHelper } from '../../../../helper/apiHelper';
import { jwtDecode } from "../../../../helper/jwtHelper";

// Toaster
import { toast } from 'react-toastify';
import ReactToastifyCss from 'react-toastify/dist/ReactToastify.min.css';

// React Bootstrap
import { ButtonGroup, ToggleButton } from "react-bootstrap";

// scss
import orderCss from "../../../../styles/order.scss";
import OrderSidebarRight from "../sidebarRight";

const preferred = [
    { value: "1", id: 'any_writer', name: "Any Writer  (Free)" },
    { value: "2", id: 'top_10_writer', name: "Top 10 Writers (+25%)" },
    { value: "3", id: 'my_previous_writer', name: "Preferred Writer (+20%)" },
];

class Index extends Component {
    constructor() {
        super()
        this.state = {

            // order variables
            orderId: 0,
            orderToken: null,
            lifeTimeDiscount: 0,
            enteredTopic: "Writer's Choice",
            enteredPaperInst: '',
            formatOption: [],
            selectedFormatOption: null,
            formatDefaultValue: 'MLA',
            disciplineOption: false,
            selectedDisciplineOption: false,
            disciplineDefaultValue: 'English (U.S)',
            radioValuePreferred: "1",
            preferredName: "any_writer",
            selectedWriter: "",
            writerOption: [],
            writerDefault: 'W16',
            sourceNumber: 0,
            chartNumber: 0,
            slideNumber: 0,
            additionalExtra: [],
            checkEmail: false,
            checkTurnitin: false,
            checkAbstract: false,

            // if order changed then pass props
            isorderChanged: false,

            // discountCoupon: '',

            // xtra prices
            aprice: 0,
            sprice: '$0',
            tprice: '$0',

            emailToggle: false
        }
    }

    // storeRightData
    storeRightData = (key, value) => {
        var rightData = localStorage.getItem("orderRight");

        let item = {};
        if (rightData && rightData !== '') {
            item = JSON.parse(rightData);

            item[key] = value;
            localStorage.setItem("orderRight", JSON.stringify(item));

            if (item) {
                this.setState({
                    formatDefaultValue: JSON.parse(rightData).format ? JSON.parse(rightData).format : 'MLA',
                    disciplineDefaultValue: JSON.parse(rightData).discipline ? JSON.parse(rightData).discipline : 'English (U.S)',
                    radioValuePreferred: JSON.parse(rightData).preferred ? JSON.parse(rightData).preferred : '1',
                    sourceNumber: JSON.parse(rightData).source ? JSON.parse(rightData).source : 0,
                    chartNumber: JSON.parse(rightData).chart ? JSON.parse(rightData).chart : 0,
                    slideNumber: JSON.parse(rightData).slide ? JSON.parse(rightData).slide : 0,
                    writerDefault: JSON.parse(rightData).writerId ? JSON.parse(rightData).writerId : 'W16',
                });
            }
        }
    }

    // setDiscount = (token) => {
    //     localStorage.setItem('discount_token', token);
    //     this.storeRightData('discount_token', token);
    //     this.setState({
    //         discountCoupon: token
    //     }, () => {
    //         this.setOrderData()
    //     })

    // }

    //formatChangeHandler
    formatChangeHandler = (selectedFormatOption) => {
        this.setState({ selectedFormatOption: selectedFormatOption }, () => {
            this.setOrderData();
            this.storeRightData('format', selectedFormatOption.label);
        });
    }

    //disciplineChangeHandler
    disciplineChangeHandler = (selectedDisciplineOption) => {
        this.setState({ selectedDisciplineOption: selectedDisciplineOption }, () => {
            this.setOrderData();
            this.storeRightData('discipline', selectedDisciplineOption.label);
        });
    }

    //  radioValuePreferredHandler
    radioValuePreferredHandler = (e, radioArr) => {
        this.setState({ radioValuePreferred: e, preferredName: radioArr.id }, () => { this.setOrderData(); });
        this.storeRightData('preferred', e);
        this.storeRightData('preferredWriter', radioArr.name);
        if (e === "2") {
            this.storeRightData('topWriter', '+25%');
            this.storeRightData('writerId', '');
        }
        else if (e === "1") {
            this.storeRightData('topWriter', '');
            this.storeRightData('writerId', '');
        }
        else if (e === "3") {
            // here set 

            const { writerOption } = this.state
            var defaultWriter = writerOption && writerOption.length > 0 && writerOption[0].options.length > 0 ?
                writerOption[0].options[0]
                : ''

            this.setState({ selectedWriter: defaultWriter });
            this.storeRightData('writerId', defaultWriter.value);
            this.storeRightData('topWriter', '+20%');
        }
    }

    // selectWriterChange
    selectWriterChange = (selectedWriter) => {
        this.setState({ selectedWriter: selectedWriter, writerDefault: selectedWriter.value }, () => { this.setOrderData(); });
        if (selectedWriter.writer === "top10") {
            this.storeRightData('topWriter', '+25%');
            this.storeRightData('writerId', selectedWriter.value);
        }
        else {
            this.storeRightData('writerId', selectedWriter.value);
            this.storeRightData('topWriter', '');
        }
    }

    // sourceIncrement
    sourceIncrement = () => {
        const { sourceNumber } = this.state;
        var noCount = sourceNumber + 1;
        this.storeRightData('source', noCount);
        this.setState({ sourceNumber: noCount }, () => { this.setOrderData(); });
    }

    //sourceDecrement
    sourceDecrement = () => {
        const { sourceNumber } = this.state;
        var noCount = sourceNumber - 1;
        if (noCount < 1) { noCount = 0; }

        this.storeRightData('source', noCount);
        this.setState({ sourceNumber: noCount }, () => { this.setOrderData(); });
    }

    //chartIncrement
    chartIncrement = () => {
        const { chartNumber } = this.state;
        var noCount = chartNumber + 1;
        this.storeRightData('chart', noCount);
        this.setState({ chartNumber: noCount }, () => { this.setOrderData(); });
    }

    //chartDecrement
    chartDecrement = () => {
        const { chartNumber } = this.state;
        var noCount = chartNumber - 1;
        if (noCount < 1) { noCount = 0; }

        this.storeRightData('chart', noCount);
        this.setState({ chartNumber: noCount }, () => { this.setOrderData(); });
    }

    //slideIncrement
    slideIncrement = () => {
        var noCount = this.props.current_slide + 1;
        this.storeRightData('slide', noCount);
        this.setState({ slideNumber: noCount }, () => { this.setOrderData(); });
        this.props.changeSlide(noCount);
    }

    //slideDecrement
    slideDecrement = () => {
        var noCount = this.props.current_slide - 1;
        if (noCount < 1) { noCount = 0; }

        this.storeRightData('slide', noCount);
        this.setState({ slideNumber: noCount }, () => { this.setOrderData(); });
        this.props.changeSlide(noCount);
    }

    //checkboxAbstractHandler
    checkboxAbstractHandler = (e) => {
        const { additionalExtra, orderToken } = this.state;
        this.storeRightData('abstractPrice', 0);
        this.setState({ checkAbstract: e.target.checked });
        if (e.target.checked) {
            this.storeRightData('abstractPrice', orderToken && orderToken.abstractPageprice);
            this.setState({ additionalExtra: [...additionalExtra, 6] }, () => { this.setOrderData(); });
        }
        else {
            this.storeRightData('abstractPrice', 0);
            var addValue = additionalExtra;
            var index = addValue.indexOf('6');
            if (index !== -1) {
                addValue.splice(index, 1);
            } else {
                var index = addValue.indexOf(6);
                if (index !== -1) {
                    addValue.splice(index, 1);
                }
            }
            this.setState({ additionalExtra: addValue }, () => { this.setOrderData(); });
        }
    }

    //checkboxEmailHandler
    checkboxEmailHandler = (e) => {

        // console.log(e.target.checked);

        // email toggle
        this.setState({ emailToggle: e.target.checked });

        const { additionalExtra, orderToken } = this.state;
        this.setState({ checkEmail: e.target.checked });

        if (e.target.checked) {
            this.storeRightData('emailPrice', orderToken && orderToken.sendEmailPrice);
            this.setState({ additionalExtra: [...additionalExtra, 7] }, () => { this.setOrderData(); });
        }
        else {
            this.storeRightData('emailPrice', 0);
            var addValue = additionalExtra;
            var index = addValue.indexOf('7');
            if (index !== -1) {
                addValue.splice(index, 1);
            } else {
                var index = addValue.indexOf(7);
                if (index !== -1) {
                    addValue.splice(index, 1);
                }
            }
            this.setState({ additionalExtra: addValue }, () => { this.setOrderData(); });
        }
    }

    //checkboxTurnitinHandler
    checkboxTurnitinHandler = (e) => {
        const { additionalExtra, orderToken } = this.state;
        this.setState({ checkTurnitin: e.target.checked });
        if (e.target.checked) {
            this.storeRightData('turnitinPrice', orderToken && orderToken.turnitinPrice);
            this.setState({ additionalExtra: [...additionalExtra, 5] }, () => { this.setOrderData(); });
        }
        else {
            this.storeRightData('turnitinPrice', 0);
            var addValue = additionalExtra;
            var index = addValue.indexOf('5');
            if (index !== -1) {
                addValue.splice(index, 1);
            } else {
                var index = addValue.indexOf(5);
                if (index !== -1) {
                    addValue.splice(index, 1);
                }
            }
            this.setState({ additionalExtra: addValue }, () => { this.setOrderData(); });
        }
    }

    // componentDidMount
    componentDidMount() {
        this.getFormatStyle();
        this.getDiscipline();
        this.getWriters();

        // set default slide
        this.setState({ slideNumber: this.props.current_slide });

        setTimeout(() => {
            this.setDefaultVal()
        }, 50);

        var ordId = this.props.getIdFromUrl()
        if (ordId && ordId !== '') {
            this.setState({
                orderId: ordId
            })
        }

    }

    componentDidUpdate(prevProps, prevState) {

        if (this.props.currentStep !== prevProps.currentStep && this.props.currentStep === 2) {
            // if (localStorage.getItem('orderViewId') && localStorage.getItem('orderViewId') !== '') {
            //     this.setState({
            //         orderId: localStorage.getItem('orderViewId')
            //     }, () => {
            //         this.getOrder();
            //     })
            // } else {
            this.getWriters();
            this.setDefaultVal()
            // }

            var ordId = this.props.getIdFromUrl()
            if (ordId && ordId !== '') {
                this.setState({
                    orderId: ordId
                })
            }
        }
    }

    setDefaultVal = () => {
        const { lifeTimeDiscount, formatDefaultValue, disciplineDefaultValue, writerOption } = this.state;
        var order_token = localStorage.getItem("orderToken");
        if (order_token && order_token !== '') {
            this.setState({ orderToken: jwtDecode(order_token) });
            var data = jwtDecode(order_token);

            var fomatval = data.format_label && data.format_label !== '' ? data.format_label : formatDefaultValue;
            var disciplineVal = data.discipline_label && data.discipline_label !== '' ? data.discipline_label : disciplineDefaultValue;

            var writerTypeId = data.preferred_writer ?
                preferred.find(function (item, i) {
                    if (item.id === data.preferred_writer) {
                        return item;
                    }
                }) :
                null;

            this.setState({
                enteredTopic: data.topic,
                enteredPaperInst: data.add_detail,
                aprice: data.abstractPageprice,
                slideNumber: data.slide ? data.slide : 0,
                sprice: (data.sendEmailPrice && parseFloat(data.sendEmailPrice) > 0 ? '$' : '') + data.sendEmailPrice,
                tprice: (data.turnitinPrice && parseFloat(data.turnitinPrice) > 0 ? '$' : '') + data.turnitinPrice,
                formatDefaultValue: fomatval,
                disciplineDefaultValue: disciplineVal,
                lifeTimeDiscount: data.life_time_Disc,
                preferredName: data.preferred_writer,
                radioValuePreferred: writerTypeId && writerTypeId.value ? writerTypeId.value : '1',
                writerDefault: data.writer_id,
                chartNumber: data.chart ? data.chart : 0
            }, () => {
                this.props.changeSlide(data.slide ? data.slide : 0);
            });

            if (data.additionalextra !== '' && data.additionalextra.length > 0) {
                this.setState({
                    checkTurnitin: data.additionalextra.includes(5) || data.additionalextra.includes('5'),
                    checkAbstract: data.additionalextra.includes(6) || data.additionalextra.includes('6'),
                    checkEmail: data.additionalextra.includes(7) || data.additionalextra.includes('7'),
                    additionalExtra: data.additionalextra
                }, () => {
                    if (this.state.checkAbstract) {
                        this.storeRightData('abstractPrice', data.abstractPageprice);
                    }
                    if (this.state.checkTurnitin) {
                        this.storeRightData('turnitinPrice', data.turnitinPrice);
                    }
                    if (this.state.checkEmail) {
                        this.storeRightData('emailPrice', 'Free');
                    }
                });
            }

            this.storeRightData('slide', data.slide ? data.slide : 0);
            this.storeRightData('chart', data.chart ? data.chart : 0);
            this.storeRightData('lifetimeDiscount', data.life_time_Disc ? data.life_time_Disc : lifeTimeDiscount);
            this.storeRightData('format', fomatval);
            this.storeRightData('writerId', data.writer_id);
            this.storeRightData('writerDefault', data.writer_id);
            this.storeRightData('preferred', writerTypeId && writerTypeId.value ? writerTypeId.value : '1');
            this.storeRightData('preferredWriter', writerTypeId && writerTypeId.name ? writerTypeId.name : 'Any Writer  (Free)');
            this.storeRightData('discipline', disciplineVal);

            setTimeout(() => {
                this.setState({
                    isorderChanged: !this.state.isorderChanged
                })
            }, 50);
        }
    }

    getOrder = async () => {

        const loginToken = localStorage.getItem('token');
        var convertedToken = JSON.parse(loginToken);

        const formData = new FormData();
        formData.append("order_id", this.state.orderId);
        formData.append("user_token", convertedToken ? convertedToken.value : '');

        var res = await apiHelper('getorderV1', 'POST', formData, null)
        if (res.data.status) {
            const data = res.data.data;
            localStorage.setItem("orderToken", data.order_token);
            localStorage.setItem("uploadedToken", data.uploaded_token);

            setTimeout(() => {
                this.setDefaultVal();
            }, 100);
        }

    }

    //getFormatStyle
    getFormatStyle = async () => {
        apiHelper('displayformatstyle', 'GET', null, null).then(res => {
            if (res.data.status) {
                const data = res.data.data;

                let myFormat = [];
                (data).forEach(format => {
                    myFormat.push({ label: format.style_name, value: format.style_id });
                });

                this.setState({ formatOption: myFormat });
            }
        }).catch(error => console.error(`Error: ${error}`));
    }

    //getDiscipline
    getDiscipline = async () => {
        apiHelper('displaydiscipline', 'GET', null, null).then(res => {
            if (res.data.status) {
                const data = res.data.data;

                let myDiscipline = [];
                (data).forEach(dd => {
                    myDiscipline.push({ label: dd.discipline, value: dd.discipline_id });
                });
                this.setState({ disciplineOption: myDiscipline });
            }
        }).catch(error => console.error(`Error: ${error}`));
    }

    //getWriters
    getWriters = async () => {

        const loginToken = localStorage.getItem('token');
        var convertedToken = JSON.parse(loginToken);

        const formData = new FormData();
        formData.append('user_token', convertedToken ? convertedToken.value : '');

        apiHelper('displaywriters', 'POST', formData, null).then(res => {
            if (res.data.status) {
                const data = res.data.data;

                var orderData = null;
                var order_token = localStorage.getItem("orderToken");

                if (order_token && order_token !== '') {
                    this.setState({ orderToken: jwtDecode(order_token) });
                    orderData = jwtDecode(order_token);
                }

                var writeObject = { label: data.top_10_writers[0].writer, value: data.top_10_writers[0].writer, writer: 'top10' }

                let top10writerOpt = [];
                (data.top_10_writers).forEach(top10 => {
                    if (orderData && orderData.preferred_writer === 'my_previous_writer' && orderData.writer_id !== '') {
                        if (top10.writer === orderData.writer_id) {
                            writeObject = { label: top10.writer, value: top10.writer, writer: 'top10' }
                        }
                    }
                    top10writerOpt.push({ label: top10.writer, value: top10.writer, writer: 'top10' });
                });

                let otherWriterOpt = [];
                (data.other_writers).forEach(writers => {
                    if (orderData && !writeObject && orderData.preferred_writer === 'my_previous_writer' && orderData.writer_id !== '') {
                        if (writers.writer === orderData.writer_id) {
                            writeObject = { label: writers.writer, value: writers.writer, writer: 'top10' }
                        }
                    }
                    otherWriterOpt.push({ label: writers.writer, value: writers.writer, writer: 'other' });
                });

                let topArr = { label: "Top 10 Writers", options: top10writerOpt };
                let otherArr = { label: "Other Writers", options: otherWriterOpt };

                let writerArr = [];
                writerArr.push(topArr);
                writerArr.push(otherArr);

                this.setState({ writerOption: writerArr, selectedWriter: writeObject && writeObject });
            }
        }).catch(error => console.error(`Error: ${error}`));
    }

    //setOrderData
    setOrderData = async () => {

        var order_token = localStorage.getItem("orderToken");
        let decodeToken = null;
        if (order_token && order_token !== '') {
            decodeToken = jwtDecode(order_token);
        }

        const loginToken = localStorage.getItem('token');
        var convertedUserToken = loginToken && loginToken !== '' ? JSON.parse(loginToken) : null;

        const { selectedFormatOption, selectedDisciplineOption, additionalExtra, preferredName, selectedWriter, sourceNumber, slideNumber } = this.state;

        var writerId = selectedWriter && selectedWriter.value ? selectedWriter.value : '';
        var preferName = preferredName;

        const formData = new FormData();

        formData.append("service", decodeToken && decodeToken.service ? decodeToken.service : 3);
        formData.append("page", decodeToken && decodeToken.page ? decodeToken.page : 0);
        formData.append("set_spacing", decodeToken && decodeToken.set_spacing ? decodeToken.set_spacing : 1);
        formData.append("academic", decodeToken && decodeToken.academic ? decodeToken.academic : 3);
        formData.append("paper", decodeToken && decodeToken.paper ? decodeToken.paper : 1);
        formData.append("other_paper", decodeToken && decodeToken.other_paper ? decodeToken.other_paper : '');
        formData.append("subject", decodeToken && decodeToken.subject ? decodeToken.subject : 18);
        formData.append("other_subject", decodeToken && decodeToken.other_subject ? decodeToken.other_subject : '');
        formData.append("formated_style", selectedFormatOption ? selectedFormatOption.value : 1);
        formData.append("other_format", decodeToken && decodeToken.other_format);
        formData.append("source", sourceNumber);
        formData.append("discipline", selectedDisciplineOption ? selectedDisciplineOption.value : 2);
        formData.append("topic", decodeToken && decodeToken.topic ? decodeToken.topic : `Writer's Choice`);
        formData.append("add_detail", decodeToken && decodeToken.add_detail ? decodeToken.add_detail : '');
        formData.append("timezone", decodeToken && decodeToken.timezone ? decodeToken.timezone : 'Europe/London');
        formData.append("deadline", decodeToken && decodeToken.deadline ? decodeToken.deadline : 19);
        formData.append("duration", decodeToken && decodeToken.duration ? decodeToken.duration : 'Days');
        formData.append("coupon_code", decodeToken && decodeToken.coupon_code ? decodeToken.coupon_code : '');
        formData.append("slide", this.props.current_slide);
        formData.append("chart", this.state.chartNumber);
        formData.append("preferred_writer", preferName);
        formData.append('writer_id', writerId);

        var extraArr = additionalExtra.sort();
        formData.append("additionalextra", extraArr);

        // formData.append("order_token", order_token && order_token);
        formData.append("user_token", convertedUserToken && convertedUserToken.value ? convertedUserToken.value : '');
        // formData.append("discount_token", this.state.discountCoupon ? this.state.discountCoupon : '');

        formData.append("deadlineLable", decodeToken && decodeToken.deadlineLable ? decodeToken.deadlineLable : '');
        formData.append("deadlineid", decodeToken && decodeToken.deadline_id ? decodeToken.deadline_id : 0);

        apiHelper('setOrderV1', 'POST', formData, null).then(res => {
            localStorage.setItem("orderToken", res.data.data.order_token);
            this.setState({ isorderChanged: !this.state.isorderChanged });

            var decodeOrder = jwtDecode(res.data.data.order_token);
            this.props.setTotalPrice('$' + decodeOrder.totalPrice)
        }).catch(error => console.error(`Error: ${error}`));
    }

    render() {
        const { selectedFormatOption, formatOption, formatDefaultValue, slideNumber, selectedDisciplineOption, disciplineOption, disciplineDefaultValue, radioValuePreferred, selectedWriter, writerOption, writerDefault, sourceNumber, chartNumber, enteredTopic, enteredPaperInst } = this.state;
        let odata = JSON.parse(localStorage.getItem('orderRight'));
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: orderCss }}></style>
                <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
                <div className="row">
                    <div className="col-md-8">
                        <div className="section-part leftSide">
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <p>Format / Style
                                            <span id="Format">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="right" target="Format">
                                            Format - Choose the style for your paper to be formatted in.
                                            General format : 280 words per page, legible font (e.g. Arial)
                                            12pt, double-spaced, please select Other if you don't have
                                            specific format to be
                                            used.Please choose the style
                                            for your paper to be formatted in: APA (American
                                            Psychological Association) is most commonly used to cite sources
                                            within the social sciences. MLA (Modern Language
                                            Association) style is most commonly used to write papers and cite
                                            sources within the liberal arts and
                                            humanities. Chicago/Turabian style places bibliographic
                                            citations at the bottom of a page or at the end of a paper. The
                                            Chicago and Turabian styles are most commonly thought of as note
                                            systems. Harvard referencing is the preferred style of the British
                                            Standards Institution. It is used mostly in the sciences and
                                            social sciences.
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            value={selectedFormatOption}
                                            onChange={this.formatChangeHandler}
                                            options={formatOption}
                                            classNamePrefix="selectInput"
                                            isSearchable
                                            placeholder={formatDefaultValue}
                                            components={{
                                                DropdownIndicator: () => null,
                                                IndicatorSeparator: () => null,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-md-4">
                                        <p>Discipline
                                            <span id="Discipline">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="right" target="Discipline">
                                            Discipline - Select English (U.S.) if you are Native English
                                            speaker, English (UK) if you speak Bristish English and select Not
                                            a Native Speaker if you speak English as your second language.
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-md-8">
                                        <Select
                                            value={selectedDisciplineOption}
                                            onChange={this.disciplineChangeHandler}
                                            options={disciplineOption}
                                            classNamePrefix="selectInput"
                                            isSearchable
                                            placeholder={disciplineDefaultValue}
                                            components={{
                                                DropdownIndicator: () => null,
                                                IndicatorSeparator: () => null,
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p>
                                            Preferred Writer
                                            <span id="TooltipExample123">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="right" target="TooltipExample123">
                                            Preferred Writer - Choose any writer if you don't have specific
                                            writer in mind. Select Top 10 writers, if you would like one of
                                            our best experts to work on your order and Previous writer if you
                                            want a particular writer you've worked with before.
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-md-8">
                                        <ButtonGroup className="list d-flex">
                                            {preferred.map((radio, idx) => (
                                                <ToggleButton
                                                    key={idx}
                                                    id={`${radio.name}-${idx}`}
                                                    type="radio"
                                                    name="radio"
                                                    value={radio.value}
                                                    checked={radioValuePreferred === radio.value}
                                                    onChange={(e) => this.radioValuePreferredHandler(e.currentTarget.value, radio)}>
                                                    {radio.name}
                                                </ToggleButton>
                                            ))}
                                        </ButtonGroup>
                                    </div>
                                </div>
                            </div>

                            {radioValuePreferred === "3" ?
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p>Select Writer
                                                <span id="Discipline">
                                                    <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                            </p>
                                            <UncontrolledTooltip placement="right" target="Discipline">
                                                Select Writer
                                            </UncontrolledTooltip>
                                        </div>
                                        <div className="col-md-8">
                                            <Select
                                                value={selectedWriter}
                                                onChange={this.selectWriterChange}
                                                options={writerOption}
                                                classNamePrefix="selectInput"
                                                // isSearchable 
                                                components={{
                                                    DropdownIndicator: () => null,
                                                    IndicatorSeparator: () => null,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                : null}

                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-6 col-xl-4">
                                        <p>Sources (free)
                                            <span id="Sources">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="right" target="Sources">
                                            Sources - Please specify the exact number of books, journals,
                                            articles or any other sources you want the writer to use as
                                            references in your paper.
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-6 col-xl-3 pe-xl-0">
                                        <div className="numberOfPages">
                                            <span className="counter" onClick={this.sourceDecrement}>
                                                &#8722;
                                            </span>
                                            <span className="count">{sourceNumber}</span>
                                            <span className="counter" onClick={this.sourceIncrement}>
                                                &#43;
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6 col-xl-3 pe-xl-0 d-none d-xl-block">
                                        <p>
                                            Abstract Page
                                            <span id="abstractpage">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="left" target="abstractpage">
                                            Abstract Page - is a brief summary of the service you avail or
                                            any in-depth analysis of a particular subject and is often
                                            used to help the reader quickly ascertain the paper's purpose.
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-6 col-md-6 col-xl-2 d-none d-xl-block">
                                        <div className="d-flex align-items-center justify-content-end orderFormLabel">
                                            <div className="checkboxLabel d-flex align-items-center">
                                                <input type="checkbox" id="abstract" checked={this.state.checkAbstract ? true : false} onChange={(e) => this.checkboxAbstractHandler(e)} />
                                                <label>${this.state.aprice && this.state.aprice}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-6 col-xl-4">
                                        <p>
                                            Charts
                                            <span id="Charts">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="right" target="Charts">
                                            Charts - it is often used to ease understanding of large
                                            quantities of data and the relationships between parts of the
                                            data. It will help you to convey your ideas in your paper better.
                                            $10 for 1 chart.
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-6 col-xl-3 pe-xl-0">
                                        <div className="numberOfPages">
                                            <span className="counter" onClick={this.chartDecrement}>
                                                &#8722;
                                            </span>
                                            <span className="count">{this.state.chartNumber}</span>
                                            <span className="counter" onClick={this.chartIncrement}>
                                                &#43;
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6 col-xl-3 pe-xl-0 d-none d-xl-block">
                                        <p> Send it to my E-Mail
                                            <span id="sendEmail">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="left" target="sendEmail">
                                            Send it to my E-Mail - is an option where you choose to send
                                            the output on your email
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-6 col-md-6 col-xl-2 d-none d-xl-block">
                                        <div className="d-flex align-items-center justify-content-end orderFormLabel">
                                            <div className="checkboxLabel">
                                                <input type="checkbox" id="email" checked={this.state.checkEmail ? true : false} onChange={(e) => this.checkboxEmailHandler(e)} />
                                                <label>{this.state.sprice && this.state.sprice}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-6 col-xl-4">
                                        <p>
                                            PowerPoint Slides
                                            <span id="PowerPoint">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="right" target="PowerPoint">
                                            PowerPoint Slide - Select number of slides of need to present a
                                            report. This is a way of attracting audience towards your views
                                            and arguments. 1 slide = 50% of the cost per word document.
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-6 col-xl-3 pe-xl-0">
                                        <div className="numberOfPages">
                                            <span className="counter" onClick={this.slideDecrement}>
                                                &#8722;
                                            </span>
                                            <span className="count">{this.state.slideNumber}</span>
                                            <span className="counter" onClick={this.slideIncrement}>
                                                &#43;
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-6 col-md-6 col-xl-3 pe-xl-0 d-none d-xl-block">
                                        <p>
                                            Turnitin Plagiarism Report
                                            <span id="turnitinReport">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="left" target="turnitinReport">
                                            Turnitin Plagiarism Report - is an Internet-based plagiarism
                                            detection service run by the US company Turnitin, LLC
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-6 col-md-6 col-xl-2 d-none d-xl-block">
                                        <div className="d-flex align-items-center justify-content-end orderFormLabel">
                                            <div className="checkboxLabel">
                                                <input type="checkbox" id="Turnitin" checked={this.state.checkTurnitin ? true : false} onChange={(e) => this.checkboxTurnitinHandler(e)} />
                                                <label>{this.state.tprice && this.state.tprice}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-xl-3 pe-xl-0 d-lg-block d-xl-none">
                                        <p>
                                            Abstract Page
                                            <span id="abstractpage">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="left" target="abstractpage">
                                            Abstract Page - is a brief summary of the service you avail or
                                            any in-depth analysis of a particular subject and is often
                                            used to help the reader quickly ascertain the paper's purpose.
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-6 col-md-6 col-xl-2 d-lg-block d-xl-none">
                                        <div className="d-flex align-items-center justify-content-end orderFormLabel">
                                            <div className="checkboxLabel d-flex align-items-center">
                                                <input type="checkbox" id="abstract" checked={this.state.checkAbstract ? true : false} onChange={(e) => this.checkboxAbstractHandler(e)} />
                                                <label>${this.state.aprice && this.state.aprice}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-xl-3 pe-xl-0 d-lg-block d-xl-none">
                                        <p> Send it to my E-Mail
                                            <span id="sendEmail">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="left" target="sendEmail">
                                            Send it to my E-Mail - is an option where you choose to send
                                            the output on your email
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-6 col-md-6 col-xl-2 d-lg-block d-xl-none">
                                        <div className="d-flex align-items-center justify-content-end orderFormLabel">
                                            <div className="checkboxLabel">
                                                <input type="checkbox" id="email" checked={this.state.checkEmail ? true : false} onChange={(e) => this.checkboxEmailHandler(e)} />
                                                <label>{this.state.sprice && this.state.sprice}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="row align-items-center">
                                    <div className="col-6 col-md-6 col-xl-3 pe-xl-0 d-lg-block d-xl-none">
                                        <p>
                                            Turnitin Plagiarism Report
                                            <span id="turnitinReport">
                                                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                        </p>
                                        <UncontrolledTooltip placement="left" target="turnitinReport">
                                            Turnitin Plagiarism Report - is an Internet-based plagiarism
                                            detection service run by the US company Turnitin, LLC
                                        </UncontrolledTooltip>
                                    </div>
                                    <div className="col-6 col-md-6 col-xl-2 d-lg-block d-xl-none">
                                        <div className="d-flex align-items-center justify-content-end orderFormLabel">
                                            <div className="checkboxLabel">
                                                <input type="checkbox" id="Turnitin" checked={this.state.checkTurnitin ? true : false} onChange={(e) => this.checkboxTurnitinHandler(e)} />
                                                <label>{this.state.tprice && this.state.tprice}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between buttons">
                                <a onClick={() => this.props.onChangePrev(2)} className="btn outline-btn d-flex align-items-center justify-content-center">
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.99935 1.3335L1.33268 6.00016L5.99935 10.6668M10.666 6.00016H1.99935H10.666Z" stroke="#12245A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <span className="ms-2">Previous Step</span>
                                </a>
                                {/* <a className="btn theme-btn" onClick={() => this.props.saveOrder(this.state.orderId && this.state.orderId !== '' ? true : false)}>
                                    {(this.state.orderId && this.state.orderId !== '') ?
                                        <span className="me-2">Save</span> :
                                        <>
                                            <span className="me-2">Next Step</span>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.00065 1.3335L10.6673 6.00016L6.00065 10.6668M1.33398 6.00016H10.0007H1.33398Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </>}
                                </a> */}
                            </div>
                        </div>
                    </div>

                    {/* OrderSidebarRight */}
                    <OrderSidebarRight
                        isorderChanged={this.state.isorderChanged}
                        onNext2={this.props.saveOrder}
                        // setDiscount={(t) => this.setDiscount(t)}
                        // discountCoupon={this.state.discountCoupon}
                        enteredTopic={enteredTopic}
                        enteredPaperInst={enteredPaperInst}
                        emailToggle={this.state.emailToggle}
                        currentStep={this.props.currentStep}
                    />

                </div>
            </>
        )
    }
}

export default Index