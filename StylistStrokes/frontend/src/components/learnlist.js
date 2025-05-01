import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Learns from "../assets/data/learndata.json";
import Learn from "./learn"; // hoặc "../components/learn"

function getLearnRoute(id) {
  switch (id) {
    case 1: return "/beginner";
    case 2: return "/brushpen";
    case 3: return "/advanced";
    default: return "/";
  }
}

function Learnlist() {
  return (
    <motion.div
      className="row g-4 m-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {Learns.map((learn) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={learn.id}>
          <div className="p-3">
            <Link
              to={getLearnRoute(learn.id)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Learn
                image={learn.image}
                name={learn.name}
                des={learn.des}
              />
            </Link>
          </div>
        </div>
      ))}
    </motion.div>
  );
}

export default Learnlist;
