import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';

function NewTodoPage() {
  const navigate = useNavigate();

  const [todo, setTodo] = useState({
    id: '',
    title: '',
    description: '',
    completed: false,
    priority: '',
    due_date: ''
  });

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, id: uuidv4() };

    axios.post('https://my-products-json-app.adaptable.app/todos', newTodo)
      .then(response => {
        if (response.status === 201) {
          navigate('/todos');
        } else {
          throw new Error('Error creating todo.');
        }
      })
      .catch(error => {
        console.error('Error creating todo:', error);
      });
  };

  return (
    <div id="root">
      <div className="container mt-4">
        <form onSubmit={handleSubmit} className="needs-validation">
          <h3><strong>New Todo</strong></h3>
          <div className="form-group">
            <label htmlFor="title" className="form-label lead">Title:</label>
            <input
              name="title"
              type="text"
              value={todo.title}
              onChange={handleChange}
              className="form-control"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label lead">Description:</label>
            <input
              name="description"
              type="text"
              value={todo.description}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="priority" className="form-label lead">Priority:</label>
            <select
              name="priority"
              value={todo.priority}
              onChange={handleChange}
              className="form-control"
              required 
            >
              <option value="">Select Priority</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="due_date" className="form-label lead">Due Date:</label>
            <input
              name="due_date"
              type="date"
              value={todo.due_date}
              onChange={handleChange}
              className="form-control"
              required 
            />
          </div>
          <div className="mt-4 d-flex justify-content-start gap-2">
            <Link to="/todos" className="btn btn-primary">↩️ Back to Todos</Link>
            <button type="submit" className="btn btn-success">
              ✏️ Create Todo
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default NewTodoPage;

