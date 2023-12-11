import { useEffect, useState } from "react";
import {
  deleteTodoApi,
  retrieveAllTodosForUsernameApi,
} from "./api/TodoApiService";

export default function ListTodosComponent() {
  const today = new Date();
  const targetDate = new Date(
    today.getFullYear() + 12,
    today.getMonth(),
    today.getDay()
  );
  const [todos, setTodos] = useState([]);

  const [message, setMessage] = useState(null);

  useEffect(() => refreshTodos(), []);

  function refreshTodos() {
    retrieveAllTodosForUsernameApi("wone")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => console.log(error));
  }

  function deleteTodo(id) {
    console.log(id);
    deleteTodoApi("wone", id)
      .then(() => {
        setMessage(`Delete of todo with id = ${id} successful`);
        refreshTodos();
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="ListTodosComponent">
      <h1>Things You Want TO Do!</h1>
      {message && <div className="alert alert-warning">{message}</div>}
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Is Done?</th>
              <th>Target Date</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.id}</td>
                <td>{todo.description}</td>
                <td>{todo.done.toString()}</td>
                <td>{todo.targetDate.toString()}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
