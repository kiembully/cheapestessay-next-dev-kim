import React from "react";

//api
import { ukApiHelper } from "../helper/apiHelper";

// scss
import guaranteeCss from "../styles/guarantee.scss";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));
const MorePageHeader = dynamic(() => import('../components/otherPages/topHeader'));
const FreeFeature = dynamic(() => import('../components/freeFeature'));
const Feedback = dynamic(() => import('../components/home/feedback'));
const Contact = dynamic(() => import('../components/home/contact'));
const GuaranteeDetail = dynamic(() => import('../components/otherPages/guaranteeDetail'));

const Guarantee = (props) => {
    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
            <style dangerouslySetInnerHTML={{ __html: guaranteeCss }}></style>
            <div className="guarantee">
                <MorePageHeader title="Our Guarantees" desc="Looking for the best quality essay, experienced writers, and extraordinary client relations? Trust us, with CheapestEssay; you’ll get all these when you avail our essay writing services. At CheapestEssay, we completely understand how tough it gets to lay your trust in someone else with your custom academic writing. That’s the reason we guarantee you complete confidentiality of your data, 100% refund, etc. Read on to know more about our guarantees." href={`${process.env.hostBaseUrl}/order`} btnText="Order Now" src="/guarantee/ourGuarantee.svg" alt="our Guarantee" />
                <GuaranteeDetail />
                <FreeFeature />
                <Feedback reviewData={props.reviews && props.reviews} schemaPageName={props.meta && props.meta.pageName} metaDescription={props.meta.description} />
                <Contact />
            </div>
        </>

    )
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=guarantees&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    const resReviews = await ukApiHelper(`webReviewsV1?page=guarantees`, 'GET', null, null)
    const reviews = resReviews.data.status ? resReviews.data.data : null

    return {
        props: {
            meta,
            reviews
        }
    }
}

export default Guarantee;