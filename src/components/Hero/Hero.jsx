import "./Hero.scss";
function Hero({ selectedEntry }) {
  const videoStreamLink = `${selectedEntry.video}`;
  return (
    <section className="hero">
      <video className="hero__video" controls poster={selectedEntry.image}>
        <source
          className="hero__video-source"
          src={videoStreamLink}
          type="video/mp4"
        />
      </video>
    </section>
  );
}

export default Hero;
