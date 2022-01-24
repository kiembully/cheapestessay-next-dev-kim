import React from "react";
import { useRouter } from "next/router";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import Head from "next/head";

// Html Parser
import parse from 'html-react-parser';

// scss
import faqCss from "./faq.scss";
import accFaqCss from 'react-accessible-accordion/dist/fancy-example.css';

const Faq = (props) => {

  // var [faqData, setFaqData] = useState([]);
  // const [faqTitle, setFaqTitle] = useState('');

  const getRandomString = (length) => {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
  }

  var faqDataArr = []
  var faqTitle = '';
  if (props.faqData) {
    let myArray = [];
    let i = 1;
    (props.faqData.faq).forEach(element => {
      let uniqueStr = "";
      if (i === 1) {
        uniqueStr = "a";
      }
      else {
        uniqueStr = getRandomString(2).toLowerCase();
      }
      myArray.push({ uuid: uniqueStr, question: element.question, answer: element.answer });
      i++;
    });
    faqDataArr = myArray;

    if (props.faqData && props.faqData.page_contents && props.faqData.page_contents.name) {
      var convTitle = parse(props.faqData.page_contents.name)
      if (convTitle && convTitle.props && convTitle.props.children) {
        faqTitle = convTitle.props.children
      } else {
        faqTitle = props.faqData.page_contents.name
      }
    }
  }
  var faqSchema = ''
  if (faqDataArr && faqDataArr.length > 0) {
    faqSchema = `
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "name": "FAQs",
        "mainEntity": [                                    
            ${faqDataArr.map(element => {
      // var textAns = parse((element.answer).replace(/"/g, '&quot;'));
      // textAns = textAns && textAns.props && textAns.props.children

      var textAns = ((element.answer).replace(/"/g, '&quot;')).replace(/<(.|\n)*?>/g, '');
      return `{
                  "@type": "Question",
                  "name": "${(element.question).replace(/"/g, '&quot;')}",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "${textAns}"
                  }
              }`
    }
    )}
        ]
    }
`
  }

  const router = useRouter();

  //toggleItem
  const toggleItem = (uuid) => {

    if (document.getElementById('item_' + uuid).classList.contains("d-none")) {
      faqDataArr.map((item) => {
        if (item.uuid === uuid) {
          document.getElementById('item_' + item.uuid).classList.remove('d-none');
          document.getElementById('main_item_' + item.uuid).classList.add('show');
        }
        else {
          document.getElementById('item_' + item.uuid).classList.add('d-none');
          document.getElementById('main_item_' + item.uuid).classList.remove('show');
        }
      });
    }
    else {
      document.getElementById('item_' + uuid).classList.add('d-none');
      document.getElementById('main_item_' + uuid).classList.remove('show');
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: accFaqCss }}></style>
      <style dangerouslySetInnerHTML={{ __html: faqCss }}></style>
      <Head>
        {faqSchema !== '' && router && router.asPath !== '/faqs' ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqSchema }} /> : null}
      </Head>

      <section className="faq pt-0" id="faq">
        <div className="container">
          {router.asPath === '/faqs' ? "" :
            <div className="text-center">
              <h2 className="section-title text-capitalize">{faqTitle && parse(faqTitle)} F.A.Q.</h2>
            </div>
          }

          {faqDataArr && faqDataArr.length > 0 && <>
            <div className="faqAccordion">
              <Accordion allowZeroExpanded preExpanded={['a']}>
                {faqDataArr && faqDataArr.length > 0 ? faqDataArr.map((item, index) => (
                  <>
                    <div className={"accordion__item " + (index === 0 ? "show" : "")} key={index} id={"main_item_" + item.uuid}>
                      <div className="accordion-header" onClick={() => toggleItem(item.uuid)}>
                        <div className="accordion-button">
                          <h3 className="faqTitle">{item.question}</h3>
                        </div>
                      </div>
                      <div className={"accordion-body " + (index === 0 ? "" : "d-none")} id={"item_" + item.uuid}>
                        <div className="desc">
                          {item.answer && parse(item.answer)}
                        </div>
                      </div>
                    </div>
                  </>
                ))
                  : null}
              </Accordion>
            </div>
          </>}




        </div>
      </section>
    </>
  );
}


export default Faq;
