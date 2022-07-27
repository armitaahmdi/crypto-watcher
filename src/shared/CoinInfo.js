import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// Context
import { WatchListContext } from '../contexts/WatchListContextProvider';

//Style
import styles from '../styles/coinData.module.css';
import Box from './Box';


const CoinInfo = (props) => {
    const [showBox, setShowBox] = useState(false)

    const { dispatch } = useContext(WatchListContext);
    const { image, symbol, total_volume, market_cap_change_percentage_24h, current_price, id } = props.data;
    const parents_component = props.parents_component;

    const handleClick = event => {
        event.stopPropagation()
        dispatch({
            type: (parents_component === "spot" ? 'ADD_ITEM' : 'REMOVE_ITEM'),
            payload: props.data
        })
        event.currentTarget.disabled = true;
    }
    const handleShowBox = (boxStatus) => {
        setShowBox(boxStatus)
    }
    return (
        <>
            {showBox && <Box data={props.data} handleShowBox={handleShowBox} />}

            <div onClick={() => {
                handleShowBox(true)
            }}>
                <div
                    className={market_cap_change_percentage_24h > 0 ? styles.greenBackGround : styles.redBackGround}>
                    <div className={styles.container}>
                        <div className={styles.left}>
                            <div>
                                <img className={styles.image} src={image} alt='symbol' />
                            </div>
                            <div className={styles.leftside}>
                                <span> {symbol.toUpperCase()} </span>
                                <span> vol.{total_volume ? (total_volume / 1000000).toFixed(2) : "---"}M </span>
                            </div>
                        </div>

                        <div className={styles.rightside}>
                            <span className={market_cap_change_percentage_24h > 0 ? styles.greenPriceChange : styles.redPriceChange}> {market_cap_change_percentage_24h.toFixed(3)} % </span>
                            <span> {current_price.toLocaleString()} $ </span>
                            <button className={styles.Button} onClick={handleClick}>
                                {parents_component === "spot" ? 'Add To WatchList' : 'Remove'}
                            </button>

                            {/* <Link to={`/Coin/${id}`} state={props.data}>Detail</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoinInfo;