import React, { useEffect, useState } from "react";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";

// components
import Rating from "react-rating";
import ShowMoreText from "react-show-more-text";

// API helper
import { ukApiHelper, apiHelper } from "../helper/apiHelper";
import { jwtDecode } from "../helper/jwtHelper";

// scss
import topWriterCss from "../styles/top-writer.scss";
import WriterCss from "../components/topWriter/writer.scss";

import Img from "../components/Common/image";
import { Spinner } from "reactstrap";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));
const Feedback = dynamic(() => import('../components/home/feedback'));
const Content = dynamic(() => import('../components/home/content'));
const Faq = dynamic(() => import('../components/home/faq'));
const Contact = dynamic(() => import('../components/home/contact'));
const HeaderRating = dynamic(() => import('../components/header/rating'));
const FreeFeature = dynamic(() => import('../components/freeFeature'));

export default function Home(props) {

  useEffect(() => {
    // top writer list
    getTopWriter();

    // faq and content
    // getTopWriterContent();
  }, []);

  const [data, setData] = useState([]);

  const getTopWriter = () => {
    ukApiHelper("top10WritersV1?limit=10", "GET", null, null)
      .then((res) => {
        if (res.data.status) {
          const wData = res.data.data;
          setData(wData);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  // ShowMoreText
  const executeOnClick = (isExpanded) => {
  }

  let i = 1;

  const styles = [
    { name: "APA" },
    { name: "MLA" },
    { name: "Harvard" },
    { name: "Turabian" },
    { name: "Chicago" },
    { name: "Vancouver" },
  ]

  const subjects = [
    { name: "English" },
    { name: "Business" },
    { name: "Nursing" },
    { name: "History" },
    { name: "Psychology" },
    { name: "Management" },
    { name: "Sociology" },
    { name: "Law" },
    { name: "Finance" },
    { name: "Literature" },
    { name: "Philosophy" },
    { name: "Engineering" },
  ]

  const types = [
    { name: "Essay (Any Type)" },
    { name: "Research Paper" },
    { name: "Term Paper" },
    { name: "Dissertation" },
    { name: "Thesis" },
    { name: "Assignment" },
  ]

  var content = props.content

  // storeRightData
  const storeRightData = (key, value) => {
    var rightData = localStorage.getItem("orderRight");

    let item = {};
    if (rightData && rightData !== '') {
      item = JSON.parse(rightData);

      item[key] = value;
      localStorage.setItem("orderRight", JSON.stringify(item));
    }
  }

  const redirectUrl = async (user_name) => {

    var order_token = localStorage.getItem("orderToken");
    let decodeOrder = null;
    if (order_token && order_token !== '') {
      decodeOrder = jwtDecode(order_token);
    }

    storeRightData('topWriter', '+20%');
    storeRightData('writerId', user_name);

    const formData = new FormData();

    formData.append("service", decodeOrder.service ? decodeOrder.service : 3);
    formData.append("paper", decodeOrder.paper ? decodeOrder.paper : 1);
    formData.append("page", decodeOrder.page ? decodeOrder.page : 1);
    formData.append("deadline", decodeOrder.deadline ? decodeOrder.deadline : 19);
    formData.append("duration", decodeOrder.duration ? decodeOrder.duration : 'Days');
    formData.append("deadlineLable", decodeOrder.deadlineLable ? decodeOrder.deadlineLable : '');
    formData.append("coupon_code", decodeOrder.coupon_code ? decodeOrder.coupon_code : '');
    formData.append("preferred_writer", 'my_previous_writer');
    formData.append("writer_id", user_name);

    apiHelper("setOrderV1", "POST", formData, null)
      .then((res) => {
        if (res.data.status) {
          const token = res.data.data.order_token;
          localStorage.setItem("orderToken", token);
          Router.push('/order');
        }
      })
      .catch((error) => console.error(`Error: ${error}`));

  }

  var writerSchema = `{
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "itemListElement": [
      ${data.map((info, index) =>
    `{
          "@type": "ListItem",
          "position": ${index + 1},
          "name": "${info.writer_name}",
          "description": "${info.description}",
          "url": "${process.env.hostBaseUrl}/writers-profile/${info.user_name}"
        }`
  )}
    ]
  }`;

  return (
    <>

      <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
      <style dangerouslySetInnerHTML={{ __html: topWriterCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: WriterCss }}></style>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: writerSchema }} />
      </Head>

      <div className="top-navbar">
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <div className="cheapest-detail text-center">
                  <h1 className="title">
                    CheapestEssay <span>Top Writers</span>
                  </h1>
                  <p className="desc">
                    Get access to a vast database of freelance writers for hire
                    to work on your essay. Check their ratings and customer’s
                    feedback before making a decision to hire a writer.
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
      <section className="pb-0 writerProfiles">
        <div className="container">
          <div className="topWriter">
            {data && data.length > 0 ?
              data.map(function (item, id) {
                return (
                  <div className="writeDetails" key={id}>
                    <div className="number">{i++}</div>
                    <div className="writerImage">
                      <img title={"<" + item.writer_name + "> Top Writer"} src={item.profile_pic && item.profile_pic ? item.profile_pic : "./dummy-profile.webp"} alt="writer" />
                    </div>
                    <div className="writeRight">
                      <h3 className="name">
                        {item.writer_name ? item.writer_name : item.user_name}
                        <span className="certified">
                          <Img src="/success-badge.svg" title="Success" alt="success-badge" width="20" height="20" />
                        </span>
                      </h3>
                      <div className="viewProfile">
                        <Link href={`/writers-profile/${(item.user_name).toLowerCase()}`}><a>View Profile</a></Link>
                      </div>
                      <ShowMoreText
                        lines={2}
                        more="Read more"
                        less="Read less"
                        className="desc"
                        anchorClass="showText"
                        onClick={executeOnClick}
                        expanded={false}
                        truncatedEndingComponent={"... "}
                      >
                        {item.description}
                      </ShowMoreText>
                      <ul className="list d-flex flex-wrap">
                        {item.subject_specialization.map((list, index) => {
                          return <li key={index}>{list.subject_name}</li>;
                        })}
                      </ul>
                      <div className="d-flex align-item-center ratingPoint flex-wrap">
                        <span>{item.review_count}</span>
                        <div className="d-flex">
                          <Rating
                            readonly={true}
                            initialRating={item.review_rate}
                            emptySymbol={
                              <Img
                                src="/empty.svg"
                                className="icon"
                                title="Empty"
                                alt="ratingImg" width={18} height={18}
                              />
                            }
                            fullSymbol={
                              <Img
                                src="/full.svg"
                                className="icon"
                                title="Full"
                                alt="ratingImg"
                                width={18} height={18}
                              />
                            }
                          />
                        </div>
                        <span>{item.success_rate} Success rate</span>
                        <span>{item.completed_order} orders completed</span>
                      </div>
                      <div className="hireBtnFix">
                        {/* href={`${process.env.hostBaseUrl}/order`}  */}
                        <button className="btn secondary-btn" onClick={() => redirectUrl(item.user_name)}>Hire Now</button>
                      </div>
                    </div>
                  </div>
                );
              }) :
              <div className="text-center w-100">
                <Spinner animation="border" />
              </div>
            }
          </div>
        </div>
      </section>
      <section className="hire-writer-section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">How Do We Select Our Top-Notch Writers?</h2>
            <p className="desc">
              All writers go through the following three steps before they join our company:
            </p>
          </div>
          <div className="mainWrapper">
            <div className="row">
              <div className="col-md-4">
                <div className="hire-writer-box text-center">
                  <div className="writer-box">
                    <span>1</span>
                    <Img
                      src="/top-writer/grammar-writing.svg"
                      alt="grammar-writing"
                      title="Writers"
                      width="50"
                      height="50"
                    />
                  </div>
                  <h3 className="title">Proficiency Tests</h3>
                  <p className="desc">
                    Our company takes measures to hire the best writers in the industry. Therefore, we only collaborate with the best hiring team to screen every candidate that comes to us. We put all writers through a series of proficiency tests to check their knowledge and writing abilities.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="hire-writer-box text-center">
                  <div className="writer-box">
                    <span>2</span>
                    <Img
                      src="/top-writer/online-interview.svg"
                      alt="online-interview"
                      title="Interview"
                      width="50"
                      height="50"
                    />
                  </div>
                  <h3 className="title">Telephonic Interview</h3>
                  <p className="desc">
                    We conduct a telephonic interview with selected candidates to assess their soft skills. It helps us identify the strongest and most eligible candidates. We also elucidate the roles and responsibilities of the position they are applying for during this interview.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="hire-writer-box text-center">
                  <div className="writer-box">
                    <span>3</span>
                    <Img src="/top-writer/test-drive.svg" alt="test-drive"
                      width="50"
                      title="Drive"
                      height="50" />
                  </div>
                  <h3 className="title">Test Assignment</h3>
                  <p className="desc">
                    For writers who clear the first two rounds are given a trial assignment to work on. This final round allows us to evaluate the writing proficiency of each candidate. Every assignment is checked and put through an anti-plagiarism tool to test the uniqueness of the content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Feedback reviewData={props.reviews && props.reviews} schemaPageName={props.meta && props.meta.pageName} metaDescription={props.meta.description} />
      <FreeFeature />
      <section className="what-we-do pb-0">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">What we do</h2>
          </div>
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="row">
                <div className="col col-md-3 list">
                  <h4 className="title">Styles</h4>
                  <ul className="box-list">
                    {styles.map(function (list, index) {
                      return (
                        <li key={index}>{list.name}</li>
                      )
                    })}
                  </ul>
                </div>
                <div className="col col-md-3 list d-md-none d-sm-block">
                  <h4 className="title">Types</h4>
                  <ul className="box-list">
                    {types.map(function (list, index) {
                      return (
                        <li key={index}>{list.name}</li>
                      )
                    })}
                  </ul>
                </div>
                <div className="col-md-6">
                  <h4 className="title text-center">Subjects</h4>
                  <ul className="box-list">
                    {subjects.map(function (list, index) {
                      return (
                        <li key={index}>{list.name}</li>
                      )
                    })}
                  </ul>
                </div>
                <div className="col-md-3 list d-none d-md-block">
                  <h4 className="title">Types</h4>
                  <ul className="box-list">
                    {types.map(function (list, index) {
                      return (
                        <li key={index}>{list.name}</li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <a href={`${process.env.hostBaseUrl}/order`} className="btn secondary-btn">
              Order Now
            </a>
          </div>
        </div>
      </section>
      <section className="pb-0">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h2 className="section-title">Freelance Writers for Hire is Just a Click Away</h2>
            </div>
          </div>
        </div>
      </section>
      <Content serviceData={content} />
      <Faq faqData={content} />
      <Contact />
    </>
  );
}

export async function getStaticProps(context) {

  const DEFAULT_META = process.env.defaultMeta
  const res = await ukApiHelper(`seoV1?page=top-writers&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const meta = res.data.status ? res.data.data : DEFAULT_META

  const resReviews = await ukApiHelper(`webReviewsV1?page=top-writers`, 'GET', null, null)
  const reviews = resReviews.data.status ? resReviews.data.data : null

  const resContent = await ukApiHelper(`servicesV1?page=top-writers&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const content = resContent.data.status ? resContent.data.data : null
  // console.log(resContent.data);
  return {
    props: {
      meta,
      reviews,
      content
    }
  }
}


