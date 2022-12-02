import "./App.css";
import CardList from "./Components/CardList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Info from "./Components/Info";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RetrieveStocksInfo } from "./Components/redux/Stock/stock";

function App() {
  const stockInfo = useSelector((state) => state.stocks.stockInfo);
    const dispatch = useDispatch();
    useEffect(() => {
      if (stockInfo.length === 0) {
            dispatch(RetrieveStocksInfo("bitcoin"));
      }
    }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar headText="Most Popular" />}>
            <Route index element={<CardList />} />
            <Route path="/crypto/:id" exact element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
