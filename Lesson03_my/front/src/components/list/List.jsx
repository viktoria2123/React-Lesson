import './index.css'



export default function List(props) {
    // return <li className='list'>Hello: {props.name} Desc: {props.description} {props.img}</li>
    return(
        <div className="box">
            <h2> Hello, {props.name}</h2>
            <p>Desc {props.description}</p>
            <img src={props.img} alt="" />
        </div>
    )
}