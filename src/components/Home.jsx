// src/components/VideoAd.jsx
import videoSrc from "../assets/videos/brownie.mp4"; // Path to your video file

const Home = () => {
  return (
    <div className="relative w-full h-screen-minus-header flex items-center justify-center bg-black">
      {/* Video Background */}
      <video
  className="w-full h-full object-cover"
  src={videoSrc}
  autoPlay
  muted
  loop
  ref={(video) => {
    if (video) video.playbackRate = 0.5; // Adjust the playback rate to 0.5 for 50% speed
  }}
/>

      
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent backdrop-blur-sm"></div>
      
      {/* Content Overlay */}
      <div className="absolute top-20 left-0 p-32 text-left text-primewhite space-y-4">
        {/* Heading */}
        <h1 className="text-6xl md:text-6xl pb-6 font-bold tracking-wide font-poppins leading-snug">
  Experience the Joy of <br />
  <span className="highlight animate-bounce">Home Baking</span>
</h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl pb-6 font-semibold font-poppins">
          Fresh, delicious, and made with love!
        </p>

        {/* Button */}
        <a href="#order" className="inline-block mt-6 px-8 py-3 bg-yellow text-black text-lg font-medium font-poppins rounded-xl shadow-lg hover:bg-yellow-600 transition duration-300">
          Order Delicious
        </a>
      </div>
    </div>
  );
};

export default Home; 