import ListProduct from '../components/ListProduct';
import { useState } from 'react';

const TITLE_ALL = 'Danh sách tất cả sản phẩm';
const TITLE_MEN = 'Danh sách tất cả sản phẩm nam';
const TITLE_WOMEN = 'Danh sách tất cả sản phẩm nữ';

function Home({ products,  handleAddToCart }) {
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
    </> );
}

export default Home;