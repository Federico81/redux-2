import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './store/store';
import Counter from './components/Counter';

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <h1>Redux Persist Example</h1>
                    <Counter />
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
