import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Videos from "../assets/data/videodata.json";
import Video from "./video";

function getVideoRoute(id) {
  switch (id) {
    case 1: return "/vietnam-calligraphy";
    case 2: return "/korean-calligraphy";
    case 3: return "/arabic-calligraphy";
    case 4: return "/india-calligraphy";
    case 5: return "/japan-calligraphy";
    case 6: return "/western-calligraphy";
    default: return "/";
  }
}

function Videolist() {
  return (
    <div className="container">
    <motion.div
      className=" row g-4 m-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {Videos.map((video) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={video.id}>
          <div className="p-3">
            <Link
              to={getVideoRoute(video.id)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Video
                image={video.image}
                name={video.name}
                des={video.des}
                link={video.link}
              />
            </Link>
          </div>
        </div>
      ))}
    </motion.div>
    </div>
  );
}

export default Videolist;