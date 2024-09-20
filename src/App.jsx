// App.jsx
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
import NewTodoPage from './pages/NewTodoPage';
import TodoDetailsPage from './pages/TodoDetailsPage';
import EditTodoPage from './pages/EditTodoPage';
import AboutPage from './pages/AboutPage';

import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/todos' element={<TodosPage />} />
        <Route path='/new-todo' element={<NewTodoPage />} />
        <Route path='/todos/:todoId' element={<TodoDetailsPage />} />
        <Route path='/todos/:todoId/edit' element={<EditTodoPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
