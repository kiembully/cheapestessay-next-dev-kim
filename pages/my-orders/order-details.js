import React from 'react'

import dynamic from 'next/dynamic';

// scss
import ordersCss from "../../components/order/ordersTab/ordersTab.scss";

// Toaster
import { ToastContainer } from "react-toastify";

const Meta = dynamic(() => import('../../components/meta'));
const OrderStatus = dynamic(() => import('../../components/order/ordersTab/OrderStatus/orderStatus'));

import { ukApiHelper } from '../../helper/apiHelper';

const Index = (props) => {
    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: ordersCss }}></style>
            <Meta title={props.meta && props.meta.title} description={props.meta && props.meta.description} keywords={props.meta && props.meta.keywords} urlCategory={props.meta && props.meta.url_group} />
            <div className="ordersTab">
                <OrderStatus />
            </div>
            <ToastContainer autoClose={2000} />
        </>
    )
}

export async function getStaticProps(context) {
    const DEFAULT_META = process.env.defaultMeta
    const res = await ukApiHelper(`seoV1?page=my-orders&is_live=${process.env.isApiLive}`, 'GET', null, null)
    const meta = res.data.status ? res.data.data : DEFAULT_META

    return {
        props: {
            meta
        }
    }
}

export default Index