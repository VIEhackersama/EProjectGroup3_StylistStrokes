import Footer_1 from "./footer1";
import Footer_2 from "./footer2";
// import '../style/header.css';
function Footer_js() {
  return (
    <div>
      <footer
        style={{ backgroundColor: "#1b1c1b" }}
        className="text-white py-5"
      >
        <div className="container">
          <Footer_1></Footer_1>
          <Footer_2></Footer_2>
        </div>
      </footer>
    </div>
  );
}

export default Footer_js;
