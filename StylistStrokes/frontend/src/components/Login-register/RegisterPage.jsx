import React from "react";
import './font.css'
export default function RegisterPage({
    name,
    email,
    password,
    show,
    message,
    SetName,
    SetEmail,
    SetPassword,
    setShow,
    registerAPI,
}) {
    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage:
                    "url(https://media.cntraveler.com/photos/58a76bb1e85725558885abb3/16:9/w_2560%2Cc_limit/cherry-blossom-season.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="container card p-4 shadow"
                style={{ maxWidth: "1400px", backgroundColor:"#edd8bb"}}
            >
                <div className="cal-sans-regular h1 mb-3 text-center">Register now! It's free</div>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img
                            src="https://images.squarespace-cdn.com/content/v1/6364bb76e5662e1fb6b69519/49cea5f8-a725-4f4a-90ed-06af04f71804/S175_6.jpg"
                            className="img-fluid rounded"
                        />
                    </div>

                    <div className="col-md-6">
                        {message && <div className="alert alert-success">{message}</div>}
                        <form onSubmit={registerAPI}>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => SetName(e.target.value)}
                                    required
                                    placeholder="Please provide your name, or nickname"
                                />
                            </div>
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
                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    className="form-control"
                                    required
                                    placeholder="Please confirm your password"
                                />
                            </div>
                            <div className="form-check mb-3">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    required
                                />
                                <label className="form-check-label" htmlFor="acceptTos">
                                    By submitting this form, you are agreeing to our <a className="fw-semibold" href="#">Terms of services</a>
                                </label>
                            </div>
                            <button
                                type="submit"
                                style={{ backgroundColor: "blue" }}
                                className="btn w-100 text-white py-2 my-3"
                            >
                                Create a new account
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}