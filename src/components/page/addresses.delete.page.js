import React from "react";
import {Link} from "react-router-dom";
import {deleteCustomer} from "../../services/customer.service";
import {deleteAddress} from "../../services/address.service";


export class AddressesDeletePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: this.props.match.params.customerId,
            addressId: this.props.match.params.addressId,
        }
        this.deleteClick = this.deleteClick.bind(this);
    }

    deleteClick (customerId, addressId){
        deleteAddress(customerId, addressId).then((result) => {
            console.log(result)
            if(result.ok === 1){
                console.log('Address deleted')
                this.props.history.push('/customers');
            }
        });
    }

    render() {
        return(
            <>
                <h2>You really want delete address with id: {this.state.addressId}</h2>
                <Link className="App-link" onClick={() => {
                    this.deleteClick(this.state.customerId, this.state.addressId)
                }}>Yes</Link>
                <Link className="App-link" to={'/customers'}>No</Link>
            </>
        )

    }
}