import React from "react";

// components
import HeaderRating from '../header/rating';

// scss
import topHeaderCss from "./topHeader.scss"

import Img from "../Common/image";

const MorePageHeader = (props) => {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: topHeaderCss }}></style>
            <div className="otherPageHeader">
                <div className="top-navbar">
                    <div className="header">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="cheapest-details">
                                        <h1 className="title">{props.title}</h1>
                                        <p className="desc">{props.desc}</p>
                                        <a href={props.href} className="btn secondary-btn">{props.btnText}</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="image text-center">
                                        <Img title={props.alt} src={props.src} alt={props.alt} width="500" height="446" />
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-star">
                                <div className="row">
                                    <div className="col-md-8 col-xl-6">
                                        <HeaderRating />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MorePageHeader;