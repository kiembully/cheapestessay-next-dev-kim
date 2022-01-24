import React, { useState, useEffect }  from "react";

import dynamic from 'next/dynamic';

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

// API helper
import { ukApiHelper, apiHelper } from "../../helper/apiHelper";

// scss
import servicesCss from "../../styles/services.scss";

const Meta = dynamic(() => import('../../components/meta'));
const Feedback = dynamic(() => import('../../components/home/feedback'));
const Faq = dynamic(() => import('../../components/home/faq'));
const Contact = dynamic(() => import('../../components/home/contact'));
const HeaderRating = dynamic(() => import('../../components/header/rating'));
const FreeFeature = dynamic(() => import('../../components/freeFeature'));

// var baseUrl = 'https://www.cheapestessay.com/';
var baseUrl = process.env.hostBaseUrl;

// const servicesData = [
//     {
//         serviceTitle: "Essay (Any Type)", serviceList: [
//             { name: "Same Day Essay", link: `${baseUrl}/same-day-essay-writing-service` },
//             { name: "Essay Editing", link: `${baseUrl}/essay-editing-service` },
//             { name: "Scholarship Essay", link: `${baseUrl}/scholarship-essay-writing-service` },
//             { name: "College Essay", link: `${baseUrl}/college-essay-writing-service` },
//             { name: "Essay Formatting", link: `${baseUrl}/essay-formatting-service` },
//             { name: "Buy Essay", link: `${baseUrl}/buy-essay` },
//             { name: "Admission Essay", link: `${baseUrl}/admission-essay-writing-service` },
//             { name: "Pay for Essay", link: `${baseUrl}/pay-for-essay` },
//             { name: "Essay Outline", link: `${baseUrl}/writing-an-essay-outline` },
//             { name: "Write Essay For Money", link: `${baseUrl}/write-essay-for-money` },
//             { name: "Pay For Paper", link: `${baseUrl}/pay-for-paper` },
//             { name: "Fast Essay Writing Service", link: `${baseUrl}/fast-essay-writing-service` },
//             { name: "Order An Essay", link: `${baseUrl}/order-an-essay` },
//             { name: "Argumentative Essay Writing Service", link: `${baseUrl}/argumentative-essay-writing-service` },
//             { name: "Buy Argumentative Essay", link: `${baseUrl}/buy-argumentative-essay` },
//             { name: "Essays For Sale", link: `${baseUrl}/essays-for-sale` },
//             { name: "Persuasive Essay Writing Service", link: `${baseUrl}/persuasive-essay-writing-service` },
//             { name: "College Essay Editing Service", link: `${baseUrl}/college-essay-editing-service` },
//             { name: "Buy College Essays", link: `${baseUrl}/buy-college-essays` },
//             { name: "Pay For College Essay", link: `${baseUrl}/pay-for-college-essay` }
//         ]
//     },
//     {
//         serviceTitle: "Research Paper", serviceList: [
//             { name: "Custom Research Paper", link: `${baseUrl}/custom-research-paper-writing` },
//             { name: "Write Research Paper", link: `${baseUrl}/write-my-research-paper` },
//             { name: "Cheap Research Paper", link: `${baseUrl}/cheap-research-paper` },
//             { name: "Buy Research Paper", link: `${baseUrl}/buy-research-paper-online` },
//             { name: "Pay For Research Paper", link: `${baseUrl}/pay-for-research-paper` },
//             { name: "Term Paper Writer", link: `${baseUrl}/term-paper-writer` },
//             { name: "Write My Term Paper", link: `${baseUrl}/write-my-term-paper` },
//             { name: "Term Paper Help", link: `${baseUrl}/term-paper-help` },
//             { name: "Custom Term Paper", link: `${baseUrl}/custom-term-paper` },
//             { name: "Research Paper Help", link: `${baseUrl}/research-paper-help` },
//             { name: "Research Proposal", link: `${baseUrl}/research-proposal` },
//         ]
//     },
//     {
//         serviceTitle: "Course Work", serviceList: [
//             { name: "Buy Coursework", link: `${baseUrl}/buy-coursework` },
//             { name: "Custom Coursework", link: `${baseUrl}/custom-coursework` },
//             { name: "Coursework Help", link: `${baseUrl}/coursework-help-online` },
//         ]
//     },
//     {
//         serviceTitle: "Case Study", serviceList: [
//             { name: "Write My Case Study", link: `${baseUrl}/write-my-case-study` },
//             { name: "Case Study Help", link: `${baseUrl}/case-study-help` },
//         ]
//     },
//     {
//         serviceTitle: "Assignment", serviceList: [
//             { name: "Programming Assignment Help", link: `${baseUrl}/programming-assignment-help` },
//             { name: "University Assignment Help", link: `${baseUrl}/university-assignment-help` },
//             { name: "Assignment Editing", link: `${baseUrl}/assignment-editing` },
//             { name: "Write My Assignment", link: `${baseUrl}/write-my-assignment` },
//             { name: "Assignment Help", link: `${baseUrl}/assignment-help` },
//             { name: "Buy Assignment", link: `${baseUrl}/buy-assignment` },
//             { name: "College Assignment Help", link: `${baseUrl}/college-assignment-help` },
//             { name: "Writing Multiple Choice Questions", link: `${baseUrl}/writing-multiple-choice-questions` },
//         ]
//     },
//     {
//         serviceTitle: "Dissertation", serviceList: [
//             { name: "Dissertation Proposal", link: `${baseUrl}/writing-a-dissertation-proposal` },
//             { name: "Write My Dissertation", link: `${baseUrl}/write-my-dissertation` },
//         ]
//     },
//     { serviceTitle: "Math Problems", serviceList: [], link: `${baseUrl}/math-homework-help` },
//     { serviceTitle: "Book Movie Report/Review", serviceList: [], link: `${baseUrl}/book-movie-review-services` },
//     { serviceTitle: "Cover Letter", serviceList: [], link: `${baseUrl}/professional-cover-letter-writing-services` },
// ];

