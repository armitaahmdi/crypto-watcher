import React from 'react';

// Components
import CoinInfo from './CoinInfo';

const WhatchListData = (props) => {

    return (
        <CoinInfo data={props.data} parents_component="watchList" />
    );
};

export default WhatchListData;

// All comment in this Component && CoinData is another solution
// Style
// import styles from '../styles/coinData.module.css'

// Context
// import { WatchListContext } from '../contexts/WatchListContextProvider';

// const WhatchListData = (props) => {

//     const { dispatch } = useContext(WatchListContext);
//     const { image, symbol, total_volume, market_cap_change_percentage_24h, current_price } = props.data

//     return (
//         <div>
//             <div className={market_cap_change_percentage_24h > 0 ? styles.greenBackGround : styles.redBackGround}>
//                 <div className={styles.container}>
//                     <div className={styles.left}>
//                         <div>
//                             <img className={styles.image} src={image} alt='symbol' />
//                         </div>
//                         <div className={styles.leftside}>
//                             <span> {symbol.toUpperCase()} </span>
//                             <span> vol.{total_volume.toLocaleString()} </span>
//                         </div>
//                     </div>

//                     <div className={styles.rightside}>
//                         <span className={market_cap_change_percentage_24h > 0 ? styles.greenPriceChange : styles.redPriceChange}> {market_cap_change_percentage_24h.toFixed(3)} % </span>
//                         <span> {current_price.toLocaleString()} $ </span>
//                         <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: props.data })} >REMOVE</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WhatchListData;