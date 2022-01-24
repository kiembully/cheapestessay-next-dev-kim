import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
    Card,
    CardImg,
    CardBody,
} from "reactstrap";

import dynamic from 'next/dynamic';

// scss
import articleDetailCss from "../styles/articleDetail.scss";

import Img from "../components/Common/image";
import Meta from "../components/meta";

//api
import { ukApiHelper } from "../helper/apiHelper";

const Contact = dynamic(() => import('../components/home/contact'));
const ArticleData = dynamic(() => import('../components/Article'));

const ScrollspyNav = dynamic(
    () => import('react-scrollspy-nav'),
    {
        ssr: false
    }
)

const ArticleDetail = (props) => {

    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
            <style dangerouslySetInnerHTML={{ __html: articleDetailCss }}></style>
            <section className="article pb-0">
                <div className="container">
                    <div className="text-center articleDetail">
                        <h6 className="subTitle">freelancer tips</h6>
                        <h2 className="title">
                            5 Quotes from Steve Jobs Every Entrepreneur Needs
                        </h2>
                        <ul className="d-flex justify-content-center list">
                            <li>
                                <Img src="/articlesImg/io1.svg" title="Articles" alt="articles image" width="18" height="20" />
                                By Nishar Multani
                            </li>
                            <li>
                                <Img src="/articlesImg/io2.svg" title="Articles" alt="articles image" width="18" height="20" />
                                December 30, 2020
                            </li>
                            <li>
                                <Img src="/articlesImg/io3.svg" title="Articles" alt="articles image" width="18" height="20" />7 Min
                                Read
                            </li>
                        </ul>
                        <div className="aImage">
                            <Img src="/articlesImg/article.jpg" title="Articles" alt="articles image" />
                            <div className="connectedLinks">
                                <div className="links">
                                    <a href="">
                                        <Img src="/articlesImg/a-twitter.svg" title="Articles" alt="a-twitter" width="22" height="22" />
                                    </a>
                                </div>
                                <div className="links">
                                    <a href="">
                                        <Img src="/articlesImg/a-fb.svg" title="Articles" alt="a-fb" width="22" height="22" />
                                    </a>
                                </div>
                                <div className="links">
                                    <a href="">
                                        <Img src="/articlesImg/a-linkdin.svg" title="Articles" alt="a-linkdin" width="22" height="22" />
                                    </a>
                                </div>
                                <div className="links">
                                    <a href="">
                                        <Img src="/articlesImg/a-link.svg" alt="a-link" title="Articles" width="22" height="22" />
                                    </a>
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
                                        scrollTargetIds={['link', 'whichlinks', 'whichdomains', 'whywe']}
                                        offset={-80}
                                        activeNavClass="is-current"
                                        scrollDuration="500"
                                    >
                                        <ul className="links" id="myHeader">
                                            <li>
                                                <a href="#link">What is a link?</a>
                                            </li>
                                            <li>
                                                <a href="#whichlinks">Which links get indexed?</a>
                                            </li>
                                            <li>
                                                <a href="#whichdomains">Which domains get indexed ?</a>
                                            </li>
                                            <li>
                                                <a href="#whywe">Why we can’t see all links</a>
                                            </li>
                                        </ul>
                                    </ScrollspyNav>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="detail">
                                    <div id="link">
                                        <p className="content">
                                            Qed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantiu ogmtotam rem aperiam, eaque
                                            ipsa rem quae ab illo Sed ut perspiciatis unde omnis iste
                                            natus error sit voluptatem accusantium loremque laudantium,
                                            totam rem aperiam, eaque ipsa quae ab illo inve ntore veri
                                            tatis et quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                    </div>
                                    <div id="whichlinks">
                                        <h3 className="subTitle">Middle Post Heading</h3>
                                        <p className="contentDesc">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium, totam rem aperiam, eaque
                                            ipsa quae ab illo inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                            quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                            consequuntur magni dolores eos qui ratione voluptatem sequi
                                            nesciunt.
                                        </p>
                                        <p className="contentDesc">
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore.
                                        </p>
                                        <p className="contentDesc">
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                                            amet, consectetur, adipisci velit, sed quia non numquam eius
                                            modi tempora incidunt ut labore.
                                        </p>
                                        <p className="contentDesc">
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                                            odit aut fugit, sed quia consequuntur magni dolores eos qui
                                            ratione voluptatem sequi nesciunt.
                                        </p>
                                        <div className="ordernow d-flex align-items-center justify-content-between">
                                            <Img src="/articlesImg/orderNow.svg" title="OrderNow" alt="Order Now" width="88" height="96" />
                                            <div className="text">Find talent your way and get things done.</div>
                                            <a href={`${process.env.hostBaseUrl}/order`} className="btn secondary-btn">Order Now</a>
                                        </div>
                                    </div>
                                    <div id="whichdomains">
                                        <h3 className="subTitle">Middle Post Heading</h3>
                                        <p className="contentDesc">
                                            Having that sort of clarity about what needs to get done and
                                            what’s coming down your pipeline almost makes organizing it
                                            all trivial. Nevertheless, you’ll want to couple your
                                            technological advantages with some practical, old-school
                                            advice for balancing a heavy workload:
                                        </p>
                                        <ul className="mb-4">
                                            <li>Break giant workloads into smaller chunks.</li>
                                            <li>Structure smaller tasks to optimize your workflow.</li>
                                            <li>
                                                Start by tackling your most time-consuming tasks first, as
                                                these are usually your biggest moneymakers. Follow up with
                                                smaller tasks once you have more time.
                                            </li>
                                            <li>
                                                Don’t fall into the trap of trying to multitask. It will
                                                just sap your attention and you’ll end up dropping the ball
                                                on everything. Sure, there will be times where your
                                                attention gets pulled away because of something urgent, but
                                                as a rule, limit multitasking whenever possible.
                                            </li>
                                        </ul>
                                        <p className="contentDesc">
                                            Combined, these elements should help you get a handle on your
                                            work, and even help you slice through a heavy backlog. Combine
                                            these with work tricks like the 20-20-20 rule to keep yourself
                                            fresh and keep your productivity high throughout the workday.
                                        </p>
                                    </div>
                                    <div id="whywe">
                                        <div className="content">
                                            <div className="connectedLinks">
                                                <div className="d-flex">
                                                    <div className="links">
                                                        <a href="">
                                                            <Img src="/articlesImg/a-twitter.svg" title="Twitter" alt="a-twitter" width="22" height="22" />
                                                        </a>
                                                    </div>
                                                    <div className="links">
                                                        <a href="">
                                                            <Img src="/articlesImg/a-fb.svg" title="Facebook" alt="a-fb" width="22" height="22" />
                                                        </a>
                                                    </div>
                                                    <div className="links">
                                                        <a href="">
                                                            <Img src="/articlesImg/a-linkdin.svg" title="Linkedin" alt="a-linkdin" width="22" height="22" />
                                                        </a>
                                                    </div>
                                                    <div className="links me-0">
                                                        <a href="">
                                                            <Img src="/articlesImg/a-link.svg" alt="a-link" title="Link" width="22" height="22" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="media">
                                            <Img src="/writer-3.webp" alt="image" width="110" title="Writer" height="110" />
                                            <div className="media-body">
                                                <div className="name">Kylie Jones</div>
                                                <div className="designation">
                                                    Experienced in Article writing
                                                </div>
                                                <p className="desc">
                                                    Prof kylie jones holds a Master’s Degree in Education Arts
                                                    from Stanford University. She is a competent writer with
                                                    five years experience in online academic writing. Over the
                                                    years, she has gained enough expertise in fields.
                                                </p>
                                                <a className="btn theme-btn hirebtn">Hire me</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="right">
                                    <div className="rightBanner">
                                        <div className="bannerText">Looking for writing essay?</div>
                                        <div className="text">We deliver the most quality essay.</div>
                                        <div className="list">
                                            <div className="d-flex justify-content-between">
                                                <div className="content">Writing</div>
                                                <div className="contentVal">$8-$12 /page</div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="content">Rewriting</div>
                                                <div className="contentVal">$7-$10 /page</div>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <div className="content">Editing</div>
                                                <div className="contentVal">$5-$7 /page</div>
                                            </div>
                                        </div>
                                        <a href={`${process.env.hostBaseUrl}/order`} className="btn secondary-btn">Proceed to order</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <h2 className="section-title">Related Articles</h2>
                    <div className="articlesCard">
                        <ArticleData />
                    </div>
                </div>
            </section>
            <Contact />
        </>
    );
};

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=article-detail&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default ArticleDetail;
