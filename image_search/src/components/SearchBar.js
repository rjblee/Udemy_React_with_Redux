import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

    state = { term: ''};

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form container">
                    <div className="field">
                        <h2><label>Image Search</label></h2>
                        <input 
                            type="text" 
                            value={this.state.term} 
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
            </div>
        )
    }
};


export default SearchBar;