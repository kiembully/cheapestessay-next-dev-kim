import React, { useState, useEffect, useRef } from "react";

// reactstrap
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

// Html Parser
import parse from 'html-react-parser';
import Img from "../../Common/image";

// scss
import serviceCss from "./service.scss";

const Service = (props) => {
  var serviceData = props.serviceData && props.serviceData;

  const [currentActiveTab, setCurrentActiveTab] = useState(1);
  const toggle = tab => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: serviceCss }}></style>
      <section className="services" id="howwork">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">
              {serviceData && serviceData.how_it_works_section && serviceData.how_it_works_section.title ? parse(serviceData.how_it_works_section.title.title) : ''}
            </h2>
          </div>
          <div className="row">
            <div className="col-md-10 m-md-auto">
              <div className="row align-items-center">
                <div className="col-md-7">
                  <Nav tabs>
                    {serviceData && serviceData.how_it_works_section && serviceData.how_it_works_section.steps.map((tab, index) => {
                      return (
                        <NavItem key={index}>
                          <NavLink
                            className={classnames({
                              active:
                                currentActiveTab === tab.id
                            })}
                            onClick={() => { toggle(tab.id) }}
                          >
                            <div className="service-box">
                              <span className="index">{tab.id}</span>
                              <h3 className="title">{tab.content_header ? parse(tab.content_header) : ''}</h3>
                              <div className="desc mb-0">
                                {tab.content && parse(tab.content)}
                              </div>
                            </div>
                          </NavLink>
                        </NavItem>
                      )
                    })}
                  </Nav>
                </div>
                <div className="col-md-5">
                  <TabContent activeTab={currentActiveTab}>
                    <TabPane tabId={1}>
                      <Img
                        src="/how-it-work/fill-in-the-order-details.webp"
                        alt="how-it-works-img"
                        title="Place your Essay Request"
                        className="serviceImg"
                        width={430}
                        height={254}
                      />
                    </TabPane>
                    <TabPane tabId={2}>
                      <Img
                        src="/how-it-work/complete-the-payment.webp"
                        alt="how-it-works-img"
                        title="Carry Out the Payment"
                        className="serviceImg"
                        width={430}
                        height={254}
                      />
                    </TabPane>
                    <TabPane tabId={3}>
                      <Img
                        src="/how-it-work/monitor-the-order-progress.webp"
                        alt="how-it-works-img"
                        title="Follow order's progress"
                        className="serviceImg"
                        width={430}
                        height={254}
                      />
                    </TabPane>
                    <TabPane tabId={4}>
                      <Img
                        src="/how-it-work/get-a-flawless-assignment.webp"
                        alt="how-it-works-img"
                        title="Receive your Doc on Email"
                        className="serviceImg"
                        width={430}
                        height={254}
                      />
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
