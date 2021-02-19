import { useEffect, useState, Fragment } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../Dish/dish.css';
import Drink from '../Drink/Drinks'

const Dish = function () {

    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [tag, setTag] = useState('');
    const [source, setSource] = useState('');
    const [type, setType] = useState('');
    const [ingredient, setIngredient] = useState('');

    const fetchDish = function()  {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then( function(result) {
             return result.json()
              
            })
        .then(function(dish) {
            

     const Dish = dish.meals[0];
     setImg(Dish.strMealThumb);
     setTitle(Dish.strMeal);
     setCategory(Dish.strCategory);
     setTag(Dish.strTags);
     setSource(Dish.strSource)
     setType(Dish.strArea)
     setIngredient(Dish.strIngredient1 )


        })

        
        .catch(function () {
            console.log('ERROR. PLEASE TRY AGAIN')


        });

    }

    useEffect ( function() {
        fetchDish();
    }, [] ); //dependency array to prevent infinite re-render

    



    return (

        <div className="dish-container">

            
  <div className="dish-image" style={{backgroundImage:`url(${img})`}}>
     </div>
   
      
            <div className="next">
                <p>After you are picked your dish, click next to select  drink</p>

          
                <Link to="./Drinks">
              <button className="btn" >Next</button>
           
              </Link> 


            
             


 
         
            </div>



            <div className="dish-details"> 
            <div className="dish-title">
                <span>Dish: </span>
                     {title} </div>

        <div className="dish-type">
            <span>Type:</span>
                  {type} </div>

        <div class="dish-category">
            <span>Category: </span>
                {category}</div>

        <div className="dish-tag">
          <span>Tags: </span>
               {tag} </div>

        <div className="dish-ingredients">
            <span>Ingredient: </span>
                 {ingredient} </div>

        <div className="dish-source">
            <span>Source: </span>
                 {source} </div>


       
 
 


            
    </div>
            


            <div className="generate-dish">
                <button className="btn" onClick={fetchDish}>Generate New Dish</button>
            </div>

            









        </div>
        
    );
}

export default Dish;
