
import React, { useState } from "react";

export default function App() {

    let inputValueVar1 = React.createRef();
    let inputValueVar2 = React.createRef();
    let textOut2 = React.createRef();
    let inputText = React.createRef();

    let massive = [
        {
            name: "Sasha 0",
            age: 22
        },
        {
            name: "Sasha 1",
            age: 10
        },
        {
            name: "Sasha 2",
            age: 30
        },
        {
            name: "Sasha 3",
            age: 8
        },
    ]

    let [cout, setCount] = useState();
    let [cout2, setCount2] = useState();

    function sumNumbers() {
        const operator = document.getElementById('operator-select').value;
        const var1 = Number(inputValueVar1.current.value);
        const var2 = Number(inputValueVar2.current.value);
        let result;

        if (operator === '+') {
            result = var1 + var2;
        } else if (operator === '-') {
            result = var1 - var2;
        } else if (operator === '*') {
            result = var1 * var2;
        } else if (operator === '/') {
            result = var1 / var2;
        }

        textOut2.current.innerHTML = result;
        inputValueVar1.current.value = '';
        inputValueVar2.current.value = '';
    }

    function showUsers() {
        let newUs = massive.map((item, index) => <li key={index}>Hello, {item.name} :) | Your age is {item.age}</li>)
        setCount(newUs)
    }
    function clear() {
        let newUs2 = ""
        setCount(newUs2)
        setCount2(newUs2)

    }
    function over18() {
        const newObjIf = massive.map(item => (
            // && - это if
            item.age > 18 && (
                <li key={item.id}>
                    Hello: {item.name} <br />
                    Age: {item.age}
                </li>)
        )
        )
        setCount2(newObjIf)
    }
    return (
        <>

            <main>
                <section>
                    <h1>Math</h1>
                    <input type="text" ref={inputValueVar1} />
                    <select class="sel" name="" id="operator-select">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">x</option>
                        <option value="/">/</option>
                    </select>
                    <input type="text" ref={inputValueVar2} />
                    <button onClick={sumNumbers}>Res</button>
                    <p ref={textOut2}></p>
                </section>



                <section>
                    <h2>Use state: Show users</h2>
                    <button onClick={showUsers}>Show User</button>
                    <button onClick={clear}>Clear</button>
                    <h3>{cout}</h3>
                </section>

                <section>
                    <h2>Over 18 years</h2>
                    <button onClick={over18}>Show User over 18</button>
                    <button onClick={clear}>Clear</button>
                    <h3>{cout2}</h3>
                </section>

            </main>
        </>
    );
}

