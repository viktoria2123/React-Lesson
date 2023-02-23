import './index.css'

//стили прямо в js
const style = {
    width: '200px',
    color: 'red'
}

const classNew = {
    main: 'list',
    active: 'red'
}

export default function List(props) {
    return <li className={classNew.main}>Hello: {props.name} Age: {props.age}</li>
}





