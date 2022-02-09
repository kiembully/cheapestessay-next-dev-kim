import ArticleComponent from "../articleComponent";
import { ukApiHelper, graphHelper } from "../../../helper/apiHelper";
import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../../../components/meta'));

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
function beautifyUrl(str) {
    const newStr = str.replace(/-/g, ' ').toLowerCase();
    const splitStr = newStr.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
    }
    return splitStr.join(' '); 
}

const PopularArticle = (props) => {
    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} />
            <ArticleComponent props={props} />
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    const category = ctx.params.articleCategory;
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=articles&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META;

    const res1 = await graphHelper(query);
    const categories = res1.data;
    
    const categorizedQuery = {query: `
    {
        popularTopics(where: {slug: "${ctx.query.popularTags}"}) {
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
    `
    };

    const res2 = await graphHelper(categorizedQuery);

    if (!await res2.data.data.popularTopics.edges[0]) {
        return {
            notFound: true,
        }
    }
    
    const articles = await res2.data.data.popularTopics.edges[0].node.articles;

    const res3 = await ukApiHelper('articlePageWriters', 'GET', null, null);
    const writers = await res3.data.data;

    const res4 = await graphHelper(popularTopics);
    const pTopics = await res4.data.data;

    return {
        props:{
            meta,
            categories,
            articles,
            writers,
            pTopics,
        }
    }

    
}

export default PopularArticle;