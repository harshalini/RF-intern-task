import { Products } from "../db/products"
import { AiOutlineSearch } from "react-icons/ai"
import { Pcard } from "./p-card"
import { GetColor, GetCost, GetType } from "../utils/filter-utils"
export const ProductCard = () => {
    const compose = (...getNoteCard) => (note) => getNoteCard.reduce((data, getNoteCard) => getNoteCard(data), note);
    const filteredProducts = compose(GetColor, GetType)(Products)
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
                {filteredProducts.map((product) => (
                    <div key={product._id}>
                        <Pcard {...product} />
                    </div>
                    
                ))}
            </div>
        </div>
    )
}