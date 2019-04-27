import config from '../config/config';

class PlaylistItemsService {

  playlistItemsConfig = {
    part: 'snippet',
    maxResults: '50',
  }

  playlistItemsUrl = config.baseUrl
    + 'playlistItems?part=' + this.playlistItemsConfig.part
    + '&playlistId=' + config.playlistId
    + '&key=' + config.apiKey
    + '&maxResults=' + this.playlistItemsConfig.maxResults;

  getPlaylistItems = () => {
    return fetch(this.playlistItemsUrl).then(  
      (response) => {  
        if (response.status !== 200) {  
          console.log('Request problem. Status Code: ' +  
            response.status);  
          return;  
        }
        return response.json().then((data) => {
          return data.items;
        });  
      }  
    )  
    .catch((err) => {  
      console.log('Fetch Error:', err);  
    });
  };
  
}

export default PlaylistItemsService;