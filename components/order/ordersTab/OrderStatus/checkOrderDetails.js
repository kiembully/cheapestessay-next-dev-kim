import React, { useState, useEffect } from "react";
import ShowMoreText from "react-show-more-text";

const CheckOrderDetails = (props) => {

    const [orderData, setOrderData] = useState();
    useEffect(() => {
        if (props.orderData)
            setOrderData(props.orderData);
    }, [props.orderData]);

    return (
        <div className="section-part leftSide">
            <div className="row">
                <div className="col-md-6">
                    <div className="calculate-Part pt-0">
                        <div className="price d-flex justify-content-between">
                            <span>Type of Service</span>
                            <span>{orderData && orderData.order_details.service}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                            <span>Writer Level</span>
                            <span>{orderData && orderData.order_details.academic ? orderData.order_details.academic : 'College'}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                            <span>Type of Paper</span>
                            <span>{orderData && orderData.order_details.paper}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                            <span>Subject</span>
                            <span>{orderData && orderData.order_details.subject ? orderData.order_details.subject : 'English'}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                            <span>Topic</span>
                            <span>{orderData && orderData.order_details.topic ? orderData.order_details.topic : "Writer's Choice"}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                            <span>Page(s)</span>
                            <span>{orderData && orderData.order_details.pages}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                            <span>Spacing</span>
                            <span>{orderData && orderData.order_details.spacing}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                            <span>Format/style</span>
                            <span>{orderData && orderData.order_details.formated_style}</span>
                        </div>
                        <div className="price d-flex justify-content-between">
                            <span>Discipline</span>
                            <span>{orderData && orderData.order_details.discipline}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="calculate-Part pt-0">
                        <div className="price d-flex justify-content-between">
                            <span>Preferred Writer</span>
                            <span>{orderData && orderData.order_details.preferred_writer}</span>
                        </div>
                        {orderData && orderData.order_details.sources !== '0' ?
                            <div className="price d-flex justify-content-between">
                                <span>{orderData.order_details.sources} Source(s)</span>
                                <span>{orderData.order_details.sources}</span>
                            </div>
                            : null
                        }
                        {orderData && orderData.order_details.charts !== '0' ?
                            <div className="price d-flex justify-content-between">
                                <span>Chart(s)</span>
                                <span>{orderData.order_details.charts}</span>
                            </div>
                            : null
                        }
                        {orderData && orderData.order_details.slides !== '0' ?
                            <div className="price d-flex justify-content-between">
                                <span>Slide(s)</span>
                                <span>{orderData.order_details.slides}</span>
                            </div>
                            : null
                        }
                        {orderData && orderData.order_details.additionalextra.length > 0 && orderData.order_details.additionalextra.includes(6) ?
                            <div className="price d-flex justify-content-between">
                                <span>Abstract Page</span>
                                <span>Yes</span>
                            </div>
                            : null
                        }
                        {orderData && orderData.order_details.additionalextra.length > 0 && orderData.order_details.additionalextra.includes(5) ?
                            <div className="price d-flex justify-content-between">
                                <span>Turnitin Plagiarism Report</span>
                                <span>Yes</span>
                            </div>
                            : null
                        }
                        {orderData && orderData.order_details.additionalextra.length > 0 && orderData.order_details.additionalextra.includes(7) ?
                            <div className="price d-flex justify-content-between">
                                <span>Send it to my E-mail</span>
                                <span>Yes</span>
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
            <div className="calculate-Part p-0">
                <div className="price">
                    <span className="w-100 d-block">Paper instructions</span>
                    <div className="w-100 text-start">
                        <ShowMoreText
                            lines={2}
                            more="Read more"
                            less="Read less"
                            className="desc"
                            anchorClass="showText"
                            expanded={false}
                            truncatedEndingComponent={"... "}
                        >
                            {orderData && orderData.order_details.add_detail}
                        </ShowMoreText>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CheckOrderDetails;