import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar'
import Home from './pages/Home'
import AddProduct from './products/AddProduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EditProduct from './products/EditProduct';
import ViewProduct from './products/ViewProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/addproduct" element={<AddProduct />}></Route>
          <Route exact path="/editproduct/:id" element={<EditProduct/>}></Route>
          <Route exact path="/viewproduct/:id" element={<ViewProduct/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
