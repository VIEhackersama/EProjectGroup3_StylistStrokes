import Learns from "../assets/data/learndata.json";
import Learn from "../components/learn";

function Learnlist() {
  return (
    <div className="row g-5 m-2">
      {Learns.map((learn) => (
        <div className="col col-4" key={learn.id}>
          <div className="p-2">
            <Learn
              image={learn.image}
              name={learn.name}
              des={learn.des}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Learnlist;
