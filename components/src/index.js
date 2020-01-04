import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Ralph" timeAgo="Today 6:00PM" message="Great post!" />
            <CommentDetail author="Kelly" timeAgo="Today 5:00PM" message="I love it!" />
            <CommentDetail author="Scott" timeAgo="Today 2:00PM" message="How are you doing?" />
            <CommentDetail author="Adam" timeAgo="Today 12:00PM" message="Happy New Year" />
            <CommentDetail author="Lauren" timeAgo="Today 6:00AM" message="Wish you the best" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))