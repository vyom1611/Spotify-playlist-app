import { useState } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults'

function App(props) {

  const [searchResults, setSearchResults] = useState([{ artist:"The Smile", name: "Pana-vision", album: "crisis", id: 1},{ artist:"Justin Bieber", name: "Ghost", album: "Justice", id: 2}])
    
    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults results={searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
