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
                <Post message="Hello all!" like={5}/>
                <Post message="Im first time here!" like={2}/>
                <Post message="I Likes apples" like={8}/>
                <Post message="My name is Simon" like={12}/>
            </div>
        </div>

    );
};

