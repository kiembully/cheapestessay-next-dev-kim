import React, { useState } from "react";
import { useRouter } from 'next/router'

// scss
import footerCss from "./footer.scss";

import Img from "../Common/image";

import paymentOption from "../../public/paymentOption.svg";
import stripImg from "../../public/stripImg.svg";
import dmca from "../../public/dmca_protected_sml_120m.webp";
import copyrightImg from "../../public/copyright_image.webp";

function Footer() {
  const router = useRouter();
  var currYear = new Date().getFullYear();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: footerCss }}></style>

      <footer className={router.pathname === "/order" ? "footer" : null}>
        <div className="container">
          <div className="footer-top">
            <div className="row align-items-center">
              <div className="col-md-5">
                <ul className="connection d-flex">
                  <li>
                    <a className="social-link" href="https://www.facebook.com/CheapestEssay/" target="_blank" rel="noopener">
                      <Img src="/facebook.svg" alt="facebook" width={20} height={20} title="Facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="social-link" href="https://twitter.com/CheapestEssay" target="_blank" rel="noopener">
                      <Img src="/twitter.svg" alt="twitter" width={20} height={20} title="Twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="social-link" href="https://www.instagram.com/cheapestessay/" target="_blank" rel="noopener">
                      <Img src="/instagram.svg" alt="instagram" width={20} height={20} title="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a className="social-link" href="https://www.youtube.com/channel/UCP45PAPiPMtFsmqNpkPJ8dg" target="_blank" rel="noopener">
                      <Img src="/youtube.svg" alt="youtube" width={20} height={20} title="Youtube" />
                    </a>
                  </li>
                  <li>
                    <a className="social-link" href="https://www.linkedin.com/company/cheapest-essay" target="_blank" rel="noopener">
                      <Img src="/linkedin.svg" alt="linkedin" width={20} height={20} title="Linkedin" />
                    </a>
                  </li>
                  <li>
                    <a className="social-link" href="https://www.tiktok.com/@cheapestessay" target="_blank" rel="noopener">
                      <Img src="/tiktok.svg" alt="tiktok" width={20} height={20} title="Tiktok" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-7">
                <div className="download">
                  <ul className="d-flex justify-content-end align-items-center">
                    <li>
                      <a className="app-link" href="https://apps.apple.com/us/app/cheapest-custom-writing-papers/id1447217562" target="_blank" rel="noreferrer">
                        <Img src="/app-store.webp" alt="app store" width={146} height={44} title="Appstore" />
                      </a>
                    </li>
                    <li className="me-0">
                      <a className="app-link" href="https://play.google.com/store/apps/details?id=com.cheapestessay.service" target="_blank" rel="noreferrer">
                        <Img src="/google-play.webp" alt="google play" width={146} height={44} title="Google Play" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footerPayment d-flex align-items-center flex-wrap">
            <Img src={stripImg} alt="payments" title="Stripe" width={380} height={30} />
            <Img src={paymentOption} alt="payments" title="Payments Options" width={488} height={30} />
          </div>
          <div className="footer-center">
            <div className="row">
              <div className="col-md-3">
                <div className="footer-widget">
                  <div className="title">General</div>
                  <ul>
                    <li>
                      <a className="footer-link" href={process.env.hostBaseUrl} onClick={router.pathname === '/' ? (e) => e.preventDefault() : null}>Essay Writing</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/services`}>Our Services</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/top-writers`}>Top Writers</a>
                    </li>
                    <li>
                      <a className="footer-link" href="https://blog.cheapestessay.com">Blog</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/reviews`}>Essay Reviews</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/order`}>Order Now</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/sitemap`}>Sitemap</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-widget">
                  <div className="title">Client Area</div>
                  <ul>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/about-us`}>About Us</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/how-it-works`}>How it Works</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/price`}>Pricing</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/faqs`}>FAQs</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/referral-program-terms`}>Referral Program</a>
                    </li>
                    <li>
                      <a className="footer-link" href='https://www.couponupto.com/deals/cheapestessay-com'>Coupon Partner</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/contact-us`}>Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-widget">
                  <div className="title">Policy</div>
                  <ul>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/terms-of-use`}>Terms of Use</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/privacy-policy`}>Privacy Policy</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/revision-policy`}>Revision Policy</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/cookie-policy`}>Cookie Policy</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/guarantees`}>Guarantee</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/money-back-guarantee`}>Money Back Guarantee</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/disclaimer`}>Disclaimer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div className="footer-widget">
                  <div className="title">Top Services</div>
                  <ul>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/buy-essay`}>Buy Essay</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/same-day-essay-writing-service`}>Same Day Essay</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/assignment-writing-service`}>Assignment Writing</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/write-research-paper`}>Write Research Paper</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/coursework-help-online`}>Coursework Help</a>
                    </li>
                    <li>
                      <a className="footer-link" href={`${process.env.hostBaseUrl}/case-study-writing-help-online`}>Case Study Help</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 footer-info">
                <div className="footer-widget">
                  <div className="title">Contact</div>
                  <ul className="contactList">
                    <li><a className="footer-link" href="tel:+19094411414" target="_blank">Text &amp; Call: +1 (909) 441-1414</a></li>
                    <li><a className="footer-link" href="mailto:support@cheapestessay.com" target="_blank">Email: Support@CheapestEssay.com</a></li>
                    <li><a className="footer-link" href="https://api.whatsapp.com/send?phone=19094411414" target="_blank" rel="noopener">WhatsApp: +1 (909) 441-1414</a></li>
                    <li><a className="footer-link" href="https://goo.gl/maps/FWiQ33fegs92" target="_blank" rel="noopener">Location: Columbus, OH 43229</a></li>
                  </ul>
                  <div className="d-flex">
                    <a className="me-2" className="footer-link" rel="noopener" href="https://www.dmca.com/Protection/Status.aspx?ID=c9e0d5bb-c1dc-49c1-9612-a7a8ccf78800&refurl=https://www.cheapestessay.com/" target="_blank" title="DMCA.com Protection Status">
                      <Img src={dmca} alt="DMCA.com Protection Status" width={121} height={24} title="DMCA" />
                    </a>
                    <a className="footer-link ms-2" rel="noopener" href="https://www.copyrighted.com/website/Jtx7WAUqoPwLf5yx" target="_blank" title="Copyrighted.com Registered & Protected">
                      <Img src={copyrightImg} alt="Copyrighted.com Registered &amp; Protected" width={125} height={25} title="Copyright" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright text-center">
            <p className="mb-0">
              Copyright &copy; {currYear}. www.CheapestEssay.com. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
