import { useState } from "react"
import { nanoid } from "nanoid"
import Die from "./compnonents/Die"
export default function App(){
  function RandomNum(){
    const DieValue = []
    for(let i=0;i<10;i++){
      const randomValues = {value: Math.ceil(Math.random()*6),isClicked :false,id:nanoid()}
      DieValue.push(randomValues)
    }
    return DieValue}
    const [values,setValues]=useState(RandomNum())
  function RollDie(){
    setValues(RandomNum())
  }
  const AssignValues = values.map((dice)=>
    <Die key={dice.id} val = {dice.value} isClicked = {dice.isClicked}/>
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