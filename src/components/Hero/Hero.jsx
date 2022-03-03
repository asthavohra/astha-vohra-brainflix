import "./Hero.scss";
import { API_KEY } from "../../utils/api";
function Hero({ selectedEntry }) {
  return (
    <section className="hero">
      <video className="hero__video" controls poster={selectedEntry.image}>
        <source
          className="hero__video-source"
          // src={`${selectedEntry.video}?api_key=${API_KEY}`}
          src={selectedEntry.video}
          type="video/mp4"
        />
      </video>
    </section>
  );
}

export default Hero;
