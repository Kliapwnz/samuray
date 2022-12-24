import React from 'react';
import n from "./Post.module.css";

type PropsType= {
    text:string
    like: number
}

export const Post = (props:PropsType) => {
    return (
        <div className={n.item}>
            <img src="https://i.pinimg.com/564x/d8/41/82/d84182336935828005445c08389fc68b.jpg"/>
            {props.text}
            <div>
                <span className={n.like}>{props.like} likes</span>
            </div>
        </div>
    );
};

