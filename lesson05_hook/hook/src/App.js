import React from "react";


export default function App() {

  let inputValueVar = React.createRef();
  let textOut = React.createRef();


  function ClickBitton() {
    console.log('test')
  }

  function ClickBittonTwo(en) {
    console.log('test ' + en)
  }

  function inputValue(event) {
    console.log(event.target.value);
    textOut.current.innerHTML = event.target.value
  }

  function outTest() {
    textOut.current.innerHTML = inputValueVar.current.value
  }

  return (
    <>
      <section>
        <h1>Event Click</h1>
        <button onClick={() => ClickBittonTwo(12)}>Test Click</button>
      </section>

      <section>
        <h1>Event doublClick</h1>
        <button onDoubleClick={ClickBitton} onMouseMove={ClickBitton}>Doubl Click</button>
      </section>

      <section>
        <h1>Event Input</h1>
        <input type="text" ref={inputValueVar} defaultValue='inp1' />
        <button onClick={outTest}>Out test</button>
        <p ref={textOut}></p>
      </section>

    </>
  );
}

