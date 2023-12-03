
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react"



type ImageSliderProps = {
    imageUrls: string[]
}


function ImageSlider({ imageUrls }: ImageSliderProps) {

    const [imageIndex, setImageIndex] = useState(0)

function showNextImage() {
    setImageIndex(index => {
        if (index === imageUrls.length - 1) return 0;
        return index + 1;
    })
}

function showPreviousImage() {
   setImageIndex(index => {
    if(index === 0) return imageUrls.length - 1;
    return index - 1;
})
}

    return <div>
        <img className='imgSliderImages' src={imageUrls[imageIndex]} />
        <button onClick={showPreviousImage} className="imgSliderBtn imgSliderBtnLeft"><ArrowBigLeft /></button>
        <button onClick={showNextImage} className="imgSliderBtn imgSliderBtnRight"><ArrowBigRight /></button>

    </div>

}


export default ImageSlider 