import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Head from "next/head";
import CoverPic from '../public/cover.webp'

const setIntercom = () => {
    if (typeof window !== "undefined") {
        var w = window;
        var ic = w.Intercom;
        if (typeof ic === "function") {
            ic('reattach_activator');
            ic('update', w.intercomSettings);
        } else {
            var d = document;
            var i = function () {
                i.c(arguments);
            };
            i.q = [];
            i.c = function (args) {
                i.q.push(args);
            };
            w.Intercom = i;
            var l = function () {
                var s = d.createElement('script');
                s.type = 'text/javascript';
                s.async = true;
                s.src = 'https://widget.intercom.io/widget/je6f9lsz';
                var x = d.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
            };
            if (w.attachEvent) {
                w.attachEvent('onload', l);
            } else {
                w.addEventListener('load', l, false);
            }
        }
    }
}

function Meta(propsData) {

    const catViseOgImage = [
        'cover.jpg',
        'OG-Images/Essay-Writing-Service.webp',
        'OG-Images/Assignment-Writing-Service.webp',
        'OG-Images/Research-Paper-Writing-Service.webp',
        'OG-Images/Coursework-Writing-Service.webp',
        'OG-Images/Case-Study-Writing-Service.webp',
        'OG-Images/Dissertation-Writing-Service.webp',
        'OG-Images/Letter-Writing-Service.webp',
        'OG-Images/Resume_CV-Writing-Service.webp',
        'OG-Images/Homework-Help-Service.webp',
        'OG-Images/Article-Writing-Service.webp',
        'OG-Images/Personal-Statement-Writing-Service.webp',
        'OG-Images/Story-Writing-_-Editing-Service.webp',
        'OG-Images/Project-Help-Service.webp',
        'OG-Images/No.1-Writing-Service-Provider-in-the-US.webp',
        'OG-Images/Speech-Writing-Service.webp',
        'OG-Images/Proofreading-Service.webp',
        'OG-Images/Thesis-Writing-Service.webp',
        'OG-Images/Hire-the-Top-Writer-for-Your-Project.webp',
        'OG-Images/No.1-Writing-Service-Provider-in-the-US.webp',
        'OG-Images/No.1-Writing-Service-Provider-in-the-US.webp',
        'OG-Images/No.1-Writing-Service-Provider-in-the-US.webp'
    ]

    const router = useRouter();

    let writer_profile_url = (router.pathname).replace("[user_name]", "");
    return (
        <>

            <Head>
                {/* <meta charSet="utf-8" /> */}

                <title>{propsData && propsData.title && propsData.title !== '' ? propsData.title : 'CheapestEssay Writing Service by Professional Essay Writer'}</title>

                <meta name="title" content={propsData && propsData.title && propsData.title !== '' ? propsData.title : 'CheapestEssay Writing Service by Professional Essay Writer'} />
                <meta name="description" content={propsData && propsData.description && propsData.description !== '' ? propsData.description : 'CheapestEssay writing service: Hire professional essay writers &amp; get your 100 % plagiarism-free paper delivered on time. Avail of 15% discount on first order.'} />

                {/* Google / Search Engine Tags  */}
                <meta itemProp="name" content={propsData && propsData.title && propsData.title !== '' ? propsData.title : 'CheapestEssay Writing Service by Professional Essay Writer'} />
                <meta itemProp="description" content={propsData && propsData.description && propsData.description !== '' ? propsData.description : 'CheapestEssay writing service: Hire professional essay writers &amp; get your 100 % plagiarism-free paper delivered on time. Avail of 15% discount on first order.'} />
                <meta itemProp="image" content={process.env.hostBaseUrl + "/cover.jpg"} />

                {router.pathname && router.pathname === "/404" ? null :
                    <meta name="robots" content={propsData && propsData.robotText ? "noindex,follow" : "index,follow"} />
                }

                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="robots" content={propsData.robots ? propsData.robots : 'index, follow'} />
                <meta name="referrer" content="no-referrer" />

                <meta property="og:url" content={process.env.hostBaseUrl + (router ? router.asPath : '')} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={propsData && propsData.title && propsData.title !== '' ? propsData.title : 'CheapestEssay Writing Service by Professional Essay Writer'} />
                <meta property="og:description" content={propsData && propsData.description && propsData.description !== '' ? propsData.description : 'CheapestEssay writing service: Hire professional essay writers &amp; get your 100 % plagiarism-free paper delivered on time. Avail of 15% discount on first order.'} />
                <meta property="og:image" content={`${process.env.hostBaseUrl}/${propsData && propsData.urlCategory && propsData.urlCategory !== '' ? catViseOgImage[parseInt(propsData.urlCategory)] : 'cover.jpg'}`} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={propsData && propsData.title && propsData.title !== '' ? propsData.title : 'CheapestEssay Writing Service by Professional Essay Writer'} />
                <meta name="twitter:description" content={propsData && propsData.description && propsData.description !== '' ? propsData.description : 'CheapestEssay writing service: Hire professional essay writers &amp; get your 100 % plagiarism-free paper delivered on time. Avail of 15% discount on first order.'} />
                <meta name="twitter:image" content={CoverPic} />
                <meta name="twitter:site" content="@cheapestessay" />

                {/* Google Tag Manager */}
                <script dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-${process.env.NEXT_PUBLIC_GTM}');`,
                }}>
                </script>
                {/* End Google Tag Manager  */}

                <script>
                    {setIntercom()}
                </script>
            </Head>
        </>
    );
}

export default Meta;
