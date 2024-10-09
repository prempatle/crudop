import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetailsPage from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
