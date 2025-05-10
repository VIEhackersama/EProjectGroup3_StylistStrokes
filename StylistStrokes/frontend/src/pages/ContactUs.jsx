import ContactAddress from "../components/ContactUs/ContactAddress"
import ContactForm from "../components/ContactUs/ContactForm"
import { motion } from "framer-motion"
import '../components/ContactUs/contact.css'
import '../components/ContactUs/font.css'
// https://shoutoutdfw.com/wp-content/uploads/2020/09/c-PersonalFarzanaRazzaque__Sr_Farzana_Writing_1600379293187.jpg
export default function ContactUs() {
    return (
        <div style={{
            backgroundImage: `url(https://media.istockphoto.com/id/1313248004/photo/wood-texture-with-empty-space-wooden-background.jpg?s=612x612&w=0&k=20&c=0IfeyNmpHkAkCZrSzO0mtplGr3_mDkovHxwhi4HDdUE=)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
         }}>
            <div className="position-relative container-fluid d-flex flex-column justify-content-center align-items-center">
                <div className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundImage: `url(https://shoutoutdfw.com/wp-content/uploads/2020/09/c-PersonalFarzanaRazzaque__Sr_Farzana_Writing_1600379293187.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        zIndex: 1,
                        filter: "brightness(65%)",
                    }}
                >
                </div>
                <div className="position-relative text-center my-3" style={{ zIndex: 2 }}>
                    <h1 className="intro1 mea-culpa-regular fw-medium text-white my-4">You asked, you requested, we respond</h1>
                </div>
            </div>
            <motion.div className="container py-3 justify-content-center d-flex flex-column align-items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

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