import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './Banner.module.css';
import BannerTextImg from '../banner/BannerTextImg';
import BannerDetailContent from './BannerDetailContent';

const Banner = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const bannerContDynamic = [
        {
            id: 0,
            banImg: "/images/consultation.jpg",
            h1Text: "Instant video consultation",
            BtnOne: "know more",
            h5Text: "Connect within 60 sec"
        },
        {
            id: 1,
            banImg: "/images/counselor.jpg",
            h1Text: "Instant video consultation",
            BtnOne: "know more",
            h5Text: "Connect within 60 sec"
        },
        {
            id: 2,
            banImg: "/images/courses.jpg",
            h1Text: "Instant video consultation",
            BtnOne: "know more",
            h5Text: "Connect within 60 sec"
        },
        {
            id: 3,
            banImg: "/images/education.jpg",
            h1Text: "Instant video consultation",
            BtnOne: "know more",
            h5Text: "Connect within 60 sec"
        },
        {
            id: 4,
            banImg: "/images/trust.jpg",
            h1Text: "Instant video consultation",
            BtnOne: "know more",
            h5Text: "Connect within 60 sec"
        }
    ]

    return (
        <>
            <section className='banerSection'>
                <div className={`${styles.bannerContainer}`}>
                    <Carousel onSelect={(selectedIndex, e) => setActiveSlide(selectedIndex)} fade>
                        {bannerContDynamic.map(bannercard =>
                            <Carousel.Item key={bannercard.id}>
                                <BannerTextImg BannerTextCard={bannercard} />
                            </Carousel.Item>
                        )}
                    </Carousel>
                    <BannerDetailContent activeSlide={activeSlide} />
                </div>          
            </section>
        </>
    )
}

export default Banner