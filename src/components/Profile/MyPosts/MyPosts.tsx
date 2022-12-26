import React from 'react';
import n from "./MyPosts.module.css";
import {Post} from "./Post/Post";

export const MyPosts = () => {

    const post = [
        {id: 1, message: "Hello all!", likeCount: 15},
        {id: 2, message: "Im first time here!", likeCount: 22},
        {id: 3, message: "I Likes apples", likeCount: 12},
        {id: 4, message: "My name is Simon", likeCount: 40},
    ]

    const postElement = post.map(e => <Post message={e.message} likeCount={e.likeCount}/>)

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
                {postElement}
            </div>
        </div>
    );
};

