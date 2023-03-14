import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function ProductDetail() {
    const [product,setProduct] = useState(null);
    const {productId} = useParams();

    console.log('productId', productId)

    //Get Data
    useEffect(() => {
        fetch('https://63ac467634c46cd7ae7cce54.mockapi.io/api/mindx/products/')
        .then(res => res.json())
        .then(products => {
            console.log('products', products)
            const temp = products.find(e => e.id == productId);
            console.log('temp', temp)
            setProduct(temp);
        })
    },[])

    console.log(product)

    return ( <>
        {
            product &&
            <Card border="primary" style={{ width: '18rem' }}>
                <Card.Header>Product detail</Card.Header>
                <Card.Body>
                    <Card.Title>{product.productTitle}</Card.Title>
                    <Card.Text>
                    <Card.Title>{product.productPrice}</Card.Title>
                    </Card.Text>
                </Card.Body>
            </Card>
        }
        
    </> );
}

export default ProductDetail;