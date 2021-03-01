import React, {useEffect} from 'react'
import innovation from '../assets/inovation-city.jpeg'

const Welcome = () => {

    let canvas
    let context
    useEffect(() => {
        const width  = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
        const height = window.innerHeight ||
        document.documentElement.clientHeight||
        document.body.clientHeight;
        let img = document.createElement('img')
        img.src = innovation
        img.className = 'coverImage'
        canvas = document.getElementById('Canvas')
        context = canvas.getContext('2d')
        // canvas.style.width = '100vw';
        // canvas.style.height = '100vh';
        context.drawImage(img, 0, 0)
        console.log(canvas, img)
    }, [innovation])


    // useEffect(() => {
    //     let img = document.createElement('img')
    //     img.src = innovation
    //     img.className = 'coverImage'
    //     document.querySelector('.welcome').appendChild(img)
    // }, [innovation])

    function changeToWhite(colorPicked, ImgData) {
        console.log(colorPicked)
        for (var i = 0; i < ImgData.length; i++) {
            if(colorPicked[0] === ImgData[i] || colorPicked[0] === ImgData[1] || colorPicked[2] === ImgData[i] || colorPicked[3] === ImgData[i]){
                ImgData[i] = 255;
            }
        }
        // console.log(ImgData)
        return ImgData
    }

    const easterEgg = (e) => {
        console.log(e)
        let img = document.querySelector('.coverImage')
        let canvas = document.createElement('canvas')
        let context = canvas.getContext('2d');
        canvas.width = img.width
        canvas.height = img.height
        context.drawImage(img, 0, 0, img.width, img.height)
        console.log(canvas.width, e)
        let pixelData = context.getImageData(e.nativeEvent.offsetX, e.nativeEvent.offsetY, 1, 1).data
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
        console.log(pixelData, imageData.data)
        changeToWhite(pixelData, imageData.data)
    //     console.log(pixelData, imageData.data)
    //     // context.drawImage(change, 0, 0, img.width, img.height)
    //     context.putImageData(imageData, 0, 0)
    }
    
    return (
        <div id='home' className='welcome' onClick={(e) => easterEgg(e)}>
            <a href='#about'><h1 className='onScroll'>Welcome to the Madhouse</h1></a>
            <canvas id="Canvas" className="coverImage"></canvas>
        </div>
    )
}

export default Welcome