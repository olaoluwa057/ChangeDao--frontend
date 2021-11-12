import { HashRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Nav from './components/nav';
import Index from './components/index';
import Footer from './components/Footer'
import Giveaway from './components/giveaway';
import Interest from './components/interest';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from './components/scrollTop';
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
        <Route path="/contest" component={Giveaway} />
        <Route path="/interest" component={Interest}/>
     
 
      </Switch>
      {!NoAuthRoutes.includes(location.pathname) ? <Footer /> : ''}
     
    </>
  );
}

function App() {
  return (
  
    <div className="app-container">
        
      <Router>
      <ScrollToTop>
        <AppContainer />
        </ScrollToTop>
      </Router>
    
    </div>
  );
}

export default App;