import React from 'react';
// Toaster
import { ToastContainer } from "react-toastify";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));
const Level = dynamic(() => import('../components/order/level'));

import { ukApiHelper } from '../helper/apiHelper';

const Index = (props) => {
    return (
        <>
            <Meta title={props.meta && props.meta.title} description={props.meta && props.meta.description} keywords={props.meta && props.meta.keywords} urlCategory={props.meta && props.meta.url_group} />
            <Level />
            <ToastContainer autoClose={2000} />
        </>
    )
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=level&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default Index