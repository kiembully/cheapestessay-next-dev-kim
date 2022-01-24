import React, { Component } from 'react'
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";

import Img from '../../../Common/image';

class DraftOrder extends Component {
    constructor() {
        super()
        this.state = {
            // Inner Step 
            listTab: '1'
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentStep) {
            var status = '1'
            
            if (parseInt(nextProps.currentStep) === 3 || parseInt(nextProps.currentStep) === 11) {
                //in progress
                status = '3'
            }

            if (parseInt(nextProps.currentStep) === 1) {
                //waiting for payment
                status = '2'
            }

            if (parseInt(nextProps.currentStep) === 2) {
                //complete
                status = '4'
            }

            this.setState({
                listTab: status
            })
        }
    }

    render() {
        return (
            <div className="draftOrderTab">
                <Nav tabs className="justify-content-center">
                    <NavItem>
                        <NavLink className={this.state.listTab === '1' ? "active" : ""}>
                            <div className="tabMedia d-flex align-items-center">
                                <div className={`${parseInt(this.state.listTab) > 1 ? 'done' : ''} icon`}>
                                    {parseInt(this.state.listTab) > 1 ?
                                        <Img title="Check" src='/order/check.svg' /> :
                                        1
                                    }
                                </div>
                                <div className="details">
                                    <h4 className="text">Step 1</h4>
                                    <h3 className="stepName">Order</h3>
                                </div>
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={this.state.listTab === '2' ? "active" : ""}>
                            <div className="tabMedia d-flex align-items-center">
                                <div className={`${parseInt(this.state.listTab) > 2 ? 'done' : ''} icon`}>
                                    {parseInt(this.state.listTab) > 2 ?
                                        <Img title="Check" src='/order/check.svg' /> :
                                        2
                                    }
                                </div>
                                <div className="details">
                                    <h4 className="text">Step 2</h4>
                                    <h3 className="stepName">Make Payment</h3>
                                </div>
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={this.state.listTab === '3' ? "active" : ""}>
                            <div className="tabMedia d-flex align-items-center">
                                <div className={`${parseInt(this.state.listTab) > 3 ? 'done' : ''} icon`}>
                                    {parseInt(this.state.listTab) > 3 ?
                                        <Img title="Check" src='/order/check.svg' /> :
                                        3
                                    }
                                </div>
                                <div className="details">
                                    <h4 className="text">Step 3</h4>
                                    <h3 className="stepName">Order In Progress</h3>
                                </div>
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className={this.state.listTab === '4' ? "active" : ""}>
                            <div className="tabMedia d-flex align-items-center">
                                <div className="icon">4</div>
                                <div className="details">
                                    <h4 className="text">Step 4</h4>
                                    <h3 className="stepName">Receive your Paper</h3>
                                </div>
                            </div>
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.listTab} className="text-center mt-3">
                    <TabPane tabId="1">
                        <div className="img">
                            <Img title="MakePayment" src="/order/makePayment.svg" alt="Order" width={400} height={400} />
                        </div>
                    </TabPane>
                    <TabPane tabId="2">
                        <div className="img">
                            <Img title="MakePayment"  src="/order/makePayment.svg" alt="Order" width={400} height={400} />
                        </div>
                    </TabPane>
                    <TabPane tabId="3">
                        <div className="img">
                            <Img title="OrderProgress"  src="/order/orderProgress.svg" alt="Order" width={400} height={400} />
                        </div>
                    </TabPane>
                    <TabPane tabId="4">
                        <div className="img">
                            <Img title="CompletedOrder" src="/order/completedOrder.svg" alt="Order" width={400} height={400} />
                        </div>
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default DraftOrder;