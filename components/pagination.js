import React from "react";
import {
    Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";


const PaginationMain = (props) => {
    return (
        <Pagination aria-label="Page navigation">
            <PaginationItem disabled={!props.pagination.hasPreviousPage}>
                <PaginationLink previous href="javascript:;" onClick={props.prevPage} />
            </PaginationItem>
            <PaginationItem active disabled>
                <PaginationLink href="javascript:;">{props.pagecount}</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={!props.pagination.hasNextPage}>
                <PaginationLink next href="javascript:;" onClick={props.nextPage} />
            </PaginationItem>
        </Pagination>
    );
};
export default PaginationMain;
