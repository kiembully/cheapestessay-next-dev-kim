import React, { useState, useEffect } from 'react';

import moment from "moment";

// Toaster
import { toast } from 'react-toastify';
import ReactToastifyCss from 'react-toastify/dist/ReactToastify.min.css';

// scss
import orderCss from "../../../../styles/order.scss";

import { apiHelper } from '../../../../helper/apiHelper';

const CheckOrderFile = (props) => {

    const [orderData, setOrderData] = useState();
    useEffect(() => {
        if (props.orderData) {
            setOrderData(props.orderData);
        }
    }, [props.orderData]);

    const uploadFiles = (e) => {
        var files = e.target.files;
        if (files.length > 0) {
            const loginToken = localStorage.getItem('token');
            var convertedToken = JSON.parse(loginToken);

            const formData = new FormData();
            formData.append("user_token", convertedToken ? convertedToken.value : '');
            for (var i = 0; i < files.length; i++) {
                formData.append("material", files[i]);
            }
            formData.append("order_id", orderData ? orderData.order_id : '');

            apiHelper('uploadmaterial', 'POST', formData, null)
                .then(res => {
                    if (res.data.status) {
                        props.getOrder()
                        toast.success(res.data.message);
                    }
                    else {
                        toast.error('Not Supported File(s)');
                    }
                })
                .catch(error => console.error(`Error: ${error}`));
        }
    }

    const removeFile = (filename) => {

        const loginToken = localStorage.getItem('token');
        var convertedToken = JSON.parse(loginToken);

        const formData = new FormData();
        formData.append("user_token", convertedToken ? convertedToken.value : '');
        formData.append("file_name", filename);
        formData.append("order_id", orderData ? orderData.order_id : '');

        apiHelper('removeUpload', 'POST', formData, null)
            .then(res => {
                if (res.data.status) {
                    const data = res.data.data;
                    // console.log(data);
                    props.getOrder()
                    toast.success(res.data.message);
                }
                else {
                    toast.error('File not removed');
                }
            })
            .catch(error => console.error(`Error: ${error}`));
    }

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: orderCss }}></style>
            <style dangerouslySetInnerHTML={{ __html: ReactToastifyCss }}></style>
            <div className="checkOrderDetails">
                <div className="section-part leftSide">
                    <div className="orderFileDetails">
                        <div className="tabTitle d-flex align-content-center justify-content-between">
                            <h3 className="title">My Files</h3>
                            <button className="file-input" onChange={uploadFiles}>
                                <input type="file" className="file-input__input" multiple={true} />
                            </button>
                        </div>
                        <div className="files">
                            <div className="row">
                                {orderData && orderData.files && orderData.files.customer_files && orderData.files.customer_files.length > 0 ?
                                    orderData.files.customer_files.map(function (info, index) {
                                        return (
                                            <div className="col-xxl-6" key={index}>
                                                <div className="fileDetails d-flex justify-content-between">
                                                    <div className="icon d-flex">
                                                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.9085 0C16.0525 0 18.1645 2.153 18.1645 5.357V14.553C18.1645 17.785 16.1175 19.887 12.9495 19.907L5.25651 19.91C2.11251 19.91 -0.000488281 17.757 -0.000488281 14.553V5.357C-0.000488281 2.124 2.04651 0.023 5.21451 0.004L12.9075 0H12.9085ZM12.9085 1.5L5.21951 1.504C2.89151 1.518 1.49951 2.958 1.49951 5.357V14.553C1.49951 16.968 2.90451 18.41 5.25551 18.41L12.9445 18.407C15.2725 18.393 16.6645 16.951 16.6645 14.553V5.357C16.6645 2.942 15.2605 1.5 12.9085 1.5ZM12.7156 13.4737C13.1296 13.4737 13.4656 13.8097 13.4656 14.2237C13.4656 14.6377 13.1296 14.9737 12.7156 14.9737H5.49561C5.08161 14.9737 4.74561 14.6377 4.74561 14.2237C4.74561 13.8097 5.08161 13.4737 5.49561 13.4737H12.7156ZM12.7156 9.2872C13.1296 9.2872 13.4656 9.6232 13.4656 10.0372C13.4656 10.4512 13.1296 10.7872 12.7156 10.7872H5.49561C5.08161 10.7872 4.74561 10.4512 4.74561 10.0372C4.74561 9.6232 5.08161 9.2872 5.49561 9.2872H12.7156ZM8.25031 5.1104C8.66431 5.1104 9.00031 5.4464 9.00031 5.8604C9.00031 6.2744 8.66431 6.6104 8.25031 6.6104H5.49531C5.08131 6.6104 4.74531 6.2744 4.74531 5.8604C4.74531 5.4464 5.08131 5.1104 5.49531 5.1104H8.25031Z" fill="black" />
                                                        </svg>
                                                        <div className="details">
                                                            <h4 className="name" title={info.file_name1}>{info.file_name1}</h4>
                                                            {/* <span className="text">{moment(info.date_time).format('DD MMM YYYY hh:mm A')}</span> */}
                                                        </div>
                                                    </div>
                                                    {/* <div className="userName">{info.uploaded_by}</div> */}
                                                    <a title="View" className="view" target='_blank' href={info.file_path}>
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0)">
                                                                <path d="M0.666504 7.99984C0.666504 7.99984 3.33317 2.6665 7.99984 2.6665C12.6665 2.6665 15.3332 7.99984 15.3332 7.99984C15.3332 7.99984 12.6665 13.3332 7.99984 13.3332C3.33317 13.3332 0.666504 7.99984 0.666504 7.99984Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0">
                                                                    <rect width={16} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <span className="ms-2">View</span>
                                                    </a>
                                                    <div className="removeFile" onClick={() => removeFile(info.file_name)}>
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M2 4H3.33333H14" stroke="#12245A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M5.33331 4.00016V2.66683C5.33331 2.31321 5.47379 1.97407 5.72384 1.72402C5.97389 1.47397 6.31302 1.3335 6.66665 1.3335H9.33331C9.68694 1.3335 10.0261 1.47397 10.2761 1.72402C10.5262 1.97407 10.6666 2.31321 10.6666 2.66683V4.00016M12.6666 4.00016V13.3335C12.6666 13.6871 12.5262 14.0263 12.2761 14.2763C12.0261 14.5264 11.6869 14.6668 11.3333 14.6668H4.66665C4.31302 14.6668 3.97389 14.5264 3.72384 14.2763C3.47379 14.0263 3.33331 13.6871 3.33331 13.3335V4.00016H12.6666Z" stroke="#12245A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M6.66669 7.3335V11.3335" stroke="#12245A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M9.33331 7.3335V11.3335" stroke="#12245A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }) :
                                    <div className="col-md-6">
                                        <div className="fileDetails">
                                            <div className="icon d-flex w-100">
                                                <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9085 0C16.0525 0 18.1645 2.153 18.1645 5.357V14.553C18.1645 17.785 16.1175 19.887 12.9495 19.907L5.25651 19.91C2.11251 19.91 -0.000488281 17.757 -0.000488281 14.553V5.357C-0.000488281 2.124 2.04651 0.023 5.21451 0.004L12.9075 0H12.9085ZM12.9085 1.5L5.21951 1.504C2.89151 1.518 1.49951 2.958 1.49951 5.357V14.553C1.49951 16.968 2.90451 18.41 5.25551 18.41L12.9445 18.407C15.2725 18.393 16.6645 16.951 16.6645 14.553V5.357C16.6645 2.942 15.2605 1.5 12.9085 1.5ZM12.7156 13.4737C13.1296 13.4737 13.4656 13.8097 13.4656 14.2237C13.4656 14.6377 13.1296 14.9737 12.7156 14.9737H5.49561C5.08161 14.9737 4.74561 14.6377 4.74561 14.2237C4.74561 13.8097 5.08161 13.4737 5.49561 13.4737H12.7156ZM12.7156 9.2872C13.1296 9.2872 13.4656 9.6232 13.4656 10.0372C13.4656 10.4512 13.1296 10.7872 12.7156 10.7872H5.49561C5.08161 10.7872 4.74561 10.4512 4.74561 10.0372C4.74561 9.6232 5.08161 9.2872 5.49561 9.2872H12.7156ZM8.25031 5.1104C8.66431 5.1104 9.00031 5.4464 9.00031 5.8604C9.00031 6.2744 8.66431 6.6104 8.25031 6.6104H5.49531C5.08131 6.6104 4.74531 6.2744 4.74531 5.8604C4.74531 5.4464 5.08131 5.1104 5.49531 5.1104H8.25031Z" fill="black" />
                                                </svg>
                                                <div className="details">
                                                    <h4 className="name">No file(s) uploaded.</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                    <div className="orderFileDetails">
                        <div className="tabTitle d-flex align-content-center justify-content-between">
                            <h3 className="title">Writer Files</h3>
                        </div>
                        <div className="files">
                            <div className="row">
                                {orderData && orderData.files && orderData.files.writer_files && orderData.files.writer_files.status && orderData.files.writer_files.data.length > 0 ?
                                    orderData.files.writer_files.data.map(function (info, index) {
                                        return (
                                            <div className="col-xxl-6" key={index}>
                                                <div className="fileDetails d-flex justify-content-between writerFiles">
                                                    <div className="icon d-flex">
                                                        <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.9085 0C16.0525 0 18.1645 2.153 18.1645 5.357V14.553C18.1645 17.785 16.1175 19.887 12.9495 19.907L5.25651 19.91C2.11251 19.91 -0.000488281 17.757 -0.000488281 14.553V5.357C-0.000488281 2.124 2.04651 0.023 5.21451 0.004L12.9075 0H12.9085ZM12.9085 1.5L5.21951 1.504C2.89151 1.518 1.49951 2.958 1.49951 5.357V14.553C1.49951 16.968 2.90451 18.41 5.25551 18.41L12.9445 18.407C15.2725 18.393 16.6645 16.951 16.6645 14.553V5.357C16.6645 2.942 15.2605 1.5 12.9085 1.5ZM12.7156 13.4737C13.1296 13.4737 13.4656 13.8097 13.4656 14.2237C13.4656 14.6377 13.1296 14.9737 12.7156 14.9737H5.49561C5.08161 14.9737 4.74561 14.6377 4.74561 14.2237C4.74561 13.8097 5.08161 13.4737 5.49561 13.4737H12.7156ZM12.7156 9.2872C13.1296 9.2872 13.4656 9.6232 13.4656 10.0372C13.4656 10.4512 13.1296 10.7872 12.7156 10.7872H5.49561C5.08161 10.7872 4.74561 10.4512 4.74561 10.0372C4.74561 9.6232 5.08161 9.2872 5.49561 9.2872H12.7156ZM8.25031 5.1104C8.66431 5.1104 9.00031 5.4464 9.00031 5.8604C9.00031 6.2744 8.66431 6.6104 8.25031 6.6104H5.49531C5.08131 6.6104 4.74531 6.2744 4.74531 5.8604C4.74531 5.4464 5.08131 5.1104 5.49531 5.1104H8.25031Z" fill="black" />
                                                        </svg>
                                                        <div className="details">
                                                            <h4 className="name" title={info.file_name}>{info.file_name}</h4>
                                                            {/* <span className="text">{moment(info.date_added).format('DD MMM YYYY hh:mm A')}</span> */}
                                                        </div>
                                                    </div>
                                                    <div className="userName">Writer ID {info.user_name}</div>
                                                    <a title="View" className="view" target='_blank' href={info.file_path}>
                                                        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0)">

                                                                <path d="M0.666504 7.99984C0.666504 7.99984 3.33317 2.6665 7.99984 2.6665C12.6665 2.6665 15.3332 7.99984 15.3332 7.99984C15.3332 7.99984 12.6665 13.3332 7.99984 13.3332C3.33317 13.3332 0.666504 7.99984 0.666504 7.99984Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#151515" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0">
                                                                    <rect width={16} height={16} fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                        <span className="ms-2">View</span>
                                                    </a>
                                                </div>
                                            </div>
                                        )
                                    }) :
                                    <div className="col-xl-12">
                                        <div className="fileDetails mb-0">
                                            <div className="icon d-flex w-100">
                                                <svg width={19} height={20} viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9085 0C16.0525 0 18.1645 2.153 18.1645 5.357V14.553C18.1645 17.785 16.1175 19.887 12.9495 19.907L5.25651 19.91C2.11251 19.91 -0.000488281 17.757 -0.000488281 14.553V5.357C-0.000488281 2.124 2.04651 0.023 5.21451 0.004L12.9075 0H12.9085ZM12.9085 1.5L5.21951 1.504C2.89151 1.518 1.49951 2.958 1.49951 5.357V14.553C1.49951 16.968 2.90451 18.41 5.25551 18.41L12.9445 18.407C15.2725 18.393 16.6645 16.951 16.6645 14.553V5.357C16.6645 2.942 15.2605 1.5 12.9085 1.5ZM12.7156 13.4737C13.1296 13.4737 13.4656 13.8097 13.4656 14.2237C13.4656 14.6377 13.1296 14.9737 12.7156 14.9737H5.49561C5.08161 14.9737 4.74561 14.6377 4.74561 14.2237C4.74561 13.8097 5.08161 13.4737 5.49561 13.4737H12.7156ZM12.7156 9.2872C13.1296 9.2872 13.4656 9.6232 13.4656 10.0372C13.4656 10.4512 13.1296 10.7872 12.7156 10.7872H5.49561C5.08161 10.7872 4.74561 10.4512 4.74561 10.0372C4.74561 9.6232 5.08161 9.2872 5.49561 9.2872H12.7156ZM8.25031 5.1104C8.66431 5.1104 9.00031 5.4464 9.00031 5.8604C9.00031 6.2744 8.66431 6.6104 8.25031 6.6104H5.49531C5.08131 6.6104 4.74531 6.2744 4.74531 5.8604C4.74531 5.4464 5.08131 5.1104 5.49531 5.1104H8.25031Z" fill="black" />
                                                </svg>
                                                <div className="details">
                                                    <h4 className="name">No file(s) uploaded.</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default CheckOrderFile;