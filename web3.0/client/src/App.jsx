import {Dashboard, Wallet, NotFound, Navigation, Footer, Home, Transactions} from "./components";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


const App = () => {
  return (
    <Router>
    <div className="min-h-screen">
      <div className="background">
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/transactions" element={<Transactions/>} />
          <Route path="/wallet" element={<Wallet/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        
        
      </div>
      
      
      
    </div>
    </Router>
  )
}

export default App
