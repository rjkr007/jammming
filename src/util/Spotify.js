let accessToken;
const clientId = `${process.env.REACT_APP_SPOTIFY_CLIENT_ID}`;
const redirectURI = "https://rjkr007.github.io/jamming/";

const Spotify = {
getAccessToken(){
    if (accessToken) {
        return accessToken;
    }
    // check for access token 
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
     const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
     if (accessTokenMatch && expiresInMatch) {
         accessToken = accessTokenMatch[1];
         accessToken = accessToken.replace("=", ""); // troubleshoot
         const expiresIn = Number(expiresInMatch[1]);
         window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
         window.history.pushState("Access Token", null, "/");
         return accessToken;
     } else {
         const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
    window.location = accessUrl;
        }

}
}




export default Spotify;