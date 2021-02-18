import './App.css';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../src/components/Navbar/navBar';
import Home from '../src/components/Home/home';
import Dish from '../src/components/Dish/dish';
import Drink from '../src/components/Drink/Drinks'




function App() {
  return (
    <div className="App">
     


      
      <Navbar/>
      <Router>
      <Home/>
     <Router>
     
          

          
        


          </Router>
       

      </Router>

     


      

      

    </div>
  );
}

export default App;
