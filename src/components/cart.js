import { FiShoppingBag } from "react-icons/fi"
import { useCart } from "../context/cart-context"
import { MdOutlineClose } from "react-icons/md"
import { IoMdCloseCircleOutline } from "react-icons/io"
export const Cart = () => {
    const { cartState: { cart }, cartDispatch } = useCart();
    return (
        <div className="cart-div">
            <div className="product-nav">
                <h2>CART</h2>
                <FiShoppingBag className="product-icon" />
            </div>
            {cart?.length === 0? <div className="empty-cart">What's stopping you, designer?</div>:
            <div>
                {cart.map((p) => (
                    <div className="cart-flex" key={p._id}>
                        <IoMdCloseCircleOutline className="cross-btn"
                        onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", payload: p })}
                        />
                        <img src={`../.${p.productImg}`} className="product-img design-img"/>
                        <div className="product-info">
                            <span>{p.productName}</span>
                            <span>By KICKUPS and you</span>
                            <span>Rs. {p.cost}/-</span>
                        </div>
                    </div>
                ))}
            </div>
            }     
        </div>
    )
}