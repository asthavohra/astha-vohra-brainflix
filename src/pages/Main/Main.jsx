import "./Main.scss";
import React from "react";
//import videos from "../../data/videos.json";
//import videoDetails from "../../data/video-details.json";
import Hero from "../../components/Hero/Hero";
import SelectedMediaInfo from "../../components/SelectedMediaInfo/SelectedMediaInfo";
import MediaList from "../../components/MediaList/MediaList";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { API_URL, API_KEY } from "../../utils/api";

class Main extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    selectedVideoId: null,
  };
  getVideos = () => {
    axios
      .get(`${API_URL}/videos?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({
          videos: response.data,
          selectedVideoId: response.data[0].id,
        });
      })
      .catch((error) => {
        console.log("The error is ", error);
      });
  };
  getVideoDetails = (videoId) => {
    axios
      .get(`${API_URL}/videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => {
        this.setState({
          selectedVideo: response.data,
          selectedVideoId: response.data.id,
        });
      })
      .catch((error) => {
        console.log("Cannot get the details because ", error);
      });
  };
  componentDidMount() {
    this.getVideos();
    //const { videoId } = this.props.match.params;
  }
  //if (videoId) {
  // this.getVideoDetails(videoId);
  //  } else {
  //   this.getVideoDetails(this.state.videos[0]);
  // }
  //  console.log(videoId);
  //  console.log(this.state);
  // }
  componentDidUpdate(_prevProps, prevState) {
    const videoId = this.props.match.params.videoId || this.state.videos[0].id;
    if (prevState.selectedVideoId !== videoId) {
      return this.getVideoDetails(videoId);
    }
  }

  render() {
    const { videos, selectedVideo } = this.state;

    if (this.state.selectedVideo === null) {
      return <main className="load-screen">Loading...</main>;
    }

    // let videoId = this.props.match.params.videoId
    //  ? this.props.match.params.videoId
    //  : videoDetails[0].id;
    //let selectedEntry = this.state.videoDetails.find(
    //  (entry) => entry.id === videoId
    // );
    return (
      <div className="App">
        <main className="main">
          <Hero selectedEntry={selectedVideo} />
          <section className="main__container">
            <SelectedMediaInfo
              selectedEntry={selectedVideo}
              getVideoDetails={this.getVideoDetails}
            />
            <MediaList
              entries={videos.filter((video) => video.id !== selectedVideo.id)}
            />
          </section>
          <ToastContainer />
        </main>
      </div>
    );
  }
}

export default Main;
