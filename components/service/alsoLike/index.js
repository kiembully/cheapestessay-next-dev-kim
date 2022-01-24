import React, { useEffect, useState } from "react";

// scss
import alsoLikeCss from "./alsoLike.scss";

export default function AlsoLike(props) {

    let peopleLike = props.content.people_also_like;

    return (
        <>

        {peopleLike && peopleLike.length > 0 ? <>
            <style dangerouslySetInnerHTML={{ __html: alsoLikeCss }}></style>
            <section className="alsoLike pb-0">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title">
                            People also like
                        </h2>
                        <div className="desc">CheapestEssay has 6000+ experts to handle any writing task. From essays to thesis, we create customized content to match customers’ needs. Our proficient writers have the knowledge and expertise to craft high-quality documents. Here is what we offer:
                        </div>
                    </div>
                    <ul className="list d-sm-flex flex-wrap justify-content-center">
                        { peopleLike.map(function (list, index) {
                            return (
                                <li key={index}><a href={list.link} title={list.title}>{list.title}</a></li>
                            )
                        })
                        }
                    </ul>
                </div>
            </section></> : <></> }
           
        </>
    );
}
