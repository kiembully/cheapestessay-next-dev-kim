import React from "react";
import dynamic from "next/dynamic";
import { ukApiHelper } from "../helper/apiHelper";

// component
import Img from "../components/Common/image";
const Meta = dynamic(() => import("../components/meta"));
// const Contact = dynamic(() => import('../components/home/contact'));

// scss
import sitemapCss from "../styles/sitemap.scss";

const Sitemap = (props) => {
    return (
        <>
            <Meta
                title={props.meta.title}
                description={props.meta.description}
                keywords={props.meta.keywords}
                urlCategory={props.meta.url_group}
            />
            <style dangerouslySetInnerHTML={{ __html: sitemapCss }}></style>
            <div className="sitemap">
                <div className="top-navbar">
                    <div className="header">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="title">CheapestEssay Sitemap</h1>
                                <p className="desc">
                                CheapestEssay’s HTML sitemap is designed with the user in mind. Our website is easy to navigate, and you can use this map to find the exact service you are looking for.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="smap">
                    <div className="container">
                        <div className="smapList">
                            {/* sitemap_data */}
                            {props.sitemap_data && props.sitemap_data.map((item) => {
                                return <div className="details">
                                    <div className="d-flex align-items-center">
                                        <div className="image">
                                            <Img src="/Cheapestessay.webp" title="Cheapestessay" alt="CheapestEssay sitemap" />
                                        </div>
                                        <div className="mainTitle">{item.group}</div>
                                    </div>
                                    <ul className="list">
                                        {item.urls && item.urls.map((url) => {
                                            return  <li><a href={url.link}>{url.name}</a></li>
                                        })}
                                       
                                    </ul>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta;
    const res = await ukApiHelper(`seoV1?page=sitemap&is_live=${process.env.isApiLive}`, "GET", null, null);
    const meta = res.data.status ? res.data.data : DEFAULT_META;

    const sitemap_result = await ukApiHelper(`sitemapPageUrls`, "GET", null, null);
    const sitemap_data = res.data.status ? sitemap_result.data.data : DEFAULT_META;

    return {
        props: {
            meta,
            sitemap_data
        },
    };
}

export default Sitemap;
