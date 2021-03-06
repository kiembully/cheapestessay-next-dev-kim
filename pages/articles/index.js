import ArticleComponent from "../../components/Article/articleComponent";
import { ukApiHelper, graphHelper } from "../../helper/apiHelper";

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
    return (
        <>
            <ArticleComponent props={props} />
        </>
    );
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=articles&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    const res1 = await graphHelper(articleQuery);
    const articles = await res1.data.data.articles;

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
            pTopics,
        },
        revalidate: 10,
    }
}

export default Article;