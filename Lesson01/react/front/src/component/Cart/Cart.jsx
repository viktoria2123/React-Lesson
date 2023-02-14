import './Cart.css'
function Cart(props) {
    return (
        <div className="cart">
           <h1 className="cart__title">{props.tite}</h1> 
           <p className="cart__text">{props.text}</p>
        </div>
    )
}

export default Cart
