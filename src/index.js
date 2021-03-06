import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDKmKef_v_zyH5oKhYwddDdZcpnO8ZmK1M';

class App extends Component {

  const videoSearch = _.debounce((term) => this.videoSearch(term)}, 300)

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("wat")

  }

  videoSearch(video_detail){
    YTSearch({key: API_KEY, term: video_detail }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }



  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
          className=""
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
