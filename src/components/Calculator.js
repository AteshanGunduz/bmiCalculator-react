import { useState } from "react"



const Calculator = ({handleValues, value}) => {
const [kg, setKg] = useState(0)
const [height, setHeight] = useState(0)

const handleKg = (e)=>{
    setKg(e.target.value)
    handleValues(kg, height)
}

const handleHeight = (e)=>{
    setHeight(e.target.value)
    handleValues(kg, height)
}


  return (
    <div className="container">
    <div>
        <h2>BMI Calculator</h2>
    </div>
    <div className="quote-container">
       <div>
        <h4>Weigth: {kg}kg</h4>
        <input type="range" max="250" onChange={handleKg} />
       </div>
       <div>
       <h4>Height: {height}cm</h4>
       <input type="range" max="250" onChange={handleHeight}/>
       </div>
       <div className="display-container">
        <h3>BMI</h3>
        <h2>{Math.floor(value * 10) / 10}</h2>
    </div>
    </div>
    
</div>
  )
}
export default Calculator