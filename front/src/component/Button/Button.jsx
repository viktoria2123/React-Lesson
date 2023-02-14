import './button.css'

function Button(props) {
    return(
        <button className={`button ${props.className || ``}`}>{props.text || 'Start'}</button>
    )
}

export default Button