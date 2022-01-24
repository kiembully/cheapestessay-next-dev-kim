import React, { useState, useEffect } from "react";
import Head from "next/head";

// components
import HeaderSection from "../header/headerSection";
import HireWriter from "../home/hireWriter";
import AssignmentService from "../service/assignmentService";
import AdsBanner from "../home/adsBanner";
import Feedback from "../home/feedback";
import Service from "../home/service";
import Content from "../home/content";
import Contact from "../home/contact";
import Faq from "./faq";
import OrderNow from "../service/orderNow";
import AlsoLike from "../service/alsoLike";

// Html Parser
import parse from "html-react-parser";

// scss
import serviceCss from "../../styles/service.scss";

// // API helper
// import { ukApiHelper } from "../../helper/apiHelper";

let mainMenu = [
  'buy-essay',
  'assignment-help',
  'research-paper-writing-services',
  'coursework-writing-services',
  'case-study-writing',
  'dissertation-help',
  'resume-writing-services',
  'homework-help',
]

export default function Home(props) {

  var serviceData = props.content && props.content
  var productSchema = `{
    "@context": "https://schema.org/",
    "@type": "Product",
    "url": "${process.env.hostBaseUrl}/${(props.serviceName && props.serviceName)}",
    "name": "${props && props.pageName ? props.pageName : ''}",
    "description": "${props.metaDescription ? (props.metaDescription).replace(/"/g, '&quot;') : ''}",
    "slogan": "${serviceData && serviceData.page_contents && serviceData.page_contents.initial_content ? parse(serviceData.page_contents.initial_content) : ''}",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "${serviceData && serviceData.page_contents && serviceData.page_contents.ratingValue ? parseInt(serviceData.page_contents.ratingValue) : 0}",
      "reviewCount": "${serviceData && serviceData.page_contents && serviceData.page_contents.reviewCount ? parseInt(serviceData.page_contents.reviewCount) : 0}"
    },
    "brand": {
      "@type": "Brand",
      "name": "CheapestEssay"
    }
  }`

  var alsoLike = false
  if (mainMenu && mainMenu.length > 0) {
    mainMenu.map((info, i) => {
      if (info === props.serviceName) {
        alsoLike = true
      }
    })
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: serviceCss }}></style>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: productSchema }} />
      </Head>

      <HeaderSection serviceData={serviceData} />
      <HireWriter
        title={serviceData && serviceData.page_contents.initial_pitch_content}
        desc={serviceData && serviceData.page_contents && serviceData.page_contents.main_header ? parse(serviceData.page_contents.main_header.toString()) : ''}
        serviceType={props.serviceName}
        topWriters={props.topWriters && props.topWriters}
      />
      <AssignmentService guaranteeContent={serviceData} />
      <AdsBanner src="/discount-banner.svg" serviceContent={serviceData} />
      <Feedback schemaPageName={props.pageName} reviewData={props.reviews && props.reviews} name={serviceData && serviceData.page_contents ? serviceData.page_contents.name : ''} metaDescription={props.metaDescription && props.metaDescription} />
      <OrderNow />
      <Service serviceData={serviceData} />
      <Content serviceData={serviceData} />
      <AdsBanner adsbanner={true} serviceContent={serviceData} />
      {/* {mainMenu && mainMenu.length > 0 ?
        mainMenu.map((info, i) => {
          if (info === props.serviceName) {
            <AlsoLike serviceName={props.serviceName} />
          }
        })
        :
        null} */}
      {alsoLike ? <AlsoLike serviceName={props.serviceName} content={props.content}  /> : null}

{/* //peopleLike={props.peopleLike}
 */}
      <Faq faqData={serviceData && serviceData} />
      <Content bottomContent={true} serviceData={serviceData} />
      <Contact />
    </>
  );
}
