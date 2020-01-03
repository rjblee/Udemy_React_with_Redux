import React from 'react';
import faker from 'faker';

const CommentDetail = function(props) {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={faker.image.avatar()}/>
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">
                    <span className="date">Today 6PM</span>
                </div>
                <div className="text">
                    Here are the comments!
                </div>
            </div>
        </div>
    );
};


export default CommentDetail;