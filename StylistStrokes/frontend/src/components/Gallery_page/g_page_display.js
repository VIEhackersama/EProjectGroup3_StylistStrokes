import 'bootstrap/dist/css/bootstrap.min.css';
import arts from "../../assets/data/gallery.json";
import React, {useState, useEffect, useRef} from 'react';
import GalleryCom from './g_page_item';

function GalleryDisplay(){
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 9;

    const chunkArray = (arr, size) => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
          arr.slice(index * size, index * size + size)
        );
    };
    
    const pages = chunkArray(arts, itemsPerPage);
    const totalPages = pages.length;

    
    
    const gotoPage=(pageIndex)=>{
        if(pageIndex>=0 && pageIndex < totalPages){
            setCurrentPage(pageIndex);
        }
    }

    // Cuộn lên trang đầu
    const topRef = useRef(null);

    useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [currentPage]);

    const renderPag = ()=>{
        const maxVisible = 5;
        const start = 0;
        const end = totalPages - 1;
        const pageButtons = [];
        
        for (let i = 0; i < totalPages; i++) {
            pageButtons.push(
              <button
                key={i}
                onClick={() => gotoPage(i)}
                className={`btn mx-1 ${currentPage === i ? 'btn-primary' : 'btn-danger'} pag_btn`}
              >
                {i + 1}
              </button>
            );
        }
      
          // Luôn hiện trang cuối
        
        return(
            <>
                <button
                    className='btn btn-outline-light mx-1'
                    onClick={()=>gotoPage(currentPage-1)}
                    disabled={currentPage===0}
                >&lt;</button>
                {pageButtons}
                <button
                    className='btn btn-outline-light mx-1'
                    onClick={()=>gotoPage(currentPage+1)}
                    disabled={currentPage===end}
                >
                  &gt;  
                </button>
            </>
        )
    }
    
    return(
        <div>
            <div className='row g-4 m-2'>
                {pages[currentPage].map((art) => (
                    <div className='col-lg-4 col-md-6 col-sm-12' key={art.id}>
                        <GalleryCom art={art} />
                    </div>            
                ))}
            </div>
            

            <div className='my-3 d-flex justify-content-center align-items-center flex-wrap'>
                {renderPag()}
            </div>
        
        </div>
        
        
    )
}

export default GalleryDisplay;