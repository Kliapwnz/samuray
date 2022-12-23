import React from 'react';
import n from "./Profile.module.css"

export const Profile = () => {
    return (
        <div className={n.content}>
            <div>
                <img
                    src={"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>New post</div>
            </div>
            <div>
                <div>Post 1</div>
                <div>Post 2</div>
                <div>Post 3</div>
            </div>
        </div>
    );
};

