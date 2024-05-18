import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { Provider } from 'react-redux'
import {store} from "../src/store/Store"
function App() {
 
  return (
  <>
  <Provider store={store}>

  <Header />
  <Home />
  </Provider>
  </>
  )
}

export default App
