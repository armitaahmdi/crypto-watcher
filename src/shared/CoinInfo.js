import React, { useContext, useState } from 'react';

// Components
import Box from './Box';

// Context
import { WatchListContext } from '../contexts/WatchListContextProvider';

//Style
import '../styles/scss/coinData.scss'

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

            <div
                className={market_cap_change_percentage_24h > 0 ? 'greenBackGround' : 'redBackGround'}
                onClick={() => {
                    handleShowBox(true)
                }}>
                <div className='container'>
                    <div className='leftPart'>
                        <div>
                            <img className='image' src={image} alt='symbol' />
                        </div>
                        <div className='leftside'>
                            <span> {symbol.toUpperCase()} </span>
                            <span> vol.{total_volume ? (total_volume / 1000000).toFixed(2) : "---"}M </span>
                        </div>
                    </div>

                    <div className='rightside'>
                        <span className={market_cap_change_percentage_24h > 0 ? 'greenPriceChange' : 'redPriceChange'}> {market_cap_change_percentage_24h.toFixed(3)} % </span>
                        <span> {current_price.toLocaleString()} $ </span>
                        <button className='Button' onClick={handleClick}>
                            {parents_component === "spot" ? 'Add' : 'Remove'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoinInfo;