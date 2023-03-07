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
                                    <td>{product.productPrice}</td>
                                    <td>{product.productType === 'MEN' ? 'Nam' : 'Nữ'}</td>
                                </tr>   
                            )
                        })
                    }
                    
                </tbody>
            </Table>
        </>
     );
}

export default ManageProducts;