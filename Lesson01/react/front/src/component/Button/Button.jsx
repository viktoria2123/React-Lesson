import './button.css'

function Button(props) {
    return(
        <button className={`button ${props.className || ''}`}>{props.name || "Start"}</button>
    )
}

export default Button