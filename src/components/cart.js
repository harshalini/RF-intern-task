import { FiShoppingBag } from "react-icons/fi"
export const Cart = () => {
    return (
        <div className="cart-div">
            <div className="product-nav">
                <h2>CART</h2>
                <FiShoppingBag className="product-icon" />
            </div>
            <p>WHat's stopping you, designer?</p>
        </div>
    )
}