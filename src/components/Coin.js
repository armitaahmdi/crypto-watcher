import React from 'react';

import styles from './Coin.module.css';

const Coin = ({ image, symbol, price, priceChange, vol }) => {
    return (
            <div className={priceChange > 0 ? styles.greenBackGround : styles.redBackGround}>
                <div className={styles.container} >
                    <div className={styles.left}>
                        <div>
                            <img className={styles.image} src={image} alt={symbol} />
                        </div>
                        <div className={styles.leftside}>
                            <span> {symbol.toUpperCase()} </span>
                            <span> vol.{vol.toLocaleString()} </span>
                        </div>
                    </div>

                    <div className={styles.rightside}>
                        <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange} > {priceChange.toFixed(3)} % </span>
                        <span> {price.toLocaleString()} $ </span>
                    </div>
                </div>
            </div>
    );
};

export default Coin;