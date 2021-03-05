import './App.css';
import {Provider} from 'react-redux'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/Navbar/navBar';
import Home from '../src/components/Home/home';
import Dish from './components/Dish/dish';
import Drink from '../src/components/Drink/Drinks';
import Order from '../src/components/Order/Order';
import Receipt from '../src/components/Receipt/Receipt';
import Store from '../src/Redux/Store';


function App ()  {
  return (
    <Provider store={Store}>

    <Router>
    <div className="App">
     
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home}>
        
        </Route>
      <Route path="/dish" component={Dish}>

      </Route>
      <Route path="/drinks" component={Drink}> 
      </Route>

      <Route path="/order" component={Order}> 
      </Route>

      <Route path="/receipt" component={Receipt}> 
      </Route>
        </Switch>

    </div>
    </Router>

    </Provider>


  );
}

export default App;
