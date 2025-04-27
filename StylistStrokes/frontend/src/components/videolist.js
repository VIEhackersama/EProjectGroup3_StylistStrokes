import Videos from "../assets/data/videodata.json";
import Video from "./video";

function Videolist() {
  return (
    <div className="row g-4 m-2">
      {Videos.map((video) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={video.id}>
          <div className="p-3">
            <Video
              image={video.image}
              name={video.name}
              des={video.des}
              link={video.link}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videolist;
