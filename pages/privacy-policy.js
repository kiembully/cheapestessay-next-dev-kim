import React from "react";

//api
import { ukApiHelper } from "../helper/apiHelper";

// scss
import revisionCss from "../styles/revision-policy.scss";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));
const Contact = dynamic(() => import('../components/home/contact'));

const RevisionPolicy = (props) => {
    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
            <style dangerouslySetInnerHTML={{ __html: revisionCss }}></style>
            <div className="revisionPolicy">
                <div className="top-navbar">
                    <div className="header">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="title">CheapestEssay Privacy Policy</h1>
                                <p className="desc">
                                    Our company is very serious on our user's data security. We make sure that every detail and information shared with us will be never sell, rent or share the acquired details to any third parties. We request our visitors and customers to read our privacy policy thoroughly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="policy-content">
                    <div className="container">
                        <h2 className="section-title">Introduction</h2>
                        <p className="desc">
                            Before using our Application, please, make sure that you carefully
                            review all the below mentioned points of our Privacy Policy. The
                            following rules explain the main principles according to which
                            personal information of our Customers is processed.
                        </p>
                        <div className="content">
                            <h2 className="section-title">
                                Information Collected When Placing Your Order
                            </h2>
                            <p className="desc">
                                The information we need to you to provide may include:
                            </p>
                            <ul>
                                <li>Your name, billing address, e-mail and telephone number(s).</li>
                                <li>Paper details of the order that you place on our website and information, necessary for order completion.</li>
                                <li>Recorded Chat and phone conversations.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">
                                Information That You Provide When Filling In The Application Form
                            </h2>
                            <p className="desc">
                                Anyone, who places an order on CheapestEssay.com, submits necessary details in an automatic order form. It includes time of access, type of device and location. We gather such information in order to implement improvements in our Service that will make it easier to use. We guarantee that this information will not be sold, shared or rented to any third parties.
                            </p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">
                                The Use Of Collected Information
                            </h2>
                            <p className="desc">As mentioned above, our Company never sells, rents or shares the acquired details to any third parties, they are only used in the following cases:</p>
                            <ul>
                                <li>To provide you with the services that you wish to use.</li>
                                <li>For internal record keeping, billing, accounting and market research purposes.</li>
                                <li>To respond to any queries, complaints or requests for further information.</li>
                                <li>To customize the content and/or layout of the Service.</li>
                                <li>To notify you about important changes and alterations to the Service.</li>
                            </ul>
                            <p className="desc">Except as set out above, we will not sell, distribute or disclose your Information without your consent, unless in occasions required or permitted by law, such as complying with a subpoena, or similar legal processes.</p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Plagiarism</h2>
                            <ul>
                                <li> As a customer, you reserve the right to ask for a revision. Moreover, customer will get 100% refund if the level of plagiarism is higher than 10%. ( Note that the plagiarism level allowed by Our Company must be less than 10%.)</li>
                                <li>We don't guarantee plagiarism in Editing/ Proofreading orders! Because they might be plagiarism before you gave us. So we can't give a refund if your editing order is plagiarized.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Amendments of the Privacy Policy</h2>
                            <p className="desc">
                                The conditions states in our Privacy Policy may change depending on the improvements we implement. It is strongly suggested that you constantly review these pages to be updated on the possible amendments.
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
    const res = await ukApiHelper(`seoV1?page=privacy-policy&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default RevisionPolicy;
