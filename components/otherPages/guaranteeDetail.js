import React from "react";

import { guaranteeData } from "./guaranteeData"

// scss
import guaranteeCss from "../../styles/guarantee.scss"

import Img from "../Common/image";

const GuaranteeDetail = (props) => {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: guaranteeCss }}></style>
            <section>
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">Cheapestessay Service Guarantee</h2>
                    </div>
                    <div className="guaranteesMain">
                        <div className="row">
                            {guaranteeData.map(function (list, item) {
                                return  <div className="col-sm-6 col-lg-4" key={item}>
                                    <div className="whiteBox">
                                        <div className="d-flex align-items-center">
                                            <Img  title="Refund" src={list.src} alt="refund" width="70" height="70" />
                                            <div className="info">
                                                <h3 className="content">{list.title}</h3>
                                            </div>
                                        </div>
                                        <p className="desc">{list.desc}</p>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GuaranteeDetail;