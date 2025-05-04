import React from "react";
import { motion,useInView } from "framer-motion";
import galleryImages from "./galleryImages";
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useRef } from "react";
const MasonryImagesGallery = () => {
  const AnimatedImage = ({ src }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <motion.img
        ref={ref}
        initial={{ opacity: 0, scale: 1.2 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        src={src}
        alt=""
        style={{ width: "100%", display: "block", borderRadius: "10px" }}
        className="masonry__img"
      />
    );
  };

  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter='1rem'>
        {
            galleryImages.map((item,index) =>(
              <AnimatedImage src={item} key={index} />
            ))}
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImagesGallery;