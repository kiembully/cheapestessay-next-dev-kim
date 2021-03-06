import {  UncontrolledCollapse } from "reactstrap";
import Link from "next/link";

// scss
import articleCss from "../../styles/article.scss";

//api
import { graphHelper } from "../../helper/apiHelper";

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

const ArticleComponent = (props) => {
    const router = useRouter();
    const [articles, setArticles] = useState([])
    const [filter, setFilter] = useState();
    const handleChange = e => searchHandler(e.target.value);
    const [pagiNation, setPagination] = useState();
    const [pageCount, setPageCounter] = useState(1);

    const searchHandler = (keyword) => {
        setFilter(keyword)
        if (keyword == '') {
            setArticles(props.props.articles.edges);
            setPagination(props.props.articles.pageInfo);
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
        setArticles(props.props.articles.edges);
        setPagination(props.props.articles.pageInfo);
    }, [])

    function sanitizeText(str) {
        return str.replace(/\s+/g, '-').toLowerCase();
    }
    function getPagination() {
        return !!pagiNation ? pagiNation : props.props.articles.pageInfo
    }
    function getArticleData(){
        return (!!articles) ? articles : props.props.articles.edges
    }
    function setActiveLink(path) {
        return router.asPath.indexOf(`/${path}`) > 0;
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
    
    return (
        <>
            <Meta title={props.props.meta.title} description={props.props.meta.description} keywords={props.props.meta.keywords} urlCategory={props.props.meta.url_group} />
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
                                                <li className={router.asPath === '/articles' ? 'active' : ''} >
                                                    <Link href={`${process.env.hostBaseUrl}/articles/`}>All</Link>
                                                </li>
                                                {
                                                (props.props.categories.data.articleCategories.edges).map(function (item, index) {
                                                    return (
                                                        <li key={index} className={setActiveLink(sanitizeText(item.node.name))?'active':null}>
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
                                            
                                            {props.props.pTopics.popularTopics.edges.map(function (item, index) {
                                                return (
                                                    <li key={index} >
                                                        <Link href={`${process.env.hostBaseUrl}/articles/tags/${item.node.slug}`}><a className={setActiveLink(item.node.slug) ? 'active' : null}>{item.node.name}</a></Link>
                                                    </li>
                                                );
                                            })}
                                            
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="articlesCard">
                                    <ArticleData articles={getArticleData()} writers={props.props.writers} />
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

export default ArticleComponent;