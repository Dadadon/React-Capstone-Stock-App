const apiUrl = "https://api.coincap.io/v2/assets";

const RETRIEVE_STOCKS = "STOCK-STORE/Stocks/RETRIEVE_STOCKS";
const RETRIEVE_STOCKS_INFO = "STOCK-STORE/Stocks/RETRIEVE_STOCKS_INFO";

const InitialState = {
    stocks: [],
    stockInfo: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    message: 'Stocks',
};

const RetrieveStocks = () => (dispatch) => {
    fetch(apiUrl)
    .then((response) => response.json()).then((data) => {
        dispatch({
            type: RETRIEVE_STOCKS,
            payload: data.data,
        });
    })
}

const RetrieveStocksInfo = (symbol) => (dispatch) => {
 fetch(apiUrl+"/"+symbol)
 .then((response) => response.json()).then((data) => {
        dispatch({
            type: RETRIEVE_STOCKS_INFO,
            payload: data,
        });
    })
}

const handleStockReducer = (state = InitialState, action) => {
    switch (action.type) {
        case RETRIEVE_STOCKS:
            return {
                ...state,
                stocks: action.payload,
                status: 'succeeded',
            }
        case RETRIEVE_STOCKS_INFO:
            return {
                ...state,
                stockInfo: action.payload,
            }
        default: return state;
    }
}

export { handleStockReducer, RetrieveStocks, RetrieveStocksInfo };
