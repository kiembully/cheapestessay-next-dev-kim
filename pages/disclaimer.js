import React from "react";

import dynamic from 'next/dynamic';

//helper
import { ukApiHelper } from "../helper/apiHelper";

// scss
import revisionCss from "../styles/revision-policy.scss";

const Meta = dynamic(() => import('../components/meta'));
const Contact = dynamic(() => import('../components/home/contact'));

const RevisionPolicy = (props) => {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: revisionCss }}></style>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />

            <div className="revisionPolicy">
                <div className="top-navbar">
                    <div className="header">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="title">Disclaimer</h1>
                                <p className="desc">
                                    Our company provides complete guidelines to determine or
                                    delimit the extent of rights and commitments that might be
                                    practiced and upheld by our company and our users in a
                                    legitimately perceived relationship. We advice our dear users
                                    to read these terms &amp; conditions for your convinience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="policy-content">
                    <div className="container">
                        <div className="mainTitle">
                            <h2 className="section-title">
                                CheapestEssay.com Disclaimer Terms
                            </h2>
                            <p className="desc">
                                A customer placing an order with CheapestEssay.com automatically
                                agrees to the following conditions:
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">Use of our Products</h3>
                            <p className="desc">
                                CheapestEssay.com does not condone, encourage, or support the
                                submission of any of its work product as a client’s own. The
                                works produced by CheapestEssay.com are to be used for research,
                                study, and/or as examples of work the client is producing
                                him/herself.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">Information for Contact</h3>
                            <p className="desc">
                                It is the client’s responsibility to provide accurate and
                                current contact information to CheapestEssay.com. The company
                                bears no responsibility for late or undelivered work that is a
                                result of incorrect contact information.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">Cancellation of Order</h3>
                            <p className="desc">
                                If a client cancels an order after it has been paid for and
                                assigned to a writer, the amount of refund will be determined by
                                the company, according to the amount of work the writer has
                                completed at the time of cancellation. If CheapestEssay.com must
                                cancel an order, the customer will be notified immediately and a
                                full refund provided. Read more Money Back Guarantee.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">Resource Materials</h3>
                            <p className="desc">
                                In the cases of research works. CheapestEssay.com writers will
                                always use the most relevant and appropriate resource material;
                                however, any assigned writer will be happy to use specific
                                resources that a student requests. In these instances, when the
                                resource is not available to the writer, the customer will be
                                asked to provide that resource. Resources are easily uploaded
                                through the client’s account page, and it is imperative that
                                they be provided as quickly as possible. Failure to provide
                                required resources may delay completion and CheapestEssay.com
                                cannot be held liable for tardiness of a work due to late
                                resource provision.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">Client Instructions</h3>
                            <p className="desc">
                                The client is responsible for providing all important details of
                                an order and for responding to writer requests for clarification
                                and/or additional information. If such detail is not provided
                                and/or requests for clarification not answered, neither
                                CheapestEssay.com nor the writer will be held responsible. If a
                                finished product does not meet the client requirements, and
                                those requirements were in the original order, free revisions
                                will be made. If revision requests deviate from the original
                                order, a charge will occur.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">Plagiarism</h3>
                            <p className="desc">
                                CheapestEssay.com writers are bound by contract to produce only
                                fully original work. If a customer believes his/her delivered
                                work to be plagiarized, CheapestEssay.com will be happy to
                                provide the results of its plagiarism scan. If, in the rare
                                event, any part of the work is deemed to be plagiarized, then,
                                of course CheapestEssay.com will revise that part at its own
                                cost.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">Technical/Electronic Issues</h3>
                            <p className="desc">
                                CheapestEssay.com will not be held responsible for any delays in
                                delivery that are a result of electronic failures, technical
                                problems, of difficulties with the customer’s Internet provider
                                or server.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">
                                Customer Agreement / Acknowledgment
                            </h3>
                            <p className="desc">
                                By virtue of placing an order with CheapestEssay.com , Customer
                                agrees that s/he has read this Agreement and shall be bound by
                                all Terms of Use of the following “Agreement.” Should Customer
                                require clarification of any of these provisions, Customer is
                                responsible for contacting us to request such clarification.
                                Customer is informed that products and services provided by
                                CheapestEssay.com are for research and reference purposes, and
                                CheapestEssay.com does not provide any guarantee relative to a
                                Customer’s grades.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">Writer’s Level</h3>
                            <p className="desc">
                                Customer is responsible to identify the correct writer’s level
                                at the time of order placement. Failure to correct an error in
                                writer level designation may result in increased cost.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">Payment</h3>
                            <p className="desc">
                                No work shall begin on any order until full payment has been
                                received.
                            </p>
                        </div>
                        <div className="content">
                            <h3 className="section-title">
                                Availability of Support Staff/Delivery Delay
                            </h3>
                            <p className="desc">
                                24-hour/7-days a week support is available for resolution of all
                                issues. Should issues arise with delivery, Customer must contact
                                the support staff immediately. If the issue is the fault of
                                CheapestEssay.com, order price shall be re-calculated to reflect
                                the delay and a partial refund shall be provided. Any refund
                                amount may also be applied to a future order.
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
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=disclaimer&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default RevisionPolicy;
