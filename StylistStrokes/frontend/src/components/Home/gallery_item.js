import 'bootstrap/dist/css/bootstrap.min.css';
import './font.css'
import { Link } from 'react-router-dom';
import "./gallery.css"

const GalleryCard = ({art})=>{
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
    
    return(
        <Link to={`/gallery`} className='text-decoration-none'>
            <div className="card border-0 shadow-none p-0 art-card">
                <img className='img-fluid card-img-top object-fit-cover w-100 rounded-0' src={require(`../../assets/images/Gallery/${art.image}`)} alt={art.name}
                style={{
                    height:"300px"
                }}></img>
                <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
                <div className="card-img-overlay align-self-end text-start" style={{zIndex:'2'}}>
                    <h4 className={`fw-bold text-white ${getFont(art.style)} art-name`}>{art.name}</h4>
                    <p className="text-white art-description m-0">{art.s_des}</p>
                </div>
            </div>
        </Link>

    )
}
export default GalleryCard