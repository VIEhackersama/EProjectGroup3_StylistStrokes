export default function AboutNumber({n,text}) {
    return (
        <div className="col-6">
            <div className="text-center px-3 py-4 bg-light rounded">
                <h4 className="fw-bold display-6 text-success">{n}</h4>
                <p className="mb-0">{text}</p>
            </div>
        </div>
    )
}