import React from 'react';
import { Link } from 'react-router-dom';

//Style
import '../styles/box.css';


function Box(props) {

    const { data, handleShowBox } = props;

    console.log(data);

    return (
        <div className='box_container' onClick={() => handleShowBox(false)}>
            <div className='box_details'>
                <div className='img_icon'>
                    <img src={data.image} alt={data.name}/>
                </div>
                <div>
                    <p class="fw-bolder">{data.name}</p>
                    <p class="fw-lighter">{data.symbol.toUpperCase()}</p>
                </div>
                <p class="fw-lighter">
                    Launched in May 2003, Binance is the biggest <br/>
                    cryptocurrency exchange globally based on daily...
                </p>
                {/* Middle */}
                <div className='middle_table'>
                    <div>
                        <p class="fw-lighter">RANK</p>
                        <p class="fw-bolder">#{data.market_cap_rank}</p>
                    </div>
                    <div>
                        <p class="fw-lighter">LIVE PRICE</p>
                        <p class="fw-bolder">${data.current_price.toLocaleString()}</p>
                    </div>
                    <div>
                        <p class="fw-lighter">MARKET CAP</p>
                        <p class="fw-bolder">{data.market_cap ? (data.market_cap / 1000000).toFixed(2) : "---"}M</p>
                    </div>
                </div>
                <Link className='btn_detail' to={`/Coin/${data.id}`} state={data} onClick={(e) => e.stopPropagation()}>PRICE HISTORY</Link>
            </div>
        </div>
    );
}

export default Box;