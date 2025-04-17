import 'bootstrap/dist/css/bootstrap.min.css';
import './font.css'

function ShopHeader(){
    return(
        <div className='container'>
            <div className='row justify-content-center text-center'>
                <h1 className='galada-regular fw-bold fst-italic' >SHOP</h1>
            </div>
            <div className='row justify-content-center text-center'>
                <h2 className="fw-bold" style={{fontFamily: "serif"} }>Premium Calligraphy Supplies</h2>
            </div>
            <div className='row justify-content-center mt-lg-4 mb-lg-5 '>
                <div className='col-8 text-center mx-auto'>
                    <p className='lead'>Discover our curated collection of authentic calligraphy tools and supplies, carefully selected to support your artistic journey.</p>
                </div>
            </div>
        </div>
    )
}

export default ShopHeader;