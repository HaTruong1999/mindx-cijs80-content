import ProductForm from './ProductForm';
import ManageProducts from './Products';


function Admin({handleAddProduct, products}) {
    return ( 
        <div style={{padding: 50}}>
            <h3 style={{textAlign: 'center'}}>Danh sách sản phẩm</h3>
            <ManageProducts products={products}/>
            <h3 style={{textAlign: 'center'}}>Thêm sản phẩm</h3>
            <ProductForm handleAddProduct={handleAddProduct}/>
        </div>
     );
}

export default Admin;