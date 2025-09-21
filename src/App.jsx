import { useState,useRef,useEffect} from "react"
import { nanoid } from "nanoid"
import Die from "./compnonents/Die"
import ReactConfetti from "react-confetti"
export default function App(){
  const [values,setValues]=useState(()=>RandomNum())
  const Reference = useRef(null)
  const WinCondition = values.every(dice=>dice.isHeld)
  && values.every(dice=>dice.value === values[0].value)
  useEffect(()=>{
    if(WinCondition){
    Reference.current.focus()}
  },[WinCondition])
  function RandomNum(){
    const DieValue = []
    for(let i=0;i<10;i++){
      const randomValues = {value: Math.ceil(Math.random()*6),isHeld :false,id:nanoid()}
      DieValue.push(randomValues)
    }
    return DieValue}
  function RollDie(){
    setValues(prevValues=>prevValues.map(dice=>dice.isHeld ? dice : {...dice,value: Math.ceil(Math.random()*6)}))
  }
  function hold(id){
    setValues(prevValues=>
      prevValues.map(die=> die.id === id? 
        {...die,isHeld:!die.isHeld}:die)
      )
  }
  const AssignValues = values.map((dice)=>
    <Die key={dice.id} val = {dice.value} isHeld = {dice.isHeld} hold = {hold} id={dice.id}/>
  )
   
  return(
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice show the same number. Click each die to hold its value between rolls.
      </p>

      <div className="container">
        {AssignValues}
      </div>
      <button ref={Reference}
       style={{backgroundColor : WinCondition ? "#2ecc71" : null}} 
      className="RollButton" onClick={WinCondition ? ()=>setValues(RandomNum()) : RollDie }>
        { WinCondition ? "New Game":"Roll Dice"} 
        </button>
     {WinCondition? <ReactConfetti/>: null}
    </main>
  )
}