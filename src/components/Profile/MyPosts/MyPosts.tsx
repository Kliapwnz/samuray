import React from 'react';
import n from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {state} from "../../../Redux/State";

type PostType={
    id:number
    message:string
    likeCount:number
}


export const MyPosts = (props:PostType) => {

    const postElement = state.profilePage.posts.map(e => <Post message={e.message} likeCount={e.likeCount}/>)

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

