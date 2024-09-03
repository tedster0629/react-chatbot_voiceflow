import { createRoot } from 'react-dom/client';

import { RuntimeProvider } from './context';
import { Demo } from './Demo';
import "./global.css"

createRoot(document.getElementById('root')!).render(
  <RuntimeProvider>
    <Demo />
  </RuntimeProvider>
);
