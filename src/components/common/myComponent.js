import React from "react";
import {Link} from "react-router-dom";

export class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myA = React.createRef();
        if (this.myA.current) {
            this.myA.current.textContent = '12345';
        }
    }


    render() {
        return <>
            <h1>
                Hello World!!!
            </h1>
            <Link className="App-link" to={'/customers'}>Customers List</Link>
        </>
    }
}