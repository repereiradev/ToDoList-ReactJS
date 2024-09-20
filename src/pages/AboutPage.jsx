import React from 'react';
import rodrigopereiraImage from '../assets/rodrigopereira.jpg';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <div id="root">
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="text-center">
              <h1><strong>About Project</strong></h1>
              <p>
                This project was developed as part of the React Fundamentals course instructed by Diogo Delgado Barros at CINEL - Centro de Formação Profissional da Indústria Electrónica, Energia, Telecomunicações e Tecnologias da Informação.
              </p>
              <h2 className="mt-2"><strong>Curriculum Topics Covered</strong></h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">React Syntax</li>
                <li className="list-group-item">Components: Properties</li>
                <li className="list-group-item">Class Components</li>
                <li className="list-group-item">Component Lifecycle</li>
                <li className="list-group-item">Lists</li>
                <li className="list-group-item">Form Handling</li>
                <li className="list-group-item">States</li>
                <li className="list-group-item">useState API</li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{ borderColor: '#188854', borderWidth: '2px', borderStyle: 'solid' }} />

        <div className="row mt-5">
          <div className="col-lg-6 offset-lg-3">
            <div className="d-flex align-items-center">
              <img src={rodrigopereiraImage} alt="Rodrigo Pereira" className="img-fluid rounded-circle" style={{ maxHeight: '300px' }} />
              <div className="ms-4">
                <h3><strong>About Developer</strong></h3>
                <p>
                  Rodrigo Emanuel Pereira is a junior Web Developer specializing in backend development. He holds a Level 5 Professional Course in Information Systems Technologies and Programming from CINEL and is currently pursuing a Bachelor's degree in Software Engineering at UNIGRAN Europa.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-4">
            <h4><strong>Frontend Technologies</strong></h4>
            <ul className="list-group">
              <li className="list-group-item">HTML5</li>
              <li className="list-group-item">CSS3</li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">JavaScript</li>
              <li className="list-group-item">jQuery</li>
              <li className="list-group-item">React</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4><strong>Backend Technologies</strong></h4>
            <ul className="list-group">
              <li className="list-group-item">PHP 8</li>
              <li className="list-group-item">Laravel 11</li>
              <li className="list-group-item">CodeIgniter 4</li>
              <li className="list-group-item">C# .NET</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4><strong>Databases</strong></h4>
            <ul className="list-group">
              <li className="list-group-item">MySQL</li>
              <li className="list-group-item">Microsoft SQL Server</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutPage;

