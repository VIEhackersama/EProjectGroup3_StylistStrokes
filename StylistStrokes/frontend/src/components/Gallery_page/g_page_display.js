import 'bootstrap/dist/css/bootstrap.min.css';
import arts from "../../assets/data/gallery.json";
import React from 'react';
import GalleryCom from './g_page_item';

function GalleryDisplay(){
    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
          arr.slice(index * size, index * size + size)
        );
      };
    
      const pages = chunkArray(arts, 6);
    return(
        <>
        {pages.map((page, pageIndex) => (
            <div key={pageIndex} className="gallery-page mb-5">
                {page.map((art) => (
                    <div key={art.id}>
                        <GalleryCom art={art} reverse={art.id % 2 === 0} />
                    </div>
                ))}
            </div>
        ))}
        
        </>
        
        
    )
}

export default GalleryDisplay;