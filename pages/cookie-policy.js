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
                                <h1 className="title">About Cookie Policy</h1>
                                <p className="desc mb-3">
                                    This cookie policy is all about what cookies are and how we make use of them. It specifies the various types of cookies we utilize to collect the data and how we use it. Also, it showcases how to manage cookie preferences. See our Privacy Policy for more information on how we use, store, and protect your data.
                                </p>
                                <p className="desc"> In our Privacy Policy, you can learn more about who we are, how to contact us, and how we handle personal data.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="policy-content">
                    <div className="container">
                        <div className="content">
                            <h2 className="section-title">What are Cookies?</h2>
                            <p className="desc">Cookies are short text files that we send across to your laptop or another device. They are identical to your browser or account. Session-based cookies are temporary cookies that exist while only the browser is open or automatically eliminated when you shut your browser. Constant cookies are stored on your computer until you or your browser delete them or until they expire.</p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">
                                How do we make use of cookies?
                            </h2>
                            <p className="desc">
                                There are some cookies related to your account and personal data to remember that you are signed in and which services you are exploring to order. Other cookies may not be associated with your account but are exceptional and enable us to perform customization and analytics, among various other things.
                            </p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">
                                How do we use cookies for advertising?
                            </h2>
                            <p className="desc">
                                Cookies and other ad technology like pixels, tags, and beacons enable us to advertise more efficiently to users who are interested in our services. They also assist us in offering aggregated auditing, statistics, research, and reporting, as well as knowing when the document has been highlighted to you.
                            </p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">
                                What to do if you don't want cookies to be set?
                            </h2>
                            <p className="desc">
                                YThere are many browsers that enable you to manage cookies as per your preferences. Cookie preferences for every website can also be handled in some browsers.
                            </p>
                            <p className="desc">You can check and know about the policy for managing cookies in several browsers below:</p>
                            <ul>
                                <li>Google Chrome</li>
                                <li>Internet Explorer</li>
                                <li>Mozilla Firefox</li>
                                <li>Safari</li>
                                <li>Android Browser</li>
                                <li>Opera</li>
                            </ul>
                            <p className="desc">Also, you get the option to avoid third-party cookies from Google Analytics on its site.</p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">What are the Cookies used on our website?</h2>
                            <p className="desc">
                                <b>Authentication:</b> Cookies help us show you the correct data and personalize your experience if you're logged in to our website.
                            </p>
                            <p className="desc">
                                Marketing: Cookies may be used to assist us in delivering marketing campaigns and tracking their effectiveness. Simultaneously, our partners may make use of cookies to offer us information about the conversations with their services. However, the usage of third-party cookies is subjected to the policies set by the service provider.
                            </p>
                            <p className="desc">
                                Security: We make use of cookies to empower and support our security features. This also helps us in analyzing the malicious activity.
                            </p> 
                             <p className="desc">
                                Performance, Analytics, and Research: Cookies assist us in determining how user-friendly our website is. We also utilize cookies to understand better, enhance, and research products, advantages, and services, such as creating logs. It helps us when you access our website from different devices, such as your work computer or mobile device.
                            </p>
                            <p className="desc">
                                Preferences, Features, and Services: Cookies help us understand which language we prefer and how we wish to communicate. They can make it simpler for you to fill out forms on our website. They also offer features, insights, and personalized content.
                            </p>
                        </div>
                        <div className="content mb-0">
                            <h2 className="section-title">Contact us</h2>
                            <p className="desc mb-0">
                                If you have any issues related to our cookie policy, feel free to reach out to us at:
                                <a href="mailto:support@cheapestessay.com"> Support@CheapestEssay.com</a>
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
