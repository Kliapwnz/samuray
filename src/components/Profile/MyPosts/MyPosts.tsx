import React from 'react';
import n from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/State";

type PropsType={
    posts:PostType[]
}

export const MyPosts = (props:PropsType) => {

    const postElement = props.posts.map(e => <Post message={e.message} likeCount={e.likeCount}/>)

    return (
        <div className={n.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button onClick={()=>{}}>Add post</button>
                </div>
            </div>
            <div className={n.posts}>
                {postElement}
            </div>
        </div>
    );
};

