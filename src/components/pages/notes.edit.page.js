import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { createNote, getNote, updateNote } from "../../services/note.service";

export class NotesEditPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        Text: "",
      },
      isLoaded: false,
      typeCreatePage: true,
      title: "Create Page",
    };
  }

  componentDidMount() {
    if (this.props.match.params.noteId) {
      getNote(
        this.props.match.params.customerId,
        this.props.match.params.noteId
      ).then((data) => {
        this.setState({
          note: data,
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
    } else if (this.state.isLoaded && this.state.note.Text === undefined) {
      return (
        <>
          <h2>Note not found</h2>
          <Link
            to={`/customers/${this.props.match.params.customerId}/notes/create`}
          >
            Create note
          </Link>
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
              Text: this.state.note.Text,
            }}
            onSubmit={(values) => {
              console.log(values);
              if (this.state.typeCreatePage) {
                createNote(this.props.match.params.customerId, values).then(
                  (result) => {
                    console.log(result);
                    if (result.ok == 1) {
                      this.props.history.push("/customers");
                    }
                  }
                );
              } else {
                updateNote(
                  this.props.match.params.customerId,
                  this.props.match.params.noteId,
                  values
                ).then((result) => {
                  console.log(result);
                  if (result.ok == 1) {
                    this.props.history.push("/customers");
                  }
                });
              }
            }}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <input
                  name="Text"
                  type="string"
                  value={values.Text}
                  onChange={handleChange}
                />
                {errors.Text && touched.Text && errors.Text}
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
