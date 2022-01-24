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
            <div className="revisionPolicy cookiePolicy">
                <div className="top-navbar">
                    <div className="header">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="title">Please Read These Referral Terms Carefully</h1>
                                <p className="desc mb-3">
                                    These referral terms (together with the documents referred to in it) (this “Agreement”) sets out the terms which govern our referral program (“Referral Program”). Please read these terms carefully before using our Referral Program. By using the program, you confirm that you accept this Agreement and that you agree to comply with it. If you do not agree to the terms of this Agreement, you must not use our Referral Program.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="policy-content">
                    <div className="container">
                        <div className="content">
                            <h2 className="section-title">1. Referrals</h2>
                            <p className="desc">1.1. If you are a returned customer with CheapestEssay, we will be glad to offer you great discount opportunities based on your orders history. There are three types of lifetime discount codes you can get: 1- Bronze, 2- Silver, 3- Gold, and 4- VIP</p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">
                                2. Prohibited Uses
                            </h2>
                            <p className="desc">
                                2.1. You may only use our Referral Program in good faith for lawful purposes. You may not:
                            </p>
                            <ul>
                                <li className="list-unstyled">A) Create more than one account in order to invite yourself</li>
                                <li className="list-unstyled">B) Invite others that have created duplicate accounts;</li>
                                <li className="list-unstyled">C) Use alternative contact information to refer yourself or others that have created duplicate accounts;</li>
                                <li className="list-unstyled">D) Invite fictitious persons;</li>
                                <li className="list-unstyled">E) Do anything that damages CheapestEssay’s brand, goodwill or reputation.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">
                                3. Changes to This Agreement
                            </h2>
                            <p className="desc">
                                We may revise this Agreement at any time by amending this page. Continued use of the Referral Program shall amount to acceptance of the Agreement in force at that time.
                            </p>
                            <h2 className="section-title">User Account And Account Log</h2>
                            <p className="desc">If you wish to change your personal information, or if you no longer wish to use our service, you may correct, update, amend, delete/remove or deactivate any details you provided by contacting our Customer Support Team via email or telephone number indicated on our Contact Us page.
                                We will retain your information for as long as your account is active or needed to provide you with our services. We will retain and use your details as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.
                            </p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">
                                4. Changes to The Referrals Program
                            </h2>
                            <p className="desc">
                                CheapestEssay reserves the right to:
                                A) Amend, alter or change the Referral Program at any time, without notice; and
                                B) Terminate the Referral Program at any time, without notice. In the event the Referral Program is terminated.
                            </p>
                        </div>
                        <div className="content mb-0">
                            <h2 className="section-title">5. Abuse of The Referral Terms</h2>
                            <p className="desc mb-0">
                                CheapestEssay has the right to refuse to pay you the Referral if (in its sole and absolute discretion) CheapestEssay suspects that you have not used the Referral Program in good faith or have breached this Agreement.
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
