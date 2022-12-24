import React from 'react';
import n from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <div className="item">Anastasiya</div>
                <div className="item">Elena</div>
                <div className="item">Dmitriy</div>
                <div className="item">Yuriy</div>
                <div className="item">Natalia</div>
                <div className="item">Natan</div>
            </div>
            <div className="message"></div>
        </div>
    );
};

