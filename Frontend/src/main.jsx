
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/store'
import App from './App.jsx'
import FavoriteProvider from './context/FavoriteContext.jsx'

createRoot(document.getElementById('root')).render(
 <FavoriteProvider FavoriteProvider>
   <Provider store={store}>
    <App />
  </Provider>,
 </FavoriteProvider>
)
