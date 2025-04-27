import Learns from "../assets/data/learndata.json";
import Learn from "../components/learn";

function Learnlist() {
  return (
    <div className="row g-4 m-2">
      {Learns.map((learn) => (
        <div className="col-lg-4 col-md-6 col-sm-12" key={learn.id}>
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
