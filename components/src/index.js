import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Ralph" timeAgo="Today 6:00PM" />
            <CommentDetail author="Kelly" timeAgo="Today 5:00PM" />
            <CommentDetail author="Scott" timeAgo="Today 2:00PM" />
            <CommentDetail author="Adam" timeAgo="Today 12:00PM" />
            <CommentDetail author="Lauren" timeAgo="Today 6:00AM" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))