import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './slider.module.css'
import 'swiper/css/navigation';
import IMAGES from '../../images/images';
import axios from 'axios';
interface ImageData {
    id: string;
    alt_description: string;
    urls: {
        regular: string;
    };
    user: {
        username: string;
        links: {
            html: string;
        };
    };
}
function slider() {
    const [images, setImages] = useState<ImageData[]>([]);
    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await axios.get('https://api.unsplash.com/photos/random?query=motor%20bike%20heavy%20bikes%20stunts%20bike&count=2&client_id=NxmUpGF6RlPuxf4KdKFQdLQ8yOlbvsq5dYo-sMSPUHk&w=200&h=200&fit=crop');
                setImages(response.data);
                console.log(response.data, " asdsd");
            } catch (error) {
                console.error('Error fetching random image:', error);
            }
        };

        fetchRandomImage();
    }, []);


    return (
        <>
            <div className='container'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true} modules={[Navigation, Pagination]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    className="mySwiper"
                >

                    {images.map((image) => (
                            <SwiperSlide>
                                <div className="card" style={{ width: "18rem;" }} key={image.id}>
                                    <img src={image.urls.regular} className="card-img-top" alt="..." width={100} />
                                    <div className="card-body">
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                    ))}
                </Swiper>
            </div>


        </>
    )
}

export default slider