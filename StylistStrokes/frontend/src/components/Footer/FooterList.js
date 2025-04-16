export default function FooterList({ a1, a2, a3, a4, a5, a6 }) {
    return (
        <ul className="mb-4 list-unstyled">
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href="">
                    {a1}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href="">
                    {a2}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href="">
                    {a3}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href="">
                    {a4}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href="">
                    {a5}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href="">
                    {a6}
                </a>
            </li>
        </ul>
    );
}