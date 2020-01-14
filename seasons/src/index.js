import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: '' };
    }
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered');
    }

    render() {
        if (this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }

        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        return <div>Things are loading...</div>
    }
};

ReactDOM.render(
    <App></App>, document.querySelector('#root')
);