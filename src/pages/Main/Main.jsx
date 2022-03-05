import "./Main.scss";
import React from "react";
import Hero from "../../components/Hero/Hero";
import SelectedMediaInfo from "../../components/SelectedMediaInfo/SelectedMediaInfo";
import MediaList from "../../components/MediaList/MediaList";
import { ToastContainer } from "react-toastify";
import { getVideos, API_KEY, API_URL } from "../../utils/api";
import spinner from "../../assets/images/spinner.gif";
import axios from "axios";
class Main extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    selectedVideoId: null,
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
        console.error("Cannot get the details because ", error);
      });
  };
  componentDidMount() {
    getVideos()
      .then((response) => {
        this.setState({
          videos: response.data,
          selectedVideoId: response.data[0].id,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidUpdate(_prevProps, prevState) {
    const videoId = this.props.match.params.videoId || this.state.videos[0].id;
    if (prevState.selectedVideoId !== videoId) {
      return this.getVideoDetails(videoId);
    }
  }

  render() {
    const { videos, selectedVideo } = this.state;

    if (this.state.selectedVideo === null) {
      return (
        <main className="load-screen">
          <div className="load-screen__image">
            {/*added spinner which will come up before data is fetched from API*/}
            <img
              src={spinner}
              alt="loading spinner gif to be displayed till data is fetched"
            ></img>
          </div>
        </main>
      );
    }

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
