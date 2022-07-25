import { Products } from "../db/products"
import { AiOutlineSearch } from "react-icons/ai"
export const ProductCard = () => {
    return (
        <div className="product-box">
            <div className="product-nav">
                <h2>SHOES</h2>
                <div className="product-functions">
                    <AiOutlineSearch className="product-icon" />
                    <button className="sort-btn">Sort by</button>
                </div>
            </div>
            <div className="products-grid">
                {Products.map(({ productName, productImg, cost, rating }) => (
                    <div className="product-card">
                        <img src={productImg} className="product-img" />
                        <span className="product-name">{productName}</span>
                        <div className="product-stats">
                            <span>Rs. {cost}</span>
                            <div className="ratings">
                                <div className="empty-stars"></div>
                                <div className="full-stars" style={{ width: `${rating}%` }}></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}