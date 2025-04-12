import "./font.css";
export default function AboutTitle() {
    return (
        <div className="row justify-content-center mb-5">
            <div className="col col-lg-8 text-center">
                <h1
                    className="mb-2 fw-medium playwrite-mx"
                    style={{ color: "orange", fontStyle: "oblique" }}
                >
                    About Us
                </h1>
                <h2 className="display-5 fw-bold mb-4 playwrite-cu">
                    StylistStrokes: The Beauty of legacy and technology interwined
                </h2>
                <div
                    className=" border-bottom border-danger-subtle mx-auto mb-4"
                    style={{ width: "100px", height: "3px" }}
                ></div>
                <p className="lead fw-semibold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam, illo
                    commodi. Obcaecati minus, at aut sapiente molestias asperiores
                    excepturi provident placeat cumque adipisci. Incidunt quos odio
                    ducimus ad id eos?
                </p>
            </div>
        </div>
    );
}
