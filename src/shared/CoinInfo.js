import React, { useContext } from 'react';

// Context
import { WatchListContext } from '../contexts/WatchListContextProvider';

//Style
import styles from '../styles/coinData.module.css';

const CoinInfo = (props) => {
    const { dispatch } = useContext(WatchListContext);
    const { image, symbol, total_volume, market_cap_change_percentage_24h, current_price } = props.data;
    const parents_component = props.parents_component;

    const handleClick = event => {
        dispatch({
            type: (parents_component === "spot" ? 'ADD_ITEM' : 'REMOVE_ITEM'),
            payload: props.data
        })
        event.currentTarget.disabled = true;
    }
    return (
        <div>
            <div className={market_cap_change_percentage_24h > 0 ? styles.greenBackGround : styles.redBackGround}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div>
                            <img className={styles.image} src={image} alt='symbol' />
                        </div>
                        <div className={styles.leftside}>
                            <span> {symbol.toUpperCase()} </span>
                            <span> vol.{total_volume.toLocaleString()} </span>
                        </div>
                    </div>

                    <div className={styles.rightside}>
                        <span className={market_cap_change_percentage_24h > 0 ? styles.greenPriceChange : styles.redPriceChange}> {market_cap_change_percentage_24h.toFixed(3)} % </span>
                        <span> {current_price.toLocaleString()} $ </span>
                        <button className={styles.Button} onClick={handleClick}
                        // onClick={() => dispatch({
                        //     type: (parents_component === "spot" ? 'ADD_ITEM' : 'REMOVE_ITEM'),
                        //     payload: props.data
                        // })}
                        >
                            {parents_component === "spot" ? 'Add To WatchList' : 'Remove'}
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinInfo;