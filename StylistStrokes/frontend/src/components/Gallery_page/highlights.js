import 'bootstrap/dist/css/bootstrap.min.css';

import "../../styles/gallery_page.css"
import { Link } from 'react-router-dom';
import testImg from "../../assets/images/Gallery/siah_masho.jpg"


const GalHighlights = ({art}) => {
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
        <Link to={`/gallery/${art.id}`} onClick={() => window.scrollTo(0, 0)} className='text-decoration-none'>
            
                <div className="card border-0 shadow-none p-0 art-card" 
                style={{
                    height:"300px"
                }}
                >
                    <img className='img-fluid card-img-top w-100 h-100 object-fit-cover rounded-0' src={require(`../../assets/images/Gallery/${art.image}`)} alt={art.name}
                    ></img>
                    <div className="overlay position-absolute top-0 start-0 w-100 h-100"></div>
                    <div className="card-img-overlay align-self-end text-start" style={{zIndex:'2'}}>
                        <h4 className={`fw-bold text-white ${getFont(art.style)} art-name`}>{art.name}</h4>
                        <p className="text-white art-description m-0 fs-6">{art.s_des}</p>
                    </div>
                </div>
            
        </Link>

    )
    

}

export default GalHighlights;