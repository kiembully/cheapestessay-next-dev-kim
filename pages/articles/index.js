import {  UncontrolledCollapse } from "reactstrap";
import Link from "next/link";

// scss
import articleCss from "../../styles/article.scss";

//api
import { ukApiHelper, graphHelper } from "../../helper/apiHelper";

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

const Img = dynamic(() => import('../../components/Common/image'));
const Meta = dynamic(() => import('../../components/meta'));
const Contact = dynamic(() => import('../../components/home/contact'));
const PaginationMain = dynamic(() => import('../../components/pagination'));
const ArticleData = dynamic(() => import('../../components/Article'));

const articleQuery = {query: `
{
    articles(first: 9) {
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
          content
          seoFieldGroup {
            description
            title
            keywords
          }
          authorFieldGroup {
            writerId
          }
          articleTags {
            edges {
              node {
                name
              }
            }
          }
        }
      }
      pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
      }
    }
  }
`
};
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
const popularTopics = {query: `
{
    popularTopics {
    edges {
    node {
    slug
    name
    id
    }
    }
    }
    }
`
};

const Article = (props) => {
    const [articles, setArticles] = useState([])
    const [filter, setFilter] = useState();
    const handleChange = e => searchHandler(e.target.value);
    const [pagiNation, setPagination] = useState();
    const [pageCount, setPageCounter] = useState(1);
    const [topic, setTopic] = useState('');

    const searchHandler = (keyword) => {
        setFilter(keyword)
        if (keyword == '') {
            setArticles(props.articles.data.articles.edges);
            setPagination(props.articles.data.articles.pageInfo);
            setPageCounter(1);
        } else {
            setArticles(
                getArticleData().filter(obj => {
                    return (obj.node.title).toLowerCase().indexOf(keyword.toLowerCase()) >= 0
                })
            )
        }
    }

    useEffect(() =>{
        setArticles(props.articles.data.articles.edges);
        setPagination(props.articles.data.articles.pageInfo);
    }, [])

    function sanitizeText(str) {
        return str.replace(/\s+/g, '-').toLowerCase();
    }
    function getPagination() {
        return !!pagiNation ? pagiNation : props.articles.data.articles.pageInfo
    }
    function getArticleData() {
        return (!!articles) ? articles : props.articles.data.articles.edges
    }
    const nextPage = () => {
        setFilter("");
        const after = getPagination().endCursor;
        var counter = pageCount;
        const pageQuery = {query: `
        {
            articles(first: 9, after: "${after}") {
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
                content
                seoFieldGroup {
                    description
                    title
                    keywords
                }
                authorFieldGroup {
                    writerId
                }
                articleTags {
                    edges {
                    node {
                        name
                    }
                    }
                }
                }
            }
            pageInfo {
                hasPreviousPage
                hasNextPage
                endCursor
                startCursor
            }
            }
        }
        `
        };
        graphHelper(pageQuery)
        .then((res) => {
            const response = res.data;
            setArticles(response.data.articles.edges);
            setPagination(response.data.articles.pageInfo)
            setPageCounter(counter+=1)
          })
          .catch((error) => console.error(`Error: ${error}`));
    }
    const prevPage = () => {
        setFilter("")
        const before = getPagination().startCursor;
        var counter = pageCount;
        const pageQuery = {query: `
        {
            articles(last: 9, before: "${before}") {
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
                content
                seoFieldGroup {
                    description
                    title
                    keywords
                }
                authorFieldGroup {
                    writerId
                }
                articleTags {
                    edges {
                    node {
                        name
                    }
                    }
                }
                }
            }
            pageInfo {
                hasPreviousPage
                hasNextPage
                endCursor
                startCursor
            }
            }
        }
        `
        };
        graphHelper(pageQuery)
        .then((res) => {
            const response = res.data;
            setArticles(response.data.articles.edges);
            setPagination(response.data.articles.pageInfo);
            setPageCounter(counter-=1)
          })
          .catch((error) => console.error(`Error: ${error}`));
    }
    const sortPopularity = (slug) => {
        setFilter("")
        setTopic(slug)
        if (slug == "") {
            setArticles(props.articles.data.articles.edges);
            setPagination(props.articles.data.articles.pageInfo);
            setPageCounter(1);
        } else {
            const sortTopicQuery = {query: `
            {
                popularTopics(where: {slug: "${slug}"}) {
                edges {
                node {
                    articles(first: 9) {
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
                            content
                            seoFieldGroup {
                                description
                                title
                                keywords
                            }
                            authorFieldGroup {
                                writerId
                            }
                            articleTags {
                                edges {
                                node {
                                    name
                                }
                                }
                            }
                            }
                        }
                        pageInfo {
                            hasPreviousPage
                            hasNextPage
                            endCursor
                            startCursor
                        }
                        }
                }
                }
                }
            }
            `};
            graphHelper(sortTopicQuery)
            .then((res) => {
                const response = res.data;
                setArticles(response.data.popularTopics.edges[0].node.articles.edges);
                setPagination(response.data.popularTopics.edges[0].node.articles.pageInfo);
                setPageCounter(1)
              })
              .catch((error) => console.error(`Error: ${error}`));
        }
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
                                                <li className="active" >
                                                    <Link href={`${process.env.hostBaseUrl}/articles/`}>All</Link>
                                                </li>
                                                {props.categories.data.articleCategories.edges.map(function (item, index) {
                                                    return (
                                                        <li key={index}>
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
                                            
                                            {props.pTopics.popularTopics.edges.map(function (item, index) {
                                                return (
                                                    <li key={index}>
                                                        <button className={topic == item.node.slug ? 'active' : ''} onClick={() => sortPopularity(item.node.slug)}>{item.node.name}</button>
                                                    </li>
                                                );
                                            })}
                                            {(topic == "") ? null :
                                            <li>
                                                <button onClick={() => sortPopularity("")}>Reset</button>
                                            </li>
                                            }
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="articlesCard">
                                    <ArticleData articles={getArticleData()} writers={props.writers} />
                                </div>
                                <div className="pagePagination">
                                    <PaginationMain pagination={getPagination()} nextPage={nextPage} prevPage={prevPage} pagecount={pageCount} />
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

    const res1 = await graphHelper(articleQuery);
    const articles = await res1.data;

    const res2 = await graphHelper(query);
    const categories = await res2.data;

    const res3 = await ukApiHelper('articlePageWriters', 'GET', null, null);
    const writers = await res3.data.data;

    const res4 = await graphHelper(popularTopics);
    const pTopics = await res4.data.data;

    return {
        props: {
            meta,
            articles,
            categories,
            writers,
            pTopics
        },
        revalidate: 10,
    }
}

export default Article;