import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Components
import WhatchListData from '../shared/WhatchListData';

// Context
import { WatchListContext } from '../contexts/WatchListContextProvider';

// Style
import '../styles/scss/whatchList.scss'

const WatchList = () => {

    const { state } = useContext(WatchListContext) 

    return (
        <div>
            <div>
                {state.selectedItems.map(item => <WhatchListData key={item.id} data={item} />)}

                {
                    state.itemsCounter === 0 && <div className='total-part'>
                        <h2>Your Watchlist is Empty.</h2>
                        <Link to='/Spot-Market'>
                        <button className='Button'>Add Coin</button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default WatchList;