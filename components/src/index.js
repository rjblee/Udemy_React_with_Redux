import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src="https://cdn.motor1.com/images/mgl/GwZbJ/s3/logo-story-volkswagen.jpg"/>
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
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))