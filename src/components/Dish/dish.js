import { useEffect, useState } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../Dish/dish.css';
import Drink from '../Drink/Drinks'
import { connect, useSelector } from "react-redux";




const Dish = props => {

  const order = useSelector(state => state.order)

    const [img, setImg] = useState('');
    const [info, setInfo] = useState('');



    const fetchDish =() => {

        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then((result) => {
             return result.json()
              
            })
        .then((dish) => {
            
     const Dish = dish.meals[0];
     
     setImg(Dish.strMealThumb);
     setInfo({
         image:Dish.strMealThumb,
         title: Dish.strMeal,
         category:Dish.strCategory,
         tag:Dish.strTags,
         type:Dish.strArea,
         source:Dish.strSource,
         ingredient:Dish.strIngredient1
     });
        })

      .catch(()=> {
      console.log('ERROR. PLEASE TRY AGAIN')

      });
    }

    useEffect (() => {
        fetchDish();
    }, [] ); //dependency array to prevent infinite re-render



    return (

  <div className="dish-container">     
    <div className="dish-image" style={{backgroundImage:`url(${img})`}}>
     </div>
   
      
            <div className="next">
                <p>After you are picked your dish, click next to select  drink</p>

          
                <Link to="./drinks">
              <button className="btn" >Next</button>
           
              </Link> 

            </div>


            <div className="dish-details"> 
            <div className="dish-title">
                <span>Dish: </span>
                     {info.title} </div>

        <div className="dish-type">
            <span>Type:</span>
                  {info.type} </div>

        <div className="dish-category">
            <span>Category: </span>
                {info.category}</div>

        <div className="dish-tag">
          <span>Tags: </span>
               {info.tag} </div>


        <div className="dish-ingredients">
            <span>Ingredient: </span>
               {info.ingredient} </div>

        <div className="dish-source">
            <span>Source: </span>
               {info.source} </div>


          
    </div>
            


            <div className="generate-dish">
             <button
             className="btn" onClick={fetchDish}>Generate New Dish</button>
            </div>


        </div>
        
    );
}


  
const mapStateToProps = (state) => ({
  order: state.order
});

const mapDispatchToProps = (dispatch) => ({
  setDish: (payload) => dispatch({ type: "SET_DISH", payload: payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dish);
