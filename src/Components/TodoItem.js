import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <div className="TodoItem">
        <li className="list-group-item">
          <h3>{title}</h3>
          <div className="input-group-append">
            <button
              className="btn btn-success col-1 offset-md-10"
              type="button"
              id="button-addon2"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="btn btn-danger col-1 offset-md-11"
              type="button"
              id="button-addon2"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default TodoItem;
