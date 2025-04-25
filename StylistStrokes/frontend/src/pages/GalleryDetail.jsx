import React from "react";
import { useParams } from "react-router-dom";
import arts from "../assets/data/gallery.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/font.css'

const GalleryDetails = () => {
    const {id} = useParams()
    const art = arts.find(item => item.id=== Number(id))
    if (!art) {
        return <h2>Không tìm thấy bức tranh này!</h2>;
    }
    return <>
        <div className="container">
            <h1>{art.name}</h1>
            <img src={require(`../assets/images/Gallery/${art.image}`)}></img>
        </div>
    </>
};

export default GalleryDetails;