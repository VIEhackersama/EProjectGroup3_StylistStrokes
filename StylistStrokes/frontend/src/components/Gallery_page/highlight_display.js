import React, { useState, useEffect } from 'react';
import arts from "../../assets/data/gallery.json";
import GalHighlights from './highlights';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../styles/font.css";
import "./gallery.css"

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
    

    return<>
        <div className='row justify-content-center text-center '>
            <h1 className='region'>{currentRegion}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                {currentArts.slice(0, 3).map((art) => (
                    <div className="col" key={art.id}>
                        <GalHighlights art={art}/>
                    </div>
                ))}
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
                    border: '1px solid gray',
                    backgroundColor: index === currentStyleIndex ? 'white' : 'gray',
                    opacity: 0.8,
                    }}
                />
                ))}
            </div>
        </div>
    </>
}

export default HighlightDisplay;