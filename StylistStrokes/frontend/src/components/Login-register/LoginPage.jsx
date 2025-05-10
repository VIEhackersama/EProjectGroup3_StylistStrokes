import React from "react";
import './font.css'
import logo from "../../assets/images/logoss.png";
import Googlebtn from "./googlebtn";
import { motion } from "framer-motion";
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
            className="d-flex justify-content-center align-items-center p-5 "
            style={{
                backgroundImage: `url(${require('../../assets/images/login_bg.webp')})`,
                // backgroundImage: "url(https://cdn.britannica.com/09/157609-050-54CC600B/Hand-with-pencil-writing-on-page.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <motion.div
                initial={{ opacity: 0.8, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="card p-4 shadow container"
                style={{
                    minWidth: "400px", maxWidth: "900px",
                    // backgroundImage: "url(https://i.ytimg.com/vi/9fmjCi6Cb_o/maxresdefault.jpg)",
                    //  backgroundPosition: "center", 
                    // backgroundSize: "",
                    backgroundImage: "linear-gradient(#ffe6c5,rgb(167, 135, 120) 100%)"
                }
                }
            >
                <div
                    className="d-flex justify-content-center align-items-center mb-4"
                >
                    <img src={logo} alt="" style={{ filter: "invert(00%)", width: "300px" }} />
                </div>
                <h3 style={{ color: "#9c4414" }} className="cal-sans-regular h1 mb-3 p-3 text-center">Already have an account? Welcome back!</h3>
                <div className="d-flex justify-content-center">
                    {/* <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img
                            src="https://piecescalligraphy.com/wp-content/uploads/2016/01/img_20160117_190542.jpg"
                            className="img-fluid rounded-5"
                        />
                    </div> */}
                    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100%" }}>
                        <form onSubmit={LoginAPI} style={{ maxWidth: "900px", width:"100%" }}>
                            <div className="mb-3">
                                <label style={{ color: "#9c4414" }} className="form-label h3 pattaya-regular">Email</label>
                                <input
                                    type="text"
                                    className="form-control border border-info-subtle rounded-3"
                                    value={email}
                                    onChange={(e) => SetEmail(e.target.value)}
                                    required
                                    placeholder="awesome@likeyou.com"
                                />
                            </div>
                            <div className="mb-3">
                                <label style={{ color: "#9c4414" }} className="form-label h3 pattaya-regular">Password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    className="form-control border border-info-subtle rounded-3"
                                    value={password}
                                    onChange={(e) => SetPassword(e.target.value)}
                                    required
                                    placeholder="Everyone has the right to freedom of thought"
                                />
                                <div className="form-check mb-3 py-2">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                    />
                                    <label className="text-black form-check-label" htmlFor="acceptTos">
                                        Remember password?
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                style={{ backgroundColor: "orange" }}
                                className=" btn w-100 text-white btn-gg"
                            >
                                <span className="special-gothic">Login</span>
                            </button>
                            <div style={{color:"white"}} className="d-flex align-items-center my-1">
                                <hr className="flex-grow-1" />
                                <span className="mx-2">or</span>
                                <hr className="flex-grow-1" />
                            </div>
                            <Googlebtn></Googlebtn>
                            <label className="form-check-label text-white" htmlFor="acceptTos">
                                By continuing with Google service, you are confirming that you have read and agreed to <a className="fw-semibold tos" href="#">Terms of services</a>
                            </label>
                        </form>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
