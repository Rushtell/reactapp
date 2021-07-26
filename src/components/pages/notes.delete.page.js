import React from "react";
import { Link } from "react-router-dom";
import { deleteNote } from "../../services/note.service";

export class NotesDeletePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customerId: this.props.match.params.customerId,
      noteId: this.props.match.params.noteId,
    };
    this.deleteClick = this.deleteClick.bind(this);
  }

  deleteClick(customerId, noteId) {
    deleteNote(customerId, noteId).then((result) => {
      console.log(result);
      if (result.ok === 1) {
        console.log("Note deleted");
        this.props.history.push("/customers");
      }
    });
  }

  render() {
    return (
      <>
        <h2>You really want delete note with id: {this.state.noteId}</h2>
        <Link
          className="App-link"
          onClick={() => {
            this.deleteClick(this.state.customerId, this.state.noteId);
          }}
        >
          Yes
        </Link>
        <Link className="App-link" to={"/customers"}>
          No
        </Link>
      </>
    );
  }
}
