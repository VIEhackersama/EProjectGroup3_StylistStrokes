import AboutNumber from './aboutnumber'
import './font.css'
export default function AboutMiddle() {
    return (
        <div className='d-flex row'>
            <div className="col-md-6 order-md-1">
                <h3 className="fs-2 mb-1 fw-semibold">
                    ABOUT THE GENERAL 
                </h3>
                <p className="mb-4">
                    We're not just a team; we're a league of extraordinary scribblers, battling the mundane with every flourish. Forget boring fonts; we wield calligraphy like a ninja sword, slicing through the ordinary!
                </p>
                <div className="row mt-3 gy-3">
                    <AboutNumber n='24 days' text='The time of the journey'></AboutNumber>
                    <AboutNumber n='60+' text='Active crews of the world'></AboutNumber>
                </div>
                <div className="row mt-3 gy-3">
                    <AboutNumber n='Over 900' text='Lessons for those who love'></AboutNumber>
                    <AboutNumber n='$200' text='Money raised by enthusiast'></AboutNumber>
                </div>
                <div className='row mt-3 gy-2'>
                    <div className='col-12'>

                   

                    </div>
                     <a href="/learn" className=" text-decoration-none">
                        <a href='/about' className="btn btn-info border-success playwrite-cu p-3 px-5 fw-semibold">
                            <h5 className="mb-0 ">Learn more!</h5>
                         </a>
                    </a>
                </div>
            </div>
            <div className='col-md-6 order-md-2'>
                <img 
                className='round rounded-2 shadow img-fluid'
                 src="https://r.mobirisesite.com/1452337/assets/images/photo-1628962691167-27b7db9997e0.jpeg"
                 alt="" 
                style={{
                    transform:"rotate(2deg)",border:"20px solid transparent",
                borderRadius:"10px", 
                    borderImage:`url(https://www.roncofurniture.net/cdn/shop/products/Western_Collection_Decorative_Nail_Heads_EW117C_722x700.jpg?v=1561573612)`}}/>
            </div>
        </div>
    )
}