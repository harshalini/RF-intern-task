import { useParams } from "react-router-dom"
import { Products } from "../db/products";
import { Cart, Navbar } from "../components";
import { MdExpandLess } from "react-icons/md"
import { useCart } from "../context/cart-context";
export const SingleProduct = () => {
    const { productID } = useParams();
    function getProductDetails(products, productID) {
        return products.find((product) => product._id === productID);
    }
    const foundProduct = getProductDetails(Products, productID);
    const { productName, productImg, rating, reviews, cost } = foundProduct || {};

    const { cartDispatch } = useCart();

    const customAngle = ["Front", "Middle", "Back", "Sole"]
    const designImg = ["../../assets/black-img.jpg", "../../assets/blue-img.jpg", "../../assets/white-img.jpg"]
    const size = ["../../assets/size7.jpg", "../../assets/size8.jpg", "../../assets/size9.png", "../../assets/size10.png"]
    return (
        <div>
            <Navbar />
            <div className="store-div-flex">
                <div className="product-box design-space">
                    <div className="single-product-heading">
                        <MdExpandLess className="less-icon" />
                        <span>your design space</span>
                    </div>
                    <div className="design-flex">
                        <div className="single-product">
                            <img src={`../.${productImg}`} className="product-img" alt="image" />
                            <div className="rate-div">
                                <span>Rate product</span>
                                <div className="ratings">
                                    <div className="empty-stars"></div>
                                </div>
                            </div>
                        </div>
                        <div className="design-grid">
                            <div><img src={`../.${productImg}`} className="product-img design-img" alt="image" /></div>
                            <div className="product-info">
                                <span className="single-prod-name">{productName}</span>
                                <span>By KICKUPS and you</span>
                                <div className="ratings">
                                    <div className="empty-stars"></div>
                                    <div className="full-stars" style={{ width: `${rating}%` }}></div>
                                </div>
                                <span>{reviews} reviews</span>
                                <span>Rs. {cost}/-</span>
                                <small>Get an offer</small>
                            </div>
                            <div><img src={`../.${productImg}`} className="product-img design-img" alt="image" /></div>
                            <div className="custom-column">
                                {customAngle.map((item) => (
                                    <div className="wrapper">
                                        <span>{item}</span>
                                        <div class="container">
                                            {designImg.map((image) => (
                                                <label class="option_item">
                                                    <input type="checkbox" class="checkbox" />
                                                    <div class="option_inner">
                                                        <div class="tickmark"></div>
                                                        <img src={image} className="product-img small-img" alt="image" />
                                                    </div>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className="wrapper">
                                    <span>Size</span>
                                    <div class="container">
                                        {size.map((image) => (
                                            <label class="option_item">
                                                <input type="checkbox" class="checkbox" />
                                                <div class="option_inner">
                                                    <div class="tickmark"></div>
                                                    <img src={image} className="product-img small-img" alt="image" />
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div><img src={`../.${productImg}`} className="product-img design-img" alt="image" /></div>
                        </div>
                    </div>
                    <div className="product-actions">
                        <button className="btn share-btn">Share design</button>
                    <button
                        className="btn addCart-btn"
                        onClick={() => {
                            cartDispatch({ type: "ADD_TO_CART", payload: foundProduct })
                        }}>
                        Add to cart
                    </button>
                    </div>
                </div>
                <div className="product-box cart-box">
                    <Cart />
                </div>
            </div>
        </div>
    )
}