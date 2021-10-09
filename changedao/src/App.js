import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Nav from './components/nav';
import Index from './components/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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