import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from './components/ui/provider.jsx'
import EmpleadoContextProvider from './context/EmpleadoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <EmpleadoContextProvider>
        <App />
      </EmpleadoContextProvider>
    </Provider>
  </StrictMode>,
)
