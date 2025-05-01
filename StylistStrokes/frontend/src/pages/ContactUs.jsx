import ContactAddress from "../components/ContactUs/ContactAddress"
import ContactForm from "../components/ContactUs/ContactForm"
import { motion } from "framer-motion"
import '../components/ContactUs/contact.css'
import '../components/ContactUs/font.css'
export default function ContactUs() {
    return (
        <div style={{ backgroundImage: `url(https://img.freepik.com/free-photo/abstract-surface-wood-texture-background_74190-12071.jpg?semt=ais_hybrid&w=740)` }}>
        <motion.div className="container py-3 justify-content-center d-flex flex-column align-items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            >
            <img
                src="https://shoutoutdfw.com/wp-content/uploads/2020/09/c-PersonalFarzanaRazzaque__Sr_Farzana_Writing_1600379293187.jpg"
                className="img-fluid justify-content-center d-block mx-auto"
                style={{ width: "100%", height: "400px", borderRadius: "10px", objectFit: "cover" }}
            ></img>
            <h1 className="mb-4 pt-4 pattaya-regular">Embrace the tradition today! We are always here to help</h1>
            <div className="row">
                <div className="col-md-6">
                    <ContactAddress></ContactAddress>
                </div>
                <div className="col-md-6">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </motion.div>
        </div>
    )
}