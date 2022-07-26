import { Products } from "../db/products"
import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom"
import { Pcard } from "./p-card"
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
                {Products.map((product) => (
                    
                    <div key={product._id}>
                        <Pcard {...product} />
                    </div>
                    
                ))}
            </div>
        </div>
    )
}