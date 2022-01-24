import React from "react";

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

// scss
import paginationCss from './tableDate.scss';

const { SearchBar } = Search;

const defaultSorted = [
    {
        dataField: "name",
        order: "desc"
    }
];

const DataTable = (props) => {

    const customTotal = (from, to, size) => (
        <p className={`react-bootstrap-table-pagination-total ${to === 0 ? 'no-data' : ''}`}>
            Showing <span>{to}</span> of {size}
        </p>
    );

    const options = {
        showTotal: true,
        hideSizePerPage: true,
        withFirstAndLast: false,
        paginationTotalRenderer: customTotal,
        // sizePerPageList: [],
        totalSize: props.totalSize
    };

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: paginationCss }}></style>
            <ToolkitProvider
                remote
                bootstrap4
                defaultSorted={defaultSorted}
                keyField={props.keyField}
                data={props.data}
                columns={props.columns}
                onTableChange={props.handleTableChange}
                loading={true}
                search
            >
                {
                    props => (
                        <div>
                            <SearchBar {...props.searchProps} />
                            <BootstrapTable
                                {...props.baseProps}
                                noDataIndication="Table is Empty"
                                pagination={paginationFactory(options)}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </>
    );
}
export default DataTable;