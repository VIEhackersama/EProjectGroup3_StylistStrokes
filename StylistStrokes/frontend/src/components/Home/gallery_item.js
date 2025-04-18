import 'bootstrap/dist/css/bootstrap.min.css';
import './font.css'


const GalleryCard = ({art})=>{
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
    
    return(
        <div className="card border-0 shadow-none p-0">
            <img className='img-fluid card-img-top object-fit-cover w-100 rounded-0' src={require(`../../assets/images/Gallery/${art.image}`)} alt={art.name}
            style={{height:"300px"}}></img>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{
                background: "linear-gradient(to bottom, rgba(127, 127, 127, 0), rgba(0, 0, 0, 0.82))",
                zIndex:'1'
            }}></div>
            <div className="card-img-overlay align-self-end text-start" style={{zIndex:'2'}}>
                <h4 className={`fw-bold text-white ${getFont(art.style)}`}>{art.name}</h4>
            </div>
        </div>
    )
}
export default GalleryCard