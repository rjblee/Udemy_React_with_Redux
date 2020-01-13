import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({ lat: position.coords.latitude});
            },
            (err) => {
                this.setState({ errorMessage: err.message});
            }
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br></br>
                Error: {this.state.errorMessage}
            </div>
        )
    }
};

ReactDOM.render(
    <App></App>, document.querySelector('#root')
);