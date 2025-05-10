export default function AboutNumber({n,text}) {
    return (
        <div className="col-lg-6">
            <div className="rounded shadow text-center px-3 py-4 bg-light rounded">
                <h4 style={{color:"orangered"}} className="fw-bold display-6">{n}</h4>
                <p className="mb-0">{text}</p>
            </div>
        </div>
    )
}