import React from 'react';
import arts from "../../assets/data/gallery.json"
import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryCard from './gallery_item';
import './font.css'

function GalleryList(){
    return(
        <div className='row row-cols-1 row-cols-md-3 g-4'>
            {arts.slice(0,6).map(art=>(
            <div className='col-4' key={art.id}>
                <GalleryCard art={art}></GalleryCard>
            </div>
            ))}
        </div>
        
    )
}

export default GalleryList;