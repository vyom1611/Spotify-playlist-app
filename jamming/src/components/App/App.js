
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import Playlist from '../Playlist/Playlist'
import SearchResults from '../SearchResults/SearchResults'

function App() {
  return (
    <div>
      <h1>Ja<span class="highlight">mmm</span>ing</h1>
      <div class="App">
        <SearchBar />
        <div class="App-playlist">
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
