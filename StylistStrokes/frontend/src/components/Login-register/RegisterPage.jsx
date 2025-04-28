import React from "react";
import './font.css'
import { motion } from "framer-motion";
import Googlebtn from "./googlebtn";
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
            className="d-flex justify-content-center align-items-center py-5"
            style={{
                backgroundImage:
                    "url(https://storage.googleapis.com/gweb-uniblog-publish-prod/images/yoodle_calligraphy_homepage_promo.2e16d0ba.fill-1440x810.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <motion.div
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="container card p-4 shadow grad"
                style={{ maxWidth: "1400px", backgroundColor: "#f5ecce" }}
            >
                <div style={{ color: "#4E342E" }} className="cal-sans-regular h1 mb-3 p-3 text-center">Create a StylistStroke account now! It's free!</div>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img
                            src="https://piecescalligraphy.com/wp-content/uploads/2016/01/img_20160117_190542.jpg"
                            className="img-fluid rounded-5" 
                        />
                    </div>

                    <div className="col-md-6">
                        {message && <div className="alert alert-success">{message}</div>}
                        <form onSubmit={registerAPI}>
                            <div className="mb-3">
                                <label style={{ color: "#4E342E" }} className="form-label h3 pattaya-regular ">Please let me know your awesome name</label>
                                <input
                                    type="text"
                                    className="form-control border border-danger-subtle rounded-3"
                                    value={name}
                                    onChange={(e) => SetName(e.target.value)}
                                    required
                                    placeholder="Provide your name, or nickname"
                                />
                            </div>
                            <div className="mb-3">
                                <label style={{ color: "#4E342E" }} className="form-label h3 pattaya-regular ">Email</label>
                                <input
                                    type="text"
                                    className="form-control border border-danger-subtle rounded-3"
                                    value={email}
                                    onChange={(e) => SetEmail(e.target.value)}
                                    required
                                    placeholder="Email is mandatory"
                                />
                            </div>
                            <div className="mb-3">
                                <label style={{ color: "#4E342E" }} className="form-label h3 pattaya-regular ">Set a strong password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    className="form-control border border-danger-subtle rounded-3"
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
                                <label style={{ color: "#4E342E" }} className="form-label h3 pattaya-regular ">Confirm Password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    className="form-control border border-danger-subtle rounded-3"
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
                                className="btn w-100 text-white py-2 my-3 btn-inf"
                            >
                                Create a new account
                            </button>

                            <div className="d-flex align-items-center my-1">
                                <hr className="flex-grow-1" />
                                <span className="mx-2">or</span>
                                <hr className="flex-grow-1" />
                            </div>
                            {/* <button type="button" className="btn w-100 btn-light border btn-gg">
                                <img src="https://techdocs.akamai.com/identity-cloud/img/social-login/identity-providers/iconfinder-new-google-favicon-682665.png" alt="" />
                            </button> */}
                            <Googlebtn></Googlebtn>
                            <label className="form-check-label mt-2" htmlFor="acceptTos">
                                By logging in via Google service, you are agreeing to our <a className="fw-semibold" href="#">Terms of services</a> and any related affiliated parties' terms. All rights reserved
                            </label>
                        </form>

                    </div>
                </div>
            </motion.div>
        </div>
    );
}