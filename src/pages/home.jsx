import Card_js from "../components/card";
import monhoc from '../data/subject.json'
import Img_card from "../components/img_card";
import AboutUs from "../components/about";
import VideoPage from "./Videopage";
function Homepage() {
    return (
        <div>
            <AboutUs></AboutUs>
            <VideoPage></VideoPage>
        </div>
    );
}
export default Homepage;