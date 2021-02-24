import { useEffect, useState } from 'react';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import '../Order/order.css';
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { isSunday } from 'date-fns';





function Order() {


   const disableDate = (args)=>{
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
        args.isDisabled = true;
    }
}



    return (
        <div className="order-container">
          <div className="order-heading">
              <h2>Please fill in the details below</h2> 
                </div>

          

<div className="flex">
<div className="date-box">

<p>Pick time and date</p>               
 

<DateTimePickerComponent placeholder="Choose a date and time" 
format="dd-MMM-yy HH:mm"
min={new Date()}
renderDayCell={disableDate}


>

</DateTimePickerComponent>

</div>


<div className="amount-input">
      <p>Select Amount of people </p>             
      <input type="number" min="1" max="10"> 
</input>


</div>


</div>

<div className="flex">
    
<div className="email-input">
<input type="email" name="email" id="email"></input>

       <p>Enter email  </p>             
          
</div>




</div>

<div className="next">
    <Link to="Receipt">
    <button className="btn">Order</button>
    </Link>
</div>








         
    

      

        </div>
    )
}

export default Order
