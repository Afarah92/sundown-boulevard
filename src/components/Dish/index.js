import {
  useEffect
} from 'react';
import {
  Link
} from 'react-router-dom';
import '../Dish/dish.css';
import {
  connect
} from "react-redux";



const Dish = (props) => {
  const {
    setDish
  } = props;

  const fetchDish = () => {

    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((result) => {
        return result.json()
      })
      .then((dish) => {
        const Dish = dish.meals[0];

        setDish({
          image: Dish.strMealThumb,
          title: Dish.strMeal,
          category: Dish.strCategory,
          tag: Dish.strTags,
          type: Dish.strArea,
          ingredient: Dish.strIngredient1,
          source: Dish.strSource,
        });
      })

      .catch(() => {
        console.log('ERROR. PLEASE TRY AGAIN')

      });
  }

  useEffect(() => {
    fetchDish();
  }, []); //dependency array to prevent infinite re-render



  return (

    <
    div className = "dish-container" >
    <
    div className = "dish-image"
    style = {
      {
        backgroundImage: `url(${props.order.image})`
      }
    } >
    <
    /div>


    <
    div className = "next" >
    <
    p > After you are picked your dish, click next to select drink < /p>


    <
    Link to = "./drinks" >
    <
    button className = "btn" > Next < /button>

    <
    /Link>

    <
    /div>


    <
    div className = "dish-details" >
    <
    div className = "dish-title" >
    <
    span > Dish: < /span> {
      props.order.title
    }


    <
    /div>

    <
    div className = "dish-type" >
    <
    span > Type: < /span> {
      props.order.type
    }

    <
    /div>

    <
    div className = "dish-category" >
    <
    span > Category: < /span> {
      props.order.category
    }


    <
    /div>



    <
    div className = "dish-ingredients" >
    <
    span > Ingredient: < /span> {
      props.order.ingredient
    }

    <
    /div>

    <
    div className = "dish-source" >
    <
    span > Source: < /span> {
      props.order.source
    }

    <
    /div>



    <
    /div>

    <
    div className = "generate-dish" >
    <
    button className = "btn"
    onClick = {
      fetchDish
    } > Generate New Dish < /button> <
    /div>


    <
    /div>

  );
}


const mapStateToProps = ({
  order
}) => ({
  order
})


const mapDispatchToProps = (dispatch) => ({
  setDish: (payload) => dispatch({
    type: "SET_DISH",
    payload: payload
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Dish);