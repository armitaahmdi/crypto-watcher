import React, { useContext } from 'react';

// Components
import WhatchListData from '../shared/WhatchListData';

// Context
import { WatchListContext } from '../contexts/WatchListContextProvider';

const WatchList = () => {

    const { state } = useContext(WatchListContext)

    return (
        <div>
            <div>
                {state.selectedItems.map(item => <WhatchListData key={item.id} data={item} />)}
            </div>
        </div>
    );
};

export default WatchList;