import React from 'react'

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));
const Profile = dynamic(() => import('../components/order/profile/index'));

import { ukApiHelper } from '../helper/apiHelper';

// Toaster
import { ToastContainer } from "react-toastify";

const Index = (props) => {
    return (
        <>
            <Meta title={props.meta && props.meta.title} description={props.meta && props.meta.description} keywords={props.meta && props.meta.keywords} urlCategory={props.meta && props.meta.url_group} />
            <Profile changeUserProfile={props.changeUserProfile} />
            <ToastContainer autoClose={2000} />
        </>
    )
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=profile&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default Index