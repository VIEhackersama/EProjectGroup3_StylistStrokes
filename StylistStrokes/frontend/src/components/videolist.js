import Videos from "../assets/data/videodata.json";
import Video from "./video";

function Videolist() {
  return (
    <div className="row g-5 m-2">
      {Videos.map((video) => (
        <div className="col col-4" key={video.id}>
          <div className="p-2">
            <Video
              image={video.image}
              name={video.name}
              des={video.des}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Videolist;
