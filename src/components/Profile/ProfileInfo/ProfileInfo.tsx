import React from 'react';
import n from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <div className={n.profileInfo}>
            <div>
                <img
                    src={"https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"}/>
            </div>
            <div className={n.avaPlusDesc}>
                ava + description
            </div>
        </div>
    );
};

