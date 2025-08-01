import { HashRouter } from 'react-router-dom'; // <-- Change this

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* <-- And this */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)