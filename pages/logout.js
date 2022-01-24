import React, { useEffect } from "react";

import Router from "next/router";

import dynamic from 'next/dynamic';
const Meta = dynamic(() => import('../components/meta'));

const SignOut = (props) => {

  useEffect(() => {
    // Remove all Item from localstorage and redirect to login page
    localStorage.removeItem('token');

    localStorage.removeItem('savedOrder');
    localStorage.removeItem('onceStep');
    localStorage.removeItem('orderToken');
    localStorage.removeItem('orderFileUpload');
    localStorage.removeItem('userProfilePic');
    localStorage.removeItem('paidOrderDetails');
    localStorage.removeItem('orderRight');
    localStorage.removeItem('paidPaymentDetails');
    localStorage.removeItem('discount_token');
    localStorage.removeItem("orderViewId");
    localStorage.removeItem('editCoupon');
    localStorage.removeItem('cardData');

    // front page data
    localStorage.removeItem('calculator_deadline');
    localStorage.removeItem('calculator_pages');
    localStorage.removeItem('calculator_word');
    localStorage.removeItem('calculator_service');

    Router.push('/');
  });

  return (
    <>
      <Meta />
    </>
  );
}
export default SignOut;