import './App.css';
import { useState } from 'react';

import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
} from "recharts";

const App = () => {
  const [country, setCountry] = useState("");
  const [population, setPopulation] = useState(0);
  const [data, setData] = useState([{ country: "Facebook", population: 2000 }]);
  
  const changeHandle1 = (event)=>{
    setCountry(event.target.value);
  }
  const changeHandle2 = (event)=>{
    setPopulation(event.target.value);
  }
  // let data = [
  //   { country: "Facebook", population: 2000000000 },
  //   { country: "Instagram", population: 1500000000 },
    
  // ];

  console.log(data);
  const handleSubmit = (event)=>{
    event.preventDefault();
    let pop = parseInt(population)
    let myobj={
        country:country,
        population:pop
      }
    event.preventDefault()
      // console.log(myobj)
      setData([...data,myobj]);
      console.log(data);
}
  

  return (
    <>
    <div style={{ textAlign: "center" }}>
      <form > 
        <label htmlFor="fname">Country</label><br/>
        <input type="text" onChange={changeHandle1} value={country} id="country" name="fname" /><br/>
        <label htmlFor="lname">Population</label><br/>
        <input type="text" onChange={changeHandle2} value={population} id="pop" name="lname" /><br/><br/>
        <input type="submit" onClick={handleSubmit} value="Submit"/>
        </form> 
    </div>
    <div style={{ textAlign: "center" }}>
      <h1>Countries</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="population"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        
          <Tooltip />
          <Legend />
      </div>
    </div>
    </>
  );
};

export default App;
