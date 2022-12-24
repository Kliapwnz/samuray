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
                <Post text="Hello all!"/>
                <Post text="Im first time here!"/>
                <Post text="I Likes apples"/>
                <Post text="My name is Simon"/>
            </div>
        </div>

    );
};

