
export default function Die(props){
    return(
        <div className="Die">
            <button onClick={()=>props.hold(props.id)} style={{backgroundColor : props.isHeld ? "green" : null }}>{props.val}</button>
        </div>
    )
}