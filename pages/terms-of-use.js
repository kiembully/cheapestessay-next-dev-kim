import React from "react";

import dynamic from 'next/dynamic';

// scss
import revisionCss from "../styles/revision-policy.scss";

import { ukApiHelper } from "../helper/apiHelper";

const Meta = dynamic(() => import('../components/meta'));
const Contact = dynamic(() => import('../components/home/contact'));

const TermsPolicy = (props) => {
    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
            <style dangerouslySetInnerHTML={{ __html: revisionCss }}></style>
            <div className="revisionPolicy">
                <div className="top-navbar">
                    <div className="header">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="title">CheapestEssay Terms of Use</h1>
                                <p className="desc">
                                    Please read our Terms of Use carefully before using our service. By using our service, you are agreeing to be bound by our terms of use described below; and our privacy policy. If you do not wish to be bound by these terms and policies, please do not access or user our website or use of any of our services. The terms of use are provided on behalf or CheapestEssay.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="policy-content">
                    <div className="container">
                        <div className="content">
                            <h2 className="section-title">
                                Interpretation of Our Terms
                            </h2>
                            <ul>
                                <li>Agreement refers to our Terms and Conditions.</li>
                                <li>Terms – the Company, We, or Our – refer to CheapestEssay.com, the provider of <a href={process.env.hostBaseUrl} className="text-decoration-underline">Online writing services</a> to Customers.</li>
                                <li>Terms – the Customer, the User, You, or Yours – refer to the person or persons who submit Orders with the Company and abide the Terms and Conditions described in this Agreement.</li>
                                <li>Messaging System is the software that ensures uninterrupted communication between the Customer and the Writer, or with a Support Team Agent.</li>
                                <li>Order refers to the actual request for a Product sent to our Company by the Customer. It includes particular requirements and a specification of sources to be used in writing.</li>
                                <li>Order Status shows the progress of the Order, the current position towards completion.</li>
                                <li>Product is the result of the Order, an original content, written and delivered to the Customer in accordance to his or her inquiry as a digital document.</li>
                                <li>Product Revision is a request sent by the Customer for editing the final version of the Product, based on the initial requirements of the order.</li>
                                <li>Quality Assurance Department refers to the Company’s structural unit responsible for evaluating and protecting the quality of our Products and Services.</li>
                                <li>Support Team or Support refers to the Company’s structural unit responsible for coordinating and assisting the Order process.</li>
                                <li>Verification Process is a set of actions required from the Customer and Support to confirm the billing identity of the Customer and transaction authorization as well as to prevent fraud.</li>
                                <li>The Writer is a person employed with a company as a freelancer who provides research and writing services to the Customer according to the Company Agreement.</li>
                                <li>The Application refers to the mobile user application specifically designed to attend to the customer needs with the help of mobile device.</li>
                                <li>The term – Personal Balance – refers to the personal account of the Customer with the Company that stores Credits of the customer, added to his/her personal balance at own will to further compensate the price of the order(s) at own discretion.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">
                                Order Placing and Registration
                            </h2>
                            <ul>
                                <li>
                                    The Order is placed by completing the Order form provided in the Application. No Product is provided by other means of its request. </li>
                                <li>The Order form will specify the scope of work, Order parameters and delivery terms. It is Your personal responsibility to provide exact, full and final information to each standard Order form section when filling in Our Order form. </li>
                                <li>In addition to Your Product requirements You will be requested to register by providing Your contact information such as Name, email address, country of residence and telephone number. Should any of these parameters change over time, it is your responsibility to update your profile accordingly or inform Support of such changes. </li>
                                <li>Once Your profile is created based on the information You provided during registration, You shall not attempt to create another profile by changing your contact details in the Order form. You shall place Orders, communicate and do business with the Company using one and only one profile, created during your first purchase. Should multiple accounts be discovered, the access to such will be closed and purchase history transferred to the only account created during Your first purchase. </li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Order Payment and Discounts</h2>
                            <ul>
                                <li>When placing an Order you agree to buying the Product from the Company. The Company starts to process your Order only after the payment for the Product is made and is authorized.</li>
                                <li>The payment for the Product is calculated according to the Company’s Pricing and is paid in advance as stated in the Order form once the scope of work is identified. The Company is not held responsible for Product delivery until the payment has been made in full and it has been authorized.</li>
                                <li>Orders can be paid with Credit Cards, PayPal, Wire Transfer or by Credits on Your Personal Balance.</li>
                                <li>The Company reserves the right to offer discount and bonus programs to Customers at its own discretion using discount codes the Customer can use when filling out the Order form. Should the code be not provided in the corresponding section of the Order form, the discount will not be provided by the Company for the particular Order.</li>
                                <li>The Company commits to make equal access to discount and bonus program information for each Customer in the Company with no exceptions.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Order Process</h2>
                            <ul>
                                <li>Order validation. The Company reserves the right to re-check the Order details after the payment to confirm the matching of the requirements with the scope of work indicated in the Order. Should cases of mismatch occur, Support reserves the right to modify the Order to ensure the full match of requirements of the Customer.</li>
                                <li>Changes of order details. The Customer and Support may provide changes to the scope of work only if the writer has not started the work yet. No changes can be made once the Writer has started research for the Order. Should the order details increase in volume, order complexity or narrow the completion terms, the Customer will be requested to provide additional compensation for the additional instructions.</li>
                                <li>Communication. The Customer is highly encouraged to communicate with the Writer using the Messaging System or contacting Support by using all available communication means indicated.</li>
                                <li>Progress tracking. The Customer may track the progress of the Order by using his/her personal account, where information about his/her order and its status is reflected. The Customer may as well contact Support by using all communication means available 24/7 to get updates on his or her Order status.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Order Delivery</h2>
                            <ul>
                                <li>The Company is held responsible for the delivery of the Product and for meeting the deadline indicated in the Order.</li>
                                <li>It is the Customer’s personal responsibility to ensure availability of delivery channels once the Company has provided the Product to the Client. The Company will not be held responsible for incorrect email address indicated by the Customer in the profile, spam filters, internet outages and general customer negligence to provide communication channels and others which are beyond the control of the Company. The Customer is encouraged to contact Support 24/7 using all communication channels available for assistance with the Order Delivery.</li>
                                <li>The Customer is held responsible for downloading the product in a timely manner after the Product has been provided by the Company.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Order Revision</h2>
                            <ul>
                                <li>Free amendments are provided to the Customer by the Company to ensure the quality of the Product provided and to ensure total Customer’s satisfaction with the Product. To receive a free revision of the Product, the Customer has to submit a revision request in written form using the Messaging System or Company’s email no later than fourteen (14) calendar days after the Order delivery date and no later than thirty (30) calendar days after the Order delivery date for any dissertation, thesis, research proposal, thesis proposal, dissertation chapters writing or any other reasonably large assignments. Should the revision deadline be missed, the Customer may have his or her order revised for additional payment or place an order for editing.</li>
                                <li>The Quality Assurance Department reserves the right to decline a revision request if the revision instructions violate initial Order instructions. In such cases the Customer may be requested to pay additionally for the requested changes or place the Order for editing.</li>
                                <li>The Quality Assurance Department reserves the right to decline or limit multiple revision requests if the Customer’s behavior demonstrates obvious exploitation of the Writer and other unreasonable requests.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Refund Policy</h2>
                            <p className="desc">
                                The Company is held responsible for delivering the Product in a timely manner and according to the Customer requirements indicated in the Order. Should any of the Company’s commitments be violated the Customer is entitled for a partial or a full reimbursement according to our Money Back Guarantee Policy.
                            </p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">The Use of Products</h2>
                            <ul>
                                <li>When making a payment for an Order you agree it is for personal and non-commercial use only and the payment you make is a reflection of time and effort for conducting research and writing pertaining to your order as well as maintenance and administration necessary for Product delivery.</li>
                                <li>You are not to reproduce, modify, distribute or display the Product in any way on a World Wide Web or in the form of a hard copy over a reasonable limit necessary for personal use.</li>
                                <li>Writers who work on behalf of our Company hand over the ownership of all delivered Products to the Company, that retains full copyright of the Products We provide.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Company’s Responsibility</h2>
                            <ul>
                                <li>The Company has zero tolerance to plagiarism, academic dishonesty and fraud. We will not be held accountable if such unethical and illegal use of our products and Website content occurs.</li>
                                <li>We strictly abide all Copyright laws. Any opposing activity is solely a responsibility of the Customer if he/she breaks our Terms and Conditions.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Verification Process</h2>
                            <ul>
                                <li>In order to meet the existing fraud prevention policies and procedures we must provide verification of every Customer’s billing information. It is the Customer’s sole responsibility to immediately verify the provided data and comply with our Company’s request sent via email. We reserve the right to reject not verified orders as they are violating our Agreement.</li>
                                <li>Stolen cards usage or any other fraudulent behavior will be immediately reported to the relevant law enforcement authorities for further investigation. Our Company is strongly against any kind of cybercrime.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Miscellaneous Provisions</h2>
                            <ul>
                                <li>All Terms and Conditions that define the rights and obligations of both contract parties, the Customer and the Company, are listed in this Agreement. This document solely, its statements, promises or inducements, are to be considered valid or binding. After accepting the Terms and Conditions, this Agreement substitutes all previous verbal or written communications and/or Agreements between the parties. The content can only be modified in writing, signed by the Customer and the Company, and endorsed on this Agreement.</li>
                                <li>The Customer accepts that if a certain portion of our Terms and Conditions is in conflict with any state law, it will not affect the rest of the document. Our and the Customer’s rights and obligations will continue to be in force as there is no invalid part in the Agreement.</li>
                                <li>The Agreement is governed, in its interpretation and performance, by the laws of the state where the Company is located and holds its principal business.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Privacy and Security</h2>
                            <p className="desc">We highly value the privacy of our Customers and will not disclose their personal and billing information to any third parties. To ensure the data are protected, the Company processes all transactions through the secure online payment system. However, the Company cannot be held responsible if credit information gets disclosed without our Company’s consent or beyond its control. Should any privacy or security questions arise, the Customer is welcomed to refer to our Privacy Policy.</p>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Warranty Disclaimer</h2>
                            <ul>
                                <li>The Company provides no warranties or representations in terms of the stated website or any materials published. The case includes any warranties of merchantability or lack of infringement of use, or any warranties arising from the direct usage of the service or any products purchased via this website.</li>
                                <li>The Company also does not claim that our service will always be uninterrupted or free of errors, and thus will not be held liable for any consequences that can occur as a result. It is the Customer’s responsibility to evaluate the accuracy, completeness, or usefulness of any information, opinion, advice, or other content provided in connection with our service or otherwise.</li>
                            </ul>
                        </div>
                        <div className="content">
                            <h2 className="section-title">Limitation of Liability</h2>
                            <p className="desc">By accepting the above Terms and Conditions of this Agreement you agree to release and not hold the Company and its employees, shareholders, officers, agents, representatives, directors, affiliates, promotion, subsidiaries, advertising and fulfillment agencies, any third-party providers or sources of information or data and legal advisers (the “Company’s Affiliates”) responsible for any and all losses, rights, damages, claims, and actions of any kind, arising from or related to the products, including but not limited to:</p>
                            <ul>
                                <li>Telephone, electronic, hardware or software, Internet, network, email, or computer malfunctions, failures or difficulties of any kind.</li>
                                <li>Failed, garbled, incomplete or delayed computer transmissions.</li>
                                <li>Any condition caused by events beyond the control of the Company, that might cause the product to be corrupted, delayed or disrupted.</li>
                                <li>Any injuries, damages or losses of any sort arising in connection with, or as a result of, utilizing our services.</li>
                                <li>Any printing or typographical errors in any materials associated with our services.</li>
                            </ul>
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
    const res = await ukApiHelper(`seoV1?page=terms-of-use&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default TermsPolicy;
