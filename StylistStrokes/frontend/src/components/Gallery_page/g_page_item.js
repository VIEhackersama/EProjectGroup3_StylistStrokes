import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/font.css'
import "../../styles/gallery_page.css"
import testImg from "../../assets/images/Gallery/siah_masho.jpg"
import { Link } from 'react-router-dom';

const GalleryCom=({art})=>{
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
    const images = require.context('../../assets/images/Gallery', false, /\.(png|jpe?g|svg)$/);

    const ImgSrc = art?.image ? images(`./${art.image}`) : testImg;


    return(
        
        <div className='c-border'>
            <div className="card p-0 rounded-0 w-100" style={{ backgroundColor: "white"}}>
                <Link to={`/gallery/${art.id}`} onClick={() => window.scrollTo(0, 0)}>
                <img className='img-fluid card-img-top rounded-0 w-100 object-fit-cover' src={ImgSrc}
                style={{height:"300px"}} alt={art.name}></img>
                </Link>
                <div className='card-body px-3 py-4 text-start'style={{backgroundColor:"rgb(247, 245, 245)"}}>
                    <h2 className={`great-vibes-regular`}>{art.name}</h2>
                    <p className='fst-italic fw-medium'>by {art.author}</p>
                    <p className='fw-thin fst-italic'>from {art.style} {art.period}</p>
                </div>
            </div>
        </div>
        
    )
}

export default GalleryCom;