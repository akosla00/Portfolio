import React from "react";

const Navbar = (props) => {
    const { setPage } = props;

    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e59500", height: "100px" }}>
            <div className="container-fluid" style={{ fontSize: "30px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <a className="navbar-brand" href="#" style={{ fontSize: "25px", width: "70%" }}>Alec Kosla</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" onClick={() => setPage("portfolio")}>Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => setPage("about")} >About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={() => setPage("contact")}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-disabled="true" onClick={() => setPage("resume")}>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
