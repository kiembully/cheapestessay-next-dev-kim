import React from "react";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));
const Account = dynamic(() => import('../components/Account/account'));

import { ukApiHelper } from "../helper/apiHelper";

const Login = (props) => {
  return (
    <>
      <Meta title={props.meta && props.meta.title} description={props.meta && props.meta.description} keywords={props.meta && props.meta.keywords} urlCategory={props.meta && props.meta.url_group} robotText={true} />
      <Account
        title="Login to Your Account"
        condition="Remember me"
        btntext="Sign in"
        text="Sign Up"
        linktext="Don’t have an account?"
        link={`${process.env.hostBaseUrl}/signup`}
      />
    </>
  );
}

export async function getStaticProps(context) {
  const DEFAULT_META = process.env.defaultMeta
  const res = await ukApiHelper(`seoV1?page=login&is_live=${process.env.isApiLive}`, 'GET', null, null)
  const meta = res.data.status ? res.data.data : DEFAULT_META
  
  return {
    props: {
      meta
    }
  }
}

export default Login;