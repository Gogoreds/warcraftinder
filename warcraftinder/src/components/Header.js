import React from "react";
import Logo from "./Logo";

const Header = () => {
    <header>
        <div className="fl">
            <button type="button">
                <img src="/warcraftinder/public/images/misc/user.png" alt="User Settings" />
            </button>
        </div>

        <div className="fl">
            <Logo />
        </div>

        <div className="fl">
            <button type="button">
                <img src="/warcraftinder/public/images/misc/messages.png" alt="View Messages" />
        </div>
    </header>
};

export default Header;