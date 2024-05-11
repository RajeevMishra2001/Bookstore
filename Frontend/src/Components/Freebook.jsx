import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import list from './list.json'
import Card from './Card';

function Freebook() {
    const filterdata = list.filter((data)=> data.category === "free")

    var settings = {
        dots: true,
        infinite: false,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className='w-10/12 m-auto'>
                <h1 className='text-5xl  text-pink-600 font-bold'>Free Books Offers</h1>
                <p className='text-lg my-10 '>Here's the category of the free books available for the customers.
                    students can read and learn new things. here you can find the best way to upgrade the skills and
                    you can make your carrer.</p>
            </div>

            <div className='md:ml-20 '>
                <Slider {...settings}>
                 {filterdata.map((item)=>(
                    <Card item={item} key={item.id} />
                ))}
                </Slider>
            </div>
        </div>

    )
}

export default Freebook;