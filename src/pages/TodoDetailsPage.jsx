import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

function TodoDetailsPage() {
  const { todoId } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios.get(`https://my-products-json-app.adaptable.app/todos/${todoId}`)
      .then(response => {
        setTodo(response.data);
      });
  }, [todoId]);

  if (!todo) {
    return (
      <div style={{ backgroundColor: '#188854', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <strong>. . . Loading . . .</strong>
      </div>
    );
  }

  return (
    <div id="root">
      <div className="container mt-4">
        <h1><strong>To Do</strong><br />{todo.title}</h1>
        <table className="table table-striped mt-4">
          <tbody>
            <tr>
              <td><strong>Description:</strong></td>
              <td>{todo.description}</td>
            </tr>
            <tr>
              <td><strong>Priority:</strong></td>
              <td>{todo.priority}</td>
            </tr>
            <tr>
              <td><strong>Due Date:</strong></td>
              <td>{new Date(todo.due_date).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td><strong>Completed:</strong></td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-4 d-flex gap-2">
          <Link to="/todos" className="btn btn-primary">↩️ Back to Todos</Link>
          <Link to={`/todos/${todo.id}/edit`} className="btn btn-success">✏️ Edit</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TodoDetailsPage;
