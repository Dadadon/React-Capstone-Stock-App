import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../Components/redux/configureStore';
import CardList from '../Components/Cardlist';

describe('Card List container component', () => {
    test('Crypto displays correctly', () => {
        const crypto = render(
    
          <Provider store={store}>
    
            <CardList />
    
          </Provider>,
    
        );
        expect(crypto).toMatchSnapshot();
      });
})