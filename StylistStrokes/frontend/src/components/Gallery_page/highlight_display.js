import React, { useState, useEffect } from 'react';
import arts from "../../assets/data/gallery.json";
import GalHighlights from './highlights';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import "../../styles/font.css";
import "../../styles/gallery_page.css"

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

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % styleKeys.length);
        }, 5000); // đổi sau 5 giây
    
        return () => clearInterval(interval);
    }, [styleKeys.length]);
    const currentRegion = styleKeys[currentStyleIndex];
    const currentArts = groupedArts[currentRegion];
    
    const handleIndicatorClick = (index) => {
        setCurrentStyleIndex(index);
    };
    const handlePrev = () => {
        setCurrentStyleIndex((prevIndex) => 
            prevIndex === 0 ? styleKeys.length - 1 : prevIndex - 1
        );
    };
    
    const handleNext = () => {
        setCurrentStyleIndex((prevIndex) => 
            prevIndex === styleKeys.length - 1 ? 0 : prevIndex + 1
        );
    };
    

    return<>
        <div className='row justify-content-center text-center '>
            <h1 className='region'>{currentRegion}</h1>

            <div className="row justify-content-around ">
                <div className='col-1 justify-content-center d-flex flex-column '>
                    <FontAwesomeIcon className='arrow-icon' onClick={handlePrev} icon={faChevronLeft}/>
                </div>
                <div className='col-9 row-cols-1 row-cols-md-3 g-2 justify-content-center d-flex flex-row'>
                    {currentArts.slice(0, 3).map((art) => (
                        <div className="col-4" key={art.id}>
                            <GalHighlights art={art}/>
                        </div>
                    ))}
                </div>
                
                <div className='col-1 justify-content-center d-flex flex-column '>
                    <FontAwesomeIcon className='arrow-icon' onClick={handleNext} icon={faChevronRight}/>
                </div>
            </div>
            {/* Indicators */}
            <div className="d-flex justify-content-center mt-3">
                {styleKeys.map((_, index) => (
                <button
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`mx-1 rounded-circle`}
                    style={{
                    width: '12px',
                    height: '12px',
                    border: '0',
                    backgroundColor: index === currentStyleIndex ? 'goldenrod' : 'gold',
                    opacity: 0.8,
                    }}
                />
                ))}
            </div>
        </div>
    </>
}

export default HighlightDisplay;