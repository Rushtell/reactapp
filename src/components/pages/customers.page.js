import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {getCustomers} from "../../services/customer.service";

export class CustomersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        getCustomers().then(data => {
                this.setState({customers: data, isLoaded: true});
            })
    }

    render() {
        if (!this.state.isLoaded){
            // Loading customers
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        } else if (this.state.isLoaded && this.state.customers.length === 0){
            // Customers not found
            return (
                <div>
                    <h2>Customers not found</h2>
                </div>
            )
        } else {
            // View customers
            return (
                <>
                    <Link to={'/customers/create'}>Create customer</Link>
                    <table>
                        <tr>
                            <th>
                                First Name
                            </th>
                            <th>
                                Last Name
                            </th>
                            <th>
                                Phone Number
                            </th>
                            <th>
                                Email
                            </th>
                            <th>
                                Total Purchases Amount
                            </th>
                            <th>
                                Addresses
                            </th>
                            <th>
                                Notes
                            </th>
                            <th>

                            </th>
                            <th>

                            </th>
                        </tr>
                        {this.state.customers.map((e) => {
                            return <CustomerItem customer={e}/>
                        })}
                    </table>
                </>
            )
        }
    }
}

class CustomerItem extends React.Component {
    render() {
        const customer = this.props.customer;
        return(
            <tr>
                <td>
                    {customer.FirstName}
                </td>
                <td>
                    {customer.LastName}
                </td>
                <td>
                    {customer.PhoneNumber}
                </td>
                <td>
                    {customer.Email}
                </td>
                <td>
                    {customer.TotalPurchasesAmount}
                </td>
                <td>
                    <Link to={`/customers/${customer._id}/addresses`}>addresses</Link>
                </td>
                <td>
                    <Link to={`/customers/${customer._id}/notes`}>notes</Link>
                </td>
                <td>
                    <Link to={`/customers/edit/${customer._id}`}>Edit</Link>
                </td>
                <td>
                    <Link to={`/customers/${customer._id}/delete`}>Delete</Link>
                </td>
            </tr>
        )
    }
}