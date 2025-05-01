import 'bootstrap/dist/css/bootstrap.min.css';
import arts from "../../assets/data/gallery.json";
import React, {useState, useEffect, useRef} from 'react';
import GalleryCom from './g_page_item';

function GalleryDisplay(){
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 12;

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
        pageButtons.push(
            <button
              key={0}
              onClick={() => gotoPage(0)}
              className={`btn mx-1 ${currentPage === 0 ? 'btn-primary' : 'btn-outline-light'} pag_btn`}
            >
              1
            </button>
        );
        if (currentPage > 3) {
            pageButtons.push(<span key="start-ellipsis" className="text-white pag_btn">...</span>);
        }
      
        // Các trang gần currentPage
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            if (i > 0 && i < end) {
                pageButtons.push(
                    <button
                    key={i}
                    onClick={() => gotoPage(i)}
                    className={`btn mx-1 ${currentPage === i ? 'btn-primary' : 'btn-outline-light'} pag_btn`}
                    >
                    {i + 1}
                    </button>
                );
            }
        }
        if (currentPage < totalPages - 4) {
            pageButtons.push(<span key="end-ellipsis" className="text-white pag_btn">...</span>);
        }
      
          // Luôn hiện trang cuối
        if (end > 0) {
            pageButtons.push(
                <button
                    key={end}
                    onClick={() => gotoPage(end)}
                    className={`btn mx-1 ${currentPage === end ? 'btn-primary' : 'btn-outline-light'} pag_btn`}
                >
                    {end + 1}
                </button>
            );
        }
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
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {pages[currentPage].map((art) => (
                    <div className='col-3' key={art.id}>
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