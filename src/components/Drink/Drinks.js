import { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './drinks.css';
import Order from '../Order/Order';
import { connect } from "react-redux";


const Drinks = (props) => {
  
    const [beer, setBeer] = useState('');
    const [selectedDrinks, setSelectedDrinks] = useState([]);


    //const {setDrink} = props;



    const fetchDrinks = () => {
        fetch(`https://api.punkapi.com/v2/beers`)
        .then((res) => { return res.json() })
        .then((drinks) => {
            setBeer(drinks);
        })
        .catch(function () {
        });
    }

    const selectedDrink = (id) => {
        if(selectedDrinks.includes(id)){
     setSelectedDrinks(arr => arr.filter(item => item !== id));
        } else {
     setSelectedDrinks(arr => [...arr, id]);
        }
    }


    const Beers = (beerList) => {
        const AllBeers = beerList.map((drink) =>
            <div
                key={drink.id}
                className={`drink ${selectedDrinks.includes(drink.id) ? 'tick' : ''}`}
                onClick={() => selectedDrink(drink.id)}>
                <div className="image" style={{backgroundImage: `url(${drink.image_url})`}}></div>
                <div className="title">{drink.name}</div>


                <div className="selected-drink">✓</div>
            </div>
        );
        return (AllBeers)
        console.log(AllBeers)


    }

    useEffect(() => {
        fetchDrinks();
    }, []);

    return (
        <div className="drinks">
            <div className="beerList">
                {beer ? Beers(beer) : <div>No drinks found. please try again</div>}
            </div>
            
            <div className="next">
                After you are picked your drinks, click next to order.
                <Link to="/order">
                    <button className="btn">
                        Next
                    </button>
                </Link>
            </div>
          
        </div>
    );
}


const mapStateToProps = (state) => ({
    order: state.main
    
  
    
  })

const mapDispatchToProps = (dispatch) => ({
    setDrink: (payload) => dispatch({ type: "SET_DRINK", payload: payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);



