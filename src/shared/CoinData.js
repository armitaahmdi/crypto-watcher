import React from 'react';

// Components
import CoinInfo from './CoinInfo';

const CoinData = ({ coinData }) => {

    return (
        <CoinInfo data={coinData} parents_component="spot" />
    );
};

export default CoinData;

// All comment in this Component & WhatchListData is another solution

// Context
// import { WatchListContext } from '../contexts/WatchListContextProvider';

// Style
// import styles from '../styles/coinData.module.css';

// const CoinData = ({ coinData }) => {

//      const { dispatch } = useContext(WatchListContext);

//     return (
//         <div>
//             <div className={coinData.market_cap_change_percentage_24h > 0 ? styles.greenBackGround : styles.redBackGround}>
//             <div className={styles.container}>
//                 <div className={styles.left}>
//                     <div>
//                         <img className={styles.image} src={coinData.image} alt='symbol' />
//                     </div>
//                     <div className={styles.leftside}>
//                         <span> {coinData.symbol.toUpperCase()} </span>
//                         <span> vol.{coinData.total_volume.toLocaleString()} </span>
//                     </div>
//                 </div>

//                 <div className={styles.rightside}>
//                     <span className={coinData.market_cap_change_percentage_24h > 0 ? styles.greenPriceChange : styles.redPriceChange}> {coinData.market_cap_change_percentage_24h.toFixed(3)} % </span>
//                     <span> {coinData.current_price.toLocaleString()} $ </span>
//                     <button onClick={() => dispatch({type:'ADD_ITEM', payload: coinData})} >Add</button>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };

// export default CoinData;