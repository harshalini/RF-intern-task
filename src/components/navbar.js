import { NavLink } from "react-router-dom"
import { MdOutlinePerson } from "react-icons/md"
export const Navbar = () => {
    const pages = [
        {
            name: "HOME",
            link: "/"
        },
        {
            name: "THE JOURNEY",
            link: "/journey"
        },
        {
            name: "TEAM",
            link: "/team"
        },
        {
            name: "STORE",
            link: "/store"
        },
        {
            name: "CONTACT",
            link: "/"
        }
    ]
    return (
        <nav className="app-navbar">
            <div>
                <img src="../assets/websitelogo.png" alt="web-logo"
                className="web-logo-img"
                ></img>
            </div>
            <div>
                <ul className="nav-pages">
                    {pages.map(({ name, link }) => (
                        <li>
                            <NavLink to={link} className="page-link">
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="login-div">
                <MdOutlinePerson 
                className="person-logo"
                />
                <span>GAGAN</span>
            </div>
        </nav>
    )
}