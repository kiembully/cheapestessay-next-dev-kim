import React from "react";
import CountUp from "react-countup";
import Head from "next/head";

import { useRouter } from 'next/router';

import dynamic from 'next/dynamic';

//api
import { ukApiHelper } from "../helper/apiHelper";

// scss
import aboutCss from "../styles/about.scss";

const Img = dynamic(() => import('../components/Common/image'));
const Meta = dynamic(() => import('../components/meta'));
const Feedback = dynamic(() => import('../components/home/feedback'));
const Contact = dynamic(() => import('../components/home/contact'));
const HeaderRating = dynamic(() => import('../components/header/rating'));


export default function HowItWork(props) {

  // router
  const router = useRouter()
  var aboutSchema = `{
    "@context": "https://schema.org/",
    "@type": "AboutPage",
    "url": "${process.env.hostBaseUrl}${router && router.asPath ? router.asPath : ''}",
    "name": "${props.meta && props.meta.pageName ? props.meta.pageName : ''}",
    "description": "${props.meta.description ? (props.meta.description).replace(/"/g, '&quot;') : ''}"
  }`

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: aboutCss }}></style>

      <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: aboutSchema }} />
      </Head>

      <div className="about">
        <div className="top-navbar">
          <div className="header">
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                  <div className="cheapest-details text-center">
                    <h1 className="title">About CheapestEssay</h1>
                    <p className="desc">
                      Engulfing in the splash of your college assignments? Get a grip of our support and leave all your academic headaches with us. Whenever you have an assignment urgency, our qualified team of experts is there to provide you with best-in-class online writing solutions in just a matter of hours as per your needs and requirements.
                    </p>
                    <div className="order-now">
                      <a href={`${process.env.hostBaseUrl}/order`} className="btn secondary-btn">
                        Order Now
                      </a>
                    </div>
                    <div className="bottom-star">
                      <div className="row">
                        <div className="col-md-10 offset-md-1">
                          <HeaderRating />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="scholarly">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2 className="section-title text-start">
                All your Academic Needs Covered
              </h2>
              <p className="desc w-100">
                Get complete control over your studies with our affordable academic paper writing services. Our unique online paper writing helps students worldwide get top-quality assignments written by expert writers.
              </p>
              <p className="desc w-100">
                Founded in the year 2014, CheapestEssay was established with the aim to provide every student a chance to get access to professional, accurate, and detailed paper writing services. Equipped with more than 600+ experienced and qualified writers, we can work on any assignments and ensure that it aligns with all the university guidelines. You can get your custom essay written from scratch on any topic while resting assured that your data stays confidential.              </p>
            </div>
            <div className="col-md-4">
              <div className="image text-center">
                <Img src="/about/about1.gif" title="About" alt="about" width="212" height="226" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-details">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 box">
              <div className="aboutDetailBox">
                <h4 className="number">
                  <CountUp end={600} duration={5} />
                  <span>+</span>
                </h4>
                <span className="content">Skilled Writers</span>
              </div>
            </div>
            <div className="col-sm-4 box">
              <div className="aboutDetailBox">
                <h4 className="number">
                  <CountUp end={100} duration={5} />
                  <span>k+</span>
                </h4>
                <span className="content">Student Fall in Love With Us</span>
              </div>
            </div>
            <div className="col-sm-4 box">
              <div className="aboutDetailBox">
                <h4 className="number">
                  <CountUp end={7} duration={5} />
                  <span>+</span>
                </h4>
                <span className="content">Years on the Market</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">
              Advantages of Using our Online Academic Writing Services
            </h2>
            <p className="desc">
              Your paper writing help services are undoubtedly going to be surpassing the CheapestEssay. Let us handle your academic order while you take advantage of these perks.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="helper text-center">
                <div className="image">
                  <Img src="/about/fast-delivery.svg" title="Fast" alt="fast-delivery" width="80" height="80" />
                </div>
                <h3 className="subTitle">Fast Delivery</h3>
                <p className="desc">
                Looking for urgent essay help and don’t know where to start? Avail of our paper writing services and get your assignment done in as little as 3 hours.
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="helper text-center">
                <div className="image">
                  <Img src="/about/clock-service.svg"  title="Clock" alt="clock-service" width="80" height="80" />
                </div>
                <h3 className="subTitle">Round the Clock Service</h3>
                <p className="desc">
                Stuck with some primary concern regarding your paper? Connect to our support team, who are available 24X7 and get your queries resolved in no time
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="helper text-center">
                <div className="image">
                  <Img src="/about/money-back.svg" title="MoneyBack" alt="money-back" width="80" height="80" />
                </div>
                <h3 className="subTitle">Money-Back Guarantee</h3>
                <p className="desc">
                Wish to know about the refund policy? If the article does not meet your expectations, you can request a refund within 14 days from the time of delivery
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="helper text-center">
                <div className="image">
                  <Img
                    src="/about/plagiarism-Free.svg"
                    alt="plagiarism-Free"
                    width="80" height="80"
                    title="Plagiarism"
                  />
                </div>
                <h3 className="subTitle">Plagiarism-Free</h3>
                <p className="desc">
                Worried about the uniqueness of the paper? Rest assured, as all your writing is checked on top plagiarism software to ensure the article is unique and authentic
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="helper text-center">
                <div className="image">
                  <Img src="/about/anonymity.svg" title="Anonymity" alt="anonymity" width="80" height="80" />
                </div>
                <h3 className="subTitle">Anonymity</h3>
                <p className="desc">
                Stressed out about your privacy? Safeguarding your data is our top priority. Thus we assure complete anonymity for both the writers and students
                </p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="helper text-center">
                <div className="image">
                  <Img
                    src="/about/unlimited-revision.svg"
                    alt="unlimited-revision"
                    title="Revision"
                    width="80" height="80"
                  />
                </div>
                <h3 className="subTitle">Unlimited Revision</h3>
                <p className="desc">
                Concerned about your paper not meeting the expectations? In case the writer has not followed the foremost instructions, you can raise a request to revise your paper for free
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-details">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 box">
              <div className="aboutDetailBox">
                <span className="content">
                  <span>80000</span> academic papers were completed in 2021!
                </span>
              </div>
            </div>
            <div className="col-sm-4 box">
              <div className="aboutDetailBox">
                <span className="content">
                  we write over <span>6500</span> orders per month!
                </span>
              </div>
            </div>
            <div className="col-sm-4 box">
              <div className="aboutDetailBox">
                <span className="content">
                  we take on <span>200</span> new papers per Day!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-0 aboutImg">
        <div className="container">
          <h2 className="section-title text-center">
            And More Reasons to Avail Our Essay Writing Services
          </h2>
          <div className="row">
            <div className="col-xl-6">
              <div className="image text-center">
                <Img src="/about/about-service.webp" title="About" alt="About Service" width="537" height="666" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="serviceBox d-flex align-items-center">
                <div className="image">
                  <Img
                    src="/about/supreme-quality.svg"
                    title="Supreme"
                    alt="Supreme Quality"
                  />
                </div>
                <div className="details">
                  <h3 className="subTitle">Exceptional Quality</h3>
                  <p className="desc">
                    No matter how convoluted the assignment is, our expert writers ensure to provide the best quality papers in a suitable format and style.
                  </p>
                </div>
              </div>
              <div className="serviceBox d-flex align-items-center">
                <div className="image">
                  <Img
                    src="/about/experienced-writers.svg"
                    alt="Experienced Writers"
                    title="Writers"
                  />
                </div>
                <div className="details">
                  <h3 className="subTitle">Professional Writers</h3>
                  <p className="desc">
                    All our writers undergo a strict screening process. Thus, rest assured that your work is written by excellent writers who hold years of experience.
                  </p>
                </div>
              </div>
              <div className="serviceBox d-flex align-items-center">
                <div className="image">
                  <Img
                    src="/about/costs.svg"
                    alt="No Hidden Costs"
                    title="Hidden cost"
                  />
                </div>
                <div className="details">
                  <h3 className="subTitle">All Types of Paper</h3>
                  <p className="desc">
                    Our expert writers can write, format, proofread, edit, paraphrase, or rewrite any paper and any subject.
                  </p>
                </div>
              </div>
              <div className="serviceBox d-flex align-items-center">
                <div className="image">
                  <Img
                    src="/about/time-delivery.svg"
                    alt="On-Time Deliveryy"
                    title="On Time delivery"
                  />
                </div>
                <div className="details">
                  <h3 className="subTitle">On-Time Delivery</h3>
                  <p className="desc">
                    Delivery of our work on time is our USP. Our writers strive hard to meet the deadlines and complete any complex work in the given tenure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feedback className="aboutFeedback" reviewData={props.reviews && props.reviews} schemaPageName={props.meta && props.meta.pageName} metaDescription={props.meta.description} />
      <div className="text-center placeOrderBtn">
        <a className="btn secondary-btn" href={`${process.env.hostBaseUrl}/order`}>Place an order</a>
      </div>
      <Contact />
    </>
  );
}

export async function getStaticProps(context) {
  const DEFAULT_META = process.env.defaultMeta
  const res = await ukApiHelper(`seoV1?page=about-us&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const meta = res.data.status ? res.data.data : DEFAULT_META

  const resReviews = await ukApiHelper(`webReviewsV1?page=about-us`, 'GET', null, null)
  const reviews = resReviews.data.status ? resReviews.data.data : null
  return {
    props: {
      meta,
      reviews
    }
  }
}
