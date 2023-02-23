import {Users} from "./data/Users"
import List from "./component/list/List"

export default function App() {

    //console.log(Users)
    //Obj
    // const Users = [
    //     {
    //         id: 1,
    //         name: 'Yra',
    //         age: 30
    //     },
    //     {
    //         id: 2,
    //         name: 'Alya',
    //         age: 4
    //     },
    //     {
    //         id: 3,
    //         name: 'Vika',
    //         age: 25
    //     },
    //     {
    //         id: 4,
    //         name: 'Sasha',
    //         age: 15
    //     },

    // ]

    //let user = true;

    const newObj = Users.map(item => (
        <li key={item.id}>
            Hello: {item.name} <br />
            Age: {item.age}
        </li>)
    )

    //делаем вывод тех, кому больше 18 лет только с if
    const newObjIf = Users.map(item => (
        // && - это if
        item.age > 18 && (
            <li key={item.id}>
                Hello: {item.name} <br />
                Age: {item.age}
            </li>)
    )
    )


    //делаем вывод тех, кому больше 18 лет с if else
    const newObjIfElse = Users.map(item => (
        // : - это else
        // if {<li>Aprove: {item.name} Age: {item.age}</li>} else {<li>Error: {item.name} Age: {item.age}</li>}
        item.age > 18 ? <li className='list'>Aprove: {item.name} Age: {item.age}</li> : <li className='list'>Error: {item.name} Age: {item.age}</li>
    )
    )

    //делаем вывод через List
    const newObjList = Users.map(item => (
        <List key={item.id} name={item.name} age={item.age} />
        
    )
    )

    //делаем вывод через List кому больше 18 лет с if else
    const newObjListIfElse = Users.map(item => (
        item.age > 18 ? <List key={item.id} name={item.name} age={item.age} /> : <List key={item.id} name={item.name} age={item.age} />
        
    )
    )

    //Array
    const arr = ['Yra', 'Vika', 'Alya', 'Sasha']
    // Для правильного метода вывода создаем новую зминну,
    // делаем перебор map и далее вызываем новую зминну (26 стр)
    const newArr = arr.map(item => <li className='list' key={item}>{item}</li>)
    return (
        // {/* Ищем по индексу, но так никто не делает уже */}
        // <ul>
        //     {/* <li>{arr[0]}</li>
        //     <li>{arr[1]}</li>
        //     <li>{arr[2]}</li> */}
        // </ul>

        // Второй способ вывести, но тоже не юзается
        // <ul>
        //     {
        //         arr.map(item => (
        //             <li>{item}</li>
        //         ))
        //     }
        // </ul>

        <ul>
            Array:  {newArr}
            <br />
            <br />
            Obj in Arr: {newObj}
            <br />
            <br />
            Obj in Arr if меньше 18 years: {newObjIf}
            <br />
            <br />
            Obj in Arr if else меньше 18 years: {newObjIfElse}
            <br />
            <br />
            Вызываем component List 
            <List/>
            {newObjList}
            <br />
            <br />
            Вызываем component List кому больше 18 лет с if else
            {newObjListIfElse}
        </ul>
    )
}