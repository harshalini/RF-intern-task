import { Navbar } from "../components"
export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="ratings">
                <div className="empty-stars"></div>
                <div className="full-stars" style={{width:"90%"}}></div>
            </div>
        </div>
    )
}