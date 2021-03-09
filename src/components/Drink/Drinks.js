import { useEffect, useState } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../Drink/drinks.css';
import { connect } from "react-redux";


const Drinks = props => {
    const [beer, setBeer] = useState([]);


    const fetchDrinks = () => {
        fetch(`https://api.punkapi.com/v2/beers`)
        .then((res) => { 
         return res.json() })
        .then((data) => {
            setBeer(data);
         })
        .catch( () => {
        });
    }

    useEffect(()  =>{
        fetchDrinks();
    },[] );


    const Beers =  (beerList) =>  {
        const AllBeers = beerList.map((drink) =>
            <div key={drink.id}>
         <div className="drink-image"style={{backgroundImage:`url(${drink.image_url} )`}}></div>
                <div className="drink-name"><h4>{drink.name}</h4></div>
                <div className="drink-tagline"><p>{drink.tagline}</p></div>
                <div className="drink-first_brewed"><p>{drink.first_brewed}</p></div>


            </div>
        );
        console.log(AllBeers)
        return (AllBeers)
    }

  


     return (

    <div className="drink-box">

      <div className="drink-container">

        {setBeer ? Beers(beer):
        <div><h2>Please pick another drink</h2></div>}

      </div>


         
   <div className="next">
      <p>After you are picked your drink, click next to place your order  </p>
   <Link to="./order">
      <button className="btn" >Order</button>
   </Link> 
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    order: state.order
  });
  const mapDispatchToProps = (dispatch) => ({
    drinksDis: (payload) => dispatch({ type: "SET_DRINK", payload: payload }),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Drinks);

