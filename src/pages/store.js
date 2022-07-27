import { Navbar } from "../components"
import { CostFilter, TypeFilter, ProductCard, Cart, ColorFilter } from "../components"
import { FiFilter } from "react-icons/fi"
export const Store = () => {
    return (
        <div>
            <Navbar />
            <div className="store-div-flex">
                <div className="product-box filter-box">
                    <div className="product-nav">
                        <h2>FILTERS</h2>
                        <FiFilter className="product-icon" />
                    </div>
                    <div className="product-filters">
                        <CostFilter />
                        <ColorFilter />
                        <TypeFilter />
                    </div>
                </div>
                <ProductCard />
                <div className="product-box cart-box">
                    <Cart />
                </div>
            </div>
        </div>
    )
}