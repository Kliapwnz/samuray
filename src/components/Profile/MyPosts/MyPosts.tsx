import React from 'react';
import n from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <Post/>
            </div>
        </div>

    );
};

