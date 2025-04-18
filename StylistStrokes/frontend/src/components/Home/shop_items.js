import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";
import './font.css'
// Chạy những cái này để hiện icon
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome



const ShopCard=({product})=>{
    return(
        // <Link to={`/home`} style={{textDecoration: "none", color: "inherit"}}>
            <div className="card border-0 shadow-none p-0" style={{ backgroundColor: "white"}}>
                <Link to={`/caligraphy`} style={{textDecoration:"none"}}>
                    <img className='img-fluid card-img-top rounded-0 w-100 object-fit-cover' src={require(`../../assets/images/But_long/${product.image}`)} alt={product.name}
                    style={{height:"300px"}}></img>
                </Link>
                <div className='card-body px-0'>
                    <h5 className='card-title text-start fw-bold' style={{fontFamily: "serif"}}>{product.name}</h5>
                    <div className='px-0' style={{minHeight:"50px"}}>
                        <p className='card-text text-start'>{product.description}</p>
                    </div>
                    
                </div>
                <div className='row justify-content-between'>
                    <div className='col-5 text-start'>
                        <p className='fw-bold'>${product.price}</p>
                    </div>
                    <div className='col-auto text-end'>
                        <Link to={`/caligraphy`} style={{textDecoration:"none"}}>
                            <FontAwesomeIcon icon={faCartShopping}/>
                        </Link>
                    </div>
                </div>
            </div>
        // </Link>
    )
}

export default ShopCard;