import React from 'react';
import n from "./MyPosts.module.css";

export const MyPosts = () => {
    return (

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <div className={n.item}>Post 1</div>
                <div className={n.item}>Post 2</div>
                <div className={n.item}>Post 3</div>
            </div>
        </div>

    );
};

