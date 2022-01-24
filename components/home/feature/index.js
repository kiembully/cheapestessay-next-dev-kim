import React from "react";

// scss
import featureCss from "./feature.scss";

import Img from "../../Common/image";

const feature = [
  {
    img: 'plagiarism.svg',
    title: "Plagiarism-free Content",
    label: true,
    desc: "Your essay will be custom-written, unique, and undergoes advanced plagiarism check once the writer finishes writing it. We also attach an originality report along with your essay for your peace of mind."
  },
  {
    img: 'revisions.svg',
    title: "Unlimited Free Revisions",
    label: false,
    desc: 'When you ask us, "do my paper," our pro writers ensure to deliver a perfect piece on the first attempt. However, if you are not entirely content with your paper, you can request our  writers for revision'
  },
  {
    img: 'highQuality.svg',
    title: "High-Quality Content",
    label: false,
    desc: "We have a strict essay writing guideline that all our writers in the team need to follow. Thus, they make sure to follow your instructions while working on your paper and deliver within the deadline."
  },
  {
    img: 'swiftDelivery.svg',
    title: "Swift Delivery",
    label: false,
    desc: "Now no more missing the deadlines for submitting your academic essay. Our professional essay writers have the expertise to work and complete the 'write my paper' request in as little as 3 hours."
  }
]

function Feature() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: featureCss }}></style>
      <section className="feature p-0">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Here's Why Essay Writing Services Can be a Life Savior </h2>
            <p className="desc">Students trust our cheap essay writing services for an array of reasons. Many like the fact that they can track the progress 24X7, whereas many value the quality of the content they receive. What's more, whenever you select our essay help, you gain access to :</p>
          </div>
          <div className="row">
            <div className="col-lg-8">
              {feature.map((list, index) => {
                return (
                  <div className="feature-box" key={index}>
                    {list.label ? <div className="bedge">top</div> : null }
                    <div className="feature-img">
                      <Img src={list.img} alt="content" title="Feature"  width={20} height={21} />
                    </div>
                    <div className="detail">
                      <h3 className="title">{list.title}</h3>
                      <p className="desc">{list.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="col-lg-4">
              <div className="right-details">
                <h3 className="title">
                  <span>Get all the features for <span className="success"> $65.86</span>&nbsp; Free Per Page </span>
                </h3>
                <ul className="box-list">
                  <li>Plagiarism Free Content</li>
                  <li>Perfect Formatting</li>
                  <li>No Hidden Charges</li>
                  <li>Highest Quality</li>
                  <li>Safe Payment Methods</li>
                  <li>Your data is 100% Safe</li>
                  <li>Unlimited Free Editing</li>
                </ul>
                <a href={`${process.env.hostBaseUrl}/top-writers`} className="btn secondary-btn inline-button-click" id="featureHireWriter">Hire a Writer</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Feature;
