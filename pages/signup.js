import React from "react";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));
const Account = dynamic(() => import('../components/Account/account'));

import { ukApiHelper } from "../helper/apiHelper";

export default function Login(props) {
  return (
    <>
      <Meta
        title={props.meta.title}
        description={props.meta.description}
        keywords={props.meta.keywords}
        urlCategory={props.meta.url_group}
        robotText={true} />
      <Account
        title="Create Account"
        btntext="Create Account"
        text="Sign in"
        linktext="Already have an account?"
        link={`${process.env.hostBaseUrl}/login`}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const DEFAULT_META = process.env.defaultMeta
  const res = await ukApiHelper(`seoV1?page=signup&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const meta = res.data.status ? res.data.data : DEFAULT_META

  return {
    props: {
      meta
    }
  }
}
