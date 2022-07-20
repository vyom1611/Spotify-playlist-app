import 'dotenv/config';

const clientID = process.env.CLIENT_ID;
const redirectUri = "http://localhost:3000"

let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken
        } 

        //check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            //Grabbing new access token after clearing the parameters
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');

            return accessToken
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
            window.location = accessUrl
        }
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        //making GET method from spotify API access token endpoint
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
        { headers: {
            Authorization: `Bearer ${accessToken}`
        }})
        //Converting response to json
        .then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artist[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        })

    }

}

export default Spotify;