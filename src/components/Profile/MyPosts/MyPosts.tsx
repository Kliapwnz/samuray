import React from 'react';
import n from "./MyPosts.module.css";

export const MyPosts = () => {
    return (

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div>
                <div className={n.item}>
                    <img src="https://i.pinimg.com/564x/d8/41/82/d84182336935828005445c08389fc68b.jpg"/>
                    Post 1</div>
                <div className={n.item}>Post 2</div>
                <div className={n.item}>Post 3</div>
            </div>
        </div>

    );
};

