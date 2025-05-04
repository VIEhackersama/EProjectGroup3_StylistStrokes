import '../styles/card.css';

function Video(props) {
  return (
    <div className="card mt-4 shadow-lg card-hover-shadow" style={{ width: '100%', borderRadius: '15px' }}>
      <img
        src={props.image}  // Đảm bảo props.image có giá trị đúng
        className="card-img-top mx-auto d-block img-fluid rounded-top"
        style={{ height: '220px', objectFit: 'cover' }}
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title text-center text-primary">{props.name}</h5>
        <p className="card-text text-muted text-center">{props.des}</p>
        <div className="text-center">
          <a href={props.link} className="btn btn-info btn-lg" style={{ borderRadius: '30px' }}>Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default Video;
