import React from "react";

export default function LoginPage({
    email,
    password,
    show,
    message,
    error,
    SetEmail,
    SetPassword,
    setShow,
    LoginAPI,
}) {
    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100 my-4"
            style={{
                backgroundImage:
                    "url(https://www.artnews.com/wp-content/uploads/2020/12/AdobeStock_391176229.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="card p-4 shadow"
                style={{ minWidth: "400px", maxWidth: "1000px" }}
            >
                <h3 className="mb-3 text-center">Log into your account</h3>
                {message && <div className="alert alert-success">{message}</div>}
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={LoginAPI}>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="text"
                            className="form-control"
                            value={email}
                            onChange={(e) => SetEmail(e.target.value)}
                            required
                            placeholder="Email is mandatory"
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type={show ? "text" : "password"}
                            className="form-control"
                            value={password}
                            onChange={(e) => SetPassword(e.target.value)}
                            required
                            placeholder="Password is obligatory"
                        />
                        <div onClick={() => setShow(!show)}>
                            {show ? "Hide password" : "Show password"}
                        </div>
                    </div>
                    <button
                        type="submit"
                        style={{ backgroundColor: "orange" }}
                        className="btn w-100 text-white"
                    >
                        Create a new account
                    </button>
                </form>
            </div>
        </div>
    );
}
