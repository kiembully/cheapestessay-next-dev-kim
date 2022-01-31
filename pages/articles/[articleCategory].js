import React, { useEffect, useState } from "react";
import {  UncontrolledCollapse } from "reactstrap";
import Link from "next/link";

// scss
import articleCss from "../../styles/article.scss";

//api
import { ukApiHelper, graphHelper } from "../../helper/apiHelper";

import dynamic from 'next/dynamic';

const Img = dynamic(() => import('../../components/Common/image'));
const Meta = dynamic(() => import('../../components/meta'));
const Contact = dynamic(() => import('../../components/home/contact'));
const PaginationMain = dynamic(() => import('../../components/pagination'));
const ArticleData = dynamic(() => import('../../components/Article'));

const query = {query: `
{
    articleCategories(first: 100) {
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
function beautifyUrl(str) {
    const newStr = str.replace(/-/g, ' ').toLowerCase();
    const splitStr = newStr.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
}

const Article = (props) => {
    const [articles, setArticles] = useState([])
    const [filter, setFilter] = useState();
    const handleChange = e => searchHandler(e.target.value);

    const searchHandler = (keyword) => {
        setFilter(keyword);
        setArticles(
            props.byCategory.articles.edges.filter(obj => {
                return (obj.node.title).toLowerCase().indexOf(keyword.toLowerCase()) >= 0
            })
        )
    }

    useEffect(() =>{
        setArticles(props.byCategory.articles.edges);
    }, [])

    function sanitizeText(str) {
        return str.replace(/\s+/g, '-').toLowerCase();
    }

    function setActiveLink(category) {
        return (category == props.filtered[0].node.name)
    }
    function filterPopular(item) {
        return item.node.articleTags.edges.length > 0 ?
        !!item.node.articleTags.edges.filter(obj => {
            return obj.node.name == "Popular article"
        })
        : false
    }
    function setArticleData() {
        return (!!filter) ? articles : props.byCategory.articles.edges
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
                                <h1 className="section-title">{props.filtered[0].node.name}</h1>
                                <p className="desc">
                                    {props.byCategory.description}
                                </p>
                                <div className="row">
                                    <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                                        <div className="input-group faQform mt-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Articles..."
                                                value={filter}
                                                onChange={handleChange}
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
                                                <li>
                                                    <Link href={`${process.env.hostBaseUrl}/articles/`}>All</Link>
                                                </li>
                                                {props.articlePaths.map(function (item, index) {
                                                    return (
                                                        <li key={index} className={setActiveLink(item.node.name) ? 'active' : null}>
                                                            <Link href={`${process.env.hostBaseUrl}/articles/${sanitizeText(item.node.name)}`}>{item.node.name}</Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </UncontrolledCollapse>
                                    </div>
                                    <div className="categories">
                                        <div id="categories" className="subTitle">
                                            <span className="me-2">Popular topics:</span>
                                        </div>
                                        <ul className="topicList">
                                            
                                            {props.byCategory.articles.edges.map(function (item, index) {
                                                return (filterPopular(item)) ? (
                                                    <li key={index}>
                                                        <Link href={`${process.env.hostBaseUrl}/post/${item.node.slug}`}>{item.node.title}</Link>
                                                    </li>
                                                ) : null;
                                            })}
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="articlesCard">
                                    <ArticleData articles={setArticleData()} writers={props.writers} />
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

export const getServerSideProps = async (ctx) => {
    const category = ctx.params.articleCategory;
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=articles&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META;

    const res1 = await graphHelper(query);
    const articlePaths = res1.data.data.articleCategories.edges;

    const slug = articlePaths;
    const filtered = slug.filter(obj => {
        return obj.node.name == beautifyUrl(ctx.params.articleCategory);
    })

    const categorizedQuery = {query: `
    {
        articleCategory(id: "${filtered[0].node.id.toString()}") {
            articles {
            edges {
                node {
                id
                title
                featuredImage {
                    node {
                    sourceUrl
                    }
                }
                authorFieldGroup {
                    writerId
                }
                content
                seoFieldGroup {
                    description
                    title
                    keywords
                }
                contentOutlines {
                    topics {
                    anchor
                    title
                    }
                }
                slug
                date
                excerpt
                articleTags {
                    edges {
                    node {
                        name
                    }
                    }
                }
                }
            }
            }
            description
        }
    }
    `
    };

    const res2 = await graphHelper(categorizedQuery);
    const byCategory = await res2.data.data.articleCategory;

    const res3 = await ukApiHelper('articlePageWriters', 'GET', null, null);
    const writers = await res3.data.data;

    return {
        notFound: filtered.length < 1 ? true : false,
        props:{
            meta,
            articlePaths,
            filtered,
            byCategory,
            writers
        }
    }

    
}

export default Article;