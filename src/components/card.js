import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import items from '../data/object.json'
import Img_card from './img_card';
function Card_js()
{
    return(
        <div className='p-2 row'>
        {items.map(items => (
            <div className='col-6 col-md-4 mb-4' key={items.id}>
                <Card className='border border-primary-subtle' style={{width:"auto", height:"auto"}}>
                    <Img_card className='card-img' style={{width:"auto"}} sources={items.src} alt={items.alt}/> 
                    <Card.Body>
                        <Card.Title className='text-primary fs-3'>{items.title}</Card.Title>
                        <Card.Text><b>{items.description}</b> </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        ))}
        </div>
    );
}
export default Card_js;