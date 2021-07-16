import React from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {getNotes} from "../../services/note.service";

export class NotesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        getNotes(this.props.match.params.customerId).then(data => {
            this.setState({notes: data, isLoaded: true});
        })
    }

    render() {
        if (!this.state.isLoaded){
            // Loading notes
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        } else if (this.state.isLoaded && this.state.notes.length === 0){
            // Notes not found
            return (
                <div>
                    <h2>Notes not found</h2>
                    <Link to={`/customers/${this.props.match.params.customerId}/notes/create`}>Create note</Link>
                    <Link to={`/customers`}>Back to customers</Link>
                </div>
            )
        } else {
            // View notes
            return (
                <>
                    <Link to={`/customers/${this.props.match.params.customerId}/notes/create`}>Create note</Link>
                    <table>
                        <tr>
                            <th>
                                Text
                            </th>
                            <th>

                            </th>
                            <th>

                            </th>
                        </tr>
                        {this.state.notes.map((e) => {
                            return <NoteItem customerId={this.props.match.params.customerId} note={e}/>
                        })}
                    </table>
                    <Link to={`/customers`}>Back to customers</Link>
                </>
            )
        }
    }
}

class NoteItem extends React.Component {
    render() {
        const note = this.props.note;
        const customerId = this.props.customerId;
        return(
            <tr>
                <td>
                    {note.Text}
                </td>
                <td>
                    <Link to={`/customers/${customerId}/notes/edit/${note._id}`}>Edit</Link>
                </td>
                <td>
                    <Link to={`/customers/${customerId}/notes/${note._id}/delete`}>Delete</Link>
                </td>
            </tr>
        )
    }
}