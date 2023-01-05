import React from 'react';
import n from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {state} from "../../Redux/State";


export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts />
        </div>
    );
};

