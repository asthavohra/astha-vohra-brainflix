import "./Main.scss";
import React from "react";
import videos from "../../data/videos.json";
import videoDetails from "../../data/video-details.json";
import Hero from "../Hero/Hero";
import SelectedMediaInfo from "../SelectedMediaInfo/SelectedMediaInfo";
import MediaList from "../MediaList/MediaList";
import { ToastContainer } from "react-toastify";

class Main extends React.Component {
  state = {
    videos: videos,
    videoDetails: videoDetails,
    selectedEntry: null,
  };

  render() {
    {
      let videoId = this.props.match.params.videoId
        ? this.props.match.params.videoId
        : videoDetails[0].id;

      let selectedEntry = this.state.videoDetails.find(
        (entry) => entry.id === videoId
      );
      return (
        <main className="main">
          <Hero selectedEntry={selectedEntry} />
          <section className="main__container">
            <SelectedMediaInfo selectedEntry={selectedEntry} />
            <MediaList
              entries={this.state.videos.filter(
                (video) => video.id !== selectedEntry.id
              )}
            />
          </section>
          <ToastContainer />
        </main>
      );
    }
  }
}

export default Main;
