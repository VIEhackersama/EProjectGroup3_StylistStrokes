import AboutMiddle from "../components/Home/aboutmiddle";
import AboutTitle from "../components/Home/abouttitle";

export default function AboutPage()
{
    return(
        <div>
            <div className=" container py-5">
                <AboutTitle></AboutTitle>
                <AboutMiddle></AboutMiddle>
            </div>
        </div>
    );
}