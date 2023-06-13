import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';

const client = new QueryClient();
const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement as HTMLElement).render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>
);
