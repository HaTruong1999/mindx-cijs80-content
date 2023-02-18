import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import ListProduct from './components/ListProduct';
import { useEffect, useState } from 'react';

function App() {
  //Cart
  const [products, setProducts] = useState([]);
  const [listCart, setListCart] = useState([]);

  //Get Data
  useEffect(() => {
    fetch('https://63ac467634c46cd7ae7cce54.mockapi.io/api/mindx/products')
        .then(res => res.json())
        .then(products => {
            setProducts(products);
        })
  },[])

  const handleAddToCart = (product) => {
    setListCart(prev => [...prev, product])
  }

  const handleRemoveCart = (product) => {
    setListCart(prev => {
      return prev.filter(p => p.id !== product.id);
    })
  }
	
  //form
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [type, setType] = useState("MEN")

	const handleSubmit = (event) => {
		event.preventDefault();

		const tempProduct = {
      id: products.length,
      productImg: type === 'MEN' ? './images/thunNam.jpeg' : './images/nuTayNgan.jpeg',
      productTitle: title,
      productPrice: price,
      type: type,
    }

    setProducts(prev => [...prev, tempProduct])
    alert('Them san pham thanh cong')
	}

	const handleInputTitleChange = (event) => {
		setTitle(event.target.value);
	}

  const handleInputPriceChange = (event) => {
		setPrice(event.target.value);
	}

  const handleSelectTypeChange = (event) => {
    setType(event.target.value);
	}

  //example click handel
  const [typeProduct, setTypeProduct] = useState('ALL');

  const handelFilterProduct = (value) => {
    setTypeProduct(value);
  }
  return (
    <div className="App">
      <Header />   
      <form onSubmit={handleSubmit}>
        <div className='product-form'>
          <h3 style={{textAlign: 'center'}}>Thông tin sản phẩm</h3>

          <div>
            <label>Tên sản phẩm: </label>
            <input placeholder='Nhập tên sản phẩm' type="text" value={title} onChange={handleInputTitleChange} />
          </div>

          <div>
            <label>Giá sản phẩm: </label>
            <input type="text" placeholder='Nhập giá sản phẩm'  value={price} onChange={handleInputPriceChange} />
          </div>

          <div>
            <label>Loại sản phẩm: </label>
            <div className='type-select'>
              <select style={{width: 75}} value={type} onChange={handleSelectTypeChange}>
                <option value="MEN">Nam</option>
                <option value="WOMEN">Nữ</option>
              </select>
            </div>
            
          </div>
          <button type="submit">Thêm sản phẩm</button>
        </div>
		  </form>

      <div className='tab'>
        <div>
          <button className={typeProduct === 'ALL' ? 'active' : ''} onClick={() => handelFilterProduct('ALL')} >Tất cả</button>
          <button className={typeProduct === 'MEN' ? 'active' : ''} onClick={() => handelFilterProduct('MEN')} >Nam</button>
          <button className={typeProduct === 'WOMEN' ? 'active' : ''} onClick={() => handelFilterProduct('WOMEN')} >Nữ</button>
        </div>
      </div>   
      
      { products.length > 0 &&
        typeProduct === 'MEN' ? 
        (<ListProduct handleAddToCart={handleAddToCart} products={products.filter(product => product.type ==='MEN')} title={'Danh sách sản phẩm nam'}/>)
        : typeProduct === 'WOMEN' ? 
        (<ListProduct handleAddToCart={handleAddToCart} products={products.filter(product => product.type ==='WOMEN')} title={'Danh sách sản phẩm nữ'}/>)
        : (<ListProduct handleAddToCart={handleAddToCart} products={products} title={'Danh sách tất cả sản phẩm'}/>)
      }
      
      <div>
        <h3 style={{textAlign: 'center'}}>Danh sách giỏ hàng</h3>
        <div className='product-container'>
          {
            listCart.length > 0 && listCart.map((product) => {
              return (
                <Product
                  key={product.id}
                  productImg={product.productImg}
                  productTitle={product.productTitle}
                  productPrice={product.productPrice}
                  type='CART'
                  onSubmit={() => handleRemoveCart(product)}
                />
              )
            })
          }
        </div>
      </div>

      <button className='btn-backToTop'>^</button>
    </div>
  );
}
export default App;


