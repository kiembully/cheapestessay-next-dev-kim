import React from "react";

// Html Parser
import parse from 'html-react-parser';

// scss
import contentCss from "./content.scss";

const Content = (props) => {

  let essayContent1 = [];
  let essayContent2 = [];

  if (props.serviceData) {
    var contentLength = props.serviceData.sub_contents.length;
    var data = props.serviceData.sub_contents
    // console.log(data);
    for (let i = 0; i < contentLength; i++) {
      if (i < 4) {
        essayContent1.push(data[i])
      }
      else {
        essayContent2.push(data[i])
      }
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: contentCss }}></style>
      {props.bottomContent ?
        essayContent2 && essayContent2.length > 0 ? (
          <section className="content-wrapper">
            <div className="container">
              <div className="main-wrapper">
                {essayContent2 && essayContent2.map((list, index) => {
                  return (
                    <div className="content-box" key={index}>
                      <div className="content">
                        {list.header && parse(list.header)}
                      </div>
                      <div className="desc mb-0">
                        {list.content && parse(list.content)}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        ) : null
        : (
          <section className="content-wrapper">
            <div className="container">
              <div className="main-wrapper">
                {essayContent1 && essayContent1.map((list, index) => {
                  return (
                    <div className="content-box" key={index}>
                      <div className="content">
                        {list.header && parse(list.header)}
                      </div>
                      <div className="desc mb-0">
                        {list.content && parse(list.content)}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}
    </>
  );
}

export default Content;
