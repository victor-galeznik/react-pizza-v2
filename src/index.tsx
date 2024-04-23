import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { REPO_NAME } from './constants/repo';
import { store } from './redux/store';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);

  root.render(
    <BrowserRouter>
      {/* <BrowserRouter basename={`/${REPO_NAME}/`}> */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  );
}
