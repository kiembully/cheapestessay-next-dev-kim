import React from "react";

//helper
import { ukApiHelper } from "../helper/apiHelper";

// scss
import guaranteeCss from "../styles/guarantee.scss"

import Img from "../components/Common/image";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));
const MorePageHeader = dynamic(() => import('../components/otherPages/topHeader'));
const FreeFeature = dynamic(() => import('../components/freeFeature'));
const Feedback = dynamic(() => import('../components/home/feedback'));
const Contact = dynamic(() => import('../components/home/contact'));

const MoneyBackGuarantee = (props) => {

    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
            <style dangerouslySetInnerHTML={{ __html: guaranteeCss }}></style>
            <div className="guarantee moneyRefund">
                <MorePageHeader title="CheapestEssay Money Back Guarantee" desc="Here in CheapestEssay, we ensure that you stay happy after ordering our service, so all orders are covered under the CheapestEssay Money Back Guarantee. We offers 50% and even full refund to our valued customers. Carefully read our full guidelines about Money Back Guarantee."
                    href={`${process.env.hostBaseUrl}/order`} btnText="Order Now" src="/guarantee/guaranteeImg.svg" alt="guaranteeImg" />
                <section className="refund">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="image text-start">
                                    <Img src="/guarantee/cashback100.svg" alt="cashback100"  title="Cashback" width="256" height="220" />
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="details">
                                    <h2 className="section-title">100% Refund</h2>
                                    <div className="desc">We take pride in our paper helpers that we can deliver all the client’s requirements on time. However, if we miss any deadline, we allow the customers to request a 100% refund. And if you are ready to extend the deadline, we offer you a compensation of 20%.</div>
                                    <div className="desc">Also, if you come across any technical issues during payment, you can ask for a refund. In this case, you need to report the problem instantly before the assigned writer begins writing the task.</div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-3 order-2">
                                <div className="image text-end">
                                    <Img src="/guarantee/cashback50.svg" title="Cashback" alt="cashback50" width="256" height="220" />
                                </div>
                            </div>
                            <div className="col-md-9 order-1">
                                <div className="details">
                                    <h2 className="section-title">50% Refund</h2>
                                    <div className="desc">We allow you to raise a request for a refund of confirmed orders if the client has canceled the order. However, in such cases, we only give a 50% refund of the total amount. All the refund requests undergo a confirmation check before accepting the proposal. Rebates do not apply when the error was from the client’s side, such as delayed uploading of needed documents and delayed payment.</div>
                                    <div className="desc">For refunds requested due to plagiarism, a Turnitin report should be available. Reports from other plagiarism checkers are not acceptable. Without the Turnitin report, no refund will apply.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-0">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title">No refund in these cases</h2>
                        </div>
                        <div className="card-columns">
                            <div className="whiteBox card">
                                <h3 className="subTitle">Guaranteed On Time Delivery</h3>
                                <p className="desc">On time delivery of all the orders is guaranteed. Sometimes delay happens because of the late upload of the needed materials on the customer`s side. In this situation, NO REFUND CAN BE GRANTED. That is why it is always ideal to send the details of the task and the required additional resources all at once when making the initial order.</p>
                            </div>
                            <div className="whiteBox card">
                                <h3 className="subTitle">Delayed Payment</h3>
                                <p className="desc mb-4">If the customer claims that the order has been delayed when the reality is that the payment was also delayed, we shall not bear responsibility for it. Moreover, a REFUND CANNOT BE REQUESTED.</p>
                                <p className="desc">Note: in the case of revision deadline, the previously mentioned delay refunds and the recalculation of the price do not apply as the end dates are different.</p>
                            </div>
                            <div className="whiteBox card">
                                <h3 className="subTitle">Plagiarized Content</h3>
                                <p className="desc">If the claim is that the paper is plagiarized, a Turnitin report is needed. There will be no other reports that can be accepted aside from this or else NO REFUND is possible.</p>
                            </div>
                            <div className="whiteBox card">
                                <h3 className="subTitle">Disputed Claims</h3>
                                <p className="desc mb-4">If the customer is not satisfied and would like to get a refund instead, the agency administration will conduct an investigation. The claim and refund will be based on its result. We always want our customers to be fully satisfied. Hence, we will always do our best just to achieve the customer`s satisfaction.</p>
                                <p className="desc mb-4">Additionally, we don’t guarantee grades, and a REFUND WILL NOT BE PROVIDED if you were poorly assessed. But we might help you for next order.</p>
                                <p className="desc">IMPORTANT NOTE: Refund requests must be made within 30 days from the date we submitted the paper. If requests are made after 30 days, a partial credit on the CheapestEssay accunt can be provided if your refund is valid.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <FreeFeature />
                <Feedback reviewData={props.reviews && props.reviews} schemaPageName={props.meta && props.meta.pageName} metaDescription={props.meta.description} />
                <Contact />
            </div>
        </>

    )
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=money-back-guarantee&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    const resReviews = await ukApiHelper(`webReviewsV1?page=money-back-guarantee`, 'GET', null, null)
    const reviews = resReviews.data.status ? resReviews.data.data : null

    return {
        props: {
            meta,
            reviews
        }
    }
}

export default MoneyBackGuarantee;