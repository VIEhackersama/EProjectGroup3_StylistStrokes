import React from "react";
import { Link, useParams } from "react-router-dom";
import arts from "../assets/data/gallery.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font.css'
import '../styles/gallery_detail.css'
import testImg from "../assets/images/Gallery/siah_masho.jpg"
import GalleryCom from "../components/Gallery_page/g_page_item";

const GalleryDetails = () => {
    function getFont(style){
        switch (style){
            case "China":
                return "alegreya-regular";
            case "Western":
                return "mea-culpa-regular";
            case "Arabic":
                return "quintessential-regular";
            case "Vietnam":
                return "comforter-regular";
            case "Korea":
                return "arizonia-regular";
            case "Japan":
                return "updock-regular"
            default:
                return ''
        }
    }
    const {id} = useParams()
    const art = arts.find(item => item.id=== Number(id))
   
    if (!art) {
        return <h2>Không tìm thấy bức tranh này!</h2>;
    }
    const relatedArts=arts.filter(item=>item.style===art.style && item.id !== art.id)
    const images = require.context('../assets/images/Gallery', false, /\.(png|jpe?g|svg)$/);
    const ImgSrc=art?.image ? images(`./${art.image}`) : testImg;
    
    
    return <>
        <section 
             style={{ backgroundImage: `url(https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2JhY2tncm91bmRqb2IxNzE5LWJhY2tncm91bmQtMDIuanBn.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",       
                backgroundPosition: "top ",
             }}
        >
            <div  className="container">
                <div className="row img_border">
                    <Link to='/gallery' className='text-decoration-none'>
                        <p className="back">Back to the Gallery</p>
                    </Link>
                    <div className="col-8 justify-content-center info_border pb-4">
                        <img className="img-fluid object-fit-contain w-100 " src={require(`../assets/images/Gallery/${art.image}`)}
                         alt={art.name}
                         style={{
                            maxHeight:"450px"
                         }}></img>
                    </div>
                    <div className="col-4 text-start">
                        <h2 className={`fw-bold ${getFont(art.style)} card-title text-start mt-2`}>{art.name}</h2><br/>
                        <h4 className="fw-semibold">A masterpiece of {art.style}</h4>
                        <h4 className="lead fst-italic">by {art.author} in {art.period}</h4>
                        <p className="fs-6">{art.l_des}</p>
                    </div>
                </div>
                <div className="row text-start mt-2 mb-4">
                    <h2>VIEW OTHER ARTWORKS FROM THIS REGION</h2>
                </div>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    {relatedArts.map((art)=>(
                        <div className='col-3' key={art.id}>
                            <GalleryCom art={art}></GalleryCom>
                        </div>
                    ))}
                </div>
                
                
                
            </div>
        </section>
        
    </>
};

export default GalleryDetails;