import React from 'react';
import '../style/img.css'
function Img_card({sources, alt})
{
    return <img src={sources} alt={alt} className=' m-1 img-fluid p-1 rounded-3' />;
}
export default Img_card;