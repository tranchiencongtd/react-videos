import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends Component {
  state = {videos: [], selectedVideo : null};

  componentDidMount() {
    this.onTermSubmit('love yourself')
  }

  onTermSubmit = async (term) => {
    const reponse = await youtube.get('/search', {
      params: {
        q: term,
      },
    });
    this.setState({
      videos: reponse.data.items,
      selectedVideo: reponse.data.items[0]
    })
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  };

  render() {
    return (
      <div className="ui container">
        <div className='ui grid'>
          <div className='eleven wide column'>
            <SearchBar onSubmit={this.onTermSubmit} />
          </div>
        </div>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail 
                video={this.state.selectedVideo} 
              />
            </div>
            <div className='five wide column'>
              <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
