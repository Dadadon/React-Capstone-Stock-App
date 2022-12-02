import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Components/redux/configureStore';
import Info from '../Components/Info';

describe('Stock info component', () => {
    test('Crypto displays correctly', () => {
        const cryptoInfo = render(
    
          <Provider store={store}>
    
            <Info />
    
          </Provider>,
    
        );
        expect(cryptoInfo).toMatchSnapshot();
      });
})