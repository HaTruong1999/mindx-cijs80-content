import './App.css';
import Header from './components/Header';
import BackToTop from './components/BackToTop';
import ProductForm from './components/ProductForm';
import Home from './pages/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  const handleAddProduct = (data) => {
    // const tempProduct = {
    //   id: products.length,
    //   productImg: data.type === 'MEN' ? './images/thunNam.jpeg' : './images/nuTayNgan.jpeg',
    //   productTitle: data.productTitle,
    //   productPrice: data.productPrice,
    //   type: data.type,
    // }

    // setProducts(prev => [...prev, tempProduct]);
    // alert('Thêm sản phẩm vào danh sách sản phẩm thành công!');
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
				<Route path="/admin" element={<ProductForm handleAddProduct={handleAddProduct}/>} />
        <Route path="*" element={<h4>Page not found</h4>} />
      </Routes>   
      
      <BackToTop></BackToTop>
    </div>
  );
}
export default App;


