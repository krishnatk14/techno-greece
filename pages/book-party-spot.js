import React from 'react';
import Image from 'next/image';
import Button from '../components/ui/button/Button';
import styles from '../styles/BookPartySpot.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BookPartySpot = () => {
    const phone = "6972765869";
    const email = "technogreece0@gmail.com";
    const images = [
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",

        "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1",
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec"
    ];

    return (
        <div className="wrapper">
            <div className={styles.carousel}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className={styles.swiper}
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={image}
                                    alt={`Party venue ${index + 1}`}
                                    layout="fill"
                                    objectFit="cover"
                                    priority={index === 0}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <h1 className={styles.title}>Book Party Spot</h1>

            <div className={styles.info}>
                <h2>Host Your Techno Event</h2>
                <p>
                    Looking for the perfect venue to host your next techno party?
                    We offer prime locations across Greece with:
                </p>
                <ul>
                    <li>Professional sound systems</li>
                    <li>Dynamic lighting setups</li>
                    <li>Flexible space configurations</li>
                    <li>Full technical support</li>
                </ul>
            </div>

            <div className={styles.actions}>
                <Button onClick={() => window.location.href = `tel:${phone}`}>
                    Telephone
                </Button>
                <Button
                    onClick={() => window.location.href = `mailto:${email}?subject=Book%20Party%20Spot%20Inquiry&body=Hi%20Techno%20Greece,%0A%0AI'm%20interested%20in%20booking%20a%20party%20spot.%0A%0APreferred%20dates:%0AExpected%20number%20of%20guests:%0AType%20of%20event:%0A%0ABest%20regards`}
                >
                    Email
                </Button>
            </div>
        </div>
    );
};

export default BookPartySpot; 