import React from 'react';
import n from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const postData = [
        {id:1, message:"Hello all!", like:15},
        {id:2, message:"Im first time here!", like:22},
        {id:3, message:"I Likes apples", like:12},
        {id:4, message:"My name is Simon", like:40},
    ]

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
                <Post message="Hello all!" likeCount={15}/>
                <Post message="Im first time here!" likeCount={22}/>
                <Post message="I Likes apples" likeCount={12}/>
                <Post message="My name is Simon" likeCount={40}/>
            </div>
        </div>
    );
};

