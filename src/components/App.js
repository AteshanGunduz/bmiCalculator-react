import { useState} from "react"
import Calculator from "./Calculator"


const App = () => {

   const [value, setValue] = useState(0)

   const handleValues = (kg, height)=>{
    const heightInMeters = height / 100
       setValue(kg/(heightInMeters*heightInMeters))
   }
  



  return (
    <div className="bigbox">
     <Calculator handleValues={handleValues} value={value}/>
    </div>
  )
}
export default App