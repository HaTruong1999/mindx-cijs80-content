import Table from 'react-bootstrap/Table';

function ManageProducts({products}) {
    return ( 
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Ảnh</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Loại</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products &&
                        products.map((product, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <img style={{height: 50}} src={product.productImg} alt=''></img>
                                    <td>{product.productTitle}</td>
                                    <td>{product.type === 'MEN' ? 'Nam' : 'Nữ'}</td>
                                    <td>{product.productPrice}</td>
                                </tr>   
                            )
                        })
                        
                    }
                    <tr>
                        <td colSpan={4}>Tổng tiền</td>
                        <td>1.450.000</td>
                    </tr>
                    
                </tbody>
            </Table>
        </>
     );
}

export default ManageProducts;