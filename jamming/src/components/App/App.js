import { useState } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults'

function App(props) {

  const [searchResults, setSearchResults] = useState([{ artist:"The Smile", name: "Pana-vision", album: "-", id: 1},{ artist:"Justin Bieber", name: "Ghost", album: "Justice", id: 2}])
  
  const [playlistName, setPlaylistName] = useState("Peaches");
  const [playlistTracks, setPlaylistTracks] = useState([{name: "Peaches", artist: "Justin Bieber", album: "Justice", id:5}]);

  const addTrack = (track) => {
    let tracks = playlistTracks
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    } else {
      setPlaylistTracks(trackList => [...trackList, track])
    }
  }


    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults results={searchResults} onAdd={addTrack}/>
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks}/>
        </div>
      </div>
    </div>
  );
}

export default App;
