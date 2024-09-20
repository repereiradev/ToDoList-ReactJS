
import React from 'react';
import Footer from '../components/Footer';
import todoListImage from '../assets/todolist-gif.gif'; 

function HomePage() {
  return (
    <div className="content">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="text-center">
              <h1><strong>Hi!</strong></h1>
              <p className="lead">
                Imagine a place where your daily tasks organize themselves like magic. With <strong>Todo</strong>.app, your to-do lists come to life with simplicity and efficiency. Create, manage, and track your tasks easily as you achieve each goal. From reminders to priorities, you're in complete control of your day.
              </p>
              <p className="lead">
                Say goodbye to chaos and embrace productivity with <strong>Todo</strong>.app - where every task becomes a triumph!
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 offset-lg-3">
            <div className="d-flex align-items-center">
              <img src={todoListImage} alt="Todo List" className="img-fluid" style={{ maxHeight: '300px' }} />
              <div className="ms-4">
                <h3><strong>Todo</strong>.app</h3>
                <p className="lead">
                  <strong>Todo</strong>.app, your application to help with your daily tasks. <br/>
                  You can <u>create</u>, <u>edit</u>, <u>prioritize</u> tasks. <br/>Don't miss your daily objectives! <br />
                  <strong>Try it now!</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
