import './App.css';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import BackToTop from './components/BackToTop';
import ProductForm from './components/ProductForm';
import Home  from './pages/Home';
import Cart  from './pages/Cart';

function App() {
  const handleAddProduct = (data) => {
    // const tempProduct = {
    //   // id: products.length,
    //   productImg: data.type === 'MEN' ? './images/thunNam.jpeg' : './images/nuTayNgan.jpeg',
    //   productTitle: data.productTitle,
    //   productPrice: data.productPrice,
    //   type: data.type,
    // }

    // // setProducts(prev => [...prev, tempProduct]);
    // alert('Thêm sản phẩm vào danh sách sản phẩm thành công!');
  }
  
  return (
    <div className="App">
      <Header />   
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
				<Route path="/admin" element={<ProductForm handleAddProduct={handleAddProduct}/>} />
      </Routes>
      <BackToTop></BackToTop>
    </div>
  );
}
export default App;


