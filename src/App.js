import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/Navbar/navBar';
import Home from '../src/components/Home/home';
import Dish from './components/Dish/dish';
import Drink from '../src/components/Drink/Drinks';
import Order from '../src/components/Order/Order';




function App() {
  return (
    <Router>
    <div className="App">
     
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home}>
        
        </Route>
      <Route path="/Dish" component={Dish}>

      </Route>
      <Route path="/Drinks" component={Drink}> 
      </Route>

      <Route path="/Order" component={Order}> 
      </Route>
        </Switch>

    </div>
    </Router>
  );
}

export default App;
