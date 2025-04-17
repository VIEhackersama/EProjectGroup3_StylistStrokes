function Video(props)
{
    return(
        <div className="card mt-4 shadow card-hover-shadow" style={{width: 'auto'}}>
            <img src={props.image} className="card-img-top mx-auto d-block img-fluid " style={{width: '25rem',height:"20rem"}} alt="..."></img>
            <div className="card-body">
                <span className="card-title">{props.name}</span>
                <p className="card-text">{props.des}</p>
                <a href="#" className="btn btn-primary">Search</a>
            </div>
        </div>
    );

}
export default Video;