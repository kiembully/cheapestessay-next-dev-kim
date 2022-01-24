import React from "react";

// scss
import FreeFeatureCss from "./freeFeature.scss"

import Img from "../Common/image";

const FreeFeature = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: FreeFeatureCss }}></style>
            <section className="free-features">
                <div className="container">
                    <div className="section-title">Free Features</div>
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <div className="text-center banner">
                                <Img src="/top-writer/free-features.webp" alt="Free Features" width="200" height="200" title="Features" />
                            </div>
                        </div>
                        <div className="col-md-9">
                            <ul className="box-list">
                                <li>
                                    <span>$15.99</span> Report on Plagiarism
                                </li>
                                <li>
                                    <span>$7.99</span> Sources and Reference
                                </li>
                                <li>
                                    <span>$4.99</span> Perfect Formatting
                                </li>
                                <li>
                                    <span>$10.91</span> Best Writer
                                </li>
                                <li>
                                    <span>$3.99</span> Unlimited Revision
                                </li>
                                <li>
                                    <span>$21.99</span> Proofreading
                                </li>
                            </ul>
                            <div className="content d-flex align-items-center">
                                <p className="desc ms-0">
                                    Save Almost <span className="text1">$65.77</span> with these
                                    add-on features for <span className="text2">FREE</span>
                                </p>
                                <a className="btn secondary-btn" href={`${process.env.hostBaseUrl}/order`}>
                                    Place Your Order Today!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FreeFeature;