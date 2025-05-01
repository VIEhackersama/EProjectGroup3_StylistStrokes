import AboutMiddle from "../components/Home/aboutmiddle";
import AboutTitle from "../components/Home/abouttitle";

export default function AboutPage()
{
    return(
        <div style={{ backgroundImage:"url(https://img.freepik.com/free-photo/canvas-background-with-paint-texture_91008-505.jpg?semt=ais_hybrid&w=740)"}}>
            <div className=" container py-5">
                <AboutTitle></AboutTitle>
                <AboutMiddle></AboutMiddle>
            </div>
        </div>
    );
}