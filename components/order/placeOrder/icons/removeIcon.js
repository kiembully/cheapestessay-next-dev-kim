import React, { Component } from 'react';

class RemoveIcon extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <> 
              <svg xmlns="http://www.w3.org/2000/svg" width="10.856" height="10.856" viewBox="0 0 10.856 10.856"><g transform="translate(0.4 0.4)"><g transform="translate(0 0)"><path className="remove-icon" d="M5.744,5,9.846.9A.526.526,0,0,0,9.1.155L5,4.257.9.155A.526.526,0,0,0,.154.9L4.256,5,.154,9.1A.526.526,0,0,0,.9,9.847L5,5.745l4.1,4.1A.526.526,0,0,0,9.846,9.1Z" transform="translate(0 -0.001)" /></g></g></svg>
            </>
        )
    }
}

export default RemoveIcon