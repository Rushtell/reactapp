import React from "react";
import { Link } from "react-router-dom";
import {
  createCustomer,
  getCustomer,
  updateCustomer,
} from "../../services/customer.service";
import { Formik } from "formik";

export class CustomersEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: {
        FirstName: "",
        LastName: "",
        PhoneNumber: "",
        Email: "",
        TotalPurchasesAmount: 0,
      },
      isLoaded: false,
      typeCreatePage: true,
      title: "Create Page",
    };
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      getCustomer(this.props.match.params.id).then((data) => {
        this.setState({
          customer: data,
          isLoaded: true,
          typeCreatePage: false,
          title: "Edit Page",
        });
      });
    } else {
      this.setState({ isLoaded: true });
    }
  }

  render() {
    if (!this.state.isLoaded) {
      return <h2>Loading...</h2>;
    } else if (
      this.state.isLoaded &&
      this.state.customer.FirstName === undefined
    ) {
      return (
        <>
          <h2>Customer not found</h2>
          <Link className="App-link" to={"/customers"}>
            Customers List
          </Link>
        </>
      );
    } else {
      return (
        <>
          <h2>{this.state.title}</h2>

          <Formik
            initialValues={{
              FirstName: this.state.customer.FirstName,
              LastName: this.state.customer.LastName,
              PhoneNumber: this.state.customer.PhoneNumber,
              Email: this.state.customer.Email,
              TotalPurchasesAmount: this.state.customer.TotalPurchasesAmount,
            }}
            onSubmit={(values) => {
              console.log(values);
              if (this.state.typeCreatePage) {
                createCustomer(values).then((result) => {
                  console.log(result);
                  if (result._id !== undefined) {
                    this.props.history.push("/customers");
                  }
                });
              } else {
                updateCustomer(this.props.match.params.id, values).then(
                  (result) => {
                    console.log(result);
                    if (result.ok == 1) {
                      this.props.history.push("/customers");
                    }
                  }
                );
              }
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <input
                  name="FirstName"
                  type="string"
                  value={values.FirstName}
                  onChange={handleChange}
                />
                {errors.FirstName && touched.FirstName && errors.FirstName}
                <input
                  name="LastName"
                  type="string"
                  value={values.LastName}
                  onChange={handleChange}
                />
                {errors.LastName && touched.LastName && errors.LastName}
                <input
                  name="PhoneNumber"
                  type="string"
                  value={values.PhoneNumber}
                  onChange={handleChange}
                />
                {errors.PhoneNumber &&
                  touched.PhoneNumber &&
                  errors.PhoneNumber}
                <input
                  name="Email"
                  type="string"
                  value={values.Email}
                  onChange={handleChange}
                />
                {errors.Email && touched.Email && errors.Email}
                <input
                  name="TotalPurchasesAmount"
                  type="number"
                  value={values.TotalPurchasesAmount}
                  onChange={handleChange}
                />
                {errors.TotalPurchasesAmount &&
                  touched.TotalPurchasesAmount &&
                  errors.TotalPurchasesAmount}
                <button type="submit">Edit</button>
              </form>
            )}
          </Formik>
          <Link className="App-link" to={"/customers"}>
            Customers List
          </Link>
        </>
      );
    }
  }
}
