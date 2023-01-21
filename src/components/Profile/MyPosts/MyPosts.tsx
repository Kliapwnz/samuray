import React from 'react';
import n from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostType} from "../../../Redux/State";

type PropsType = {
    posts: PostType[]
    addPost:(postMessage:string)=>void
}

export const MyPosts = (props: PropsType) => {

    const postElement = props.posts.map(e => <Post message={e.message} likeCount={e.likeCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPostHandler = () => {
        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={n.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPostHandler}>Add post</button>
                </div>
            </div>
            <div className={n.posts}>
                {postElement}
            </div>
        </div>
    );
};

