import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {LanguageProvider} from "./context/LanguageContext.jsx";
import {ProductsProvider} from "./context/ProductsContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <LanguageProvider>
          <ProductsProvider>
              <App/>
          </ProductsProvider>
      </LanguageProvider>
  </StrictMode>,
)
