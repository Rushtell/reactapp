import React from "react";
import {Link} from "react-router-dom";
import {getAddresses} from "../../services/address.service";

export class AddressesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        getAddresses(this.props.match.params.customerId).then(data => {
            this.setState({addresses: data, isLoaded: true});
        })
    }

    render() {
        if (!this.state.isLoaded){
            // Loading addresses
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        } else if (this.state.isLoaded && this.state.addresses.length === 0){
            // Addresses not found
            return (
                <div>
                    <h2>Addresses not found</h2>
                    <Link to={`/customers/${this.props.match.params.customerId}/addresses/create`}>Create address</Link>
                    <Link to={`/customers`}>Back to customers</Link>
                </div>
            )
        } else {
            // View addresses
            return (
                <>
                    <Link to={`/customers/${this.props.match.params.customerId}/addresses/create`}>Create address</Link>
                    <table>
                        <tr>
                            <th>
                                Address Line
                            </th>
                            <th>
                                Second Address Line
                            </th>
                            <th>
                                Address Type
                            </th>
                            <th>
                                City
                            </th>
                            <th>
                                Postal Code
                            </th>
                            <th>
                                State
                            </th>
                            <th>
                                Country
                            </th>
                            <th>

                            </th>
                            <th>

                            </th>
                        </tr>
                        {this.state.addresses.map((e) => {
                            return <AddressItem customerId={this.props.match.params.customerId} address={e}/>
                        })}
                    </table>
                    <Link to={`/customers`}>Back to customers</Link>
                </>
            )
        }
    }
}

class AddressItem extends React.Component {
    render() {
        const address = this.props.address;
        const customerId = this.props.customerId;
        return(
            <tr>
                <td>
                    {address.AddressLine}
                </td>
                <td>
                    {address.SecondAddressLine}
                </td>
                <td>
                    {address.AddressType}
                </td>
                <td>
                    {address.City}
                </td>
                <td>
                    {address.PostalCode}
                </td>
                <td>
                    {address.State}
                </td>
                <td>
                    {address.Country}
                </td>
                <td>
                    <Link to={`/customers/${customerId}/addresses/edit/${address._id}`}>Edit</Link>
                </td>
                <td>
                    <Link to={`/customers/${customerId}/addresses/${address._id}/delete`}>Delete</Link>
                </td>
            </tr>
        )
    }
}