import { Routes, Route } from "react-router-dom"
import { Home, Journey } from "../pages"
export const AppRouter = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
        </Routes>
    )
}