import React from 'react';
import n from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src={"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"}/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
};

