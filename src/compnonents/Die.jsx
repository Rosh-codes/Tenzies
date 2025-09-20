
export default function Die(props){
    return(
        <div className="Die">
            <button style={{backgroundColor : props.isClicked ? "green" : null }}>{props.val}</button>
        </div>
    )
}