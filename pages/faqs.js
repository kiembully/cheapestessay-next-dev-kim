import React, { useState } from "react";
import Head from "next/head";
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import dynamic from 'next/dynamic';

// API helper
import { ukApiHelper } from "../helper/apiHelper";

// scss
import faqCss from "../styles/faq.scss"

import Img from "../components/Common/image";

const Meta = dynamic(() => import('../components/meta'));
const MorePageHeader = dynamic(() => import('../components/otherPages/topHeader'));
const FreeFeature = dynamic(() => import('../components/freeFeature'));
const Feedback = dynamic(() => import('../components/home/feedback'));
const Contact = dynamic(() => import('../components/home/contact'));
const Faq = dynamic(() => import('../components/home/faq'));

const getFaqDetails = [
    { img: "/faq/about-writer.svg", label: "About the Writers" },
    { img: "/faq/account-security.svg", label: "Account Security" },
    { img: "/faq/order-delivery.svg", label: "Order and Delivery" },
    { img: "/faq/pricing-payment.svg", label: "Pricing and Payment" },
    { img: "/faq/quality-service.svg", label: "Quality of Service" },
];

const Guarantee = (props) => {

    var contentData = props.content && props.content
    var getContent = props.content && props.content.faq ? props.content.faq : []

    const [activeTab, setActiveTab] = useState(0);

    // search text
    const [searchText, setsearchText] = useState("");

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    const [searchData, setSearchData] = useState(null)

    //changeText
    const changeText = value => {
        let searchTxt = (value).toLowerCase();

        let passedData = null;
        if (value !== '') {
            let fArray = [];

            getContent.forEach(element => {
                let cleanText = ((element.question + " " + element.answer)).replace(/<\/?[^>]+(>|$)/g, "").toLowerCase();

                let fetchedElement = cleanText.search(searchTxt);
                if (parseInt(fetchedElement) >= 0) {
                    fArray.push(element);
                }
            });

            passedData = { ...contentData }
            passedData.faq = fArray
        }

        setSearchData(passedData);
        setsearchText(value);
    }

    var faqSchema = ''
    if (getContent && getContent.length > 0) {
        faqSchema = `
            {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "name": "FAQs",
                "mainEntity": [                                    
                    ${getContent.map(element =>
                    `{
                        "@type": "Question",
                        "name": "${(element.question).replace(/"/g, '&quot;')}",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "${((element.answer).replace(/"/g, '&quot;')).replace(/<(.|\n)*?>/g, '')}"
                        }
                    }`
                )}
                ]
            }
        `
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: faqCss }}></style>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />

            <Head>
                {faqSchema !== '' ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} /> : null}
            </Head>

            <div className="faqPage">
                <MorePageHeader title="CheapestEssay FAQs" desc="Do you have questions about our writing and editing service? If you want to know how our service works then read the answers at FAQs on our site and learn more about our service. These are the collection of frequently asked questions of our customers."
                    href={`${process.env.hostBaseUrl}/order`} btnText="Order Now" src="/faq/faqImg.svg" alt="CheapestEssay FAQs" />
                <section className="howCanHelp">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-title">Hello, How Can We Help?</h2>
                            <p className="desc">CheapestEssay Frequently Asked Questions by Our Customers About Our Service</p>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="input-group mb-4 faQform">
                                    <input className="form-control" value={searchText} onChange={(e) => changeText(e.target.value)} type="text" placeholder="Ask Question..." />
                                    <div className="searchBtn" onClick={() => changeText(searchText)}>
                                        <Img title="Search" src="/faq/search.svg" alt="search" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="desc text-center">or choose a catagory to quickly find the help you need</p>
                        <div className="helpInfo">
                            {
                                searchText === '' ?
                                    <>
                                        <Nav tabs>
                                            {getFaqDetails.map(function (list, index) {
                                                return (
                                                    <NavItem key={index}>
                                                        <NavLink
                                                            className={classnames({ active: activeTab === index })}
                                                            onClick={() => { toggle(index); }}
                                                        >
                                                            <Img src={list.img} title="Link" alt={list.label} width="40" height="40" />
                                                            <span>{list.label}</span>
                                                        </NavLink>
                                                    </NavItem>
                                                )
                                            })}
                                        </Nav>
                                        <TabContent activeTab={activeTab}>
                                            {getFaqDetails.map(function (list, index) {
                                                let faqData = [];
                                                let passedData = { ...contentData };
                                                if (getContent && getContent.length) {
                                                    faqData = getContent.filter(function (item) { return (item.category_name).toLowerCase() === list.label.toLowerCase() });
                                                }
                                                passedData.faq = faqData;
                                                return (
                                                    <TabPane key={index} tabId={index}>
                                                        <Faq faqData={passedData} />
                                                    </TabPane>
                                                )
                                            })}
                                        </TabContent>
                                    </> :
                                    searchData && searchData.faq && searchData.faq.length > 0 ?
                                        <Faq faqData={searchData} /> :
                                        <div className="noReview-found">No found data</div>
                            }
                        </div>
                    </div>
                </section>
                <FreeFeature />
                <Feedback reviewData={props.reviews && props.reviews} schemaPageName={props.meta && props.meta.pageName} metaDescription={props.meta.description} />
                <Contact />
            </div>
        </>
    )
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=faqs&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    const resReviews = await ukApiHelper(`webReviewsV1?page=faqs`, 'GET', null, null)
    const reviews = resReviews.data.status ? resReviews.data.data : null

    const resContent = await ukApiHelper(`servicesV1?page=faqs&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const content = resContent.data.status ? resContent.data.data : null

    return {
        props: {
            meta,
            reviews,
            content
        }
    }
}

export default Guarantee;