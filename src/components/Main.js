import React, { useState } from "react";

const Main = () => {
  const [cur1, setCur1] = useState("1");
  const [cur1Value, setCur1Value] = useState("");
  const [cur2, setCur2] = useState("1");
  const [input, setInput] = useState();
  const [result, setResult] = useState();
  const [def, setDef] = useState(true);

  async function getCurrnecy1(cur) {
    setDef(false);
    const responce = fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur}/usd.json`
    );
    await responce.then((res) => res.json()).then((data) => setCur1(data.usd));
  }

  async function getCurrnecy2(cur) {
    setDef(false);
    const responce = fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur}/usd.json`
    );
    await responce.then((res) => res.json()).then((data) => setCur2(data.usd));
  }

  function updateInput(val) {
    setInput(val);
    setCur1Value(val);
  }

  function getResult() {
    setResult((input * cur1) / cur2);
  }

  function reset() {
    setResult("");
    setInput("");
    setCur1Value("");
    setDef(true);
  }

  return (
    <div className="main">
      <div className="input">
        <input
          type="number"
          value={cur1Value}
          onChange={(e) => updateInput(e.target.value)}
        />

        <select onChange={(e) => getCurrnecy1(e.target.value)}>
          <option selected={def} value="usd">
            usd
          </option>
          <option value="eur">eur</option>
          <option value="rub">rus rub</option>
          <option value="uah">uah</option>
          <option value="btc">Bitcoin </option>
          <option value="byr">Bel rub</option>
        </select>

        <div className="to">Convert to</div>

        <select onChange={(e) => getCurrnecy2(e.target.value)}>
          <option selected={def} value="usd">
            usd
          </option>
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
