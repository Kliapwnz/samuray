import React from 'react';
import h from "./Header.module.css"

export const Header = () => {
    return (
        <header className={h.header}>
            <img
                src={"https://www.freepnglogos.com/uploads/company-logo-png/company-logo-telestream-press-kit-12.png"}/>
        </header>
    );
};

