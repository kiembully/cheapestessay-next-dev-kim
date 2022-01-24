import React from "react";

import dynamic from 'next/dynamic';
import { ukApiHelper } from "../../helper/apiHelper";

const HomeComp = dynamic(() => import('../../components/home'));
const Meta = dynamic(() => import('../../components/meta'));

export default function Home(props) {

  return (
    <>
      <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
      <HomeComp
        pageName={props.meta.pageName}
        metaDescription={props.meta.description}
        content={props.content && props.content}
        topWriters={props.writers && props.writers}
        reviews={props.reviews && props.reviews} />
    </>
  )
}

export async function getStaticProps(context) {

  const DEFAULT_META = process.env.defaultMeta;
  const res = await ukApiHelper(`seoV1?page=index&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const meta = res.data.status ? res.data.data : DEFAULT_META;

  const resContent = await ukApiHelper(`servicesV1?page=index&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const content = resContent.data.status ? resContent.data.data : null;

  const resWriters = await ukApiHelper(`top10WritersV1?limit=5`, 'GET', null, null)
  const writers = resWriters.data.status ? resWriters.data.data : null;

  const resReviews = await ukApiHelper(`webReviewsV1?page=index`, 'GET', null, null)
  const reviews = resReviews.data.status ? resReviews.data.data : null;
  
  return {
    props: {
      meta,
      content,
      writers,
      reviews
    }
  }
}