export default function Services(props) 
{

    const [services_list, setServices_list] = useState([]);

    // once rendered
    useEffect(() => {
        apiHelper("us/sitemapPageUrls?page=services", "GET", null, null).then((res) => {
            if(res.data.status === true)
            {
                setServices_list(res.data.data);
            }
          });
    });

    var serviceData = props.content && props.content;
    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
            <style dangerouslySetInnerHTML={{ __html: servicesCss }}></style>
            <div className="top-navbar">
                <div className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <div className="cheapest-detail text-center">
                                    <h1 className="title">
                                        {serviceData && serviceData.page_contents && serviceData.page_contents.initial_content ?
                                            <>
                                                {serviceData.page_contents.initial_content}</>
                                            : 'Professional Paper Writing Services for Academic Success'}
                                    </h1>
                                    <p className="desc">
                                        {serviceData && serviceData.page_contents &&
                                            serviceData.page_contents.initial_pitch_header ? serviceData.page_contents.initial_pitch_header :
                                            '6000+ Professional Writers and over 7000 clients worldwide. Hire an Essay writer for any job online now! Place your order today!'}
                                    </p>
                                </div>
                                <div className="bottom-star">
                                    <HeaderRating />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="services text-center">
                <div className="container">
                    <div className="title">
                        <h2 className="section-title">What are you looking for?</h2>
                    </div>
                    <ul className="list text-start">
                        <Accordion allowZeroExpanded>
                            {services_list.map((info, id) => {
                                return (
                                    <AccordionItem key={id}>
                                        <AccordionItemHeading className="accordion-header">
                                            <AccordionItemButton className={`accordion-button ${info.urls && info.urls.length > 0 ? "" : "NoBody"}`}>
                                                {info.urls && info.urls.length > 0 ?
                                                    <h3 className="faqTitle mb-0">{info.group}</h3>
                                                    :
                                                    <h3 className="faqTitle mb-0"><a href="/">{info.group}</a></h3>}
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        {info.urls && info.urls.length > 0 ?
                                            <AccordionItemPanel className="accordion-body">
                                                <ul className="serviceList">
                                                    {info.urls.map((url, id1) => {
                                                        return (
                                                            <li key={id1}><a href={url.link}>{url.name}</a></li>
                                                        )
                                                    })}
                                                </ul>
                                            </AccordionItemPanel>
                                            : null}
                                    </AccordionItem>
                                )
                            })}
                        </Accordion>
                    </ul>
                </div>
            </div>
            <section className="free-features serviceWriting text-center">
                <div className="container">
                    <h2 className="section-title">We ❤️ Writing</h2>
                    <div className="desc mb-0">
                        At cheapestessay, we're proud to know exactly what goes into making
                        an awesome essay. We've dedicated over 14 years towards becoming
                        experts in all things academic – from essays, assignments and
                        coursework, through to dissertations, exams, reports and
                        reflections. While others come and go, UK Essays has grown and
                        developed into one of the world's leading academic support
                        companies. Got more questions about our services?
                    </div>
                </div>
            </section>
            <section className="whyChoose text-center pb-0">
                <div className="container">
                    <h2 className="section-title">Why Choose us?</h2>
                    <div className="desc">
                        When you are entirely blank about working on your college
                        assignment, use our affordable paper writing service. Give your
                        academic burden to us and meanwhile take advantage of these perks
                    </div>
                    <div className="list">
                        <div className="row">
                            <div className="col-sm-6 col-md-4">
                                <div className="bg-white card-body">
                                    <svg
                                        width="42"
                                        height="40"
                                        viewBox="0 0 42 40"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M18.9167 0.163818L17.3013 7.28459L11.6535 13.559C10.9639 14.3236 10.5833 15.3171 10.5833 16.3463V35.5805C10.5833 37.8826 12.4479 39.7472 14.75 39.7472H31.4818C33.0255 39.7472 34.4232 38.8382 35.0503 37.4278L41.3044 23.3531C41.6523 22.5739 41.8333 21.7292 41.8333 20.8751V18.9138C41.8333 16.6222 39.9583 14.7472 37.6667 14.7472H23.0833C23.0833 14.7472 25.1667 9.80815 25.1667 6.12899C25.1667 0.416488 18.9167 0.163818 18.9167 0.163818ZM0.166656 14.7472V39.7472H6.41666V14.7472H0.166656Z"
                                            fill="#FBD501"
                                        />
                                    </svg>
                                    <div className="innerTitle">Safe &amp; Trusted</div>
                                    <div className="desc w-100 m-0">
                                        Your cheapestessay purchase is secure and we're rated
                                        4.4/5 on cheapestessay
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="bg-white card-body">
                                    <svg
                                        width="44"
                                        height="45"
                                        viewBox="0 0 44 45"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19 0.99707C16.7899 0.99707 14.6702 1.87504 13.1074 3.43785C11.5446 5.00065 10.6667 7.12027 10.6667 9.3304C10.6667 11.5405 11.5446 13.6602 13.1074 15.223C14.6702 16.7858 16.7899 17.6637 19 17.6637C21.2101 17.6637 23.3298 16.7858 24.8926 15.223C26.4554 13.6602 27.3333 11.5405 27.3333 9.3304C27.3333 7.12027 26.4554 5.00065 24.8926 3.43785C23.3298 1.87504 21.2101 0.99707 19 0.99707ZM19 23.9137C12.4562 23.9137 0.25 27.1346 0.25 33.2887V38.4971H21.4414L32.7451 27.1893C28.6159 25.0289 22.8396 23.9137 19 23.9137ZM40.2646 25.9971C39.9982 25.9971 39.7313 26.0991 39.5282 26.3022L37.4448 28.3856L41.6115 32.5522L43.6948 30.4689C44.1011 30.0627 44.1011 29.4022 43.6948 28.9959L41.0011 26.3022C40.797 26.0991 40.5311 25.9971 40.2646 25.9971ZM35.9718 29.8586L25.25 40.5804V44.7471H29.4167L40.1385 34.0252L35.9718 29.8586Z"
                                            fill="#FBD501"
                                        />
                                    </svg>
                                    <div className="innerTitle">Bespoke</div>
                                    <div className="desc w-100 m-0">
                                        All work is written to order. No plagiarism, guaranteed!
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-4">
                                <div className="bg-white card-body">
                                    <svg
                                        width="42"
                                        height="41"
                                        viewBox="0 0 42 41"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.75 0.99707C6.69582 0.99707 0.166656 6.5929 0.166656 13.4971C0.166656 15.845 0.935407 18.0327 2.24999 19.9098V30.1637L9.1022 25.0246C10.8397 25.6496 12.7479 25.9971 14.75 25.9971C22.8042 25.9971 29.3333 20.4012 29.3333 13.4971C29.3333 6.5929 22.8042 0.99707 14.75 0.99707ZM33.4512 12.61C33.4678 12.9059 33.5 13.1992 33.5 13.4971C33.5 22.6867 25.0896 30.1637 14.75 30.1637C14.7083 30.1637 14.6675 30.1556 14.6279 30.1556C17.1488 33.891 21.8521 36.4137 27.25 36.4137C29.2521 36.4137 31.1603 36.0662 32.8978 35.4412L39.75 40.5804V30.3265C41.0646 28.4494 41.8333 26.2617 41.8333 23.9137C41.8333 18.9137 38.4012 14.61 33.4512 12.61Z"
                                            fill="#FBD501"
                                        />
                                    </svg>
                                    <div className="innerTitle">Contact us</div>
                                    <div className="desc w-100 m-0">
                                        We're here to answer any questions you have about our services
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Feedback reviewData={props.reviews && props.reviews} schemaPageName={props.meta && props.meta.pageName} metaDescription={props.meta.description} />
            <FreeFeature />
            <Faq faqData={serviceData && serviceData} />
            <Contact />
        </>
    );
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=services&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    const resReviews = await ukApiHelper(`webReviewsV1?page=services`, 'GET', null, null)
    const reviews = resReviews.data.status ? resReviews.data.data : null

    const resContent = await ukApiHelper(`servicesV1?page=services&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const content = resContent.data.status ? resContent.data.data : null

    return {
        props: {
            meta,
            reviews,
            content
        }
    }
}
