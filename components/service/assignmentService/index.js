import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

// Html Parser
import parse from 'html-react-parser';

// scss
import assServiceCss from "./assService.scss";

import Img from "../../Common/image";

const AssignmentService = (props) => {

  var guaranteeContent = props.guaranteeContent && props.guaranteeContent.guarantees_section
  var guaranteeListLeft = []
  var guaranteeListRight = []

  if (props.guaranteeContent && props.guaranteeContent.guarantees_list) {
    let listLength = props.guaranteeContent.guarantees_list.length;
    var data = props.guaranteeContent.guarantees_list;

    for (let i = 0; i < listLength; i++) {
      if (i < 3) {
        guaranteeListLeft.push(data[i]);
      }
      else {
        guaranteeListRight.push(data[i]);
      }
    }
  }


  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: assServiceCss }}></style>
      <section className="assignment" id="whyus">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">{guaranteeContent && guaranteeContent.title && parse(guaranteeContent.title)}</h2>
            <p className="desc">
              {guaranteeContent && guaranteeContent.title_sub_content && parse(guaranteeContent.title_sub_content)}
            </p>
          </div>
        </div>
        <div className="assignment-details">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-md-6 col-sm-6 left">
                {guaranteeListLeft && guaranteeListLeft.length > 0 && guaranteeListLeft.map((list, index) => {
                  return (
                    <div className="assignment-box" key={index}>
                      <h3 className="title">{parse(list.sub_title_header)}</h3>
                      <p className="desc">
                        {parse(list.sub_title_content)}
                      </p>
                    </div>
                  )
                })}

              </div>
              <div className="col-xl-4 d-none d-xl-block">
                <div className="image text-center">
                  <Img
                    src="/service/writer.webp"
                    alt="writer"
                    className="img-fluid"
                    width="350"
                    height="492"
                    title="Writer"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-sm-6 right">
                {guaranteeListRight && guaranteeListRight.length > 0 && guaranteeListRight.map((list, index) => {
                  return (
                    <div className="assignment-box" key={index}>
                      <h3 className="title">{list.sub_title_header && parse(list.sub_title_header)}</h3>
                      <p className="desc">
                        {list.sub_title_content && parse(list.sub_title_content)}
                      </p>
                    </div>
                  )
                })}

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0 assService">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="main-wrapper d-block">
                <div className="content-box w-100">
                  <h2 className="content">
                    {guaranteeContent && guaranteeContent.sub_content_header ? parse(guaranteeContent.sub_content_header) : ''}
                  </h2>
                  <p className="desc">{guaranteeContent && guaranteeContent.sub_content ? parse(guaranteeContent.sub_content) : ''}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="right-details">
                <h3 className="title"><span>Get all these features for <span className="success">$65.86</span>&nbsp; Free Per Page</span></h3>
                <ul className="box-list">
                  <li><span>$15.99</span> Report on Plagiarism</li>
                  <li><span>$7.99</span> Highest Quality</li>
                  <li><span>$4.99</span> Perfect Formatting</li>
                  <li><span>$10.91</span> No Hidden Charges</li>
                  <li><span>$3.99</span> SafePayment Methods</li>
                  <li><span>$21.99</span> 24X7 Customer Support</li>
                </ul>
                <a className="btn secondary-btn" href={`${process.env.hostBaseUrl}/order`}>Place Your Order Today!</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AssignmentService;
