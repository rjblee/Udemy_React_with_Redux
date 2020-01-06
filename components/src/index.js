import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard></ApprovalCard>
            <CommentDetail 
                author="Ralph" 
                timeAgo="Today 6:00PM" 
                message="Great post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Kelly" 
                timeAgo="Today 5:00PM" 
                message="I love it!" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Scott" 
                timeAgo="Today 2:00PM" 
                message="This is the new post" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Adam" 
                timeAgo="Today 12:00PM" 
                message="Happy New Year" 
                avatar={faker.image.avatar()}
            />
            <CommentDetail 
                author="Lauren" 
                timeAgo="Today 6:00AM" 
                message="Wish you the best" 
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))