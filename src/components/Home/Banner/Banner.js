import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


import banner1 from '../../../images/Carousel/picture1.jpg'
import banner2 from '../../../images/Carousel/picture2.jpg'
import banner3 from '../../../images/Carousel/picture3.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <div className='banner-container grid '>
            <div className='g-col-6'>
                <h3>Our Gallery</h3>
                <h5>Take care of your body and it will take care of you.</h5>
                <p>This is our gallery.Here are oursome services photo.We try to  provide best service.</p>
            </div>
            <div className='g-col-6'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            height="360" width="440"
                            className="d-block w-100 "
                            src={banner1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src={banner2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img

                            src={banner3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel >
            </div>
        </div>
    )

};

export default Banner;