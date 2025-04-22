import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/font.css'
import "../../styles/gallery_page.css"
import testImg from "../../assets/images/Gallery/siah_masho.jpg"

const GalleryCom=({art, reverse})=>{
    function getFont(style){
        switch (style){
            case "East Asia":
                return "alegreya-regular";
            case "Europe":
                return "mea-culpa-regular";
            case "Middle East":
                return "quintessential-regular";
            default:
                return ''
        }
    }
    const images = require.context('../../assets/images/Gallery', false, /\.(png|jpe?g|svg)$/);

    const ImgSrc = art?.image ? images(`./${art.image}`) : testImg;


    return(
        <div className="w-100 row mx-0 py-4 position-relative mt-5" style={{
            backgroundImage:`url(${ImgSrc})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat"
        }}>
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    zIndex: 1,
                }}
            ></div>
            {reverse ?(
                <>
                    <div className='col-5 justify-content-center' style={{ zIndex: 2 }}>
                        <img src={ImgSrc} className='img-fluid' style={{
                            height:"450px",
                            width:"100%",
                            objectFit:"contain"
                        }}></img>
                    </div>
                    <div className='col-7 text-start text-white' style={{ zIndex: 2 }}>
                        <h2 className={` ${getFont(art?.style)} fw-bold`}>{art?.name}</h2>
                        <h4 className='lead'>Made by blah blah blah</h4>
                        <p>{art?.description}</p>
                    </div>
                </>
            ):(
                <>
                    <div className='col-7 text-start text-white' style={{ zIndex: 2 }}>
                        <h2 className={` ${getFont(art?.style)} fw-bold`}>{art?.name}</h2>
                        <h4 className='lead'>Made by blah blah blah</h4>
                        <p>{art?.description}</p>
                    </div>
                    <div className='col-5 justify-content-center' style={{ zIndex: 2 }}>
                        <img src={ImgSrc} className='img-fluid' style={{
                            height:"450px",
                            width:"100%",
                            objectFit:"contain"
                        }}></img>
                    </div>
                </>
            )}
            
            
        </div>
    )
}

export default GalleryCom;