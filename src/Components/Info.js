import React, { useEffect } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { RetrieveStocksInfo } from "./redux/Stock/stock";
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Info =() => {
    const { id } = useParams();
    const stockInfo = useSelector((state) => state.stocks.stockInfo);
    const dispatch = useDispatch();
        if(stockInfo.length === 0){ 
            dispatch(RetrieveStocksInfo(id));
        }
   
   
    return (
        <>
          <Header  title={stockInfo.name} subtitle={stockInfo.rank}/>
          <h5 className="p-1 text-muted"> {stockInfo.name} breakdown</h5>
          <table className="table  table-striped">
            <tbody>
                {
                    Object.keys(stockInfo).map((key, index) => {
                        return (
                            <tr key={index}>
                                <td className="pb-4 pt-4 fs-5">{key}: {stockInfo[key]}</td>
                                
                            </tr>
                        );
                    })
                }
            </tbody>
          </table>
        </>
        

    )
}
export default Info;