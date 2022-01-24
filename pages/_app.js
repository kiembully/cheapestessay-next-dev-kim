import React, { useEffect } from "react";
import { useRouter } from 'next/router';

// for header and footer
import Layout from '../components/layout';

// common css
import globalCss from '../styles/globals.scss';

export function reportWebVitals(metric) {
 // console.log(metric)
}

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  // Add lang in html tag
  // const { pathname } = useRouter();
  const lang = "en";

  // const lang = pathname.startsWith("/de") ? "de" : "en";
  useEffect(() => {
        document.documentElement.lang = lang;
  }, [lang]);

  // useEffect(() => {
  //   let fullPath = router.asPath;
    
  //   let searchedStr = fullPath.search(".html");
  //   let finalPath;
  //   if(searchedStr > 0)
  //   {
  //     finalPath = fullPath.replace('.html', '');
  //     router.push(finalPath);
  //   }

  // });

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: globalCss }}></style>
      <noscript dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-${process.env.NEXT_PUBLIC_GTM}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;
