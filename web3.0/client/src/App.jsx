import {TransactionNavbar, Wallet, Navigation, Footer, Home, Transactions} from "./components";

import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="min-h-screen">
      <div className="background">
        <Navigation/>
        <Home/>
        <Transactions/>
        <Wallet/>
        
        
      </div>
      
      
      
    </div>
    </Router>
  )
}

export default App
