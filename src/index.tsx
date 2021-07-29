import React from 'react';
// import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import Home from './views/Home.view';
import Contact from './views/Contact.view';
import UserView from './views/User.view';
import CalcView from './views/Calc.view';
import NotFound404 from './views/NotFound404.view';

// exemplo lazy - Code Splitting
// const Home = React.lazy(() => import('./views/Home.view'));
// const Contact = React.lazy(() => import('./views/Contact.view'));
// const NotFound404 = React.lazy(() => import('./views/NotFound404.view'));
// const UserView = React.lazy(() => import('./views/User.view'));
// const CalcView = React.lazy(() => import('./views/Calc.view'));

ReactDOM.render(
  <React.StrictMode>
    {/* <div> */}
    {/* <nav> obs: transformamos em componente foi para dentro BrowserRouter
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/contato">Contato</a></li>
        </ul>
      </nav> */}
    <BrowserRouter>
      <NavBar />
      {/* <Suspense fallback={ // Code Splitting
        <div>
          carregando...
        </div>
      }> */}
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/contato'} exact component={Contact} />
        <Route path={'/usuario/:userId'} component={UserView} />
        <Route path={'/calc/:a/:b'} component={CalcView} />
        <Route component={NotFound404} />
      </Switch>
      {/* </Suspense> */}
    </BrowserRouter>
    {/* </div> */}
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
