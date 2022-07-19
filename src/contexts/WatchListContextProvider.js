import React, { useReducer } from 'react';

const initialState = {
    selectedItems: [],
    itemsCounter: 0
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, coin) => total + coin.quantity, 0)
    return {itemsCounter}
}

const watchReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        // First time we Add item to WatchList
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems)
            }
        // Remove Item from WatchList
        case 'REMOVE_ITEM':
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            const index = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[index].quantity--;
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(state.selectedItems)
            }
        default:
            return state;
    }
}

export const WatchListContext = React.createContext()

const WatchListContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(watchReducer, initialState)

    return (
        <WatchListContext.Provider value={{state, dispatch}} >
            {children}
        </WatchListContext.Provider>
    );
};

export default WatchListContextProvider;