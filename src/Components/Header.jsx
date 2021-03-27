import React from "react";
import "./Header.css";

const Header = ({isBlack}) => {
    return(
        <div className={isBlack ? "black-header noselect" : "header noselect"}>
            <div className="logo-nav">
                <div className="logo">
                    <p className="ani">ANI</p><p class="flix">FLIX</p>
                </div>
                <div className="nav">
                    <p className="nav-home selected">Home</p>
                    <p className="nav-animes"> Animes</p>
                    <p className="nav-movies"> Movies</p>
                    <p className="nav-top"> Top rated</p>
                    <p className="nav-list"> My list</p>
                </div>
            </div>
            <div className="user">
                <button>
                    <i class="fas fa-user"></i>
                </button>
            </div>
        </div>
    )
}

export default Header;