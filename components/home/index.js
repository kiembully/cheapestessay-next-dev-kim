import React from "react";
import dynamic from 'next/dynamic'
import Head from "next/head";

// components
const HeaderSection = dynamic(() => import('../header/headerSection'));
const HireWriter = dynamic(() => import("./hireWriter"));
const Assignment = dynamic(() => import("./assignment"));
const AdsBanner = dynamic(() => import("./adsBanner"));
const Feedback = dynamic(() => import("./feedback"));
const Feature = dynamic(() => import("./feature"));
const Service = dynamic(() => import("./service"));
const Content = dynamic(() => import("./content"));
const Faq = dynamic(() => import("./faq"));
const Contact = dynamic(() => import("./contact"));
const AcademicService = dynamic(() => import("./academicService"));

// Html Parser
import parse from "html-react-parser";

var webSchema = `{
                  "@context": "https://schema.org",
                  "@type": "Website",
                  "name": "CheapestEssay",
                  "url": "${process.env.hostBaseUrl}/",
                  "inLanguage": "en-US"
                }`;

var viewSchema = `[{
                    "@context": "https://schema.org",
                    "@type": "ViewAction",
                    "target": {
                      "@type":	"EntryPoint",
                      "urlTemplate": "android-app://com.cheapestessay.service/https/www/cheapestessay.com"
                    }
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "ViewAction",
                    "target": {
                      "@type":	"EntryPoint",
                      "urlTemplate": "ios-app://1447217562/https/www/cheapestessay.com"
                    }
                  }]`

const Home = (props) => {


  var orgSchema = `{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CheapestEssay",
    "url": "${process.env.hostBaseUrl}/",
    "logo": "${process.env.hostBaseUrl}/logo.svg",
    "description": "${props.metaDescription ? (props.metaDescription).replace(/"/g, '&quot;') : ''}",
    "email": "support@cheapestessay.com",
    "sameAs":	["https://www.facebook.com/CheapestEssay/","https://twitter.com/CheapestEssay","https://www.instagram.com/cheapestessay/","https://www.youtube.com/channel/UCP45PAPiPMtFsmqNpkPJ8dg","https://www.linkedin.com/company/cheapest-essay","https://www.tiktok.com/@cheapestessay","https://www.sitejabber.com/reviews/cheapestessay.com","https://www.trustpilot.com/review/cheapestessay.com"],
    "foundingDate": "2014",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Columbus Ohio",
      "postOfficeBoxNumber": "43229",
      "addressLocality": "Columbus",
      "addressRegion": "Ohio",
      "postalCode":	"43229",
      "addressCountry": {
        "@type": "Country",
        "name":	"USA"
      }
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "(+)1.909.441.1414",
      "contactType": "customer support"
    }
  }`;

  var serviceData = props.content && props.content;
  return (
    <>
      <Head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: orgSchema }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: webSchema }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: viewSchema }} />
      </Head>

      <HeaderSection serviceData={serviceData} />
      <HireWriter
        title={serviceData && serviceData.page_contents.initial_pitch_content}
        desc={serviceData && serviceData.page_contents && serviceData.page_contents.main_header ? parse(serviceData.page_contents.main_header.toString()) : ''}
        topWriters={props.topWriters && props.topWriters}
      />
      <Assignment />
      <AdsBanner src="/discount-banner.svg" serviceContent={serviceData} />
      <Feedback reviewData={props.reviews && props.reviews} schemaPageName={props.pageName && props.pageName} metaDescription={props.metaDescription} />
      <Feature />
      <AcademicService />
      <Service serviceData={serviceData} />
      <AdsBanner adsbanner={true} serviceContent={serviceData} />
      <Content serviceData={serviceData} />
      <Faq faqData={serviceData} />
      <Content bottomContent={true} serviceData={serviceData} />
      <Contact />
    </>
  );
}

export default Home;
