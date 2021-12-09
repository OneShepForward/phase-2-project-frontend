import React from "react";

function Header({ name }) {

    return (
    <div className="header">
        <header>
            <h1>
                <span className="logo"></span>
                {name} - Header
            </h1>
            <nav>
                <a className="button" href="/guest-book">
                    Guest Book 
                </a>
                <a className="button" href="/links">
                    Links 
                </a>
            </nav>
        </header>
    </div>
  );
}

export default Header;