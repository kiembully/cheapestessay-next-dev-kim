import React from "react";
import Img from "../Common/image";
// scss
import ratingScss from "./rating.scss";

// image
import trustpilot from "../../public/trustpilot.webp";
import sitejabber from "../../public/sitejabber.webp";
import cheapestEssay from "../../public/Cheapestessay.webp";

function HeaderRating() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: ratingScss }}></style>
      <div className="row">
        <div className="col col-xl-4">
          <div className="rating">
            <div className="left">
              <Img
                src={trustpilot}
                alt="trustpilot"
                width={25}
                height={25}
                title="Trustpilot"
              />
            </div>
            <div className="right">
              <div className="name">trustpilot</div>
              <div className="rate">
                <span className="span">4.8</span>
                <Img src="/stars.svg" alt="star" width={80}
                  height={20} title="Stars" />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-xl-4">
          <div className="rating">
            <div className="left">
              <Img
                src={sitejabber}
                alt="sitejabber"
                width={25}
                height={25}      
                title="Sitejabbar"
              />
            </div>
            <div className="right">
              <div className="name">Sitejabber</div>
              <div className="rate">
                <span className="span">4.7</span>
                <Img src="/stars.svg" alt="star" width={80}
                  height={20} 
                  title="Stars" />
              </div>
            </div>
          </div>
        </div>
        <div className="col col-xl-4">
          <div className="rating">
            <div className="left">
              <Img
                src={cheapestEssay}
                alt="cheapestessay"
                width={25}
                height={25}
                title="Cheapestessay"
              />
            </div>
            <div className="right">
              <div className="name">Cheapestessay</div>
              <div className="rate">
                <span className="span">4.9</span>
                <Img src="/stars.svg" alt="star" width={80}
                  height={20}
                  title="Stars" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderRating;
