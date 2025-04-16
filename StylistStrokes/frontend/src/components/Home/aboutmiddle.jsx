import AboutNumber from '../Home/aboutnumber'
import './font.css'
export default function AboutMiddle()
{
    return(
        <div className="col-md-6 order-md-1">
            <h3 className="fs-2 mb-4 fw-semibold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </h3>
            <p className="mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
                nemo, perferendis labore natus dolorem, necessitatibus fugit
                nisi, harum enim dolor velit iusto doloribus dicta nesciunt
                libero repudiandae! Nostrum, fugit ullam.
            </p>
            <div className="row mt-3 gy-3">
                <AboutNumber n='500+ years' text='THE ART OF CALIGRAPHY'></AboutNumber>
                <AboutNumber n='1B+' text='Daily user around the world'></AboutNumber>
            </div>
            <div className='row mt-3 gy-2'>
                <div className='col-12'>
                    <div className='btn border-success playwrite-cu p-3 px-5 fw-semibold'>
                        <h5>Learn more!</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}