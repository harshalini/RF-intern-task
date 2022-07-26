import { Routes, Route } from "react-router-dom"
import { Home, Journey, Store, SingleProduct } from "../pages"

export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="store" element={<Store />} />
            <Route path="single-product/:productID" element={<SingleProduct />} />
        </Routes>
    )
}