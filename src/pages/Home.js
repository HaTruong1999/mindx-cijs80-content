import ListProduct from '../components/ListProduct';
import { useEffect, useState } from 'react';

const TITLE_ALL = 'Danh sách tất cả sản phẩm';
const TITLE_MEN = 'Danh sách tất cả sản phẩm nam';
const TITLE_WOMEN = 'Danh sách tất cả sản phẩm nữ';

function Home() {
    //Cart
    const [products, setProducts] = useState([]);
    const [listCart, setListCart] = useState([]);

    //Get Data
    useEffect(() => {
        fetch('https://63ac467634c46cd7ae7cce54.mockapi.io/api/mindx/products')
        .then(res => res.json())
        .then(products => {
            console.log('result: ',products);
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

    //example click handel
    const [typeProduct, setTypeProduct] = useState('ALL');

    const handelFilterProduct = (value) => {
        setTypeProduct(value);
    }

    const productsToShow = typeProduct === 'ALL' ? products 
                            : typeProduct === 'MEN' ? products.filter(p => p.type === 'MEN')
                            : products.filter(p => p.type === 'WOMEN');
    const title = typeProduct === 'ALL' ? TITLE_ALL : typeProduct === 'MEN' ? TITLE_MEN : TITLE_WOMEN;
  
  
    return ( <>
        <div className='tab'>
            <div>
            <button className={typeProduct === 'ALL' ? 'active' : ''} onClick={() => handelFilterProduct('ALL')} >Tất cả</button>
            <button className={typeProduct === 'MEN' ? 'active' : ''} onClick={() => handelFilterProduct('MEN')} >Nam</button>
            <button className={typeProduct === 'WOMEN' ? 'active' : ''} onClick={() => handelFilterProduct('WOMEN')} >Nữ</button>
            </div>
        </div>   
        
        <ListProduct typeRender={'PRODUCT'} handleSubmit={handleAddToCart} products={productsToShow} title={title}/>
        <ListProduct typeRender={'CART'} handleSubmit={handleRemoveCart} products={listCart} title={'Danh sách giỏ hàng'}/>
    </> );
}

export default Home;