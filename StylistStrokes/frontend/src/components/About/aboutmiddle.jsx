import AboutNumber from './aboutnumber'
import './font.css'
export default function AboutMiddle() {
    return (
        <div className='d-flex row'>
            <div className="col-md-6 order-md-1">
                <h3 className="fs-2 mb-4 fw-semibold">
                    MEET OUR INCREDIBLE TEAM
                </h3>
                <p className="mb-4">
                    We're not just a team; we're a league of extraordinary scribblers, battling the mundane with every flourish. Forget boring fonts; we wield calligraphy like a ninja sword, slicing through the ordinary!
                </p>
                <div className="row mt-3 gy-3">
                    <AboutNumber n='2 Months' text='The beginning of the journey'></AboutNumber>
                    <AboutNumber n='2000+' text='Active crews around the world'></AboutNumber>
                </div>
                <div className='row mt-3 gy-2'>
                    <div className='col-12'>
                        <div className='btn border-success playwrite-cu p-3 px-5 fw-semibold'>
                            <h5>Learn more!</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-6 order-md-2'>
                <img className='round rounded-2 shadow img-fluid' src="https://r.mobirisesite.com/1452337/assets/images/photo-1628962691167-27b7db9997e0.jpeg" alt="" />
            </div>
        </div>
    )
}