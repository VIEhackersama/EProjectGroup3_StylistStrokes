function Video(props)
{
    return(
        <div className="card mt-4" style={{width: 'auto'}} >
  <img src={props.image} className="card-img-top" style={{width:'18rem',height:"18rem"}}  alt="..."></img>
  <div className="card-body">
    <span className="card-title">{props.name}</span>
    <p className="card-text">{props.description}</p>
    <a href="#" className="btn btn-primary">Search</a>
  </div>
</div>
    );
}
export default Video;