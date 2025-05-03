import { useParams } from "react-router-dom";
import Videos from "../assets/data/videodata.json";

function VideoDetail() {
  const { id } = useParams();
  const video = Videos.find((v) => v.id.toString() === id);

  if (!video) {
    return <div>Không tìm thấy video</div>;
  }

  return (
    <div className="container mt-5">
      <h1>{video.name}</h1>
      <img src={video.image} alt={video.name} style={{ maxWidth: "100%" }} />
      <p>{video.des}</p>
      <a href={video.link} target="_blank" rel="noopener noreferrer">
        Xem video
      </a>
    </div>
  );
}

export default VideoDetail;
