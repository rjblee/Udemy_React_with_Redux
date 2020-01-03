import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Ralph" />
            <CommentDetail author="Kelly" />
            <CommentDetail author="Scott" />
            <CommentDetail author="Adam" />
            <CommentDetail author="Lauren" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))