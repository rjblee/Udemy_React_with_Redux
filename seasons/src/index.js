import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


class App extends React.Component {
    state = { lat: null, errorMessage: '' };
    
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude}),
            (err) => this.setState({ errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log('My component was just updated - it rerendered');
    }

    renderContent() {
        if (this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
    
        if (this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }
    
        return <Spinner message="Please accept the location request"></Spinner>;
    }

    render() {
        return <div>{this.renderContent()}</div>
    }
};

ReactDOM.render(
    <App></App>, document.querySelector('#root')
);