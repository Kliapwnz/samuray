import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {RootStateType} from "./Redux/State";

type PropsType = {
    state: RootStateType
    addPost:(postMessage:string)=>void
}

function App(props: PropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/*" element={<Profile profilePage={props.state.profilePage}/>}/>
                    <Route path="/dialogs/*" element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
