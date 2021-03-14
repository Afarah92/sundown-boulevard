import {
  useEffect,
  useState
} from "react";
import {
  Link
} from "react-router-dom";
import "../Order/order.css";
import {
  DateTimePickerComponent
} from "@syncfusion/ej2-react-calendars";
import {
  connect,
  useSelector
} from "react-redux";

const Order = (props) => {
  const order = useSelector((state) => state.order);

  const disableDate = (args) => {
    if (args.date.getDay() === 0 || args.date.getDay() === 6) {
      args.isDisabled = true;
    }
  };

  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");

  const handlerDate = (e) => setDate(e.target.value);
  const handlerAmount = (e) => setAmount(e.target.value);
  const handlerEmail = (e) => {
    return setEmail(e.target.value);
  };
  const handlerSubmit = (e) => {
    const params = {
      date,
      amount,
      email,
    };
    props.setDetails(params);
    props.history.push("/receipt");
  };

  return ( <
    div className = "order-container" >
    <
    div className = "order-heading" >
    <
    h2 > Please fill in the details below < /h2>{" "} <
    /div>{" "} <
    div className = "flex" >
    <
    div className = "date-box" >
    <
    p > Pick time and date < /p>{" "} <
    DateTimePickerComponent placeholder = "Choose a date and time"
    format = "dd-MMM-yy HH:mm"
    min = {
      new Date()
    }
    renderDayCell = {
      disableDate
    }
    onChange = {
      handlerDate
    } >
    < /DateTimePickerComponent>{" "} <
    /div>{" "} <
    div className = "amount-input" >
    <
    p > Select Amount of people < /p>{" "} <
    input type = "number"
    min = "1"
    max = "10"
    onChange = {
      handlerAmount
    } >
    < /input>{" "} <
    /div>{" "} <
    /div>{" "} <
    div className = "flex" >
    <
    div className = "email-input" >
    <
    input type = "email"
    name = "email"
    id = "email"
    onChange = {
      handlerEmail
    } > {
      " "
    } <
    /input>{" "} <
    p > Enter email < /p>{" "} <
    /div>{" "} <
    /div> <
    div className = "next" >
    <
    button className = "btn"
    onClick = {
      handlerSubmit
    } > {
      " "
    }
    Order {
      " "
    } <
    /button>{" "} <
    /div> <
    /div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = (dispatch) => ({
  setDetails: (payload) =>
    dispatch({
      type: "SET_DETAILS",
      payload: payload,
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);