import React, { useState } from "react"

export default function UseTest() {

    let users = ['Sasha', 'olia', 'sveta']

    let inputText = React.createRef();

    const [cout, setCount] = useState(2);

    function showUsers() {
        let newUs = users.map((item, index) => <li key={index}>{item}</li>)
        setCount(newUs)
    }

    function hendler() {
        let curentCoubt = cout;
        curentCoubt++
        setCount(curentCoubt)
    }
    function showInput() {
        //innerHTML += value
        let ar = inputText.current.value
        setCount(ar)
        //innerHTML = value
    }
    return (
        <>
            <section>
                <h2>Use state</h2>
                <input ref={inputText} type="text" />
                <button onClick={hendler}>+</button>
                <button onClick={showInput}>Show</button>
                <button onClick={showUsers}>Show User</button>
                <h3>{cout}</h3>
            </section>
        </>
    )
}