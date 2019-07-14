import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
      <div className="TodoInput">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="Add an item"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={item}
              onChange={handleChange}
            />
            <div className="input-group-append">
              <button
                className={editItem ? "btn btn-success" : "btn btn-primary"}
                type="submit"
                id="button-addon2"
              >
                {editItem ? "Save" : "Add Item"}
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
