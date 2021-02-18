import { useEffect, useState, Fragment } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../Dish/dish.css';

const Dish = function () {

    const [img, setImg] = useState('');
    const [Info, setInfo] = useState('');


    const fetchDish = function()  {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then( function(result) {
             return result.json()
              
            })
        .then(function(dish) {
            console.log(dish)

          const Dish = dish.meals[0];
          setImg(Dish.strMealThumb);

        setInfo({
            category: Dish.strCategory,
            id: Dish.idMeal,
            title: Dish.strMeal,
            area: Dish.strArea,
            ingredient: Dish.strIngredient1,
            tags: Dish.strTags,
            Source:Dish.strSource,


    
        });        

        




        })

        
        .catch(function () {


        });
    }

    useEffect ( function() {
        fetchDish();
        console.log('fetchDish ran')
    }, );

    const mealInfomation = function  (meal) {
        return (
            <div className="detail-container">

              

                
             

            </div>
        )

    }



    return (

        <div className="dish">

            
        
  <div className="dish-image" style={{backgroundImage:`url(${img})`}}>
      
            </div>
            
            <div className="next">
                <p>After you are picked your dish, click next to select  drink</p>

                <button className="btn" >Next</button>
           

        
 
         
            </div>



            <div className="dish-details"> 
            
            {mealInfomation}
            </div>
            


            <div className="generate-dish">
                <button className="btn" onClick={fetchDish}>Generate New Dish</button>
            </div>

            









        </div>
        
    );
}

export default Dish;
