import React from 'react';

const FullScreenImg = ({img, setCurrentImage}) => {
    return (
        <div className='fullScreenDiv'>
            <div className='close' onClick={() => setCurrentImage(undefined)}>x</div>
            <img src={img} alt='full' className='fullScreenImg' />
        </div>
    );
};

export default FullScreenImg;