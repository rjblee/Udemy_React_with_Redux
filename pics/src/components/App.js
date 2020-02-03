import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    
    async onSearchSubmit(term) {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term },
            headers: {
                Authorization: 'Client-ID 02b341a79d53289e4a2d3d015309bd9b3d3c517b2b651f745bb538e387f85038'
            }
        });
    
        console.log(response.data.results);
    }
    
    render() {
        return (
            <div className="ui container" style={{ marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        )
    }
}



export default App;