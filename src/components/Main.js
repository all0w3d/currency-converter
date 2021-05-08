import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const dispatch = useDispatch();

  const { cur1, cur1Value, cur2, input, result, cur11, cur22 } = useSelector(
    (state) => state.main
  );

  async function getCurrnecy1(cur) {
    dispatch({ type: "CHANGE_CUR1", payload: cur });
    const responce = fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur}/usd.json`
    );
    await responce
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_CURRENCY1", payload: data.usd }));
  }

  async function getCurrnecy2(cur) {
    dispatch({ type: "CHANGE_CUR2", payload: cur });
    const responce = fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur}/usd.json`
    );
    await responce
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_CURRENCY2", payload: data.usd }));
  }

  function updateInput(val) {
    dispatch({ type: "SET_INPUT", payload: val });
    dispatch({ type: "SET_CUR1VALUE", payload: val });
  }

  function getResult() {
    dispatch({ type: "SET_RESULT", payload: (input * cur1) / cur2 });
  }

  function reset() {
    dispatch({ type: "DEF_STATE" });
  }

  return (
    <div className="main">
      <div className="input">
        <input
          type="number"
          value={cur1Value}
          onChange={(e) => updateInput(e.target.value)}
        />

        <select value={cur11} onChange={(e) => getCurrnecy1(e.target.value)}>
          <option value="usd">usd</option>
          <option value="eur">eur</option>
          <option value="rub">rus rub</option>
          <option value="uah">uah</option>
          <option value="btc">Bitcoin </option>
          <option value="byr">Bel rub</option>
        </select>

        <div className="to">Convert to</div>

        <select value={cur22} onChange={(e) => getCurrnecy2(e.target.value)}>
          <option value="usd">usd</option>
          <option value="eur">eur</option>
          <option value="rub">rus rub</option>
          <option value="uah">uah</option>
          <option value="btc">Bitcoin </option>
          <option value="byr">Bel rub</option>
        </select>
      </div>
      <div className="result">
        <div className="buttons">
          <button onClick={() => getResult()} className="result">
            Show result
          </button>
          <button onClick={() => reset()} className="result">
            Reset all
          </button>
        </div>
        <div className="result-inner">{result ? result.toFixed(2) : ""}</div>
      </div>
    </div>
  );
};

export default Main;
