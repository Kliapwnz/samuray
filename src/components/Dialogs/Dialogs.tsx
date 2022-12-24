import React from 'react';
import n from "./Dialogs.module.css"

export const Dialogs = () => {
    return (
        <div className="dialogs">
            <div className="dialogs-items">
                <div className="dialog">Anastasiya</div>
                <div className="dialog">Elena</div>
                <div className="dialog">Dmitriy</div>
                <div className="dialog">Yuriy</div>
                <div className="dialog">Natalia</div>
                <div className="dialog">Natan</div>
            </div>
            <div className="messages">
                <div className="message">Hello</div>
                <div className="message">How are you?</div>
                <div className="message">where are u from?</div>
            </div>
        </div>
    );
};

