import React from "react";

const MapEmbed = () => {
    return (
        <div className="mt-4">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2718.2471476669157!2d105.77954517025779!3d21.02887625537111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1sen!2s!4v1745764605054!5m2!1sen!2s" 
                style={{width:"100%",
                height:"300" ,
                style:"border:0;",
                allowfullscreen:"",
                loading:"lazy",
                referrerpolicy:"no-referrer-when-downgrade"}}>
            </iframe>
        </div>
    );
};

export default MapEmbed;
