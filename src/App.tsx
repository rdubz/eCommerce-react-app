import './App.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Shop from './components/shop';
import Home from './components/home';
import About from './components/about';
import Login from './components/login';
import CreateItem from './components/create_item';
import PrivateRoute from './components/private_route';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <PrivateRoute exact path="/add-item" component={CreateItem}/>
            <Route path="/">
              <Home test="Try this" another="Another Try"/>
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
