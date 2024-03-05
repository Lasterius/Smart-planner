import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import '../shared/global.scss';
import App from './App.tsx';
import store from './appStore.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
