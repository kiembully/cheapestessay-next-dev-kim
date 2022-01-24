import React, { useState } from "react";

// reactstrap
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

// scss
import assignmentCss from "./academicService.scss";

function AcademicService(props) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const paperWork = [
    {list: "Essay"},
    {list: "Case Study"},
    {list: "Report"},
    {list: "Research Paper"},
    {list: "Literature Review"},
    {list: "Business Plan"},
    {list: "Reflective Writing"},
    {list: "Term Paper"},
    {list: "Thesis / Dissertation"},
    {list: "Research Proposal"},
    {list: "Presentation or Speech"},
    {list: "Annotated Bibliography"},
    {list: "Article Review"},
    {list: "Book / Movie Review"},
    {list: "Editing and proofreading"},
    {list: "Admission Essay"},
    {list: "Creative Writing"},
    {list: "Critical Thinking / Review"},
    {list: "Book Reviews"},
    {list: "Other"},
  ]

  const courseWork = [
    {list: "Homework Assignment"},
    {list: "Statistics Assignment"},
    {list: "Physics Assignment"},
    {list: "Engineering Assignment"},
    {list: "Biology Assignment"},
    {list: "Chemistry Assignment"},
    {list: "Math Assignment"},
    {list: "Geography Assignment"},
    {list: "Other"},
  ]

  const assignment = [
    {list: "Multiple Choice Questions"},
    {list: "Short Answer Questions"},
    {list: "Word Problems"},
  ]
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: assignmentCss }}></style>
      <section className="academicService pb-0">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Academic Paper Writing Service</h2>
            <p className="desc">
              Our essay writers will gladly help you with:
            </p>
          </div>
        </div>
        <div className="academicDetails">
          <div className="container">
            <Nav tabs className="nav justify-content-center nav-pills">
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "1" })}
                  onClick={() => {
                    toggle("1");
                  }}
                >
                  <span>Paperwork</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "2" })}
                  onClick={() => {
                    toggle("2");
                  }}
                >
                  <span>Coursework / Homework</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === "3" })}
                  onClick={() => {
                    toggle("3");
                  }}
                >
                  <span>Other Assignments</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <div className="tab-pane-box">
                  <ul className="serviceList">
                    {paperWork.map(function(name, index) {
                      return (
                        <li key={index}><span className="list-link nav-link">{name.list}</span></li>
                      )
                    })}
                  </ul>
                </div>
              </TabPane>
              <TabPane tabId="2">
                <div className="tab-pane-box">
                <ul className="serviceList">
                    {courseWork.map(function(name, index) {
                      return (
                        <li key={index}><span className="list-link nav-link">{name.list}</span></li>
                      )
                    })}
                  </ul>
                </div>
              </TabPane>
              <TabPane tabId="3">
                <div className="tab-pane-box">
                <ul className="serviceList">
                    {assignment.map(function(name, index) {
                      return (
                        <li key={index}><span className="list-link nav-link">{name.list}</span></li>
                      )
                    })}
                  </ul>
                </div>
              </TabPane>
            </TabContent>
            <div className="text-center mt-5">
              <a href={`${process.env.hostBaseUrl}/top-writers`} className="btn secondary-btn inline-button-click" id="findWriter">Find Your Writer</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AcademicService;
