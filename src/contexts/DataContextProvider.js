import React, { useEffect, useState } from 'react';

// API
import { getCoin } from '../services/api';

// Context
export const DataContext = React.createContext();

const DataContextProvider = ({children}) => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCoins(await getCoin())
        }
        fetchAPI()
    }, [])

    return (
        <DataContext.Provider value={coins} >
            {children}
        </DataContext.Provider>
    );
};

export default DataContextProvider;