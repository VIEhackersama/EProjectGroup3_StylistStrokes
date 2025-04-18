import React from 'react';
import products from "../../assets/data/products.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShopCard from './shop_items';
import './font.css'



function ShopList(){
    return(
        <>
            <section>
                <div className='row row-cols-1 row-cols-md-4 g-4'>
                    {products.slice(0,4).map(product=>(
                        <div className='col-3' key={product.id}>
                            <ShopCard product={product}></ShopCard>
                        </div>
                    ))}
                </div>
            </section>
        </>
        
        
    )
}

export default ShopList;