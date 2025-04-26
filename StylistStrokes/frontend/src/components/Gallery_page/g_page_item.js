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
        
        <div className="card border-0 shadow-none p-0" style={{ backgroundColor: "white"}}>
            <Link to={`/gallery/${art.id}`}>
            <img className='img-fluid card-img-top rounded-0 w-100 object-fit-cover' src={ImgSrc}
             style={{height:"300px"}} alt={art.name}></img>
            </Link>
            <div className='card-body px-0'>
                <h5 className={`fw-bold ${getFont(art.style)} card-title text-start`}>{art.name}</h5>
                <p>Made by {art.author}</p>
                <p>Origin: {art.style}</p>
            </div>
        </div>
    )
}

export default GalleryCom;