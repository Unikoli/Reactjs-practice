import React, { Component } from "react";
import create_Portal from ' ./create_Portal';
import ReactDOM from 'react-dom';
class Portal extends Component {
    render() {
        return ReactDOM.createPortal(
            <div>
                <create_portal />
                <h1>hello mother fucker</h1>
            </div>,

            document.getElementById('Portal-root')
        );
    }

}

export default Portal;