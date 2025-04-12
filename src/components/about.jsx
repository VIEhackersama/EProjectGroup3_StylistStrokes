import AboutMiddle from './aboutmiddle';
import AboutTitle from './abouttitle';
import './font.css'
export default function AboutUs() {
    return (  
        <section className="py-5 bg-white">
            <div className="container">
                <AboutTitle></AboutTitle>
                <div className="row align-items-center gy-4">
                    <div className="col-md-6 order-md-2">
                        <div className="card border-0 shadow">
                            <img
                                className="card-img img-fluid rounded"
                                src="./image/cali.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <AboutMiddle></AboutMiddle>
                </div>
            </div>
        </section>
    );
}
