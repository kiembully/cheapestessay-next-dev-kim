import React from "react";
import Head from "next/head";

// react slick
import Slider from "react-slick";
import slickCss from "slick-carousel/slick/slick.css";

// scss
import howworkCss from "../styles/work.scss";

//api
import { ukApiHelper } from "../helper/apiHelper";

import Img from "../components/Common/image";

import dynamic from "next/dynamic";
const Meta = dynamic(() => import("../components/meta"));
const HeaderRating = dynamic(() => import("../components/header/rating"));
const AdsBanner = dynamic(() => import("../components/home/adsBanner"));
const Feedback = dynamic(() => import("../components/home/feedback"));
const Contact = dynamic(() => import("../components/home/contact"));

export default function HowItWork(props) {
  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  var basicSchema = `{
    "@context": "https://schema.org/",
    "@type": "HowTo",
    "name": "${props.meta && props.meta.pageName ? props.meta.pageName : ""}",
    "description": "${props.meta.description
      ? props.meta.description.replace(/"/g, "&quot;")
      : ""
    }",
    "totalTime": "PT5M",
    "supply": [{
      "@type": "HowToSupply",
      "name": "Paper Instructions"
    }, {
      "@type": "HowToSupply",
      "name": "Laptop/Smartphone"
    }],
    "tool": [{
      "@type": "HowToTool",
      "name": "Credit Card"
    },
    {
      "@type": "HowToTool",
      "name": "Website Cheapestessay.com "
    }],
    "step": [{
      "@type": "HowToStep",
      "url": "${process.env.hostBaseUrl}/how-it-works#step1",
      "name": "Tell Us Your Requirements",
      "text": "Fill in a short order form and specify all the vital details related to your assignment like the total number of pages, deadlines, type of assignment, etc. Just keep in mind that the more clear instruction you provide, the more satisfied and perfect paper you will receive",
      "image": "${process.env.hostBaseUrl}/how-it-work/how-it-work-1.webp"
    },
    {
      "@type": "HowToStep",
      "url": "${process.env.hostBaseUrl}/how-it-works#step2",
      "name": "Make the Payment",
      "text": "After filling in the order forms with all the essential details, move ahead to finish your order request by making the payment via credit card or PayPal. Even if you pay before, you don’t need to worry about your money. We ensure to deliver your paper as per your expectation. If you are not pleased with your assignment, you can raise a revision request and get your paper reworked as per your need",
      "image": "${process.env.hostBaseUrl}/how-it-work/how-it-work-2.webp"
    },
    {
      "@type": "HowToStep",
      "url": "${process.env.hostBaseUrl}/how-it-works#step3",
      "name": "Analyze the Order in Progress",
      "text": "Stay updated with the latest status of your order. Once you have placed the order, we review your task and assign it to the most appropriate and expert writer who has previously worked on the concerned subject and domain. In case you find any issue with your ongoing order, connect with our support team to get it resolved in no time",
      "image": "${process.env.hostBaseUrl}/how-it-work/how-it-work-3.webp"
    },
    {
      "@type": "HowToStep",
      "url": "${process.env.hostBaseUrl}/how-it-works#step4",
      "name": "Receive an Impeccable Paper",
      "text": "You will get an email once your paper is complete and ready to download. Ensure that you are fully convinced and satisfied with the article. Go through the entire content and see if the piece is worked as per your instructions. In case you feel the writer has missed some point, you can request revision without paying any extra amount. It’s that hassle-free",
      "image": "${process.env.hostBaseUrl}/how-it-work/how-it-work-4.webp"
    }]
  }`;

  return (
    <>
      <Meta
        title={props.meta.title}
        description={props.meta.description}
        keywords={props.meta.keywords}
        urlCategory={props.meta.url_group}
      />

      <style dangerouslySetInnerHTML={{ __html: slickCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: howworkCss }}></style>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: basicSchema }}
        />
      </Head>

      <section className="work pt-0">
        <div className="top-navbar">
          <div className="header pt-0">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6 order-2 order-md-1">
                  <h1 className="title">
                    Follow 4 Simple Steps to Place your Order
                  </h1>
                  <p className="desc">
                    Are you looking for the best-in-class academic essay writing
                    services to meet your timelines? No need to get perturbed as
                    we have got your back. Get an incredible and outstanding
                    educational experience and out-of-the-box academic solutions
                    by CheapestEssay. Read on to know how seamless and
                    convenient it is to <a href={`${process.env.hostBaseUrl}/order`}>place your order</a> for
                    academic papers and acquire an error-free assignment with
                    little or no effort.
                  </p>
                  <a
                    className="btn secondary-btn"
                    href={`${process.env.hostBaseUrl}/order`}
                  >
                    Order Now
                  </a>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <div className="text-center">
                    <div className="writerImg">
                      <Img
                        src="/how-it-work/writer.gif"
                        alt="How it Works"
                        title="How it Works"
                        width="509"
                        height="509"
                      />
                    </div>
                  </div>
                  <div className="bottom-star">
                    <HeaderRating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-work-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">
              Step-By-Step Guide to Get Your Essay Done
            </h2>
          </div>
        </div>
        <div className="how-it-work">
          <Slider {...settings}>
            <div className="how-it-work-slider">
              <div className="content">
                <div className="sliderImage">
                  <Img
                    src="/how-it-work/fill-in-the-order-details.webp"
                    alt="how it work"
                    title="Fill in the order details"
                  />
                </div>
                <div className="details text-center">
                  <h3 className="title">Fill in the order details</h3>
                  <p className="desc">
                    Once you have created your account on CheapestEssay, fill
                    out the order form. Provide all the essential information
                    related to your paper, such as the type of assignment, level
                    of writing, number of pages, deadlines, etc. Remember, the
                    more detailed and precise your instructions are, the more
                    apt and accurate paper you will receive.
                  </p>
                  <a
                    className="btn theme-btn"
                    href={`${process.env.hostBaseUrl}/order`}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
            <div className="how-it-work-slider">
              <div className="content">
                <div className="sliderImage">
                  <Img
                    src="/how-it-work/complete-the-payment.webp"
                    alt="how it work"
                    title="Complete the Payment"
                  />
                </div>
                <div className="details text-center">
                  <h3 className="title">Complete the Payment</h3>
                  <p className="desc">
                    Once you have placed your request, proceed ahead to pay for
                    your order. You can complete your payment either by Credit
                    Card or by Googlepay and Applepay. However, you don’t need to worry about
                    your money. If you are not happy with the result, you can
                    request revision or changes in the document until you don’t
                    get satisfactory output.
                  </p>
                  <a
                    className="btn theme-btn"
                    href={`${process.env.hostBaseUrl}/order`}
                  >
                    Place An Ordrer
                  </a>
                </div>
              </div>
            </div>
            <div className="how-it-work-slider">
              <div className="content">
                <div className="sliderImage">
                  <Img
                    src="/how-it-work/monitor-the-order-progress.webp"
                    alt="how it work"
                    title="Monitor the Order Progress"
                  />
                </div>
                <div className="details text-center">
                  <h3 className="title">Monitor the Order Progress</h3>
                  <p className="desc">
                    Leverage the opportunity to check the status of your order.
                    Once we receive your order, we assign the task to the most
                    suitable writer who has the expertise to work on such
                    papers. If you find your order is not moving as per your
                    expectation or have any other queries, please connect with
                    our team.
                  </p>
                  <a
                    className="btn theme-btn"
                    href={`${process.env.hostBaseUrl}/top-writers`}
                  >
                    Hire A Writer
                  </a>
                </div>
              </div>
            </div>
            <div className="how-it-work-slider">
              <div className="content">
                <div className="sliderImage">
                  <Img
                    src="/how-it-work/get-a-flawless-assignment.webp"
                    alt="how it work"
                    title="Get a Flawless Assignment"
                  />
                </div>
                <div className="details text-center">
                  <h3 className="title">Get a Flawless Assignment</h3>
                  <p className="desc">
                    Our writers ensure to deliver your academic assignments
                    before the scheduled timeline. This leaves you with ample
                    time to check the paper and request any revision if
                    required. Needless to say, your work will be amended free of
                    cost. However, the changes you request should align with
                    your original instruction. Once our professional essay
                    writers complete your order, you will get an email
                    notification to download your paper. It’s that simple!
                  </p>
                  <a
                    className="btn theme-btn"
                    href={`${process.env.hostBaseUrl}/order`}
                  >
                    Order Now
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <AdsBanner
        className="work-feedback"
        btnclassName="secondary-btn"
        src="/how-it-work/discount-banner-w.svg"
        serviceContent={null}
      />
      <Feedback
        reviewData={props.reviews && props.reviews}
        schemaPageName={props.meta && props.meta.pageName}
        metaDescription={props.meta.description}
      />
      <Contact />
    </>
  );
}

export async function getStaticProps(context) {
  const DEFAULT_META = process.env.defaultMeta;
  const res = await ukApiHelper(
    `seoV1?page=how-it-works&is_live=${process.env.isApiLive}`,
    "GET",
    null,
    null
  );
  const meta = res.data.status ? res.data.data : DEFAULT_META;

  const resReviews = await ukApiHelper(
    `webReviewsV1?page=how-it-works`,
    "GET",
    null,
    null
  );
  const reviews = resReviews.data.status ? resReviews.data.data : null;

  return {
    props: {
      meta,
      reviews,
    },
  };
}
