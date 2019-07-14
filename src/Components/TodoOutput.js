import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoOutput extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    // console.log(items);
    return (
      <div className="TodoOutput">
        <ul className="list-group">
          {items.map(item => {
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                handleDelete={() => handleDelete(item.id)}
                handleEdit={() => handleEdit(item.id)}
              />
            );
          })}

          <button
            type="button"
            className="btn btn-danger btn-block text-capitalize mt-5"
            onClick={clearList}
          >
            Clear List
          </button>
        </ul>
      </div>
    );
  }
}

export default TodoOutput;
