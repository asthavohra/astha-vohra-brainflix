import "./Main.scss";
import React from "react";
import Hero from "../../components/Hero/Hero";
import SelectedMediaInfo from "../../components/SelectedMediaInfo/SelectedMediaInfo";
import MediaList from "../../components/MediaList/MediaList";
import { ToastContainer } from "react-toastify";
import { getVideos, getVideoDetails } from "../../utils/api";
import spinner from "../../assets/images/spinner.gif";
class Main extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
    selectedVideoId: null,
  };
  //calls getVideos function which is making axios call to fetch the video list
  componentDidMount() {
    getVideos()
      .then((response) => {
        this.setState({
          videos: response,
          selectedVideoId: response[0].id,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }
  getVideoDetailsFromApi = (videoId) => {
    //get all details of a video for a particular videoId
    getVideoDetails(videoId)
      .then((response) => {
        this.setState({
          selectedVideo: response,
          selectedVideoId: response.id,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  componentDidUpdate(_prevProps, prevState) {
    //if user opens http:localhost3000/video/videoid we will use videoid from request or else we will use the
    //selected video id updated in getVideos function
    const videoId =
      this.props.match.params.videoId || this.state.selectedVideoId;
    if (prevState.selectedVideoId !== videoId) {
      this.getVideoDetailsFromApi(videoId);
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
            {/* we are passing selected Video's Detail and getVideoDetailFromApi function refrence*/}
            <SelectedMediaInfo
              selectedEntry={selectedVideo}
              getVideoDetails={this.getVideoDetailsFromApi}
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
