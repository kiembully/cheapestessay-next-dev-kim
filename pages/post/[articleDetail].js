import React, { useState } from "react";
import Link from "next/link";
import {
    Card,
    CardImg,
    CardBody,
} from "reactstrap";

import dynamic from 'next/dynamic';

// scss
import articleDetailCss from "../../styles/articleDetail.scss";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import Img from "../../components/Common/image";
import Meta from "../../components/meta";

//api
import { ukApiHelper, graphHelper, apiHelper } from "../../helper/apiHelper";
import { useRouter } from "next/router";
import { jwtDecode } from "../../helper/jwtHelper";

// social share 
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";

const Contact = dynamic(() => import('../../components/home/contact'));
const ArticleData = dynamic(() => import('../../components/Article'));

const ScrollspyNav = dynamic(
    () => import('react-scrollspy-nav'),
    {
        ssr: false
    }
)
const query = {query: `
{
    articles {
      edges {
        node {
          id
          title
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          authorFieldGroup {
            writerId
          }
          articleCategories {
            edges {
              node {
                name
                description
                slug
              }
            }
          }
          content
          seoFieldGroup {
            description
            title
            keywords
            robots
          }
          social {
              ogDescription
              ogTitle
              twitterDescription
              twitterTitle
              ogImage {
                  sourceUrl
              }
              twitterImage {
                  sourceUrl
              }
          }
          contentOutlines {
            topics {
            anchor
            title
            }
          }
          slug
          date
          excerpt
          articleId
          articleTags {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
`
};

