import Footer from "./common/footer/Footer"
import Header from "./common/header/Header"

import Button from "./component/Button/Button"
import Cart from "./component/Cart/Cart"

import catImg from './img/cat.jpg'

import './style/main.scss'

function App(){


    
    return (
        <>
            <Header />
           
           <section>
            <h2>dfjsndkfsd</h2>
              <Button className="main__btn" name='Hello Sasha'/>
              <Button />
              <img src={catImg} alt="" />
              <Cart tite='Rick' text='Hello'/>    
           
           </section>
              
            <Footer />
        </> 
     )
}

export default App