import React from 'react';

// Style
import styles from '../styles/coinData.module.css'

const CoinData = ({ coinData }) => {
    return (
        <div>
            <div className={coinData.market_cap_change_percentage_24h > 0 ? styles.greenBackGround : styles.redBackGround}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div>
                        <img className={styles.image} src={coinData.image} alt='symbol' />
                    </div>
                    <div className={styles.leftside}>
                        <span> {coinData.symbol.toUpperCase()} </span>
                        <span> vol.{coinData.total_volume.toLocaleString()} </span>
                    </div>
                </div>

                <div className={styles.rightside}>
                    <span className={coinData.market_cap_change_percentage_24h > 0 ? styles.greenPriceChange : styles.redPriceChange}> {coinData.market_cap_change_percentage_24h.toFixed(3)} % </span>
                    <span> {coinData.current_price.toLocaleString()} $ </span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CoinData;