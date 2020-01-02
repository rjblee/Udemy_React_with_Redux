import React from 'react';
import faker from 'faker';

const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    Ralph
                </a>
                <div className="metadata">
                    <span className="date">Dec 27, 2019 2:30PM</span>
                </div>
                <div className="text">
                    Here are the comments!
                </div>
            </div>
        </div>
    );
};


export default CommentDetail;