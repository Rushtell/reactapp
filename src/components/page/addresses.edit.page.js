import React from 'react';
import {
    Link
} from 'react-router-dom';
import {Formik} from "formik";
import {createAddress, getAddress, updateAddress} from "../../services/address.service";

export class AddressesEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: {
                AddressLine: '',
                SecondAddressLine: '',
                AddressType: '',
                City: '',
                PostalCode: '',
                State: '',
                Country: ''
            },
            isLoaded: false,
            typeCreatePage: true,
            title: 'Create Page'
        }
    }

    componentDidMount() {
        if (this.props.match.params.addressId){
            getAddress(this.props.match.params.customerId, this.props.match.params.addressId).then(data => {
                this.setState({address: data, isLoaded: true, typeCreatePage: false, title: 'Edit Page'});
            })
        }else{
            this.setState({isLoaded: true})
        }
    }

    render() {
        if (!this.state.isLoaded){
            return (<h2>Loading...</h2>)
        } else if (this.state.isLoaded && this.state.address.AddressLine === undefined) {
            return(
                <>
                    <h2>Address not found</h2>
                    <Link to={`/customers/${this.props.match.params.customerId}/addresses/create`}>Create address</Link>
                    <Link className="App-link" to={'/customers'}>Customers List</Link>
                </>
            )
        } else {
            return (
                <>
                    <h1>
                        {this.state.title}
                    </h1>

                    <Formik
                        initialValues={{
                            AddressLine: this.state.address.AddressLine,
                            SecondAddressLine: this.state.address.SecondAddressLine,
                            AddressType: this.state.address.AddressType,
                            City: this.state.address.City,
                            PostalCode: this.state.address.PostalCode,
                            State: this.state.address.State,
                            Country: this.state.address.Country
                        }}
                        onSubmit={(values) => {
                            console.log(values)
                            if (this.state.typeCreatePage){
                                createAddress(this.props.match.params.customerId, values).then((result) => {
                                    console.log(result)
                                    if (result.ok == 1) {
                                        this.props.history.push('/customers')
                                    }
                                });
                            } else {
                                updateAddress(this.props.match.params.customerId, this.props.match.params.addressId, values).then((result) => {
                                    console.log(result)
                                    if (result.ok == 1) {
                                        this.props.history.push('/customers')
                                    }
                                });
                            }
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleSubmit
                          }) => (
                            <form onSubmit={handleSubmit}>
                                <input
                                    name="AddressLine"
                                    type="string"
                                    value={values.AddressLine}
                                    onChange={handleChange}
                                />
                                {errors.AddressLine && touched.AddressLine && errors.AddressLine}
                                <input
                                    name="SecondAddressLine"
                                    type="string"
                                    value={values.SecondAddressLine}
                                    onChange={handleChange}
                                />
                                {errors.SecondAddressLine && touched.SecondAddressLine && errors.SecondAddressLine}
                                <input
                                    name="AddressType"
                                    type="string"
                                    value={values.AddressType}
                                    onChange={handleChange}
                                />
                                {errors.AddressType && touched.AddressType && errors.AddressType}
                                <input
                                    name="City"
                                    type="string"
                                    value={values.City}
                                    onChange={handleChange}
                                />
                                {errors.City && touched.City && errors.City}
                                <input
                                    name="PostalCode"
                                    type="string"
                                    value={values.PostalCode}
                                    onChange={handleChange}
                                />
                                {errors.PostalCode && touched.PostalCode && errors.PostalCode}
                                <input
                                    name="State"
                                    type="string"
                                    value={values.State}
                                    onChange={handleChange}
                                />
                                {errors.State && touched.State && errors.State}
                                <input
                                    name="Country"
                                    type="string"
                                    value={values.Country}
                                    onChange={handleChange}
                                />
                                {errors.Country && touched.Country && errors.Country}
                                <button type="submit">
                                    Edit
                                </button>
                            </form>
                        )}
                    </Formik>
                    <Link className="App-link" to={'/customers'}>Customers List</Link>
                </>
            )
        }
    }
}