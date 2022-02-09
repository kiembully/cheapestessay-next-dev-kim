import ArticleComponent from "./articleComponent";
import { ukApiHelper, graphHelper } from "../../helper/apiHelper";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../../components/meta'));

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

const Article = (props) => {
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

    const slug = categories.data.articleCategories.edges;
    const filtered = slug.filter(obj => {
        return obj.node.name == beautifyUrl(ctx.params.articleCategory);
    })

    if (filtered.length <= 0) {
        return {
            notFound: true,
        }
    }

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
            pageInfo {
                hasPreviousPage
                hasNextPage
                endCursor
                startCursor
            }
            }
            description
        }
    }
    `
    };

    const res2 = await graphHelper(categorizedQuery);
    const articles = await res2.data.data.articleCategory.articles;

    const res3 = await ukApiHelper('articlePageWriters', 'GET', null, null);
    const writers = await res3.data.data;

    const res4 = await graphHelper(popularTopics);
    const pTopics = await res4.data.data;

    return {
        props:{
            meta,
            categories,
            filtered,
            articles,
            writers,
            pTopics,
        }
    }

    
}

export default Article;