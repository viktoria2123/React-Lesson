import './button.css'

function Button(props) {
    return (
        // <button className="button">
        //     {props.name || 'Start'}  
        //     {/* дефолтно будет Start 
        //     props.name это текст кнопки, который задаем в App.jsx */}
        // </button>


        // Добавляем класс через props
        <button className={`button ${props.className || ''}`}>{props.name || 'Start'}  
            {/* дефолтно будет Start 
            props.name это текст кнопки, который задаем в App.jsx
            props.className это класс кнопки, который задаем в App.jsx */}
        </button>
    )
}

export default Button