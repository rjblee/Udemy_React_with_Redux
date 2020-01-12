import React from 'react';
import ReactDOM from 'react-dom';

const App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };
    }

    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => console.log(position),
            (err) => console.log(err)
        );
    }
    return <div>Latitude: </div>;
};


ReactDOM.render(
    <App></App>, document.querySelector('#root')
);