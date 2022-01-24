import dynamic from 'next/dynamic';
import { ukApiHelper, apiHelper } from "../../helper/apiHelper";

const Meta = dynamic(() => import('../../components/meta'));
const CommonForServicePage = dynamic(() => import('../../components/home/commonForServicePage'));

export default function Home(props) {
    return (
        <>
            <Meta title={props.meta.title} description={props.meta.description} keywords={props.meta.keywords} urlCategory={props.meta.url_group} serviceName={props.serviceName && props.serviceName} />
            <CommonForServicePage
                pageName={props.meta && props.meta.pageName}
                serviceName={props.serviceName && props.serviceName}
                content={props.content && props.content}
                metaDescription={props.meta.description}
                topWriters={props.writers && props.writers}
                reviews={props.reviews && props.reviews} />
        </>
    )
}

export async function getStaticProps(context) {

    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=${context.params.serviceName}&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    const resContent = await ukApiHelper(`servicesV1?page=${context.params.serviceName}&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const content = resContent.data.status ? resContent.data.data : null
    
    const resWriters = await ukApiHelper(`top10WritersV1?limit=5`, 'GET', null, null)
    const writers = resWriters.data.status ? resWriters.data.data : null

    const resReviews = await ukApiHelper(`webReviewsV1?page=${context.params.serviceName}`, 'GET', null, null)
    const reviews = resReviews.data.status ? resReviews.data.data : null

    return {
        props: {
            meta,
            serviceName: context.params.serviceName,
            content,
            writers,
            reviews
        }
    }
}

export async function getStaticPaths() {
    // const res = await ukApiHelper('subMenu', 'GET', null, null)
    const res = await ukApiHelper('servicesUrl', 'GET', null, null)
    // const res = await apiHelper('servicesroutes', 'GET', null, null)
    let servicesPaths = await res.data

    // remove trailing slash
    const sanitizedPaths = servicesPaths.map(s => ({ serviceName: s.slice(1) }));
    const paths = sanitizedPaths.map((service) => ({
        params: { serviceName: service.serviceName.toString() },
    }))

    // var paths = servicesPaths.map((service) => ({
    //     params: { serviceName: service.file_name.toString() },
    // }))

    return { paths: paths, fallback: false }
}
