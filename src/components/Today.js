import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Today = () => {
  const dispatch = useDispatch();

  const { usd, eur, rub, date } = useSelector((state) => state.today);

  async function getTodayCurrency(cur1, cur2) {
    await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur1}/${cur2}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        switch (cur1) {
          case "usd":
            dispatch({ type: "SET_USD", payload: data.uah });
            break;

          case "eur":
            dispatch({ type: "SET_EUR", payload: data.uah });
            break;

          case "rub":
            dispatch({ type: "SET_RUB", payload: data.uah });
            break;

          default:
            break;
        }
      });
  }

  function dateUpdate() {
    setInterval(() => {
      dispatch({ type: "SET_DATE", payload: new Date().toLocaleString() });
    }, 1000);
  }

  useEffect(() => {
    return (
      getTodayCurrency("usd", "uah"),
      getTodayCurrency("eur", "uah"),
      getTodayCurrency("rub", "uah"),
      dateUpdate()
    );
  }, []);

  return (
    <div className="today">
      <p>Today: {date}</p>
      <ul>
        <li>EUR: {eur ? eur.toFixed(1) : ""}</li>
        <li>USD: {usd ? usd.toFixed(1) : ""} </li>
        <li>RUB: {rub ? rub.toFixed(1) : ""} </li>
      </ul>
    </div>
  );
};

export default Today;
