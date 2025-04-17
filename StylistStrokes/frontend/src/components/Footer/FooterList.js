export default function FooterList({ a1, a2, a3, a4, a5, a6 ,b1, b2 ,b3, b4, b5, b6}) {
    return (
        <ul className="mb-4 list-unstyled">
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href={b1}>
                    {a1}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href={b2}>
                    {a2}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href={b3}>
                    {a3}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href={b4}>
                    {a4}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href={b5}>
                    {a5}
                </a>
            </li>
            <li className="mb-2">
                <a className="text-light opacity-75 text-decoration-none hover-text-danger" href={b6}>
                    {a6}
                </a>
            </li>
        </ul>
    );
}