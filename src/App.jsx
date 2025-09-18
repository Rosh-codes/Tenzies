import { useState } from "react"
import Die from "./compnonents/Die"
export default function App(){
  const [values,setValues]=useState(RandomNum())
  function RandomNum(){
    const DieValue = []
    for(let i=0;i<10;i++){
    const randomValues = Math.ceil(Math.random()*6)
    DieValue.push(randomValues)
  }
    return DieValue}
  function RollDie(){
    setValues(RandomNum())
  }
  const AssignValues = values.map((value,index)=>
    <Die key={index} val = {value}/>
  )
  return(
    <main>
      <div className="container">
        {AssignValues}
      </div>
      <button className="RollButton" onClick={RollDie}>Roll Dice</button>
    </main>
  )
}