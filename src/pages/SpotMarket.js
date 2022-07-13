import React, { useEffect, useState } from 'react';
import Coin from '../components/Coin';

//API
import { getCoin } from '../services/api';

const SpotMarket = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data);
            setCoins(data)
        }
        fetchAPI()
    }, [])

    return (
        <div>
            {
                coins.map(coin => <Coin
                    key={coin.id}
                    image={coin.image}
                    symbol={coin.symbol}
                    vol={coin.total_volume}
                    price={coin.current_price}
                    priceChange={coin.market_cap_change_percentage_24h}
                    />)
            }
        </div>
    );
};

export default SpotMarket;