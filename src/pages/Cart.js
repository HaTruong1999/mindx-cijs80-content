import ListProduct from '../components/ListProduct';

function Cart({listCart , handleRemoveCart}) {
    return ( <> 
        <ListProduct typeRender={'CART'} handleSubmit={handleRemoveCart} products={listCart} title={'Danh sách giỏ hàng'}/>
    </> );
}

export default Cart;