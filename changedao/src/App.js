import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Nav from './components/nav';
import Index from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import ProtectedRoute from './components/ProtectedRoute';

function AppContainer() {
  const location = useLocation();
  const NoAuthRoutes = ['/dashboard', '/admin']

  return (
    <>
     
      {!NoAuthRoutes.includes(location.pathname) ? <Nav /> : ''}
      <Switch>
   
        <Route path="/" exact component={Index} />
     
 
      </Switch>
     
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <Router>
        <AppContainer />
      </Router>
    </div>
  );
}

export default App;