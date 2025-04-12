import Card_js from "../components/card";
import monhoc from '../data/subject.json'
import Img_card from "../components/img_card";
function Homepage()
{
    return(
    <div className="container">
        <img src="./image/banner.jpg" className="img-fluid p-2 m-2"></img>
        <h3 class="text-center text-capitalize fw-bold">Who should learn programing in FPT Aptech</h3>
        <Card_js></Card_js>
        <h3 class="text-center text-capitalize fw-bold mt-lg-5">What is the course program ?</h3>
        {monhoc.map(monhoc => (
            <img style={{width: "auto", height: "10rem"}} src={monhoc.src} alt={monhoc.alt}/> 
        ))
        }
        <p className="fw-semibold">With a program design that includes 04 semesters with many important technologies such as ReactJS, PHP, Python, .NET Core, Spring boot brings learners to the world of programming quickly, most effectively. After graduation, students are confident in front of employers with 4 project semesters with quality, practical products, students will definitely score points.</p>
    </div>);
}
export default Homepage;