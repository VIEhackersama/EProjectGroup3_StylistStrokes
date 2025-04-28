import React from "react";
import { Link, useParams } from "react-router-dom";
import arts from "../assets/data/gallery.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font.css'
import '../styles/gallery_detail.css'

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
        
    
    
    return <>
        <section>
            <div  className="container">
                <div className="row text-start">
                    <Link to={"/gallery"} onClick={() => window.scrollTo(0, 0)}><p>Back to the gallery</p></Link>
                </div>
                <div className="row img_border">
                    <div className="w-100 justify-content-center d-flex flex-row">
                        <img className="image-detail img-fluid object-fit-contain my-5" src={require(`../assets/images/Gallery/${art.image}`)}
                        style={{height:"550px"}} alt={art.name}
                        ></img>
                        
                    </div>
                </div>
                <div className="row justify-content-center img_border">
                    <div className="col-6 text-start info_border">
                        <h2 className={`fw-bold ${getFont(art.style)} card-title text-start mt-2`}>{art.name}</h2><br/>
                        <h4 className="fw-bold">A masterpiece of {art.style}</h4>
                        <h4 className="lead">by {art.author} in {art.period}</h4>
                        

                    </div>
                    <div className="col-6 text-start mt-2">
                        <h2>PRESS RELEASE</h2>
                        <p className="mt-4">{art.s_des}</p>
                    </div>
                </div>
                <div className="row text-start">
                    <h2>ARTWORKS FROM THIS REGION</h2>
                </div>
                <div className="row text-start"></div>
            </div>
        </section>
    </>
};

export default GalleryDetails;