import React, { useEffect } from "react";
import { useRouter } from "next/router";

//api
import { ukApiHelper } from "../helper/apiHelper";

// scss
import Contact from "../components/home/contact";
import notFoundCss from "../styles/not-found.scss";

import Img from "../components/Common/image";
import Meta from "../components/meta"

export default function notFound(props) {
    // get route
    const router = useRouter();

    useEffect(() => {
        if (router.pathname === "/404") {
            document.body.classList.add("notFoundPage");
        }
    }, [])


    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />

            <style dangerouslySetInnerHTML={{ __html: notFoundCss }}></style>
            <div className="not-found text-center">
                <div className="top-navbar">
                    <div className="header pt-0">
                        <div className="container">
                            <div className="not-image">
                                <Img src="/not-found/404.gif" title="Not Found" className="404" width="640" height="640" />
                            </div>
                            <div className="content">
                                <h1 className="title">Oh dear, this link is not working.</h1>
                                <p className="desc">The requested page doesn’t exist. Return to Main Page</p>
                                <a href={process.env.hostBaseUrl} className="btn secondary-btn ">Go to Home page</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </>
    )
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=404&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META
    return {
        props: {
            meta
        }
    }
}