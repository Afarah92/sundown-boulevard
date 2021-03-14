import {
  useEffect,
  useState
} from 'react';
import {
  Link,
  Route,
  Switch
} from 'react-router-dom';
import './drinks.css';
import Order from '../Order/Order';
import {
  connect,
  useSelector
} from "react-redux";


const Drinks = (props) => {

  const [beer, setBeer] = useState('');
  const [selectedDrinks, setSelectedDrinks] = useState([]);
  const {
    setDrink
  } = props;





  const fetchDrinks = () => {
    fetch(`https://api.punkapi.com/v2/beers`)
      .then((res) => {
        return res.json()
      })
      .then((drinks) => {
        setBeer(drinks);
      })
      .catch(function () {});
  }

  const selectedDrink = (id) => {
    if (selectedDrinks.includes(id)) {
      setDrink(arr => arr.filter(item => item !== id));
    } else {
      setDrink(arr => [...arr, id]);



    }
  }
  const handleChoise = item => {
    const target = selectedDrinks.indexOf(item);
    const newArrey = [...selectedDrinks];
    newArrey.splice(target, 1);
    setSelectedDrinks(target === -1 ? [...selectedDrinks, item] : newArrey);

    console.log(selectedDrinks);
    props.history.push('/order')




  }


  const Beers = (beerList) => {
    const AllBeers = beerList.map((drink) =>
      <
      div key = {
        drink.id
      }
      className = {
        `drink ${selectedDrinks.includes(drink.name) ? 'tick' : ''}`
      }
      onClick = {
        () => handleChoise(drink.name)
      } >
      <
      div className = "image"
      style = {
        {
          backgroundImage: `url(${drink.image_url})`
        }
      } > < /div> <
      div className = "title" > {
        drink.name
      } < /div>


      <
      div className = "selected-drink" > ✓ < /div> < /
      div >
    );
    return (AllBeers)

  }

  useEffect(() => {
    fetchDrinks();
  }, []);

  return ( <
    div className = "drinks" >
    <
    div className = "beerList" > {
      beer ? Beers(beer) :
        <
        div > < /div>
    } <
    /div> <
    div className = "next" >
    After you are picked your drinks, click next to order. <
    button className = "btn"
    onClick = {
      handleChoise
    } >
    Next <
    /button> < /
    div >

    <
    /div>
  );
}


const mapStateToProps = (state) => ({
  order: state.drinks



})

const mapDispatchToProps = (dispatch) => ({
  setDrink: (payload) => dispatch({
    type: "SET_DRINK",
    payload: payload
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drinks);