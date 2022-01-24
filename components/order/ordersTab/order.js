import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";

// import { textFilter } from 'react-bootstrap-table2-filter'

import { apiHelper } from '../../../helper/apiHelper';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Countdown from "react-countdown";
import moment from "moment";
import { Spinner } from "reactstrap";
import DataTable from "../../TableData";

// scss
import ordersCss from "./ordersTab.scss";
import tableData from "../../TableData/tableDate.scss";

const Orders = (props) => {

  const [sizePerPage, setSizePerPage] = useState(10);
  const [activeTab, setActiveTab] = useState('1');
  const [apiLoader, setApiLoader] = useState(false);

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  useEffect(() => {
    if (activeTab) {

      // setSearchList('')
      setApiLoader(true)

      if (activeTab === '1') {
        getOrderList(1, '', '', '');
      }
      if (activeTab === '2') {
        getDraftOrderList(1, '', '', '');
      }
      if (activeTab === '3') {
        getInProgressOrderList(1, '', '', '');
      }
      if (activeTab === '4') {
        getCompleteOrderList(1, '', '', '');
      }

      localStorage.setItem('currStep', 1)
    }
  }, [activeTab]);

  // all order scenario
  const [allOrderPage, setAllOrderPage] = useState(1);
  const [allOrderData, setAllOrderData] = useState([]);
  const [totalAllRecord, setTotalAllRecord] = useState(0);

  const getOrderList = (page, search, sortField, sortOrder) => {

    const loginToken = localStorage.getItem('token');
    var convertedToken = JSON.parse(loginToken);

    // setApiLoader(true)
    const formData = new FormData();
    formData.append("user_token", (convertedToken ? convertedToken.value : ''));
    formData.append("status", 0);
    formData.append("value", search);
    formData.append("sortField", (sortField === 'total' ? 'price' : sortField));
    formData.append("sortType", sortOrder);

    apiHelper('orderslist', 'POST', formData, null)
      .then(res => {

        const orderData = res.data.status ? res.data.data : [];
        setTotalAllRecord(orderData.length);
        setAllOrderPage(page);

        if (orderData.length > 0) {
          var currentIndex = (page - 1) * sizePerPage;
          setAllOrderData(orderData.slice(currentIndex, currentIndex + sizePerPage));
        } else {
          setAllOrderData([])
        }

        setApiLoader(false)
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const handleAllOrderChange = (type, { page, sizePerPage, searchText, sortField, sortOrder }) => {
    var pageNo = page
    if (type === 'search') {
      pageNo = 1
    }

    getOrderList(pageNo, searchText, sortField, sortOrder)
  }

  const headerSpan = (column, colIndex) => {
    switch (column.dataField) {
      case 'payment_status':
        return <span className="text-center">{column.text}</span>;
      default:
        return column.text;
    }
    // return <span className={column.sort?"header_span sort":"header_span"}>{column.text}</span>;
  }

  const changeIdFormat = (cell, row) => {
    return <span style={{ cursor: 'pointer' }} className="orderId-column" onClick={() => viewOrderClick(row)}>{cell}</span>
  }

  const changeDateFormat = (cell, row) => {
    return moment(new Date(cell)).format('DD MMM YYYY');
  }

  const changePrice = (cell, row) => {
    return <span>${cell}</span>;
  }

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // Render a countdown
    var isTimeMinus = false
    if (days <= 0 && hours <= 0 && minutes <= 0) {
      isTimeMinus = true;
    }
    return <span className={isTimeMinus ? 'time-minus' : ''}>{days} days : {hours}h : {minutes}m</span>;
  };

  const formatStatus = (cell, row) => {
    var html = cell;
    if (row.order_status_description_id === 3) {
      html = <Countdown date={row.deadlinedate} renderer={renderer} />
    }
    return <div className='status-column'>
      <span className={`status-badge ${row.order_status_description_id === 1 ? 'badge-red' : (row.order_status_description_id === 2 ? 'badge-success' : (row.order_status_description_id === 3 ? 'badge-orange' : ''))}`}></span>
      {html}
    </div>;
  }

  const formatTopic = (cell, row) => {
    return <div className='topic-column'>{cell}</div>;
  }

  const formatDeadline = (cell, row) => {
    return <>{row.deadline} {row.duration}</>
  }

  const payNow = (row) => {
    // localStorage.setItem("orderViewId", row.order_id);
    // setTimeout(() => {
    //   props.setStep(4);
    // }, 100);
    localStorage.setItem('currStep', 3)
    setTimeout(() => {
      Router.router.push(`${process.env.basePath}/order?order_id=${row.order_id}`)
    }, 50);
  }

  const formatPayment = (cell, row) => {
    return (cell === 0 ? <Link href='#'><button className="unpaid-button" onClick={() => payNow(row)}>Pay Now</button></Link> :
      <button className="paid-button">Paid</button>)
  }

  const formatView = (cell, row) => {
    return <a className="viewBtn-div" href="#" onClick={() => viewOrderClick(row)}>View</a>
  }

  const [priceSort, setPriceSort] = useState('');
  const priceHeaderOnSort = (field) => {
    setPriceSort(field)
  }

  const allOrderColumns = [
    { dataField: 'order_no_custom', text: 'Order id', formatter: changeIdFormat },
    { dataField: 'order_date', text: 'Date', sort: true, formatter: changeDateFormat, headerClasses: priceSort === 'order_date' ? 'sortField' : '', onSort: priceHeaderOnSort },
    { dataField: 'total', text: 'Price', sort: true, formatter: changePrice, headerClasses: priceSort === 'total' ? 'sortField' : '', onSort: priceHeaderOnSort },
    { dataField: 'pages', text: 'Page' },
    { dataField: 'topic', text: 'Topic', formatter: formatTopic },
    { dataField: 'status_name', text: "Order Status", sort: true, headerClasses: priceSort === 'status_name' ? 'sortField' : '', formatter: formatStatus, onSort: priceHeaderOnSort },
    { dataField: 'deadlinedate', text: "Deadline", formatter: formatDeadline },
    { dataField: 'payment_status', text: "Payment", formatter: formatPayment, headerFormatter: headerSpan },
    { dataField: '', text: "Action", formatter: formatView }
  ];

  //draft order scenario

  const [draftOrderPage, setDraftOrderPage] = useState(1);
  const [draftOrderData, setDraftOrderData] = useState([]);
  const [totalDraftRecord, setTotalDraftRecord] = useState(0);

  const getDraftOrderList = (page, search, sortField, sortOrder) => {

    const loginToken = localStorage.getItem('token');
    var convertedToken = JSON.parse(loginToken);

    const formData = new FormData();
    formData.append("user_token", (convertedToken ? convertedToken.value : ''));
    formData.append("status", 1);
    formData.append("value", search);
    formData.append("sortField", (sortField === 'total' ? 'price' : sortField));
    formData.append("sortType", sortOrder);

    apiHelper('orderslist', 'POST', formData, null)
      .then(res => {

        const orderData = res.data.status ? res.data.data : [];
        setTotalDraftRecord(orderData.length);
        setDraftOrderPage(page);

        if (orderData.length > 0) {
          var currentIndex = (page - 1) * sizePerPage;
          setDraftOrderData(orderData.slice(currentIndex, currentIndex + sizePerPage));
        } else {
          setDraftOrderData([])
        }

        setApiLoader(false)
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const handleDraftOrderChange = (type, { page, sizePerPage, searchText, sortField, sortOrder }) => {
    var pageNo = page
    if (type === 'search') {
      pageNo = 1
    }

    getDraftOrderList(pageNo, searchText, sortField, sortOrder)
  }

  const draftOrderColumns = [
    { dataField: 'order_no_custom', text: 'Order id', formatter: changeIdFormat },
    { dataField: 'order_date', text: 'Date', sort: true, formatter: changeDateFormat, headerClasses: priceSort === 'order_date' ? 'sortField' : '', onSort: priceHeaderOnSort },
    { dataField: 'total', text: 'Price', sort: true, formatter: changePrice, headerClasses: priceSort === 'total' ? 'sortField' : '', onSort: priceHeaderOnSort },
    { dataField: 'pages', text: 'Page' },
    { dataField: 'topic', text: 'Topic', formatter: formatTopic },
    { dataField: 'status_name', text: "Order Status", sort: true, headerClasses: priceSort === 'status_name' ? 'sortField' : '', formatter: formatStatus, onSort: priceHeaderOnSort },
    { dataField: 'deadlinedate', text: "Deadline", formatter: formatDeadline },
    { dataField: 'payment_status', text: "Payment", formatter: formatPayment, headerFormatter: headerSpan },
    { dataField: '', text: "Action", formatter: formatView }
  ];

  //in progress order scenario

  const [inProgressOrderPage, setInProgressOrderPage] = useState(1);
  const [inProgressOrderData, setInProgressOrderData] = useState([]);
  const [totalInProgressRecord, setTotalInProgressRecord] = useState(0);

  const getInProgressOrderList = (page, search, sortField, sortOrder) => {

    const loginToken = localStorage.getItem('token');
    var convertedToken = JSON.parse(loginToken);

    const formData = new FormData();
    formData.append("user_token", (convertedToken ? convertedToken.value : ''));
    formData.append("status", 3);
    formData.append("value", search);
    formData.append("sortField", (sortField === 'total' ? 'price' : sortField));
    formData.append("sortType", sortOrder);

    apiHelper('orderslist', 'POST', formData, null)
      .then(res => {

        const orderData = res.data.status ? res.data.data : [];
        setTotalInProgressRecord(orderData.length);
        setInProgressOrderPage(page);

        if (orderData.length > 0) {
          var currentIndex = (page - 1) * sizePerPage;
          setInProgressOrderData(orderData.slice(currentIndex, currentIndex + sizePerPage));
        } else {
          setInProgressOrderData([])
        }

        setApiLoader(false)
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const handleInProgressChange = (type, { page, sizePerPage, searchText, sortField, sortOrder }) => {
    var pageNo = page
    if (type === 'search') {
      pageNo = 1
    }

    getInProgressOrderList(pageNo, searchText, sortField, sortOrder)
  }

  const inProgressOrderColumns = [
    { dataField: 'order_no_custom', text: 'Order id', formatter: changeIdFormat },
    { dataField: 'order_date', text: 'Date', sort: true, formatter: changeDateFormat, headerClasses: priceSort === 'order_date' ? 'sortField' : '', onSort: priceHeaderOnSort },
    { dataField: 'total', text: 'Price', sort: true, formatter: changePrice, headerClasses: priceSort === 'total' ? 'sortField' : '', onSort: priceHeaderOnSort },
    { dataField: 'pages', text: 'Page' },
    { dataField: 'topic', text: 'Topic', formatter: formatTopic },
    { dataField: 'status_name', text: "Order Status", sort: true, headerClasses: priceSort === 'status_name' ? 'sortField' : '', formatter: formatStatus, onSort: priceHeaderOnSort },
    { dataField: 'deadlinedate', text: "Deadline", formatter: formatDeadline },
    { dataField: 'payment_status', text: "Payment", formatter: formatPayment, headerFormatter: headerSpan },
    { dataField: '', text: "Action", formatter: formatView }
  ];

  //complete order scenario

  const [completeOrderPage, setCompleteOrderPage] = useState(1);
  const [completeOrderData, setCompleteOrderData] = useState([]);
  const [totalCompleteRecord, setTotalCompleteRecord] = useState(0);

  const getCompleteOrderList = (page, search, sortField, sortOrder) => {

    const loginToken = localStorage.getItem('token');
    var convertedToken = JSON.parse(loginToken);

    const formData = new FormData();
    formData.append("user_token", (convertedToken ? convertedToken.value : ''));
    formData.append("status", 2);
    formData.append("value", search);
    formData.append("sortField", (sortField === 'total' ? 'price' : sortField));
    formData.append("sortType", sortOrder);

    apiHelper('orderslist', 'POST', formData, null)
      .then(res => {

        const orderData = res.data.status ? res.data.data : [];
        setTotalCompleteRecord(orderData.length);
        setCompleteOrderPage(page);

        if (orderData.length > 0) {
          var currentIndex = (page - 1) * sizePerPage;
          setCompleteOrderData(orderData.slice(currentIndex, currentIndex + sizePerPage));
        } else {
          setCompleteOrderData([])
        }

        setApiLoader(false)
      })
      .catch(error => console.error(`Error: ${error}`));
  }

  const handleCompleteChange = (type, { page, sizePerPage, searchText, sortField, sortOrder }) => {
    // if (type === 'sort') {
    //   let result;
    //   if (sortOrder === 'asc') {
    //     result = inProgressOrderData.sort((a, b) => {
    //       if (a[sortField] > b[sortField]) {
    //         return 1;
    //       } else if (b[sortField] > a[sortField]) {
    //         return -1;
    //       }
    //       return 0;
    //     });
    //   } else {
    //     result = inProgressOrderData.sort((a, b) => {
    //       if (a[sortField] > b[sortField]) {
    //         return -1;
    //       } else if (b[sortField] > a[sortField]) {
    //         return 1;
    //       }
    //       return 0;
    //     });
    //   }

    //   setInProgressOrderData(result)

    // } else {
    var pageNo = page
    if (type === 'search') {
      pageNo = 1
    }

    getCompleteOrderList(pageNo, searchText, sortField, sortOrder)
    // }
  }

  const completeOrderColumns = [
    { dataField: 'order_no_custom', text: 'Order id', formatter: changeIdFormat },
    { dataField: 'order_date', text: 'Date', sort: true, formatter: changeDateFormat, headerClasses: priceSort === 'order_date' ? 'sortField' : '', onSort: priceHeaderOnSort },
    { dataField: 'total', text: 'Price', sort: true, formatter: changePrice, headerClasses: priceSort === 'total' ? 'sortField' : '', onSort: priceHeaderOnSort },
    { dataField: 'pages', text: 'Page' },
    { dataField: 'topic', text: 'Topic', formatter: formatTopic },
    { dataField: 'status_name', text: "Order Status", sort: true, headerClasses: priceSort === 'status_name' ? 'sortField' : '', formatter: formatStatus, onSort: priceHeaderOnSort },
    { dataField: 'deadlinedate', text: "Deadline", formatter: formatDeadline },
    { dataField: 'payment_status', text: "Payment", formatter: formatPayment, headerFormatter: headerSpan },
    { dataField: '', text: "Action", formatter: formatView }
  ];

  const viewOrderClick = (orderData) => {
    if (parseInt(orderData.payment_status) > 0) {
      Router.router.push(`${process.env.basePath}/my-orders/order-details?order_id=${parseInt(orderData.order_id)}`)
    } else {
      // draft order
      // localStorage.setItem("orderViewId", orderData.order_id);
      // setTimeout(() => {
      //   props.setStep(3);
      // }, 100);

      localStorage.setItem('currStep', 3)
      localStorage.setItem('view-popup-enabled', true)
      setTimeout(() => {
        Router.router.push(`${process.env.basePath}/order?order_id=${orderData.order_id}`)
      }, 50);
    }
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tableData }}></style>
      <style dangerouslySetInnerHTML={{ __html: ordersCss }}></style>
      <div className="ordersTab">
        <div className="row">
          <div className="col-md-6">
            <h2 className="title">My orders</h2>
          </div>
        </div>
        <div className="orderTab">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '1' })}
                onClick={() => { toggle('1'); }}
              >
                All orders
                {/* <span className="bedgeCount">1</span> */}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggle('2'); }}
              >
                Draft Orders
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '3' })}
                onClick={() => { toggle('3'); }}
              >
                In Progress
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '4' })}
                onClick={() => { toggle('4'); }}
              >
                Finished
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              {apiLoader ?
                <div className="loader">
                  <Spinner animation="border" />
                  {/* <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner> */}
                </div>
                :
                <div className="section-part orderTable position-relative">
                  <DataTable
                    keyField="order_no_custom"
                    data={allOrderData}
                    page={allOrderPage}
                    columns={allOrderColumns}
                    sizePerPage={sizePerPage}
                    totalSize={totalAllRecord}
                    handleTableChange={handleAllOrderChange}
                    isSearchable={true}
                  />
                </div>
              }
            </TabPane>
            <TabPane tabId="2">
              {apiLoader ?
                <div className="loader">
                  <Spinner animation="border" />
                </div>
                :
                <div className="section-part orderTable">
                  <DataTable
                    keyField="order_no_custom"
                    data={draftOrderData}
                    page={draftOrderPage}
                    columns={draftOrderColumns}
                    sizePerPage={sizePerPage}
                    totalSize={totalDraftRecord}
                    handleTableChange={handleDraftOrderChange}
                    isSearchable={true}
                  />
                </div>
              }
            </TabPane>
            <TabPane tabId="3">
              {apiLoader ?
                <div className="loader">
                  <Spinner animation="border" />
                </div>
                :
                <div className="section-part orderTable">
                  <DataTable
                    keyField="order_no_custom"
                    data={inProgressOrderData}
                    page={inProgressOrderPage}
                    columns={inProgressOrderColumns}
                    sizePerPage={sizePerPage}
                    totalSize={totalInProgressRecord}
                    handleTableChange={handleInProgressChange}
                    isSearchable={true}
                  />
                </div>
              }
            </TabPane>
            <TabPane tabId="4">
              {apiLoader ?
                <div className="loader">
                  <Spinner animation="border" />
                </div>
                :
                <div className="section-part orderTable">
                  <DataTable
                    keyField="order_no_custom"
                    data={completeOrderData}
                    page={completeOrderPage}
                    columns={completeOrderColumns}
                    sizePerPage={sizePerPage}
                    totalSize={totalCompleteRecord}
                    handleTableChange={handleCompleteChange}
                    isSearchable={true}
                  />
                </div>
              }
            </TabPane>
          </TabContent>
        </div>
      </div>
      {/* } */}
    </>
  );
};
export default Orders;
