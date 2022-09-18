import React from 'react'
import { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const mizucodeInfo = {
  name: "mizucode",
  age: 26,
}

const MizuCodeContext = createContext(mizucodeInfo)

ReactDOM.createRoot(document.getElementById('root')).render(
  <MizuCodeContext.Provider value={mizucodeInfo}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MizuCodeContext.Provider>
);
export default MizuCodeContext;

