import React, { useState, useEffect } from 'react';
import Router from 'next/router'
import { PaymentRequestButtonElement, useStripe } from '@stripe/react-stripe-js';
import { apiHelper } from '../../../../helper/apiHelper';

const CheckoutForm = (props) => {
    const stripe = useStripe();
    const [loader, setLoader] = useState(true);
    const [paymentRequest, setPaymentRequest] = useState(null);

    useEffect(() => {
        if (stripe) {
            setPaymentRequest(null)
            setReq()
        }
    }, [stripe, props.settedRedeemAmount]);

    const setReq = () => {
        var detailOrder = props && props.detailOrder ? props.detailOrder : null
        var redeemAmount = props.settedRedeemAmount ? parseFloat(props.settedRedeemAmount) : 0
        var payTotal = detailOrder && detailOrder.payment && detailOrder.payment.total ? parseFloat((detailOrder.payment.total).replace('$', '')) : 0
        var total = ((payTotal - redeemAmount).toFixed(2)).toString()
        total = parseInt(total.replace('.', ''))

        var pr = stripe.paymentRequest({
            country: 'US',
            currency: 'usd',
            total: {
                label: detailOrder && detailOrder.order_no_custom ? detailOrder.order_no_custom.toString() : '',
                amount: total
            },
            requestPayerName: true,
            requestPayerEmail: true,
        });

        pr.canMakePayment().then(result => {
            if (result) {
                setPaymentRequest(pr);
            }
        });


        pr.on('token', async (ev) => {
            ev.complete('success');

            var payTok = ev.token && ev.token.id ? ev.token.id : ''
            const loginToken = localStorage.getItem('token');
            var convertedToken = JSON.parse(loginToken);

            const formData = new FormData();
            formData.append("user_token", convertedToken ? convertedToken.value : '');
            formData.append("order_id", props.orderId && props.orderId);
            formData.append("payment_token", payTok);
            formData.append("payment_type", props.paymentType ? (props.paymentType === 'apple' ? 2 : 1) : 1);
            formData.append("redeem_amt", props.settedRedeemAmount && props.settedRedeemAmount);

            apiHelper('stripePaymentRequestV1', 'POST', formData, null).then(res => {
                if (res.data.status) {
                    Router.router.push(`${process.env.hostBaseUrl}/invoice?order_id=${props.orderId}`)
                }
            }).catch(error => console.error(`Error: ${error}`));
        });

        setLoader(false)
    }

    if (!loader) {
        if (paymentRequest) {
            return <PaymentRequestButtonElement options={{ paymentRequest }} />
        } else {
            // Use a traditional checkout form.
            return <p className='errorMsg'>We can't find any card saved to your browser. Please add your card to use this feature.</p>;
        }
    } else {
        return <></>
    }
}

export default CheckoutForm