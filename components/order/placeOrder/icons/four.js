import React, { Component } from 'react';

class Four extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <>
                <svg
                    width={30}
                    height={30}
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M25 5.00049H5C3.61929 5.00049 2.5 6.11978 2.5 7.50049V22.5005C2.5 23.8812 3.61929 25.0005 5 25.0005H25C26.3807 25.0005 27.5 23.8812 27.5 22.5005V7.50049C27.5 6.11978 26.3807 5.00049 25 5.00049Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M2.5 11.875H27.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M20 15L25 15"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </>
        )
    }
}

export default Four