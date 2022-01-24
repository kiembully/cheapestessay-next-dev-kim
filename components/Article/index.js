import React, { useState } from "react";
import {
    CardBody,
} from "reactstrap";
import Img from "../Common/image";

// scss
import articleCss from "./article.scss";

// mui 
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ArticleData = (props) => {
    
    return !props.articles ?
        <>
        <style dangerouslySetInnerHTML={{ __html: articleCss }}></style>
        <Stack spacing={4} direction="row" className="cardSkeletonWrap">
            <Stack spacing={1} className="cardSkeleton">
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" height={15} width={180} />
                <Skeleton variant="rectangular" height={50} width={180} />
                <Skeleton variant="rectangular" height={15} width={180} />
            </Stack>
            <Stack spacing={1} className="cardSkeleton">
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" height={15} width={180} />
                <Skeleton variant="rectangular" height={50} width={180} />
                <Skeleton variant="rectangular" height={15} width={180} />
            </Stack>
            <Stack spacing={1} className="cardSkeleton">
                <Skeleton variant="rectangular" width={210} height={118} />
                <Skeleton variant="rectangular" height={15} width={180} />
                <Skeleton variant="rectangular" height={50} width={180} />
                <Skeleton variant="rectangular" height={15} width={180} />
            </Stack>
        </Stack>
        </>
        :
         (
        <>
            <style dangerouslySetInnerHTML={{ __html: articleCss }}></style>
            {props.articles && props.articles.length > 0 ?
                props.articles.map(function (item, index) {
                    return (
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
                                    <li>0 min read</li>
                                </ul>
                                <h2 className="articleTitle">
                                    {item.node.title}
                                </h2>
                                <span className="by">{item.node.authorFieldGroup.writerId}</span>
                            </CardBody>
                        </a>
                    );
                }) : <div className="noReview-found">No article found</div> }
        </>
    );
};
export default ArticleData;
