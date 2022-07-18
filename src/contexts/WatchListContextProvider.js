import React, { useReducer } from 'react';

const initialState = {
    selectedItems: [],
}

const watchReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        // First time we Add item to WatchList
        case 'ADD_ITEM':
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems]
            }
        // Remove Item from WatchList
        case 'REMOVE_ITEM':
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            return {
                ...state,
                selectedItems: [...newSelectedItems]
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