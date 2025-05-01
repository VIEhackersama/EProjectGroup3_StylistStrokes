import { FaXTwitter } from "react-icons/fa6";
import { SlSocialInstagram, SlSocialFacebook, SlSocialReddit } from "react-icons/sl";
import '../Footer/Icon.css';
export default function Icon() {
    return (
        <div className="d-flex gap-3 social-icons">
            <a href="https://facebook.com" className="text-white me-2"><FaXTwitter size={20} /></a>
            <a href="https://youtube.com" className="text-white me-2"><SlSocialInstagram size={20} /></a>
            <a href="https://instagram.com" className="text-white"><SlSocialFacebook size={20} /></a>     
            <a href="https://instagram.com" className="text-white"><SlSocialReddit size={20} /></a>           
        </div>
    )
}