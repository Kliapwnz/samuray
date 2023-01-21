import {addPost, RootStateType} from "./Redux/State";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const rerenderEntireTree = (state: RootStateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );

    root.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
            />
        </BrowserRouter>
    );
}