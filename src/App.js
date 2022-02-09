import './App.css';
import { useState } from 'react';

function App() {

  const [bottles, setBottles] = useState(1);
  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(1);
  const [result, setResult] = useState(0);

  function calculate(e) {
    e.preventDefault();

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = (weight / 10)
    let grams_left = ((grams - (burning * time)))

    let male = document.querySelector('[id="male"]:checked');
    let female = document.querySelector('[id="female"]:checked');
    let result = 0

    if (male) {
      result = (grams_left / (weight * 0.7))
      setResult(result)
    }

    else if (female) {
      result = (grams_left / (weight * 0.6))
      setResult(result)
    }

    if (result < 0) {
      setResult(0)
    }
  }


  return (
    <form id="content">
      <h1>Calculating alcohol blood level</h1>
      <div>
        <label>Weight:</label>
        <input type="number"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
      </div>

      <div>
        <label>Bottles: </label>
        <select value={bottles} onChange={e => setBottles(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div>
        <label>Time:</label>
        <select value={time} onChange={e => setTime(e.target.value)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label>Gender:</label>
        <input type="radio" value="Male" id="male" name='radios' />
        <label for="male">Male</label>
        <input type="radio" value="Female" id="female" name='radios' />
        <label for="female">Female</label>
      </div>

      <output id="output">{result.toFixed(2)}</output>
      <br />
      <button type='button' class="btn btn-primary" onClick={calculate}>Calculate</button>

    </form>
  );
}

export default App;
