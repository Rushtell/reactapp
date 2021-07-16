import React from "react";
import {Link} from "react-router-dom";
import {deleteCustomer} from "../../services/customer.service";


export class CustomersDeletePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: this.props.match.params.id,
        }
        this.deleteClick = this.deleteClick.bind(this);
    }

    deleteClick (id){
        deleteCustomer(id).then((result) => {
            console.log(result)
            if(result.ok === 1){
                console.log('Customer deleted')
                this.props.history.push('/customers');
            }
        });
    }

    render() {
        return(
            <>
                <h2>You really want delete customer with id: {this.state.customerId}</h2>
                <Link className="App-link" onClick={() => {
                    this.deleteClick(this.state.customerId)
                }}>Yes</Link>
                <Link className="App-link" to={'/customers'}>No</Link>
            </>
        )

    }
}