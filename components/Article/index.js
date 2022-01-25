import React from "react";
import {
    CardBody,
} from "reactstrap";
import Img from "../Common/image";

// scss
import articleCss from "./article.scss";

// mui 
import { useRouter } from "next/router";

const ArticleData = (props) => {
    const router= useRouter();

    function calcWPM(str) {
        return (str / 863).toFixed(0);
    }

    function filterFeatured(item) {
        return item.node.articleTags.edges.length > 0 ?
        !!item.node.articleTags.edges.filter(obj => {
            return obj.node.name == "Featured article"
        })
        : false
    }
    function getName(writer_id) {
        return props.writers.filter(obj => {
            return obj.user_name.toLowerCase() == writer_id.toLowerCase()
        })
    }
    function validateName(name) {
        return name.length > 0 ? name : [{writer_name: 'Anonymous'}]
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: articleCss }}></style>
            {props.articles && props.articles.length > 0 ?
            props.articles.map(function (item, index) {
                return (item.node.slug != router.query.articleDetail
                        && filterFeatured(item)) ? (
                        <a href={`${process.env.hostBaseUrl}/post/${item.node.slug}`} className="card" key={index}>
                        <div className="img">
                            <span>Featured</span>
                            <div className="articleImg">
                                <Img src={item.node.featuredImage.node.sourceUrl} alt="Articles Img" title="Articles" height="171" width="100%" />
                            </div>
                        </div>
                        <CardBody>
                            <ul className="list d-flex">
                                <li>{item.node.data}</li>
                                <li>{calcWPM(item.node.content.length)} min read</li>
                            </ul>
                            <h2 className="articleTitle">
                                {item.node.title}
                            </h2>
                            <span className="by">By {validateName(getName(item.node.authorFieldGroup.writerId))[0].writer_name}</span>
                        </CardBody>
                    </a>
                )
                :
                null
            }) : <div className="noReview-found">No article found</div> }
            {props.articles && props.articles.length > 0 ?
            props.articles.map(function (item, index) {
                return (item.node.slug != router.query.articleDetail
                        && !filterFeatured(item)) ? (
                        <a href={`${process.env.hostBaseUrl}/post/${item.node.slug}`} className="card" key={index}>
                        <div className="img">
                            <div className="articleImg">
                                <Img src={item.node.featuredImage.node.sourceUrl} alt="Articles Img" title="Articles" height="171" width="100%" />
                            </div>
                        </div>
                        <CardBody>
                            <ul className="list d-flex">
                                <li>{item.node.data}</li>
                                <li>{calcWPM(item.node.content.length)} min read</li>
                            </ul>
                            <h2 className="articleTitle">
                                {item.node.title}
                            </h2>
                            <span className="by">By {validateName(getName(item.node.authorFieldGroup.writerId))[0].writer_name}</span>
                        </CardBody>
                    </a>
                )
                :
                null
            }) : null }
        </>
    );
};
export default ArticleData;