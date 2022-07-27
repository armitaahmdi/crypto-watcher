import React, { useContext, useMemo, useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap'

// Components
import CoinData from '../shared/CoinData';
import ScrollToTop from '../shared/ScrollToTop';

// Context
import { DataContext } from '../contexts/DataContextProvider';

// Hooks
import Pagination from '../hooks/Pagination';

const SpotMarket = () => {
    const coins = useContext(DataContext);

    const PageSize = 50;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, [currentPage])

    const currentShowData = useMemo(() => {
        const firsّtPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firsّtPageIndex + PageSize;
        return coins.slice(firsّtPageIndex, lastPageIndex);
    }, [currentPage, coins])

    return (
        <div>
            <div style={{marginBottom: '100px'}}>
            {
                currentShowData.map(coin => <CoinData
                    key={coin.id}
                    coinData={coin}
                />
                )
            }
            </div>
            <Pagination
                currentPage={currentPage}
                totalCount={coins.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
            <ScrollToTop />
        </div>
    );

};

export default SpotMarket;