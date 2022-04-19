import {TransactionNavbar, Wallet, Navigation, Footer, SignIn, Transactions} from "./components";

import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
  return (
    <Router>
    <div className="min-h-screen">
      <div className="background">
        <Navigation/>
        <SignIn/>
        <Transactions/>
        
      </div>
      
      
      
    </div>
    </Router>
  )
}

export default App
