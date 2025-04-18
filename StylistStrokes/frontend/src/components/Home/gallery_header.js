import 'bootstrap/dist/css/bootstrap.min.css';
import './font.css'

function GalleryHeader(){
    return(
        <div className='container'>
            <div className='row text-center pt-5 mt-lg-5'>
                <h1 className='lavishly-yours-regular fw-bold fluid' style={{fontSize:"64px"}}>Gallery</h1>
            </div>
            
            <div className='row justify-content-center mb-lg-5 mt-3 '>
                <div className='col-9 text-center mx-auto'>
                    <h3 className='fleur-de-leah-regular'>Explore diverse style and expressions of calligraphy from around the world from traditional to contemporary interpretations across cultures</h3>
                </div>
            </div>
        </div>
    )
}

export default GalleryHeader;