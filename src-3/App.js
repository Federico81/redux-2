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

/*
Persistore -> npm install redux-persist

Redux Persist è una libreria per la gestione dello stato in applicazioni React che usano Redux come gestore dello state
-> la sua funzione principale è consentire la persistenza dei dati quando ricarico la pagina o riavvio la applicazione
Come funziona?
1. Redux persist consente di mantenere lo stato di Redux anche quando l'appplicazione viene chiusa/riavviata
2. Storage: uso il meccanismo di storage (Può essere localStorage, sessionStorage, AsyncStorage) per salvare i dati per un ripristino
3. Configurazione: Andrà configurato dentro a Redux -> si crea un Persistore che contiene il nostro applicativo e specifica alcune opzioni:
- tipo di storage
- le key dello stato che deve persitere
- eventuali trasformazioni

Utilizzo pratico Persistore:
Redux persiste fornisce un componente dedicato si chiama PersistGate che è quello che viene usato per garantire il caricamento persistente dello stato

*/
