import { BrowserRouter, Route,  Routes, } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
 
    <Header />
    <div className="App">
   
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        
  </div>
    
  </BrowserRouter>
    
  );
}

export default App;
