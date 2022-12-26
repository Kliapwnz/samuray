import React from 'react';
import n from "./Post.module.css";

type PropsType= {
    message:string
    likeCount: number
}

export const Post = (props:PropsType) => {
    return (
        <div className={n.item}>
            <img src="https://i.pinimg.com/564x/d8/41/82/d84182336935828005445c08389fc68b.jpg"/>
            {props.message}
            <div>
                <span className={n.like}>{props.likeCount} likes</span>
            </div>
        </div>
    );
};

