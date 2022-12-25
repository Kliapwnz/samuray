import React from 'react';
import n from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={n.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={n.posts}>
                <Post message="Hello all!" like={5}/>
                <Post message="Im first time here!" like={2}/>
                <Post message="I Likes apples" like={8}/>
                <Post message="My name is Simon" like={12}/>
            </div>
        </div>
    );
};

