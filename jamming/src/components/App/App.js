import { useState } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults'

function App(props) {

  const [searchResults, setSearchResults] = useState([{ artist:"Exmaple Artist 1", name: "Example Name 1", album: "Example album 1", id: 1},{ artist:"Justin Example Artist 2", name: "Example name 2", album: "Example Album 2", id: 2}])
  
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracksArray, setPlaylistTracks] = useState([]);
  const [trackURIs, setTrackURIs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //AddTrack Method
  const addTrack = (track) => {
    let tracks = playlistTracksArray
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return
    } else {
      setPlaylistTracks(playlistTracksArray => [...playlistTracksArray, track])
    }
  }


  //RemoveTrack method
  const removeTrack = (track) => {
    setPlaylistTracks((current) => current.filter(currentTrack => { return currentTrack.id !== track.id}));
    }

  //Change playlist name method
  const updatePlaylistname = (name) => {
    setPlaylistName((playlistName) => name)
  }

  //Save playlist method
  const savePlaylist = () => {
    setTrackURIs(playlistTracksArray => playlistTracksArray.map(track => track.uri));
  }

  const search = (term) => {
    setSearchTerm((searchTerm) => term)
    console.log(searchTerm)
  }
  


    return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar onSearch={search} />
        <div class="App-playlist">
          <SearchResults results={searchResults} onAdd={addTrack}/>
          <Playlist playlistName={playlistName} 
                    playlistTracks={playlistTracksArray} 
                    onRemove={removeTrack} 
                    onNameChange={updatePlaylistname} 
                    onSave={savePlaylist} />
        </div>
      </div>
    </div>
  );
}

export default App;
