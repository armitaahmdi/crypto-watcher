import React from 'react';

// Stlyle
import styles from '../styles/aboutProject.module.css'

// Importing Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Image
import design1 from '../images/design-1.png';
import design2 from '../images/design-2.png';
import design3 from '../images/design-3.png';

const AboutProject = () => {
    return (
        <section className={styles.container}>
            <div className={styles.info}>
                <h4>
                    Project Tech Stack and Utilities :
                </h4>
                <p>Pure CSS</p>
                <p>Client-side Data Fetching</p>
                <p>React custom hooks</p>
                <p>React App-wide State - React Context</p>
                <h4>API:</h4>
                <p>
                    <a
                        href='https://www.coingecko.com/'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Coingecko API - Click to Navigate
                    </a>
                </p>
                <h4>Design:</h4>
                <p>
                    Inspired By <span>Malik Abimanyu</span> on
                    Dribbble
                </p>
                <div className={styles.link}>
                    <a
                        href='https://dribbble.com/abimanyu17'
                        target='_blank'
                        rel="noreferrer"
                    >
                        ={">"} Designer Profile
                    </a>
                    <a
                        href='https://dribbble.com/shots/17142286-CoinGyeek-Crypto-Coin-Price-Tracker/attachments/12239375?mode=media'
                        target='_blank'
                        rel="noreferrer"
                    >
                        ={">"} Project Address
                    </a>
                </div>
                <h4>Original Design</h4>
                <Swiper
                    effect={"coverflow"}
                    slidesPerView={1.5}
                    className={styles.mySwiper}
                >
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={design1} alt='design of project'/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={design2} alt='design of project'/>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <img src={design3} alt='design of project'/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default AboutProject;