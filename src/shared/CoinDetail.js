import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
// import { Line } from 'react-chartjs-2'

// Style
import styles from '../styles/coinDetail.module.css'

// Icons
import { FaChevronUp } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const CoinDetail = () => {

    const location = useLocation();
    const params = useParams();
    const id = params.id
    console.log(location.state);

    return (
        <div className={styles.totalBox}>
            <div>Charts
                {/* <Line
                    data={{
                        labels: location.map(((coin) => {
                            let date = new Date(coin[0])
                            let time = date.getHours() > 12
                                ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
                                : `${date.getHours()} : ${date.getMinutes()} AM`

                            // return days === 1 ? time : date.toLocaleString()
                        })),
                        datasets:[{
                            data: location.map((coin) => coin[1])
                        }]
                    }}

                /> */}
            </div>


            <section className={styles.detailBox}>
                <div className={styles.contain}>
                    <h4>Circulating Supply</h4>
                    <p>
                        {location.state.circulating_supply.toLocaleString()} <span>Tokens</span>
                    </p>
                </div>

                <div className={`${styles.partitions} ${styles.contain}`}>
                    <div>
                        <h4>Market Cap</h4>
                        <p>
                            ${location.state.market_cap.toLocaleString()}
                        </p>
                    </div>
                    <div className={location.state.price_change_percentage_24h > 0 ? styles.green : styles.red}  >
                        {location.state.price_change_percentage_24h > 0 ? <FaChevronUp /> : <FaChevronDown />} <span>{location.state.price_change_percentage_24h.toFixed(2)}%</span>
                    </div>
                </div>

                <div className={`${styles.partitions} ${styles.contain}`}>
                    <div>
                        <h4>All Time High</h4>
                        <p>
                            ${location.state.ath.toLocaleString()}
                        </p>
                    </div>
                    <div className={location.state.ath_change_percentage > 0 ? styles.green : styles.red} >
                        {location.state.ath_change_percentage > 0 ? <FaChevronUp /> : <FaChevronDown />} <span>{location.state.ath_change_percentage}%</span>
                    </div>
                </div>

                <div className={`${styles.partitions} ${styles.contain}`}>
                    <div>
                        <h4>All Time Low</h4>
                        <p>
                            ${location.state.atl.toLocaleString()}
                        </p>
                    </div>
                    <div className={location.state.atl_change_percentage > 0 ? styles.green : styles.red} >
                        {location.state.atl_change_percentage > 0 ? <FaChevronUp /> : <FaChevronDown />} <span>{location.state.atl_change_percentage}%</span>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default CoinDetail;