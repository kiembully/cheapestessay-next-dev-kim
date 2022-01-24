import React, { Component } from "react";

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory, { PaginationProvider } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

// scss
import paginationCss from './tableDate.scss';

const { SearchBar } = Search;

const customTotal = (from, to, size) => (
    <p className={`react-bootstrap-table-pagination-total ${to === 0 ? 'no-data' : ''}`}>
        Showing <span>{to}</span> of {size}
    </p>
);

const MySearch = (props) => {
    let input;
    const handleClick = (e) => {
        e.preventDefault();
        props.onSearch(input.value);
    };
    return (
        <form method="POST" action="#" onSubmit={handleClick}>
            <div className="search_block">
                <input className="form-control" ref={n => input = n} type="text" placeholder="Search" id="tableSearch" autoComplete="off" />
                <button type="submit" className="btn theme-btn">Search</button>
            </div>
        </form>
    );
};

const defaultSorted = [
    {
        dataField: "order_date",
        order: "desc"
    }
];

class DataTable extends Component {

    render() {

        const { keyField, columns, data, page, sizePerPage, handleTableChange, totalSize, isSearchable } = this.props;

        const option = {
            //custom: true,
            page,
            sizePerPage,
            totalSize: totalSize,
            pageStartIndex: 1,
            hideSizePerPage: true,
            withFirstAndLast: false,
            showTotal: true,
            paginationTotalRenderer: customTotal
        }

        // const { SearchBar } = Search;
        return (
            <div className="table_wrap">
                <PaginationProvider pagination={paginationFactory(option)}>
                    {
                        ({
                            paginationProps,
                            paginationTableProps
                        }) => (
                            <ToolkitProvider keyField={keyField} data={data} columns={columns} search totalSize={totalSize}
                            // defaultSorted={defaultSorted}
                            >
                                {
                                    props => (
                                        <div>
                                            {isSearchable ? <MySearch {...props.searchProps} /> : null}
                                            {/* <SearchBar {...props.searchProps} className="search-table" placeholder="Search" /> */}
                                            {/* <hr /> */}
                                            <BootstrapTable
                                                {...props.baseProps}
                                                {...paginationTableProps}
                                                remote
                                                noDataIndication="Table is Empty"
                                                classes={`table_design ${totalSize === 0 ? 'no-dataSort' : ''}`}
                                                onTableChange={handleTableChange}
                                            />
                                            {/* <SizePerPageDropdownStandalone {...paginationProps} />
                                            <PaginationListStandalone {...paginationProps} /> */}
                                        </div>
                                    )
                                }
                            </ToolkitProvider>
                        )
                    }
                </PaginationProvider>
            </div>
        )
    }
}

export default DataTable;