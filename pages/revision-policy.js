import React from "react";

import dynamic from "next/dynamic";
// scss
import revisionCss from "../styles/revision-policy.scss";

//api
import { ukApiHelper } from "../helper/apiHelper";

const Meta = dynamic(() => import("../components/meta"));
const Contact = dynamic(() => import("../components/home/contact"));

const RevisionPolicy = (props) => {
  return (
    <>
      <Meta
        title={props.meta.title}
        description={props.meta.description}
        keywords={props.meta.keywords}
        urlCategory={props.meta.url_group}
      />
      <style dangerouslySetInnerHTML={{ __html: revisionCss }}></style>
      <div className="revisionPolicy">
        <div className="top-navbar">
          <div className="header">
            <div className="container">
              <div className="text-center">
                <h1 className="title">Revision Policy</h1>
                <p className="desc">
                  We, at CheapestEssay, ensure that every academic writing
                  project we undertake is worked with utmost precision. Our
                  professional writers incorporate all the instructions while
                  writing an academic paper. However, there might be instances
                  when the submitted article does not meet your expectations.
                  Don't worry, as we have got you covered. If you are not happy
                  with the paper, you can request for revision via
                  <a href={`${process.env.hostBaseUrl}/contact-us`} style={{"color" : "#FBD501"}}> contacting our customer support team</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="policy-content">
          <div className="container">
            <div className="content">
              <h2 className="section-title">When can you Raise a Request for Free Revision?</h2>
              <p className="desc">
              Our primary motto is to provide satisfaction to all our clients with our essay writing service. We understand that you pay with the expectation to get outstanding service. Our experts strive hard to deliver the work in the way you expect.
              </p>
              <p className="desc">
              As a result, once the paper is delivered, you get the opportunity to go through it and request for revision if you feel something is missing. We provide you with an unlimited revision facility with certain conditions. Read on to know more: 
              </p>
            </div>
            <div className="content">
              <h2 className="section-title">
                Ensure that the changes are as per the initial instruction:
              </h2>
              <p className="desc">
                You can ask your content to get revised if you feel the writer
                has not adhered to your initial instruction. Your revision
                direction must be identical and not contradict your previous
                guidelines.
              </p>
              <p className="desc">
                If our Quality Assurance Department finds out that the academic
                paper has been written as per the given instruction, your
                revision request may get declined. And you would require putting
                in a new order for editing/proofreading.
              </p>
            </div>
            <div className="content">
              <h2 className="section-title">
                Place Your Request within 20 days
              </h2>
              <p className="desc">
                Your revision request will be delivered within 15 days from the
                time you have raised the request. However, we ensure to deliver
                your paper if it requires minor changes within 48 hours.
              </p>
              <p className="desc">
                If you have some urgent requirements, you can interact with our
                customer support team and discuss the changes you need in your
                paper. However, you need to provide them enough time to get the
                best result.
              </p>
            </div>
            <div className="content">
              <h2 className="section-title">
                Ask Us To Work on Any Revision Request
              </h2>
              <p className="desc">
                You no longer need to adjust to the paper's quality if there
                have been changes at the last moment after placing your order.
                Just inquire our team about the additional cost you need to pay
                and raise a request for paid revision.
              </p>
              <p className="desc">
                This means that if you want us to revise your completed order
                with add-on instructions, you will be required to pay additional
                charges. Once you complete the payment, the writing team will
                start working on your paper as per the given guidelines and
                deliver within tenure.
              </p>
              <p className="desc">
                You can raise multiple requests for revision before the order
                gets approved. However, remember that you can request us to
                rework on your paper for free within 15 days once you have
                approved it.
              </p>
            </div>
            <div className="content">
              <h2 className="section-title">Need a Change of Writer</h2>
              <p className="desc">
                Do you want some other writer to work on your revision request?
                No worries as we do offer such facilities. If you want a total
                switch of a writer, you can contact our customer support team
                and tell them their requirements. However, there are certain
                conditions if you wish to have new writers:
              </p>
              <ul>
                <li>
                  If the instructions are similar to the previous one, you don't
                  need to pay any add-on cost for the change in writers.
                </li>
                <li>
                  You must address that the writers did not meet the
                  instructions you mentioned in the order form.
                </li>
              </ul>
            </div>
            <div className="content">
              <h2 className="section-title">Major Highlights</h2>
              <p className="desc">
                In case the revision request you raise does not align with the
                requirements mentioned above, you can place a new order for
                revising your document. Also, specify the changes you want the
                writers to make and give explicit instruction on what you need
                to change in your academic paper.
              </p>
              <p className="desc">
                However, remember that you have 14 days to approve the revised
                text material. The time of approval is calculated from when the
                last version was uploaded to your personal order page. If you
                don't approve the paper within this tenure, your assignment
                automatically gets approved after it.
              </p>
            </div>
          </div>
        </section>
        <Contact />
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const DEFAULT_META = process.env.defaultMeta;
  const res = await ukApiHelper(
    `seoV1?page=revision-policy&is_live=${process.env.isApiLive}`,
    "GET",
    null,
    null
  );
  const meta = res.data.status ? res.data.data : DEFAULT_META;

  return {
    props: {
      meta,
    },
  };
}

export default RevisionPolicy;
