import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';

function EditTodoPage() {
  const { todoId } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState({
    id: '',
    title: '',
    description: '',
    completed: false,
    priority: '',
    due_date: ''
  });

  useEffect(() => {
    axios.get(`https://my-products-json-app.adaptable.app/todos/${todoId}`)
      .then(response => {
        setTodo(response.data);
      })
      .catch(error => {
        console.error('Error fetching todo:', error);
      });
  }, [todoId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setTodo(prevTodo => ({
      ...prevTodo,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://my-products-json-app.adaptable.app/todos/${todo.id}`, todo)
      .then(response => {
        if (response.status === 200) {
          navigate(`/todos/${todo.id}`);
        } else {
          throw new Error('Error updating todo.');
        }
      })
      .catch(error => {
        console.error('Error updating todo:', error);
      });
  };

  return (
    <div id="root">
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <h1><strong>Edit Todo</strong></h1>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title:</label>
            <input
              name="title"
              type="text"
              value={todo.title}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <input
              name="description"
              type="text"
              value={todo.description}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority:</label>
            <select
              name="priority"
              value={todo.priority}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Select priority...</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="due_date" className="form-label">Due Date:</label>
            <input
              name="due_date"
              type="date"
              value={todo.due_date}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="mb-3 form-check">
            <input
              name="completed"
              type="checkbox"
              checked={todo.completed}
              onChange={handleChange}
              className="form-check-input"
              id="completedCheck"
            />
            <label className="form-check-label" htmlFor="completedCheck">Completed?</label>
          </div>
          <div className="mt-4 d-flex gap-2">
            <Link to="/todos" className="btn btn-primary">↩️ Back to Todos</Link>
            <button type="submit" className="btn btn-success">✏️ Save Changes</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default EditTodoPage;
