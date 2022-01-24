import React, { useState, useEffect } from "react";
import Head from "next/head";

import { useRouter } from 'next/router';

// reactstrap
import { TabContent, TabPane, Nav, NavItem, NavLink, Spinner } from "reactstrap";

// API helper
import { ukApiHelper } from "../helper/apiHelper";

import dynamic from 'next/dynamic';

// Html Parser
import Rating from "react-rating";

// scss
import reviewCss from "../styles/review.scss";
import DummyProfile from '../public/dummy-profile.webp';

const Meta = dynamic(() => import('../components/meta'));
const Img = dynamic(() => import('../components/Common/image'));
const Contact = dynamic(() => import('../components/home/contact'));
const HeaderRating = dynamic(() => import('../components/header/rating'));
const Content = dynamic(() => import('../components/home/content'));
const Faq = dynamic(() => import('../components/home/faq'));

export default function Review(props) {

  const [curTab, setCurTab] = useState("");
  const [sourceId, setSourceId] = useState("");
  const [data, setData] = useState([]);

  const toggle = (tab) => {
    setSourceId("");

    let newtab = tab;
    let oldtab = curTab;

    if (newtab === oldtab) {
      setCurTab("");
    } else {
      setCurTab(newtab);
    }
  };

  const toggleSource = (tab) => {
    setCurTab("");

    let newtab = tab;
    let oldtab = sourceId;

    if (newtab === oldtab) {
      setSourceId("");
    } else {
      setSourceId(newtab);
    }
  };

  const paperType = [
    { id: "1", name: "Essay (Any Type)" },
    { id: "3", name: "Research Paper" },
    { id: "68", name: "Assignment" },
    { id: "8", name: "Case Study" },
    { id: "25", name: "Coursework" },
    { id: "2", name: "Argumentative Essay" },
  ];

  const sourceType = [
    { id: "0", name: "Google Review" },
    { id: "1", name: "trustpilot Review" },
    { id: "2", name: "Sitejabber Review" },
    { id: "3", name: "Facebook Review" },
  ];

  // useEffect(() => {
  //   // console.log(curTab);
  //   getReview();
  // }, [curTab]);

  useEffect(() => {
    getReview();
  }, [sourceId || curTab]);

  // const [topWriterProfile, setTopWriterProfile] = useState()
  const [loader, setLoader] = useState(false)
  // const [schemaReviewData, setSchemaReviewData] = useState([])

  const [reviewSchema, setReviewSchema] = useState([])

  const router = useRouter()
  // var reviewSchema = ''

  const getReview = () => {
    const formData = new FormData();
    if (curTab === "") {
    } else {
      formData.append("paper_id", curTab);
    }
    if (sourceId === "") {
    } else {
      formData.append("source", sourceId);
    }

    setLoader(true)

    ukApiHelper("displayreviewsV1", "POST", formData, null)
      .then(async (res) => {
        if (res.data.status === true) {
          const rData = res.data.data;

          if (rData && rData.length > 0) {
            var arr = [];
            rData.map((info, i) => {
              arr.push({
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": info.customer_name
                },
                "datePublished": info.review_date,
                "reviewBody": info.review,
                "reviewRating": {
                  "@type": "Rating",
                  "bestRating": 5,
                  "ratingValue": parseFloat(info.rating),
                  "worstRating": 1
                }
              })
            })
            // setSchemaReviewData(arr);
          }

          var topWriterRes = await ukApiHelper('top10WritersV1?limit=10', 'GET', null, null)

          if (topWriterRes.data.status === true) {
            const topProfile = topWriterRes.data.data;
            // setTopWriterProfile(topProfile)

            if (rData.length > 0 && topProfile.length > 0) {

              if ((rData.length / 4) >= topProfile.length) {

                let setProfile = 0;
                for (let reviewInterval = 4; reviewInterval < rData.length; reviewInterval += 5) {
                  if (topProfile[setProfile]) {
                    rData.splice(reviewInterval, 0, topProfile[setProfile]);
                    setProfile++;
                  }
                }

              } else if ((rData.length / 4) < topProfile.length) {

                let setProfile = 0;
                for (let reviewInterval = 4; reviewInterval < rData.length; reviewInterval += 5) {
                  if (topProfile[setProfile]) {
                    rData.splice(reviewInterval, 0, topProfile[setProfile]);
                    setProfile++;
                  }
                }
                rData.push.apply(rData, topProfile.splice(setProfile, topProfile.length - 1))

              }
            }
            setData(rData)
          }
          setLoader(false)

          var reviewSchema = `{
            "@context": "https://schema.org/",
            "@type": "Product",
            "url": "${process.env.hostBaseUrl}${router && router.asPath ? router.asPath : ''}",
            "name": "${props.meta && props.meta.pageName ? props.meta.pageName : ''}",
            "description": "${props.meta.description ? (props.meta.description).replace(/"/g, '&quot;') : ''}",
            "slogan": "CheapestEssay’s Customer Reviews",
            "image": "${process.env.hostBaseUrl}/review/review-ani.gif",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.9,
              "reviewCount": 1300
            },
            "brand": "CheapestEssay",
            "review": ${JSON.stringify(arr)}
          }`
          setReviewSchema(reviewSchema)
        }
        else {
          setLoader(false)

          var reviewSchema = `{
            "@context": "https://schema.org/",
            "@type": "Product",
            "url": "${process.env.hostBaseUrl}${router && router.asPath ? router.asPath : ''}",
            "name": "${props.meta && props.meta.pageName ? props.meta.pageName : ''}",
            "description": "${props.meta.description ? (props.meta.description).replace(/"/g, '&quot;') : ''}",
            "slogan": "CheapestEssay’s Customer Reviews",
            "image": "${process.env.hostBaseUrl}/review/review-ani.gif",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": 4.9,
              "reviewCount": 1300
            },
            "brand": "CheapestEssay",
            "review": []
          }`
          setReviewSchema(reviewSchema)
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };

  const imgNotFound = (e) => {
    e.target.src = DummyProfile;
  }

  var reviewData = props.content && props.content;
  return (
    <>

      <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
      <style dangerouslySetInnerHTML={{ __html: reviewCss }}></style>
      {reviewSchema !== '' ?
        <Head>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: reviewSchema }} />
        </Head> :
        null}

      <div className="review">
        <div className="top-navbar">
          <div className="header">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="cheapest-detail">
                    <h1 className="title">
                      <span>CheapestEssay’s</span> Customer Reviews
                    </h1>
                    <p className="desc">
                      Read our clients reviews and join the growing list of
                      students who skyrocketed their GPA!
                    </p>
                    <div className="orderNow">
                      <a href={`${process.env.hostBaseUrl}/order`} className="btn secondary-btn">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="image">
                    <Img src="/review/review-ani.gif" title="Review" alt="Review" width="636" height="636" />
                  </div>
                </div>
              </div>
              <div className="bottom-star">
                <div className="row">
                  <div className="col-md-8 offset-md-2">
                    <HeaderRating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="latestReview">
          <div className="container">
            <div className="text-center">
              <h2 className="section-title">Latest Reviews</h2>
              <p className="desc">
                Only real clients who have used our service can leave
                CheapestEssay reviews and share their experiences.
              </p>
            </div>
            <Nav tabs>
              {paperType &&
                paperType.map(function (tab, index) {
                  return (
                    <NavItem key={index}>
                      <NavLink
                        className={curTab == tab.id ? "active" : null}
                        onClick={() => toggle(tab.id)}
                      >
                        {tab.name}
                      </NavLink>
                    </NavItem>
                  );
                })}
            </Nav>
            <Nav tabs>
              {sourceType &&
                sourceType.map(function (tab, index) {
                  return (
                    <NavItem key={index}>
                      <NavLink
                        className={sourceId == tab.id ? "active" : null}
                        onClick={() => toggleSource(tab.id)}
                      >
                        {tab.name}
                      </NavLink>
                    </NavItem>
                  );
                })}
            </Nav>
            <TabContent>
              <TabPane>
                <div className={`card-columns ${loader ? 'cardLoader' : null}`}>
                  {!loader ?
                    data && data.length > 0 ?
                      data.map(function (list, card) {
                        return (
                          <>
                            {list.customer_name ?
                              <div className="card" key={card}>
                                <div className="card-body">
                                  <div className="tab-rating d-flex">
                                    <div className="left">
                                      {(() => {
                                        if (list.review_site === "TrustPilot") {
                                          return (
                                            <Img
                                              src="/review/trustpilot.svg"
                                              alt="trustpilot"
                                              title="Trustpilot"
                                              width="50"
                                              height="50"
                                            />
                                          );
                                        } else if (
                                          list.review_site === "Google Reviews"
                                        ) {
                                          return (
                                            <Img
                                              src="/review/google.svg"
                                              alt="Google"
                                              width="50"
                                              title="Google"
                                              height="50"
                                            />
                                          );
                                        } else if (
                                          list.review_site === "SiteJabber"
                                        ) {
                                          return (
                                            <Img
                                              src="/review/sitejabber.svg"
                                              alt="sitejabber"
                                              title="Sitejabbar"
                                              width="50"
                                              height="50"
                                            />
                                          );
                                        } else if (list.review_site === "Facebook") {
                                          return (
                                            <Img
                                              src="/review/facebook.svg"
                                              alt="facebook"
                                              title="facebook"
                                              width="50"
                                              height="50"
                                            />
                                          );
                                        } else {
                                          return (
                                            <div className="text">
                                              {list.customer_name.match(/\b(\w)/g)}
                                            </div>
                                          );
                                        }
                                      })()}
                                    </div>
                                    <div className="right">
                                      <div className="name">{list.customer_name}</div>
                                      <div className="rate">
                                        <Rating
                                          readonly={true}
                                          initialRating={list.rating}
                                          emptySymbol={
                                            <Img
                                              src="/empty.svg"
                                              className="icon"
                                              title="Rating"
                                              alt="ratingImg"
                                              width="16px"
                                              height="16px"
                                            />
                                          }
                                          fullSymbol={
                                            <Img
                                              src="/full.svg"
                                              className="icon"
                                              title="Rating"
                                              alt="ratingImg"
                                              width={18} height={18}
                                            />
                                          }
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <p className="desc">{list.review}</p>
                                  <div className="d-flex justify-content-between bottom">
                                    <span className="text date">
                                      {list.review_date}
                                    </span>
                                  </div>
                                </div>
                              </div> :
                              list.user_name ?
                                <div className="card writer-box" key={card}>
                                  <div className="writer-img">
                                    <img
                                      src={list.profile_pic}
                                      alt={list.writer_name ? list.writer_name : list.user_name}
                                      className="img-fluid"
                                      onError={(e) => imgNotFound(e)}
                                      width="402"
                                      height="250"
                                    />
                                  </div>
                                  <div className="writerDetail">
                                    <div className="d-flex align-items-center justify-content-between">
                                      <div className="name">{list.writer_name ? list.writer_name : list.user_name}</div>
                                      <div className="star">
                                        <Rating
                                          readonly={true}
                                          initialRating={list.review_count}
                                          emptySymbol={<Img src="/empty.svg" className="icon" alt="ratingImg" width={18} height={18} />}
                                          fullSymbol={<Img src="/full.svg" className="icon" alt="ratingImg" width={18} height={18} />}
                                        />
                                      </div>
                                    </div>
                                    <ul className="sub-detail d-flex flex-wrap">
                                      <li className="d-flex">
                                        <Img src="/excellence.svg" title="Excellence" alt="excellence" width="21" height="21" />
                                        <span>{list.completed_order} Orders</span>
                                      </li>
                                      <li className="d-flex">
                                        <Img src="/success-badge.svg" title="Success rate" alt="success-badge" width="21" height="21" />
                                        <span>{list.success_rate} Success rate</span>
                                      </li>
                                      <li className="d-flex">
                                        <Img src="/reviews.svg" title="Reviews" width="21" height="21" alt="reviews" />
                                        <span>{list.review_count} Reviews</span>
                                      </li>
                                      <li className="d-flex">
                                        <Img src="/degree.svg" title="Degree" width="21" height="21" alt="degree" />
                                        <span>Master’s Degree</span>
                                      </li>
                                    </ul>
                                    <div className="text-center">
                                      <a className="btn theme-btn w-100" href={`${process.env.hostBaseUrl}/order`}>Hire Writer</a>
                                    </div>
                                  </div>
                                </div>
                                :
                                null
                            }
                          </>
                        );
                      }) :
                      <div className="noReview-found">no reviews found</div>
                    :
                    <div className="text-center w-100">
                      <Spinner animation="border" />
                    </div>
                  }
                </div>
              </TabPane>
            </TabContent>
          </div>
        </section>
        <section className="hireTopWriter">
          <div className="banner">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <div className="left">
                    <div className="top">
                      <Img src='/review/review1.webp' alt="reviews" width="473" height="220" />
                    </div>
                    <div className="bottom">
                      <Img src='/review/review2.webp' alt="reviews" width="473" height="220" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="title">
                    {/* {reviewHeader} */}
                    Connect with Expert Essay Writers for your College Essay
                  </div>
                  <div className="desc w-100">
                    {/* {reviewContent && parse(reviewContent)} */}
                    We aim to offer the greatest writing aid to kids who feel overwhelmed by the obligations of education. We recognize that life may be challenging; part-time jobs or just a lack of time can make schooling appear unattainable. But don't worry, our professionals are available round the clock to assist you with your essay needs.
                  </div>
                  <a className="btn secondary-btn" href={`${process.env.hostBaseUrl}/top-writers`}>Hire a Top Rated Writer</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Content serviceData={reviewData && reviewData} />
        <Faq faqData={reviewData && reviewData} />
        <Content bottomContent={true} serviceData={reviewData && reviewData} />
        <Contact />
      </div >
    </>
  );
}

export async function getStaticProps(context) {
  const DEFAULT_META = process.env.defaultMeta
  const res = await ukApiHelper(`seoV1?page=reviews&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const meta = res.data.status ? res.data.data : DEFAULT_META

  const resContent = await ukApiHelper(`servicesV1?page=reviews&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const content = resContent.data.status ? resContent.data.data : null

  return {
    props: {
      meta,
      content
    }
  }
}
