import { useState } from 'react'
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults'

import Spotify from "../../util/Spotify";

function App(props) {

  const [searchResults, setSearchResults] = useState([])
  
  const [playlistName, setPlaylistName] = useState("My Playlist");
  const [playlistTracksArray, setPlaylistTracks] = useState([]);

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
    // setTrackURIs(prevArr => { return [...prevArr, ...playlistTracksArray.map(track => track.uri)] });
    const trackUris = playlistTracksArray.map(track => track.uri)
    Spotify.savePlayList(playlistName, trackUris)
      .then(() => {
        setPlaylistName(prevName => "My Playlist")
        setPlaylistTracks([])
      })
  }

  const search = (term) => {
    Spotify.search(term).then(searchResults => setSearchResults(searchResults))
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
