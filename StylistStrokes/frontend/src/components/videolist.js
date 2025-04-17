import Videos from "../assets/data/videodata.json";
import Video from "../components/video";
function Videolist(p)
{
    return (
        <div className="row g-5 m-2">
            {Videos.map((p) => (
              <div className="col col-4">
                <div className="p-2">
                  <Video
                    image={p.image}
                    name={p.name}
                    description={p.description}
                  ></Video>
                </div>
              </div>
            ))}
        </div>
      );
}
export default Videolist;