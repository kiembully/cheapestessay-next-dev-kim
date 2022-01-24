import React, { Component } from 'react';

// API and JWT helper
import { apiHelper } from '../../../helper/apiHelper';

// scss
import levelCss from "./level.scss";

import Img from '../../Common/image';

class Level extends Component {
    constructor() {
        super()
        this.state = {
            levelData: null
        }
    }

    //componentDidMount
    componentDidMount() {
        this.getLeveldata();
        localStorage.setItem('currStep', 1)
    }

    //getLeveldata
    getLeveldata = () => {

        const loginToken = localStorage.getItem('token');
        var convertedToken = JSON.parse(loginToken);

        const formData = new FormData();
        formData.append("user_token", convertedToken ? convertedToken.value : '');

        // call delete API
        apiHelper('displaylevelpercentage', 'POST', formData, null).then(res => {
            if (res.data.status === true) {
                this.setState({ levelData: res.data.data });
            }
        }).catch(error => console.error(`Error: ${error}`));
    }

    render() {

        let leftAmount = 0;
        let user_level = "Blue";
        let valuemax = 0;
        let valuemin = 0;
        let valuenow = 0;

        if (this.state.levelData) {
            user_level = this.state.levelData.user_level;
            valuemax = this.state.levelData.valuemax ? this.state.levelData.valuemax : 100;
            valuemin = this.state.levelData.valuemin ? this.state.levelData.valuemin : 0;
            valuenow = this.state.levelData.valuenow ? this.state.levelData.valuenow : 0;
            leftAmount = parseFloat(valuemax) - parseFloat(valuenow);
        }

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: levelCss }}></style>
                <div className="level">
                    <h2 className="title">level</h2>
                    <div className="bg-white text-center discountBox mb-4">
                        <h2 className="innerTitle">Life-Time Discount</h2>
                        <p className="desc">
                            Get Cash Back, VIP support, Best writers, Free Plagiarism Report &amp; more…
                            <a className="link" href={`${process.env.hostBaseUrl}/terms-of-use`}> Terms of use </a>
                        </p>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
                                <div className="row mt-5 mb-5">
                                    <div className={user_level.toUpperCase() === "BLUE" ? "col discountLevel active" : "col discountLevel"} >
                                        <div className="image">
                                            <Img src="/order/blueLevel.svg" title="Blue" alt="Blue" width={62} height={62} />
                                        </div>
                                        <p className="text mb-0">Blue</p>
                                    </div>
                                    <div className={user_level.toUpperCase() === "SILVER" ? "col discountLevel active" : "col discountLevel"} >
                                        <div className="image">
                                            <Img src="/order/silverLevel.svg" title="Silver" alt="Silver" width={62} height={62} />
                                        </div>
                                        <p className="text mb-0">Silver</p>
                                    </div>
                                    <div className={user_level.toUpperCase() === "GOLD" ? "col discountLevel active" : "col discountLevel"} >
                                        <div className="image">
                                            <Img src="/order/goldLevel.svg" title="Gold" alt="Gold" width={62} height={62} />
                                        </div>
                                        <p className="text mb-0">Gold</p>
                                    </div>
                                    <div className={user_level.toUpperCase() === "VIP" ? "col discountLevel active" : "col discountLevel"} >
                                        <div className="image">
                                            <Img src="/order/vipLevel.svg" title="VIP" alt="VIP" width={62} height={62} />
                                        </div>
                                        <p className="text mb-0">VIP</p>
                                    </div>
                                </div>
                                <div className="progresslevel"></div>
                            </div>
                        </div>
                        <p className="mb-0 note">
                            <b>$ {leftAmount.toFixed(2)} away from VIP member</b>
                        </p>
                    </div>
                    <div className="discountBox pb-0">
                        <h2 className="innerTitle text-center">How It Works?</h2>
                        <div className="row">
                            <div className="col-xl-4 col-sm-6">
                                <div className="bg-white workLevel silver">
                                    <h3 className="levelTitle">Silver</h3>
                                    <span className="info">Spend $100 with us and get:</span>
                                    <ul>
                                        <li>1% from any order “Lifetime”.</li>
                                        <li>VIP Customer support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="bg-white workLevel gold">
                                    <h3 className="levelTitle">Gold</h3>
                                    <span className="info">Spend $300 with us and get:</span>
                                    <ul>
                                        <li>2% from any order “Lifetime”.</li>
                                        <li>Lifetime Free (Send it E-Mail).</li>
                                        <li>VIP Customer support</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-sm-6">
                                <div className="bg-white workLevel vip">
                                    <h3 className="levelTitle">VIP</h3>
                                    <span className="info">Spend $1500 with us and get:</span>
                                    <ul>
                                        <li>3% from any order “Lifetime”.</li>
                                        <li>Lifetime Free (Plagiarism Report).</li>
                                        <li>Lifetime Free (Send it E-Mail).</li>
                                        <li>VIP Customer support</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Level;