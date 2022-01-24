import React, { useEffect, useState } from "react";
import {  UncontrolledCollapse } from "reactstrap";
import Link from "next/link";

// scss
import articleCss from "../styles/article.scss";

//api
import { ukApiHelper, graphHelper } from "../helper/apiHelper";

import dynamic from 'next/dynamic';
import Button from 'react-bootstrap/Button'

const Img = dynamic(() => import('../components/Common/image'));
const Meta = dynamic(() => import('../components/meta'));
const Contact = dynamic(() => import('../components/home/contact'));
const PaginationMain = dynamic(() => import('../components/pagination'));
const ArticleData = dynamic(() => import('../components/Article'));

const topics = [
    { link: "Project Management" },
    { link: "Remote Work" },
    { link: "Law" },
    { link: "essay tips" },
];

const Article = (props) => {
    useEffect(() => {
        getCategories();
        getArticles();
    }, [])
    const [categories, setCategories] = useState();
    const [articles, setArticles] = useState();

    const getCategories = () => {
        const query = {query: `
        {
            articleCategories {
                edges {
                node {
                    name
                    articleCategoryId
                    id
                }
                }
            }
        }
        `
        };
        graphHelper(query).then((res) => {
            console.log(res.data.data.articleCategories.edges)
            setCategories(res.data.data.articleCategories.edges)
        })
    };

    const setCategory = (id) => {
        console.log(id)
    }

    const getArticles = () => {
        const query = {query: `
        {
            articles {
              edges {
                node {
                  title
                  slug
                  date
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  authorFieldGroup {
                    writerId
                  }
                }
              }
            }
          }
        `
        };
        graphHelper(query).then((res) => {
            console.log(res.data.data.articles.edges)
            setArticles(res.data.data.articles.edges)
        })
    }
    
    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
            <style dangerouslySetInnerHTML={{ __html: articleCss }}></style>
            <div className="articleMain">
                <div className="top-navbar">
                    <div className="header">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="section-title">Articles</h1>
                                <p className="desc">
                                    Read articles on hiring, remote work, development, sales &amp;
                                    marketing, talent education, and more.
                                </p>
                                <div className="row">
                                    <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                                        <div className="input-group faQform mt-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Articles..."
                                            />
                                            <div className="searchBtn">
                                                <Img src="/faq/search.svg" title="Search" alt="search" width="18" height="18" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="articlesDetail">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="sidebar">
                                    <div className="title">Browse by:</div>
                                    <div className="categories">
                                        <div id="categories" className="subTitle">
                                            <span className="me-2">Categories</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="11.031"
                                                height="6.311"
                                                viewBox="0 0 11.031 6.311"
                                            >
                                                <path
                                                    id="Path_605"
                                                    data-name="Path 605"
                                                    d="M1277.09,8417.86l4.46,4.5,4.45-4.5"
                                                    transform="translate(-1276.029 -8416.8)"
                                                    fill="none"
                                                    stroke="#000000"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="1.5"
                                                />
                                            </svg>
                                        </div>
                                        <UncontrolledCollapse toggler="#categories">
                                            <ul className="list">
                                                {categories &&
                                                    categories.map(function (item, index) {
                                                        return (
                                                            <li key={index}>
                                                                <Button variant="text" onClick={() => setCategory(item.node.id)}>{item.node.name}</Button>
                                                            </li>
                                                        );
                                                    })}
                                            </ul>
                                        </UncontrolledCollapse>
                                    </div>
                                    <div className="categories">
                                        <div id="categories" className="subTitle">
                                            <span className="me-2">Populer topics:</span>
                                        </div>
                                        <ul className="topicList">
                                            {topics &&
                                                topics.map(function (item, index) {
                                                    return (
                                                        <li key={index}>
                                                            <Link href={process.env.basePath}>{item.link}</Link>
                                                        </li>
                                                    );
                                                })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="articlesCard">
                                    <ArticleData articles={articles} />
                                </div>
                                <div className="pagePagination">
                                    <PaginationMain />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Contact />
            </div>
        </>
    );
};

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=articles&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default Article;