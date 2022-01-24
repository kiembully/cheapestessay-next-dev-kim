import React from "react";
import {
    Pagination,
    PaginationItem,
    PaginationLink,
} from "reactstrap";


const PaginationMain = () => {
    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next href="#" />
            </PaginationItem>
        </Pagination>
    );
};
export default PaginationMain;
