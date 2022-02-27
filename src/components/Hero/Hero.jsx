import "./Hero.scss";

function Hero({ selectedEntry }) {
  return (
    <section className="hero">
      <a href="">
        <video className="hero__video" controls poster={selectedEntry.image}>
          <source
            className="hero__video-source"
            src={selectedEntry.video}
            type="video/mp4"
          />
        </video>
      </a>
    </section>
  );
}

export default Hero;
