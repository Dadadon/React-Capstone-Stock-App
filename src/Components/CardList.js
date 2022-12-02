import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardItem from "./CardItem";
import Header from "./Header";
import { RetrieveStocks } from "./redux/Stock/stock";

const CardList = () => {
    const stockItems = useSelector((state) => state.stocks.stocks);
    console.log(stockItems);
    const dispatch = useDispatch();
    useEffect(() => {
        if (stockItems.length === 0) { dispatch(RetrieveStocks());}
    }, [dispatch]);

    return (
        <>
        <Header title="Crypto" subtitle={`Top ${stockItems.length}`} />
        <h5 className="text-muted p-1">Rank by Popularity</h5>
        <div className="d-flex flex-wrap">
            { stockItems.map((stockItem) => (
                <CardItem   key={stockItem.id} id={stockItem.id} name={stockItem.name} rank={stockItem.rank} symbol={stockItem.symbol}/>
            ))}

        </div>
        </>
        
    )
}

export default CardList;