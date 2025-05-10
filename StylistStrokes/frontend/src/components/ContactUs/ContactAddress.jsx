import MapEmbed from "./Map";

export default function ContactAddress() {
    return (
        <div className="container p-3">
            <h2 className="section-title mb-4">
                Frequently asked questions
                <img src="https://jakhurikar.com/Birthday-Background/Brush-Stroke/abstract-brush.png" alt="Decoration" className="section-deco " />
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
                    Simply email us or let us know in the form next to this section. We are always welcoming the newcomers and enthusiast students!
                </p>
            </div>

            <h2 className="section-title mt-3">
                Address, points of contact
                <img src="https://jakhurikar.com/Birthday-Background/Brush-Stroke/abstract-brush.png" alt="Decoration" className="section-deco" />
            </h2>

            <p><strong>FPT Aptech Hanoi | StylistStrokes Headquarter</strong><br />8A Tôn Thất Thuyết, Mỹ Đình, Nam Từ Liêm, Hà Nội</p>
            <p><strong>Phone</strong><br />(+84) 234 567 890</p>
            <p><strong>Email</strong><br />
            For bussines partner: <a href="mailto:partner@styliststrokes.com">partner@styliststrokes.com</a><br/>
                Other: <a href="mailto:styliststrokes@customercare.com">styliststrokes@customercare.com</a>
            </p>
            <p><strong>Map</strong></p>
            <MapEmbed></MapEmbed>
        </div>
    );
}
