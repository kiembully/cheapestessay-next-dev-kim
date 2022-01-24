import React from "react";

// scss
import accountCss from "./account.scss"

import Img from "../Common/image";

export default function Accountleft(props) {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: accountCss }}></style>
            <div className="image">
                <Img src={props.src} alt={props.alt} height={280} width={380} title="Account" />
            </div>
            <h2 className="section-title">{props.title}</h2>
            <p className="desc">{props.desc}</p>
        </>
    );
}
