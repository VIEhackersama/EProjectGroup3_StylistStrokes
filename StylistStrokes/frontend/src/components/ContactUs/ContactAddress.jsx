import MapEmbed from "./Map";

export default function ContactAddress() {
    return (
        <div className="container p-3">
            <h2 className="section-title mb-4">
                Frequently asked questions
                <img src="https://i.pinimg.com/736x/bd/b2/6b/bdb26b767322d9009c76c721a2df6329.jpg" alt="Decoration" className="section-deco " />
            </h2>

            <div className="mb-4">
                <h4 className="sub-title">
                    If you are the bussines and having interest in us
                </h4>
                <p>
                    Request a personalized demo of StylistStrokes’s lessons directly by submitting this form. Learn more at <a href="#">Terms of services</a>
                </p>
            </div>

            <div className="mb-4">
                <h4 className="sub-title">
                    If you are the student, teacher or just an ordinary person who wants to pick up a hobby
                </h4>
                <p>
                    Simply email us or have a nice phone call. We are always welcoming the newcomers and enthusiast students!
                </p>
            </div>

            <h2 className="section-title mt-3">
                Points of Contact
                <img src="https://jakhurikar.com/Birthday-Background/Brush-Stroke/abstract-brush.png" alt="Decoration" className="section-deco" />
            </h2>

            <p><strong>V.N. | StylistStrokes Inc.</strong><br />8A Tôn Thất Thuyết, Mỹ Đình, Nam Từ Liêm, Hà Nội</p>
            <p><strong>Phone</strong><br />(+84) 234 567 890</p>
            <p><strong>Email</strong><br /><a href="mailto:partner@styliststrokes.com">partner@styliststrokes.com</a></p>
            {/* <p><strong>Support & Customer care</strong><br /><a href="mailto:support@styliststrokes.com">support@styliststrokes.com</a></p> */}

            <MapEmbed></MapEmbed>
        </div>
    );
}
