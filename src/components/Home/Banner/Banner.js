import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'


import banner1 from '../../../images/Carousel/diagnosis.png'
import banner2 from '../../../images/Carousel/Emergency.png'
import banner3 from '../../../images/Carousel/Labratory.jpg'


const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    height="360" width="440"
                    className="d-block w-100 "
                    src="https://i.ibb.co/qNZx16x/diagnosis.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='text-white p-1 bg-secondary'>First slide label</h3>
                    <p className='text-white p-1 bg-secondary'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '500px', width: '400px' }}
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='text-white p-1 bg-secondary'>Second slide label</h3>
                    <p className='text-white p-1 bg-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '360px', width: '640px' }}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='text-white p-1 bg-secondary'>Third slide label</h3>
                    <p className='text-white p-1 bg-secondary'>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel >
    )

};

export default Banner;