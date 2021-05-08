import React, { useState } from "react";

const Today = () => {
  const [usd, setUsd] = useState();
  const [eur, setEur] = useState();
  const [rub, setRub] = useState();
  const [date, setDate] = useState(new Date().toLocaleString());

  async function getTodayCurrency(cur1, cur2) {
    const responce = fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur1}/${cur2}.json`
    );

    await responce
      .then((res) => res.json())
      .then((data) => {
        if (cur1 === "usd") {
          setUsd(data.uah);
        }
        if (cur1 === "eur") {
          setEur(data.uah);
        }
        if (cur1 === "rub") {
          setRub(data.uah);
        }
      });
  }

  function dateUpdate() {
    setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);
  }

  getTodayCurrency("usd", "uah");
  getTodayCurrency("eur", "uah");
  getTodayCurrency("rub", "uah");
  dateUpdate();

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
