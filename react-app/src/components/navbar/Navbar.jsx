import "./index.css"

const Navbar = () => {
    const navbarItems = [{
        id: 1,
        name: "Home",
        url: "/"
    }, {
        id: 2,
        name: "About",
        url: "/"
    }, {
        id: 3,
        name: "List",
        url: "/"
    }]


    return (
        <div className="Navbar">
            <ul className="navbar__list">
                {navbarItems.map((element) => (
                    <li className="navbar__item" key={element.id}>
                        <a href={element.url}>{element.name}</a>
                    </li> 
                ))}
            </ul>
        </div>
    )
}

export default Navbar