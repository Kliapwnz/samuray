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
                <Post text="Hello all!" like={5}/>
                <Post text="Im first time here!" like={2}/>
                <Post text="I Likes apples" like={8}/>
                <Post text="My name is Simon" like={12}/>
            </div>
        </div>

    );
};

