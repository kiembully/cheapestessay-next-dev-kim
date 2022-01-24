import React from "react";

// components
import Account from "../components/Account/account";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));

import { ukApiHelper } from "../helper/apiHelper";

const ForgetPwd = (props) => {
    return (
        <>
            <Meta title={props.meta && props.meta.title} description={props.meta && props.meta.description} keywords={props.meta && props.meta.keywords} urlCategory={props.meta && props.meta.url_group} robotText={true} />
            <Account
                title="Forgot password"
                btntext="Submit"
                text="Login"
                linktext="Go back to"
                link={`${process.env.hostBaseUrl}/login`}
            />
        </>
    );
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=forget-password&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default ForgetPwd;
