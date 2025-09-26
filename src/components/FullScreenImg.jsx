import React from 'react';

const FullScreenImg = ({img, setCurrentImage}) => {
    console.log('img here', img);
    return (
        <div className='fullScreenDiv'>
            <div className='close' onClick={() => setCurrentImage(undefined)}>x</div>
            <img src={img} alt='full screen image' className='fullScreenImg' />
        </div>
    );
};

export default FullScreenImg;