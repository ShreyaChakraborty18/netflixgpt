import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[17%] px-6 md:px-12 lg:px-16 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-bold" style={{ fontFamily: 'Merriweather, serif' }}>
        {title}
      </h1>
      <p className="hidden md:hidden lg:hidden xl:inline-block py-6 text-lg w-1/2" style={{ fontFamily: 'Merriweather, serif' }}>
        {overview}
      </p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-1 md:mt-2 lg:py-3 px-2 md:px-3 lg:px-12 text-xl  rounded-lg hover:bg-opacity-80">
        <FontAwesomeIcon icon={faPlay} />&nbsp;Play
        </button>
        <button className="hidden md:hidden lg:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
