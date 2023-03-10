import React from 'react';
import n from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType, RootStateType, state} from "../../Redux/State";

type PropsType = {
    profilePage:ProfilePageType
    addPost: (postMessage: string) => void
}

export const Profile = (props:PropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    );
};

