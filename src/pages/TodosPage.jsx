import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function TodosPage() {
  const [todosToday, setTodosToday] = useState([]);
  const [allTodos, setAllTodos] = useState([]);

  useEffect(() => {
    axios.get('https://my-products-json-app.adaptable.app/todos')
      .then(response => {
        const today = new Date().toISOString().slice(0, 10);

        const todosToday = response.data.filter(todo => todo.due_date === today);
        const otherTodos = response.data.filter(todo => todo.due_date !== today);

        setTodosToday(todosToday);

        const priorityOrder = {
          'High': 1,
          'Medium': 2,
          'Low': 3
        };

        const sortedAllTodos = otherTodos.sort((a, b) => {
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        });

        setAllTodos(sortedAllTodos);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }, []);

  const getPriorityBadgeClass = (priority) => {
    switch (priority) {
      case 'Low':
        return 'bg-success';
      case 'Medium':
        return 'bg-warning text-dark';
      case 'High':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container mt-4 flex-grow-1">
        <div className="mb-4">
          <h1><strong>Today's Todos</strong></h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Priority</th>
                <th scope="col">Completed</th>
                <th scope="col">Due date</th>
              </tr>
            </thead>
            <tbody>
              {todosToday.map(todo => (
                <tr key={todo.id}>
                  <td>
                    <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
                  </td>
                  <td>
                    <span className={`badge ${getPriorityBadgeClass(todo.priority)}`}>{todo.priority}</span>
                  </td>
                  <td>{todo.completed ? 'Yes 😀' : 'No 😲'}</td>
                  <td>{new Date(todo.due_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr style={{ borderColor: '#188854', borderWidth: '2px', borderStyle: 'solid' }} />
        <div>
          <h1><strong>All Todos</strong></h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Priority</th>
                <th scope="col">Completed</th>
                <th scope="col">Due date</th>
              </tr>
            </thead>
            <tbody>
              {allTodos.map(todo => (
                <tr key={todo.id}>
                  <td>
                    <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
                  </td>
                  <td>
                    <span className={`badge ${getPriorityBadgeClass(todo.priority)}`}>{todo.priority}</span>
                  </td>
                  <td>{todo.completed ? 'Yes 😀' : 'No 😲'}</td>
                  <td>{new Date(todo.due_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TodosPage;
