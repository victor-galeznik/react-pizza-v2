import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { REPO_NAME } from './constants/repo';
import { store } from './redux/store';
import { Provider } from 'react-redux';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter basename={`/${REPO_NAME}/`}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
}
