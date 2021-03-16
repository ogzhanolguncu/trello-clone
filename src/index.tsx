import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ChakraProvider } from '@chakra-ui/react';
import FirebaseContext from './contexts/firebaseContext';
import { firebase, FieldValue } from './firebase/firebase';

ReactDOM.render(
  <ChakraProvider>
    <FirebaseContext.Provider value={{ firebase, FieldValue }}>
      <App />
    </FirebaseContext.Provider>
  </ChakraProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
