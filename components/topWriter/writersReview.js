import React, { useState } from "react";

// scss
import reviewCss from "./review.scss";

import Img from "../Common/image";

export default function WritersReview() {
    // sort dropdown
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: reviewCss }}></style>
            <div className="reviewsBox">
                <div className="whiteBox">
                    <div className="top row m-0">
                        <div className="left col-md-6 p-0">
                            <h4 className="name">
                                Jems Kennon <span>(1 order)</span>
                            </h4>
                            <span className="text">May 24,2021</span>
                        </div>
                        <div className="text-end col-md-6 p-0">
                            <div className="mb-2">
                                <Img src="/stars.svg" alt="Rate"  title="Rate" />
                            </div>
                            <span className="text">May 24,2021</span>
                        </div>
                    </div>
                    <p className="reviews">
                        Well first of all the author seemed to ignore the
                        template I explicitly said to follow as well as the
                        rubric. The thesis was very very primitive and
                        undeveloped, as well as the whole text. After my
                        review of details and request to rewrite the author
                        reshuffled some sentences and left it at that.
                    </p>
                </div>
            </div> </>
    );
}
