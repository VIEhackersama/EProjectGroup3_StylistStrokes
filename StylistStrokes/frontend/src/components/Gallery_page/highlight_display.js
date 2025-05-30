import React, { useState, useEffect, useRef } from 'react';
import arts from "../../assets/data/gallery.json";
import GalHighlights from './highlights';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "../../styles/font.css";
import "../../styles/gallery_page.css"
import { motion } from 'framer-motion';

// Chạy những cái này để hiện icon
// npm i --save @fortawesome/fontawesome-svg-core
// npm install --save @fortawesome/free-solid-svg-icons
// npm install --save @fortawesome/react-fontawesome


const GroupbyStyle=()=>{
    const styleMap = {};

    arts.forEach(art => {
        const style = art.style || 'Unknown';
        if (!styleMap[style]) {
            styleMap[style] = [];
        }
        styleMap[style].push(art);
    });
  
    Object.keys(styleMap).forEach(style => {
        styleMap[style].sort((a, b) => a.popularity - b.popularity);
        styleMap[style] = styleMap[style].slice(0, 3);
    });
  
    return styleMap;
}

const HighlightDisplay=()=>{
    const groupedArts = GroupbyStyle(arts);
    const styleKeys = Object.keys(groupedArts);
    const [currentStyleIndex, setCurrentStyleIndex] = useState(0);
    const intervalRef = useRef(null);
    const resetInterval=()=>{
        if(intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current=setInterval(()=>{
            setCurrentStyleIndex(prevIndex=>(prevIndex+1)%styleKeys.length);
        },5000)

    }

    useEffect(() => {
        resetInterval();
    
        return () => clearInterval(intervalRef.current);
    }, [styleKeys.length]);
    const currentRegion = styleKeys[currentStyleIndex];
    const currentArts = groupedArts[currentRegion];
    
    const handleIndicatorClick = (index) => {
        setCurrentStyleIndex(index);
        resetInterval()
    };
    const handlePrev = () => {
        setCurrentStyleIndex((prevIndex) => 
            prevIndex === 0 ? styleKeys.length - 1 : prevIndex - 1
        );
        resetInterval()
    };
    
    const handleNext = () => {
        setCurrentStyleIndex((prevIndex) => 
            prevIndex === styleKeys.length - 1 ? 0 : prevIndex + 1
        );
        resetInterval()
    };
    function getFont(style){
        switch (style){
            case "China":
                return "alegreya-regular";
            case "Western":
                return "mea-culpa-regular";
            case "Arabic":
                return "quintessential-regular";
            case "Vietnam":
                return "comforter-regular";
            case "Korea":
                return "arizonia-regular";
            case "Japan":
                return "updock-regular";
            case "India":
                return "pirata-one-regular"
            default:
                return ''
        }
    }
    

    return<>
        <div className='row justify-content-center text-center '>
            <h1 style={{fontSize:"3.6rem"}} className={`region ${getFont(currentRegion)}`}>{currentRegion}</h1>

            <div className="row justify-content-center ">
                <div className='col-1 justify-content-center d-flex flex-column '>
                    <motion.div
                    whileTap={{scale:1.5}}
                    whileHover={{scale:1.2}}
                    >
                        <FontAwesomeIcon className='arrow-icon' onClick={handlePrev} icon={faChevronLeft}/>
                    </motion.div>
                    
                </div>
                <div className='col-9 m-2 justify-content-center d-flex flex-wrap'>
                    {currentArts.slice(0, 3).map((art) => (
                        <div className="col-md-12 col-lg-3 mb-4 mx-3" key={art.id}>
                            <GalHighlights art={art}/>
                        </div>
                    ))}
                </div>
                
                <div className='col-1 justify-content-center d-flex flex-column '>
                    <motion.div
                         whileTap={{scale:1.5}}
                         whileHover={{scale:1.2}}
                    >
                        <FontAwesomeIcon className='arrow-icon' onClick={handleNext} icon={faChevronRight}/>
                    </motion.div>
                    
                </div>
            </div>
            {/* Indicators */}
            <div className="d-flex justify-content-center mt-3">
                {styleKeys.map((_, index) => (
                <motion.button
                    whileHover={{scale:1.2}}
                    whileTap={{scale:1}}
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`mx-1 rounded-circle`}
                    style={{
                    width: '12px',
                    height: '12px',
                    border: '0',
                    backgroundColor: index === currentStyleIndex ? 'gold' : 'rgb(234, 183, 101)',
                    opacity: 0.8,
                    }}
                />
                ))}
            </div>
        </div>
    </>
}

export default HighlightDisplay;