const ArticleDetail = (props) => {
    const router = useRouter();
    
    const convertUtc = (date) => {
        let newDate = new Date(Date.parse(date));
        return newDate.toDateString();
    }

    const sanitizeAnchor = (href) => {
        let newAnchor = href.replace(/#/g, '')
        return newAnchor;
    }

    function calcWPM(str) {
        return ((str / 863) / 2).toFixed(0);
    }
    function getName(writer_id) {
        return props.writers.filter(obj => {
            return obj.user_name.toLowerCase() == writer_id.toLowerCase()
        })
    }
    function validateName(name) {
        return name.length > 0 ? name : [{writer_name: 'Anonymous'}]
    }
    // hiring process
    // storeRightData
    const storeRightData = (key, value) => {
        var rightData = typeof window !== 'undefined' ? localStorage.getItem("orderRight") : null;

        let item = {};
        if (rightData && rightData !== '') {
        item = JSON.parse(rightData);

        item[key] = value;
        localStorage.setItem("orderRight", JSON.stringify(item));
        }
    }
    const hireWriter = (writer_id) => {
        var order_token = typeof window !== 'undefined' ? localStorage.getItem('orderToken') : null;
        let decodeOrder = null;
        if (order_token && order_token !== '') {
        decodeOrder = jwtDecode(order_token);
        }
        storeRightData('topWriter', '+20%');
        storeRightData('writerId', writer_id.toUpperCase());
        const formData = new URLSearchParams()

        formData.append("service", !!decodeOrder ? decodeOrder.service : 3);
        formData.append("paper", !!decodeOrder ? decodeOrder.paper : 1);
        formData.append("page", !!decodeOrder ? decodeOrder.page : 1);
        formData.append("deadline", !!decodeOrder ? decodeOrder.deadline : 19);
        formData.append("duration", !!decodeOrder ? decodeOrder.duration : 'Days');
        formData.append("deadlineLable", !!decodeOrder ? decodeOrder.deadlineLable : '');
        formData.append("coupon_code", !!decodeOrder ? decodeOrder.coupon_code : '');
        formData.append("preferred_writer", 'my_previous_writer');
        formData.append("writer_id", writer_id.toUpperCase());

        apiHelper("setOrderV1", "POST", formData, null).then((res) => {
            if (res.data.status) {
            const token = res.data.data.order_token;
            localStorage.setItem("orderToken", token);
            router.push('/order');
            }
        })
        .catch((error) => console.error(`Error: ${error}`));
    }

    const [copyStatus, setCopyStatus] = useState('Copy URL?')
    function copyCodeToClipboard() {
        /* Get the text field */
        var copyText = document.getElementById("urlInput");

        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value);

        /* Alert the copied text */
        setCopyStatus('URL Copied!')
    }
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        {copyStatus}
      </Tooltip>
    );
    function getWritingExperience(str) {
        const hasWriting = str.includes('writing')
        return hasWriting ? str : str + ' Writing'
    }

    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} robots={props.meta.robots} />
            <style dangerouslySetInnerHTML={{ __html: articleDetailCss }}></style>
            <section className="article pb-0">
                <div className="container">
                    <div className="text-center articleDetail">
                        <h6 className="subTitle">
                            {/* {props.filtered[0].node.articleCategories.edges[0].node.name} */}
                            <Link href={`${process.env.hostBaseUrl}/articles/${props.filtered[0].node.articleCategories.edges[0].node.slug}`}>{props.filtered[0].node.articleCategories.edges[0].node.name}</Link>
                        </h6>
                        <h2 className="title">
                            {props.filtered[0].node.title}
                        </h2>
                        <ul className="d-flex justify-content-center list">
                            <li>
                                <Img src="/articlesImg/io1.svg" title="Articles" alt="articles image" width="18" height="20" />
                                By {validateName(getName(props.filtered[0].node.authorFieldGroup.writerId))[0].writer_name}
                            </li>
                            <li>
                                <Img src="/articlesImg/io2.svg" title="Articles" alt="articles image" width="18" height="20" />
                                {convertUtc(props.filtered[0].node.date)}
                            </li>
                            <li>
                                <Img src="/articlesImg/io3.svg" title="Articles" alt="articles image" width="18" height="20" />{calcWPM(props.filtered[0].node.content.length)} Min
                                Read
                            </li>
                        </ul>
                        <div className="aImage">
                            <Img src={props.filtered[0].node.featuredImage.node.sourceUrl} title="Articles" alt="articles image" />
                            <div className="connectedLinks">
                                <div className="links">
                                    <TwitterShareButton 
                                    url={`${process.env.hostBaseUrl}${router.asPath}`} 
                                    title={props.meta.title} >
                                        <Img src="/articlesImg/a-twitter.svg" title="Articles" alt="a-twitter" width="22" height="22" />
                                    </TwitterShareButton>
                                </div>
                                <div className="links">
                                    <FacebookShareButton url={`${process.env.hostBaseUrl}${router.asPath}`} >
                                        <Img src="/articlesImg/a-fb.svg" title="Articles" alt="a-fb" width="22" height="22" />
                                    </ FacebookShareButton>
                                </div>
                                <div className="links">
                                    <LinkedinShareButton 
                                    url={`${process.env.hostBaseUrl}${router.asPath}`}
                                    title={props.meta.title}
                                    summary={props.meta.description} >
                                        <Img src="/articlesImg/a-linkdin.svg" title="Articles" alt="a-linkdin" width="22" height="22" />
                                    </LinkedinShareButton>
                                </div>
                                <div className="links">
                                    <input type="text" defaultValue={`${process.env.hostBaseUrl}${router.asPath}`} id="urlInput" />
                                    <OverlayTrigger
                                        placement="left"
                                        delay={{ show: 0, hide: 0 }}
                                        overlay={renderTooltip}
                                    >
                                    <a href="javascript:;" onClick={copyCodeToClipboard} >
                                        <Img src="/articlesImg/a-link.svg" alt="a-link" title="Articles" width="22" height="22" />
                                    </a>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="articlesMain">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="sidebar">
                                    <h3 className="title">Contents</h3>
                                    <ScrollspyNav
                                        scrollTargetIds={[props.filtered[0].node.contentOutlines.topics.map((a)=>a.anchor)]}
                                        offset={-80}
                                        activeNavClass="is-current"
                                        scrollDuration="500"
                                    >
                                        <ul className="links" id="myHeader">
                                        {
                                        props.filtered[0].node.contentOutlines.topics.map(function(topic, index){
                                        return (
                                            <li key={index}>
                                                <a href={'#'+sanitizeAnchor(topic.anchor)}>{topic.title}</a>
                                            </li>
                                        )
                                        })
                                        }
                                        </ul>
                                    </ScrollspyNav>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="detail" dangerouslySetInnerHTML={{ __html:props.filtered[0].node.content }}>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="right">
                                    <div className="rightBanner">
                                        <div className="bannerText">Looking for writing essay?</div>
                                        <div className="text">We deliver the most quality essay.</div>
                                        <div className="list">
                                        {
                                        props.prices.map(function(item, index) {
                                            return (
                                                <div className="d-flex justify-content-between" key={index} >
                                                    <div className="content">{item.type_of_service}</div>
                                                    <div className="contentVal">{item.price_range}</div>
                                                </div>
                                            )
                                        })
                                        }
                                        </div>
                                        <a href={`${process.env.hostBaseUrl}/order`} className="btn secondary-btn">Proceed to order</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6">
                                <div className="detail">
                                    <div className="content">
                                        <div className="connectedLinks">
                                            <div className="d-flex">
                                                <div className="links">
                                                    <TwitterShareButton 
                                                    url={`${process.env.hostBaseUrl}${router.asPath}`} 
                                                    title={props.meta.title} >
                                                        <Img src="/articlesImg/a-twitter.svg" title="Articles" alt="a-twitter" width="22" height="22" />
                                                    </TwitterShareButton>
                                                </div>
                                                <div className="links">
                                                    <FacebookShareButton url={`${process.env.hostBaseUrl}${router.asPath}`} >
                                                        <Img src="/articlesImg/a-fb.svg" title="Articles" alt="a-fb" width="22" height="22" />
                                                    </ FacebookShareButton>
                                                </div>
                                                <div className="links">
                                                    <LinkedinShareButton 
                                                    url={`${process.env.hostBaseUrl}${router.asPath}`}
                                                    title={props.meta.title}
                                                    summary={props.meta.description} >
                                                        <Img src="/articlesImg/a-linkdin.svg" title="Articles" alt="a-linkdin" width="22" height="22" />
                                                    </LinkedinShareButton>
                                                </div>
                                                <div className="links me-0">
                                                    <input type="text" defaultValue={`${process.env.hostBaseUrl}${router.asPath}`} id="urlInput" />
                                                    <OverlayTrigger
                                                        placement="left"
                                                        delay={{ show: 0, hide: 0 }}
                                                        overlay={renderTooltip}
                                                    >
                                                    <a href="javascript:;" onClick={copyCodeToClipboard} >
                                                        <Img src="/articlesImg/a-link.svg" alt="a-link" title="Articles" width="22" height="22" />
                                                    </a>
                                                    </OverlayTrigger>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {
                                    validateName(getName(props.filtered[0].node.authorFieldGroup.writerId))[0].writer_name == 'Anonymous' ? null :
                                    <div className="media">
                                        {/* <Img src="/writer-3.webp" alt="image" width="110" title="Writer" height="110" /> */}
                                        <Img src={validateName(getName(props.filtered[0].node.authorFieldGroup.writerId))[0].profile_pic} alt="image" width="110" title="Writer" height="110" />
                                        <div className="media-body">
                                            <div className="name">
                                                {/* {validateName(getName(props.filtered[0].node.authorFieldGroup.writerId))[0].writer_name} */}
                                                {/* <Link href={`/writers-profile/${(item.user_name).toLowerCase()}`}><a>View Profile</a></Link> */}
                                                <Link href={`/writers-profile/${(props.filtered[0].node.authorFieldGroup.writerId).toLowerCase()}`}><a>{validateName(getName(props.filtered[0].node.authorFieldGroup.writerId))[0].writer_name}</a></Link>
                                            </div>
                                            <div className="designation">
                                                Experienced in {getWritingExperience(props.filtered[0].node.articleCategories.edges[0].node.name)}
                                            </div>
                                            <p className="desc">
                                                {validateName(getName(props.filtered[0].node.authorFieldGroup.writerId))[0].short_description}
                                            </p>
                                            <a className="btn theme-btn hirebtn" onClick={(() => hireWriter(props.filtered[0].node.authorFieldGroup.writerId))}>Hire me</a>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className="section-title">Related Articles</h2>
                    <div className="articlesCard">
                        <ArticleData isRelated={true} articles={props.related.data.articleCategories.edges[0].node.articles.edges} writers={props.writers} />
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
};

export async function getServerSideProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await apiHelper('articleServicePriceRange', 'GET', null, null)
    const prices = res.data.data;

    const res1 = await graphHelper(query);
    const articles = await res1.data;

    const arr = articles.data.articles.edges;
    const filtered = arr.filter(obj => {
        return obj.node.slug == context.params.articleDetail;
    })

    if (filtered.length <= 0) {
        return {
            notFound: true,
        }
    }
    
    const meta = (filtered.length > 0) ? filtered[0].node.seoFieldGroup : DEFAULT_META;
    const res2 = await ukApiHelper('articlePageWriters', 'GET', null, null);
    const writers = await res2.data.data;

    const relatedQuery = {query: `
      {
        articleCategories(where: {slug: "${filtered[0].node.articleCategories.edges[0].node.slug}"}) {
          edges {
            node {
              id
              articles(where: {notIn: ${filtered[0].node.articleId}}) {
                edges {
                  node {
                    id
                    title
                    slug
                    date
                    featuredImage {
                        node {
                        sourceUrl
                        }
                    }
                    authorFieldGroup {
                        writerId
                    }
                    articleCategories {
                        edges {
                        node {
                            name
                            description
                            slug
                        }
                        }
                    }
                    content
                    seoFieldGroup {
                        description
                        title
                        keywords
                    }
                    contentOutlines {
                        topics {
                        anchor
                        title
                        }
                    }
                    slug
                    date
                    excerpt
                    articleId
                    articleTags {
                        edges {
                        node {
                            name
                        }
                        }
                    }
                  }
                }
              }
            }
          }
        }
      }
        `
    };

    const res3 = await graphHelper(relatedQuery);
    const related = await res3.data;

    return {
        notFound: filtered.length < 1,
        props: {
            articles,
            meta,
            filtered,
            prices,
            writers,
            related
        }
    }
}

export default ArticleDetail;
