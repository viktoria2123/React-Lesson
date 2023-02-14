import Header from "./common/header/Header"
import Footer from "./common/footer/Footer"

import Button from "./component/Button/Button"
import Cart from "./component/Cart/Cart"
import dogImg from './img/dog.jpg'

import './style/main.scss'

function App() {

    // const arr = [
    //     {
    //         name: "Sasha",
    //         age: "22"
    //     },
    //     {
    //         name: "Vika",
    //         age: "32"
    //     },
    //     {
    //         name: "Yra",
    //         age: "42"
    //     },
    // ]
    return (
        <>
            <Header />
            <section className="main">
                <h2>
                    Hello everybody
                </h2>
                <Button className='main__btn' name='Go' />
                <Button />
                <img src={dogImg} alt="" />

                {/* {arr.map((item) => (<p>{item.name}</p>))} */}
                
                <div className="rick">
                    <Cart title='Rick' text='Hello' />
                    <Cart title='Morty' text='Hello' />
                    <Cart title='Aga' text='Hello' />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default App